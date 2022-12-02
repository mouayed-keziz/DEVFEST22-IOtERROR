import face_recognition as rf
import cv2
from os import listdir
from os.path import join
import pickle
import pandas as pd
import numpy as np

ENCODING_FILE_NAME = 'encodings.pkl'
LABEL_FILE_NAME = 'labels.pkl'
COLOR = (0, 255, 0)
THIKNESS = 1
FONT_COLOR = (255, 255, 255)
FONT_STYLE = cv2.FONT_HERSHEY_COMPLEX
UNKNOWN_FACE = 'Unknown'
FONT_SCALE = 0.7
HEIGHT_FONT = int(FONT_SCALE*30)
FONT_THIKNESS = 1

def faceLocations(img, model='hog'):
    face_locations = rf.face_locations(img, model=model)
    return face_locations

def drawBox(img, labels):
    face_locations = faceLocations(img)
    if len(face_locations) > 0 :
        i = 0
        for y1, x2, y2, x1 in face_locations:
            margin = int(THIKNESS/2)

            """ 1. Main recangle
                2. Text rectangle
                3. Text
            """
            if labels[i] == UNKNOWN_FACE:
                COLOR = (0, 0, 255)
            else:
                COLOR = (200, 55, 0)

            cv2.rectangle(img, (x1, y1), (x2, y2), color=COLOR, thickness=THIKNESS)
            cv2.rectangle(img, (x1-margin, y1-HEIGHT_FONT), (x2+margin, y1), color=COLOR, thickness=-1)
            cv2.putText(img, labels[i], (x1, y1), FONT_STYLE, FONT_SCALE, FONT_COLOR, FONT_THIKNESS, cv2.LINE_AA)
            i += 1

    return img


def encodeImageSet(path):
    dir = listdir(path)
    length = len(dir)

    items = [join(path, dir[i]) for i in range(length)]
    images = [cv2.imread(items[i]) for i in range(length)]

    encodings = []
    labels = dict()
    for i in range(length):
        encoded = rf.face_encodings(images[i])
        # The image should only have one picture
        assert len(encoded) == 1

        # Save encodings and associated labels
        encodings.append(encoded[0].tolist())
        labels[i] = dir[i].split(sep='.')[0]

        # Pickle encoding file
        with open(join(path, ENCODING_FILE_NAME), 'wb+') as file:
            pickle.dump(encodings, file, protocol=pickle.HIGHEST_PROTOCOL)

        with open(join(path, LABEL_FILE_NAME), 'wb+') as file:
            pickle.dump(labels, file, protocol=pickle.HIGHEST_PROTOCOL)
    

    return np.asarray(encodings), labels

def verification(img, encodings, labels_dict):
    encoded_img = rf.face_encodings(img)

    labels = []
    for i in range(len(encoded_img)):
        res = rf.compare_faces(encodings, encoded_img[i])
        labels.append(decodeResult(res, labels_dict))
    
    image = drawBox(img, labels)

    return labels


def unpickleFiles(path):
    path_encodings = join(path, ENCODING_FILE_NAME)
    path_labels = join(path, LABEL_FILE_NAME)

    # It return encodings, labels
    encodings = np.asarray(pd.read_pickle(path_encodings))
    labels = pd.read_pickle(path_labels)
    return encodings, labels 

def decodeResult(result, labels):
    if result.count(True) != 0:
        return labels[result.index(True)]
    else:
        return UNKNOWN_FACE


