import cv2
import random

ALERT_COLOR = (0, 0, 255)
COLORS = [(10, 112, 238), (255, 0, 0), (0, 0, 255), (0, 255, 0)]

def drawBox(img, x, y, w, h, label, confidence, box, color):
    cv2.rectangle(img, (x, y), (x+w, h+y), color=color, thickness=2)
    cv2.putText(img, label.upper(), (box[0]+10, box[1]+30), cv2.FONT_HERSHEY_COMPLEX, 
    0.6, color, 2)
    cv2.putText(img, str(round(confidence*100, 2))+"%",(box[0]+250, box[1]+30),
                cv2.FONT_HERSHEY_COMPLEX, 0.6, color, 2)

def iou(box1, box2):
    """Implement the intersection over union (IoU) between box1 and box2
    
    Arguments:
    box1 -- first box, list object with coordinates (box1_x1, box1_y1, box1_x2, box_1_y2)
    box2 -- second box, list object with coordinates (box2_x1, box2_y1, box2_x2, box2_y2)
    """


    (box1_x1, box1_y1, box1_x2, box1_y2) = box1
    (box2_x1, box2_y1, box2_x2, box2_y2) = box2
    
    # Calculate the (yi1, xi1, yi2, xi2) coordinates of the intersection of box1 and box2. Calculate its Area.
    xi1 = max(box1_x1,box2_x1)
    yi1 = max(box1_y1,box2_y1)
    xi2 = min(box1_x2,box2_x2)
    yi2 = min(box1_y2,box2_y2)
    inter_width = max(0,yi2 - yi1)
    inter_height = max(0,xi2 - xi1)
    inter_area = inter_width*inter_height

    # Calculate the Union area by using Formula: Union(A,B) = A + B - Inter(A,B)
    box1_area = (box1_x2-box1_x1)*((box1_y2-box1_y1))
    box2_area = (box2_x2-box2_x1)*((box2_y2-box2_y1))
    union_area = box1_area + box2_area - inter_area
    
    # compute the IoU
    iou = inter_area/union_area
    
    return iou