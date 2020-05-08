# Avanzamento 7 – 8 maggio

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/4.Avanzamento_7e8Maggio/progettazione.PNG)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/4.Avanzamento_7e8Maggio/prototipazione.PNG)

Tra le proposte progettuali, quella sulla quale mi concentrerò è la prima: l’inclusione. Ovvero cercare una maniera per tradurre un dialogo coperto dalla mascherina in un oggetto leggibile anche i non udenti, che per comprendere hanno bisogno di leggere anche il labiale.
L’ipotesi iniziale era quella di poter mimare il labiale tramite una bocca inserita in realtà virtuale, direttamente sopra la mascherina, in modo tale da poter simulare il movimento delle labbra in diretta.

Un primo approccio potrebbe essere quello di far comparire il testo del parlato in realtà aumentata in real-time. 
Con P5.speech: https://github.com/IDMNYU/p5.js-speech . 

Creare dei “sottotitoli live”, di mostrare alcune parole nella mascherina, iniziare con onomatopee? Modificare il font in base all’intonazione?


Sfruttare la face detection, mantenere i punti di riferimento della parte inferiore del volto. 
Lavorare sopra la “tela bianca”.

Da capire se si può rilevare la mascherina, https://github.com/aribornstein/CoronaFaceMaskDetectionTFJS .

## Reference:
### [You Said That](https://github.com/joonson/yousaidthat)
Un progetto che anima il labiale di un volto, partendo da un audio.
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-1.PNG)

### [X2Face](https://github.com/oawiles/X2Face)
È un framework per controllare le facce utilizzando un'altra faccia o modalità (ad esempio l'audio).
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-2.PNG)

**Dataset**

[VoxCeleb](http://www.robots.ox.ac.uk/~vgg/data/voxceleb/)
è un dataset audio-visuale che contiene piccole clips di discorsi, estratti dai video delle interviste caricati su YouTube.

[Lip Reading Datasets](http://www.robots.ox.ac.uk/~vgg/data/lip_reading/)
LRW, LRS2 e LRS3 sono set di dati di riconoscimento vocale audiovisivo raccolti nei video online.

