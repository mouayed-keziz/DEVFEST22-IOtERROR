
int red = 8;
int blue = 9;
int green = 10;

void setup() {

  pinMode(red, OUTPUT);
  pinMode(blue, OUTPUT);
  pinMode(green, OUTPUT);
}

void loop() {

  // Turn ON
  digitalWrite(red, 0);
  digitalWrite(blue, 0);
  digitalWrite(green, 0);
  delay(1000);
  // Turn OFF
  digitalWrite(red, 1);
  digitalWrite(blue, 1);
  digitalWrite(green, 1);
  delay(1000);
  // Red
  digitalWrite(red, 0);
  digitalWrite(blue, 1);
  digitalWrite(green, 1);
  delay(1000);
  // Blue
  digitalWrite(red, 1);
  digitalWrite(blue, 0);
  digitalWrite(green, 1);
  delay(1000);
   // Green
  digitalWrite(red, 1);
  digitalWrite(blue, 1);
  digitalWrite(green, 0);
  delay(1000);



}
