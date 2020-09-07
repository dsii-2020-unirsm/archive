#define triggerPort 9
#define echoPort 10

 
void setup() {
 
pinMode(triggerPort, OUTPUT);
pinMode(echoPort, INPUT);
Serial.begin(9600);
Serial.print( "Sensore Ultrasuoni: ");
}
 
void loop() {
 
//porta bassa l'uscita del trigger
digitalWrite( triggerPort, LOW );
//invia un impulso di 10microsec su trigger
digitalWrite( triggerPort, HIGH );
delayMicroseconds( 10 );
digitalWrite( triggerPort, LOW );

// per eseguire calcoli con numeri interi, almeno una variabile deve essere long
// il segnale che riceve è proporzionato al tempo di volo dell'impulso 
// pulseIn aspetta che il segnale passi allo stato alto
long durata = pulseIn( echoPort, HIGH );
// 0.034 perchè la velocità del suono nell'aria è di 343 m/s.
// con pulseIn noi otteniamo l'impulso in microsecondi
// per cui : 34300 / 1000000 = 0.034
long distanza = 0.034 * durata / 2;

Serial.print(distanza); 
Serial.println(" cm     ");
delay(1000);
}
