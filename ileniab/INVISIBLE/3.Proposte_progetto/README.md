# Proposte progetto _ Espressione velata


## Premessa

In questo periodo la mascherina è entrata a far parte della nostra quotidianità. Inserendosi come oggetto estraneo che, filtra anche la nostra percezione del presente. Un elemento che crea un muro apatico tra le persone, nasconde in parte l’espressione del volto e ciò comporta un limite nel provare empatia.



## Punto di partenza

Il viso coperto dalle mascherine crea uno spazio su cui lavorare.
Come è possibile rendere visibile la nostra espressione in un altro modo?


## Cosa serve

Numerosi algoritmi sono in grado di  **rilevare e riconoscere volti**.


### Rilevazione o riconoscimento facciale

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-11.png)

La rilevazione facciale si riferisce alla capacità di **rilevare quando un volto è presente in un'immagine**. Il riconoscimento facciale si basa sul rilevamento facciale per stabilire se un volto è presente in un'immagine ma fa un ulteriore passo avanti e tenta di **stabilire di chi sia il volto**.

### [Emotion recognition](https://github.com/oarriaga/face_classification?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-12.png)

### [Face Api](https://learn.ml5js.org/docs/#/reference/face-api)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-13.png)


In più esistono già degli esperimenti di **rilevamento della mascherina** che potrebbe essermi utile.


### [Corona FaceMask Detector](https://github.com/aribornstein/CoronaFaceMaskDetectionTFJS)

![foto](https://camo.githubusercontent.com/56b9aaa2058836f62dcd0adf639ca86dd8149ed0/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313830302f312a50676b77492d4964366a594546526e444a525f596a772e706e67)

L’idea è quella di sfruttare la **realtà aumentata**, ed utilizzare la mascherina come una tela bianca.



## Idee di progettuali


### **Inclusione**
I non udenti hanno bisogno di **leggere il labiale**, si potrebbe creare una bocca che imita ciò che l'interlocutore dice.

### [You Said That](https://github.com/joonson/yousaidthat)
un progetto che anima il labiale di un volto, partendo da un audio.

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-1.PNG)

### [X2Face](https://github.com/oawiles/X2Face)
è un framework per controllare le facce utilizzando un'altra faccia o modalità (ad esempio l'audio).

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-2.PNG)

**Dataset**

[**VoxCeleb**](http://www.robots.ox.ac.uk/~vgg/data/voxceleb/)
è un dataset audio-visuale che contiene piccole clips di discorsi, estratti dai video delle interviste caricati su YouTube.

[**Lip Reading Datasets**](http://www.robots.ox.ac.uk/~vgg/data/lip_reading/)
LRW, LRS2 e LRS3 sono set di dati di riconoscimento vocale audiovisivo raccolti nei video online.


### **Gioco**
Rendere le maschere una tela bianca su cui interagire e colorare, magari utilizzando le dita.

### **Svelare**
Ricostruzione del volto, **simulare ciò che è nascosto**.
L'algoritmo attinge da modelli e ricrea la parte del volto coperta, prendendo informazioni direttamente dall'utente in questione oppure attingere ad un dataset generale?

Il volto si potrà scoprire? Interazione dell'utente, che cancella alcune zone per svelare ciò che l'algoritmo a ricostruito. Il contenuto si potrà modificare nuovamente?

Un nuovo tool di zoom? un filtro che elimina la mascherina?

### [3D Face Modeling from Diverse Raw Scan Data](http://cvlab.cse.msu.edu/tag/face-reconstruction.html)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-3.PNG)

### [Nonlinear 3D Face Morphable Model](http://cvlab.cse.msu.edu/project-nonlinear-3dmm.html)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-4.PNG)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-5.PNG)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-6.PNG)

### [Ricostruzione del volto leggendo il pensiero](https://www.zmescience.com/medicine/mind-and-brain/mind-reading-algorithm/)

Hanno effettuato una scansione dell’attività neurale dei partecipanti mentre venivano presentate le foto una dopo l'altra da un set comprendente 1.000 ritratti.

Usando il machine learning i ricercatori hanno addestrato un computer ad associare una risposta neurale per ciascuna foto.

Ai partecipanti sono stati mostrati volti di prova o ritratti che non avevano mai visto prima. Le risposte neurali sono state utilizzate per un ritratto digitale finale.


![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-7.PNG)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/3.Proposte_progetto/img/foto-8.PNG)


## Other Reference

### [Speech2Face](https://speech2face.github.io/)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-14.png)
Ricostruisce un'**immagine facciale** di una persona da una breve** registrazione audio** di quella persona che parla. Utilizzano il deep learning per eseguire questo compito, usando milioni di video naturali di persone che parlano da Internet / Youtube. Durante l'addestramento, il modello apprende correlazioni audiovisive con la voce. Successivamente produce immagini che catturano vari **attributi fisici** degli oratori come **età, genere ed etnia.**
### [La maschera che inganna](https://github.com/BruceMacD/Adversarial-Faces)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-17.png)
Un disegno come un **falso positivo** che inganna la rilevazione facciale, in modo tale che la stampa su una maschera apparisse poco appariscente.

### [Lettura labiale](https://medium.com/mlreview/multi-modal-methods-part-one-49361832bc7e)
![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-18.png)
1. Crea esempi
2. Estrae delle labbra le caratteristiche
3. Approfondimento
4. Collegamento LipNet a livello di frase

**LipNet** si avvale anche di un algoritmo aggiuntivo  utilizzato nei sistemi di riconoscimento vocale - Classificazione Temporale Connessionista (CTC).
dell'uscita GRU è elaborato da uno strato lineare e da un softmax. Questo modello end-to-end è addestrato con CTC.

### [Ricreare il movimento](https://towardsdatascience.com/ai-generated-elon-musk-joined-a-zoom-call-has-gone-viral-c0516e99a37c)
I ricercatori di machine learning di Samsung hanno prodotto un sistema in grado di ricreare il movimento realistico da un solo fotogramma del volto di una persona, aprendo la possibilità di animare non solo foto ma anche dipinti.
 ![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/2.Ricerca/img/img-19.png)
**Avatarify** è abbastanza robusto da funzionare in tempo reale durante lo streaming.  L'autore importa una foto e la persona nella foto viene animata in base al movimento dell'autore stesso che si muove davanti a una telecamera. Alzare le sopracciglia, sbattere le palpebre e parlare in conferenza in tempo reale.


