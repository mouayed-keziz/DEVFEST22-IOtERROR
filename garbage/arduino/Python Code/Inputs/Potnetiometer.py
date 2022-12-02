from cvzone.SerialModule import SerialObject

arduino = SerialObject()

while True:
    myData = arduino.getData()
    print(myData[0])