var express = require('express');
const mqtt = require('mqtt');

var router = express.Router();
var MqttData = require('../controllers/mqtt.controller')
/* GET mqtt listing. */
var topic='hello';
var mqttData = new MqttData();
console.log("mqtt is connected")
//Connection to MQTT
    const client = mqtt.connect('mqtts://mqtt.smartlypark.me:1883', {

  username: 'sammy',
  password: '**supcomA1998'
});
//On received MQTT message
client.on('connect',() => {
    console.log('connected')
    client.subscribe(['hello'], () => {
        console.log('subscribe to topic')
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
