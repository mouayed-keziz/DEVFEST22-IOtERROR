from tkinter.tix import IMAGE
import cv2
import face_recognition as rf
from os.path import join
import functions as func
import screeninfo
import sys

ASSET_PATH = 'images'

screen_width, screen_height = 700, 400


path_train = join(ASSET_PATH, 'train')
path_test = join(ASSET_PATH, 'test')
# get the size of the screen
screen = screeninfo.get_monitors()[0]

encodings, labels = func.unpickleFiles(path_train)

# Load Camera
cap = cv2.VideoCapture(0)

# List of frames
img_array = []

while True:
    ret, frame = cap.read()

    frame = cv2.resize(frame, (screen_width, screen_height))
    frame = cv2.flip(frame, 1)

    captured = func.verification(frame, encodings, labels)

    cv2.imshow('Face Recognition', frame)

    key = cv2.waitKey(1)
    if key == ord('q'):
        break
    

cap.release()
cv2.destroyAllWindows()
