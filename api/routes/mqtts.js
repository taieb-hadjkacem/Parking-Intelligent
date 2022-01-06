var express = require('express');
const mqtt = require('mqtt');

var router = express.Router();
var MqttData = require('../controllers/mqtt.controller')
/* GET mqtt listing. */
var topic='parkA';
var mqttData = new MqttData();
console.log("mqtt is connected")
//Connection to MQTT
    const client = mqtt.connect('mqtts://mqtt.smartlypark.me:8883', {

  username: 'sammy',
  password: '**supcomA1998'
});
//On received MQTT message
client.on('connect',() => {
    console.log('connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
})
client.on('message', function (topic, message) {
    //Saving received data to MongoDB
    var mongomqttdata = {
      topic: topic,
      payload: message.toString()
    };
    const saved = mqttData.addmqtt(mongomqttdata)
    console.log("a new message is received from your sensors")
  });

router.get('/',[mqttData.getResults]);

module.exports = router;
