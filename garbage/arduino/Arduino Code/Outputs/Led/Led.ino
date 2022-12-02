#include <cvzone.h>

SerialData serialData(1,1); //(numOfValsRec,digitsPerValRec)

/*0 or 1 - 1 digit
0 to 99 -  2 digits 
0 to 999 - 3 digits 
 */

int valsRec[1];

void setup() {
  serialData.begin(); 
  pinMode(13,OUTPUT);
 
}

void loop() {
  
  serialData.Get(valsRec);
  digitalWrite(13,valsRec[0]);

}
