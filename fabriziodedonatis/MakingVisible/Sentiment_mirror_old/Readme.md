# Sentiment Mirror
// BOZZA //  
  
Questo progetto vuole utilizzare il riconoscimento dei sentimenti espressivi delle persone, come: tristezza, rabbia, felicità, sorpresa e neutalità, per poi restituirli sottoforma di caricatura o suo opposto.  
  
### Motori individuati:  
- Face_API  
  permette di riconoscere i sentimenti espressivi e acquisire i punti-maschera.  
    
- Clmtrackr  
  è un motore trovato in questa repository: (https://github.com/auduno/clmtrackr)  che oltre ad individuare i sentimenti e tracciare il mark espressivo, consente anche di applicare dei tool fluidificanti che lo modificano:  
![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/facedeform_1.png?raw=true)  
![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/Screenshot_1.png)  
  
### Ispirazioni  
Un modello di ispirazione "tecnico" è l'app per Android e iOS "MugLife" abbastanza avanzato soprattutto nell'editing grafico.  
  
![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/From%20Mug%20Life(1).gif?raw=true)  
![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/From%20Mug%20Life.gif?raw=true)  
  
### Prototipazione  
 alla base del concept di prototipazione si sono rilevate le seguenti tecnologie hardware:  
  - ESP_32 CAM: dispositivo con linguaggio wire, simil Arduino che incorpora webcam e connessione WiFi, il qule può trasmettere un video o immagine ad un sever di BackEnd che ne processa il riconoscimento visivo attraverso Face_API o Clmtrackr .  
  ![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/esp32_cam.png)  
    
  - ESP_32 E-INK 640x384 è un pannello flessibile di inchiostro elettronico che riceve l'immagine, tramite WiFi) processata dal SW di BackEnd Clmtrackr:  
  ![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/640x384%20E-ink_ESP32.png?raw=true)  
  - RaspBerry W0 + CAM è un modulo raspberry comprensivo di WiFi e webcam ma con più altà potenzialità di calcolo e potrebbe fare il lavoro di riconoscimento espressivo e successiva elaborazione direttamente in loco.  
    
  - Frame disegnato e stampato in 3D per ospitare la componentistica elettronica e batteria/alimentazione.  
    
 ### schizzo workflow  
  ![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Sentiment_mirror_old/image/CamScanner%2005-13-2020%2023.16.05_1.jpg?raw=true)  
    
    // BOZZA //  
