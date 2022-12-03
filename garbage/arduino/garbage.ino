#include <cvzone.h>
#define NBR_LEDS 5
#define DELAY 100


byte leds[NBR_LEDS] = {2, 3, 4, 5, 6}; 

SerialData serialData(NBR_LEDS, 1);
int valsRec[NBR_LEDS] = {HIGH, HIGH, HIGH, HIGH, HIGH};

void setup() {
  for(byte i = 0; i < NBR_LEDS; i++)
    pinMode(leds[i], OUTPUT);
  
  for(byte i = 0; i < NBR_LEDS; i++)
    digitalWrite(leds[i], HIGH);  


  serialData.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  serialData.Get(valsRec);

  for(int i = 0 ; i < NBR_LEDS ; i++)
    digitalWrite(leds[i], valsRec[i]);

}

void animation()
{
    for(int i = 0; i < NBR_LEDS; i++)
    {
      digitalWrite(leds[i], LOW);
      delay(DELAY);
    }
     
    for(int i = NBR_LEDS-1; i >= 0; i--)
    {
      digitalWrite(leds[i], HIGH);
      delay(DELAY);
    }
}
