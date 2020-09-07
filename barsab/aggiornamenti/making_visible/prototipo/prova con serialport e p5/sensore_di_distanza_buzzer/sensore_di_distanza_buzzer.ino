#define triggerPort 9
#define echoPort 10
int buzzerPin = 2;

int incomingByte;     // a variable to read incoming serial data into / variable for reading from serial port - from p5.js

 
void setup() {
 
pinMode(triggerPort, OUTPUT);
pinMode(echoPort, INPUT);
pinMode(buzzerPin, OUTPUT);
Serial.begin (9600); // inizializza il seriale per la comunicazione. velocità di trasmissione 9600 bps
//Serial.setTimeout(10); // set the timeout for parseInt
Serial.print( "Sensore Ultrasuoni: ");
}
 
void loop() {
if (Serial.available() > 0) { // if there's serial data available
    incomingByte = Serial.read();   // read it
  }
 
//porta bassa l'uscita del trigger
digitalWrite( triggerPort, LOW );
//invia un impulso di 10microsec su trigger
digitalWrite( triggerPort, HIGH );
delayMicroseconds( 10 );
digitalWrite( triggerPort, LOW );

long durata = pulseIn( echoPort, HIGH );
long distanza = 0.034 * durata / 2;
 
// Serial.print(distanza); 
Serial.println(" cm     ");
Serial.write(distanza);
delay(500);

if(distanza <= 100 && distanza >= 50){
  // buzz lungo
  tone(buzzerPin, 1000, 500);
  delay(2000);
  }
else if (distanza < 50 && distanza >= 0){
  // buzz più frequente 
  tone(buzzerPin, 200,100);
  delay(200);
  } else {
    //no buzz
    noTone(buzzerPin);     // Stop sound...
    delay(1000);
  }
}
