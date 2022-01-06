#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import os
while(1):
    try:
          GPIO.setmode(GPIO.BOARD)
    
          PIN_TRIGGER = 7
          PIN_ECHO = 11

          GPIO.setup(PIN_TRIGGER, GPIO.OUT)
          GPIO.setup(PIN_ECHO, GPIO.IN)

          GPIO.output(PIN_TRIGGER, GPIO.LOW)

          time.sleep(2)

          

          GPIO.output(PIN_TRIGGER, GPIO.HIGH)

          time.sleep(0.00001)

          GPIO.output(PIN_TRIGGER, GPIO.LOW)

          while GPIO.input(PIN_ECHO)==0:
                pulse_start_time = time.time()
          while GPIO.input(PIN_ECHO)==1:
                pulse_end_time = time.time()

          pulse_duration = pulse_end_time - pulse_start_time
          distance = round(pulse_duration * 17150, 2)
          print("Distance:",distance,"cm")
          
          status=0 if distance<5 else 1
          print(status)
          os.system("mosquitto_pub -h mqtt.smartlypark.me -t parkA -m {0} -p 8883 --capath /etc/ssl/certs/ -u 'sammy' -P **supcomA1998".format(status))
          
          

    finally:
          GPIO.cleanup()