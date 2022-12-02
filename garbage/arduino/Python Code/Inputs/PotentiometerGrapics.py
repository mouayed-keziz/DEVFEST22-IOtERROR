from cvzone.SerialModule import SerialObject
import cv2
import numpy as np

arduino = SerialObject()

while True:
    myData = arduino.getData()
    img = cv2.imread("../Resources/Potentiometer.jpg")

    try:
        val = myData[0]
        cv2.putText(img, val.zfill(4), (260, 280), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)
        if val != '0':
            # 0 to 1023
            # -90 to 270
            val = np.interp(int(val), [0, 1023], [-90, 270])
            cv2.ellipse(img, (320, 265), (131, 131), 0, -90, val, (255, 180, 0), 27)

    except:
        pass

    cv2.imshow("Image", img)
    cv2.waitKey(1)
