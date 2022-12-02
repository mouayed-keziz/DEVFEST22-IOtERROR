"""
If the algorithm detects any cell phone in the car, it'll send an alert
"""
import cv2
import numpy as np
from os.path import join
import functions as fct
import random


# PATHs
PATH = 'config'
VIDEO_PATH = 'data/car.mp4'
CLASS_FILE = join(PATH, 'coco.names')
CONFIG_PATH = join(PATH, 'ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt')
WEIGHTS_PATH = join(PATH, 'frozen_inference_graph.pb')

# constants
THRES = 0.5
NMS_THRESHOLD = 0.15
TO_SHOW = ['car']

COLORS = [(10, 112, 238), (255, 0, 0), (0, 0, 255), (0, 255, 0)]

cap = cv2.VideoCapture(VIDEO_PATH)
cap.set(3, 1280)
cap.set(4, 720)
cap.set(10, 150)

classNames= []
with open(CLASS_FILE,'rt') as f:
    classNames = f.read().rstrip('\n').split('\n')
 
net = cv2.dnn_DetectionModel(WEIGHTS_PATH, CONFIG_PATH)
net.setInputSize(320, 320)
net.setInputScale(1.0/127.5)
net.setInputMean((127.5, 127.5, 127.5))
net.setInputSwapRB(True)
 
while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)

    classIds, confs, bbox = net.detect(img, confThreshold=THRES)

    # Convert bbox and confs to lists
    bbox = list(bbox)
    confs = list(np.array(confs).reshape(1, -1)[0])
    confs = list(map(float,confs))


    # Apply Non-Max-Suppression to get rid of additional bounding boxes
    indices = cv2.dnn.NMSBoxes(bbox, confs, THRES, NMS_THRESHOLD)

    # Calculate the number of cars
    nbr = 0

    for i in indices:
        if classIds[i] <= len(classNames) and classNames[classIds[i]-1] in TO_SHOW:
            nbr += 1
            box = bbox[i]
            x, y, w, h = box[0], box[1], box[2], box[3]
            
            fct.drawBox(img, x, y, w, h, classNames[classIds[i]-1], confs[0], box, color=COLORS[random.randint(0, len(COLORS)-1)])

    print(nbr)
    
    cv2.imshow("Object ", img)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break



