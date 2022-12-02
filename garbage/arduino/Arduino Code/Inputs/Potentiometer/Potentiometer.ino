#include <cvzone.h>

SerialData serialData;

int sendVals[2]; // min val of 2 even when sending 1

void setup() {
serialData.begin(9600);
}

void loop() {
  int potVal = analogRead(A0);
  sendVals[0] = potVal;
  serialData.Send(sendVals);
}
