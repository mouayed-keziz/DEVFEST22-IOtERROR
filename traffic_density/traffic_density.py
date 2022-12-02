from functions import *
import pandas as pd
import sys
import pickle
import matplotlib.pyplot as plt


fig = plt.figure()
closed = False

def handle_close(evt):
    global closed
    closed = True
    
def waitforbuttonpress():
    while plt.waitforbuttonpress(0.2) is None:
        if closed:
            return False
    return True

df = pd.read_csv('data/traffic.csv')
model = time_series_train(df, daily_seasonality=True)
to_return = time_series_predict(model)

while True:
    to_return[1].show()
    if not waitforbuttonpress():
        break
