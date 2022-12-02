import cv2
from cvzone.FaceDetectionModule import FaceDetector
from cvzone.SerialModule import SerialObject
from tensorflow.keras.models import load_model
from PIL import Image, ImageOps #Install pillow instead of PIL
import numpy as np
import tensorflow as tf

# Enable MLIR optimization
tf.config.experimental.enable_mlir_graph_optimization()

# Camera initialization
cap = cv2.VideoCapture(0)
detector = FaceDetector()
arduino = SerialObject()

# Disable scientific notation for clarity
np.set_printoptions(suppress=True)

# Load the model
MODEL_PATH = 'model/keras_Model.h5'
LABELS_PATH = 'model/labels.txt'

LOW = 0
HIGH = 1
THRESH = 0.95

# Garbage
METAL = '0 Metal\n'
PLASTIC = '1 Plastic\n'
PAPER = '2 Paper\n'
GLASS = '3 Glass\n'
BACKGROUND = 'background\n'

# configuration des LEDS


model = load_model(MODEL_PATH, compile=False)

# Load the labels
class_names = open(LABELS_PATH, 'r').readlines()

# Create the array of the right shape to feed into the keras model
# The 'length' or number of images you can put into the array is
# determined by the first position in the shape tuple, in this case 1.
data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)


#resize the image to a 224x224 with the same strategy as in TM2:
#resizing the image to be at least 224x224 and then cropping from the center
size = (224, 224)
conf_leds = [HIGH, HIGH, HIGH, HIGH, HIGH]
nb = 0

while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)
    image = cv2.resize(img, size)
    # image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)

    #turn the image into a numpy array
    image_array = np.asarray(image)

    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # Load the image into the array
    data[0] = normalized_image_array

    # run the inference
    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index]
    confidence_score = prediction[0][index]

    if confidence_score > THRESH :
        if class_name == METAL:
            conf_leds = [0, 1, 1, 1, 1]
        elif class_name == PLASTIC:
            conf_leds = [1, 0, 0, 0, 0]
        elif class_name == PAPER :
            conf_leds = [HIGH, HIGH, LOW, HIGH, HIGH]
        elif class_name == GLASS :
            conf_leds = [HIGH, HIGH, HIGH, LOW, HIGH]
        elif class_name == BACKGROUND :
            conf_leds = [HIGH, HIGH, HIGH, HIGH, HIGH]

    arduino.sendData(conf_leds)

    cv2.imshow('image', img)
    cv2.waitKey(1)