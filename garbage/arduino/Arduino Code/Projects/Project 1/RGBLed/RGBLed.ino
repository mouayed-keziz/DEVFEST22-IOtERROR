#include <cvzone.h>

SerialData serialData(3,1);
int valsRec[3];

int red = 8;
int blue = 9;
int green = 10;

void setup() {
  serialData.begin();
  pinMode(red, OUTPUT);
  pinMode(blue, OUTPUT);
  pinMode(green, OUTPUT);

}

void loop() {
 serialData.Get(valsRec);
   digitalWrite(red, valsRec[0]);
  digitalWrite(blue,valsRec[2]);
  digitalWrite(green, valsRec[1]);

}
