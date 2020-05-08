# Rendere visibili i racconti

### Introduzione

Ogni bambino ha un modo diverso per approcciarsi ai racconti: alcuni li raccontano a voce, altri disegnando; hanno una grandissima immaginazione. Stimolare i bambini a creare storie personalizzate aiuta lo sviluppo del cervello e ne migliora le capacità di apprendimento, aiutando il potenziamento dell’immaginazione: associare i racconti ad immagini e viceversa, garantisce al bambino il potenziamento della sua mente e lo aiuta nello sviluppare un linguaggio corretto.
Tuttavia, ogni bambino, ha un modo diverso per esprimersi. 
Come si possono concretizzare i racconti dei bambini? Come possono essere resi tangibili?

L’ambito di progetto nasce da alcune considerazioni sulla necessità che hanno i bambini di visualizzare e di entrare a contatto con le immagini.
Un sistema che permette di rappresentare i racconti aiuterebbe il bambino non solo nell’associazione di significato tra immagini e parole, ma anche nella formulazione di un corretto linguaggio. 
Obiettivo progettuale è quello di offrire un supporto al bambino in modo che:
*	sia facilitato nella corretta formulazione della frase, secondo un consequenziale ordine cronologico
*	lo aiuti a sviluppare un linguaggio corretto e gli insegni a raccontare storie
*	lo supporti nello sviluppo della propria fantasia
*	lo bombardi di immagini per aiutarlo nella comprensione delle parole

È possibile progettare un dispositivo che consenta di riconoscere il linguaggio del bambino e lo supporti nella creazione del racconto?

### Idee Progettuali

Ogni bambino si esprime in modo differente, in base a quelle che sono le sue potenzialità e le sue debolezze.
Dalle premesse fatte ho ipotizzato due sviluppi progettuali differenti, che permetterebbero ai bambini di dare vita ai propri racconti seguendo due dinamiche diverse:

**visualizzare i racconti orali**: partendo dal racconto del bambino (o se toppo piccolo, del genitore) si intende sviluppare un sistema che sia in grado di rappresentare in maniera grafica le storie. Il dispositivo, una volta acceso, si mette in ascolto della voce narrante che, seguendo il flusso della fantasia, disegna la storia, rappresentando su schermo le immagini e le simbologie evocate.

**creare un racconto partendo dalla sua rappresentazione**: prendendo come punto di partenza i disegni dei bambini, obiettivo del progetto consiste nel ricostruire la storia che si trova dietro al disegno. Grazie ad un sistema di riconoscimento dei disegni, si ha la possibilità di identificare gli elementi selezionati, restituendo un breve racconto su quello che è stato rappresentato.


### Tecnologie

**The Quick Draw Dataset**: raccolta di 50 milioni di disegni in 345 categorie, forniti dai giocatori del gioco _Quick, Draw!_ [+](https://github.com/googlecreativelab/quickdraw-dataset) [+](https://quickdraw.withgoogle.com/data)

**Sketch-RNN**: modello generativo per disegni vettoriali, disponibile su _Magenta_. Il sistema permette di ricreare in maniera autonoma i disegni realizzati da milioni di utenti su _Quick, Draw!_ [+](https://magenta.tensorflow.org/sketch-rnn-demo) [+](https://magenta.tensorflow.org/assets/sketch_rnn_demo/index.html) [+](https://learn.ml5js.org/docs/#/reference/sketchrnn)

**Natural Language Processing (NLP)**: campo di ricerca interdisciplinare il cui scopo è quello di sviluppare algoritmi in grado di analizzare, rappresentare e quindi _comprendere_ il linguaggio naturale, scritto o parlato. [+](https://towardsdatascience.com/your-guide-to-natural-language-processing-nlp-48ea2511f6e1)

**Neural-storyteller**: rete neurale in grado di generare piccole storie partendo da immagini. [+](https://github.com/ryankiros/neural-storyteller)  [+](https://medium.com/@samim/generating-stories-about-images-d163ba41e4ed)

**CharRNN**: strumento in grado di comporre brevi testi (partendo dall'analisi di alcuni testi dati). [+](https://learn.ml5js.org/docs/#/reference/charrnn) 

### Prototipazione

Sequenza che ho deciso di seguire per iniziare la prototipazione del mio progetto, supportato da singoli algoritmi che definirò singolarmente.
La sequenza ipotizzata è la seguente:
1. prototipazine macchina che identifica il disegno (identificare le linee dello stesso colore? gruppi di linee che si intersecano solo tra loro?)
2. prototipazione sistema che associa i singoli elementi e a ciò che rappresentano (disegno di un gatto > gatto)
3. sommatoria dell'identificazione di tutti gli elementi presenti sullo sfondo
4. creazione di un racconto tramite algoritmi NPL che comprenda le parole degli elementi identificati nel disengo

Link alla collection di p5.js dove raccolgo i singoli algoritmi sperimentati [+](https://editor.p5js.org/peterbaru/collections/HYouLasBw)

![mappa](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/mappaConcettuale_PietroBaruzzi.png)


### Reference progettuali
#### Garden Story
_E. Hilleli - N. He_

esperimento in cui si aiuta a far crescere alberi e fiori personalizzati attraverso la conversazione con un piccolo personaggio eccentrico. [+](https://experiments.withgoogle.com/garden-friends)
![GardenStory](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/GardenStory_1.png)


#### Scribbling Speech
_X. Yang_

l'input vocale, l'apprendimento automatico e le reti neurali ricorrenti per la generazione di immagini consentono al computer di generare mondi immaginari complessi che seguono il narratore e quindi creare animazioni complesse controllate da strutture linguistiche. [+](http://xinyue.de/scribbling-speech.html) [+](https://experiments.withgoogle.com/scribbling-speech)
![ScriblingSpeech](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/ScribblingSpeech.png)


#### Let’s read a story
_I. Niv_

applicativo online che consente di generare storie partendo da una parola data e strutturandola secondo il _ritmo_ delle favole di Esopo. [+](https://www.letsreadastory.xyz) [+](https://medium.com/ml5js/lets-read-a-story-talking-to-books-using-semantic-similarity-f283168b4264) [+](https://towardsdatascience.com/lets-read-a-story-a-study-on-storytelling-for-children-using-machine-learning-tools-1b631bbbffac)
![let'sReadAStory](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/Let%E2%80%99sReadAStory.png)


#### Seeing Music
_J. A. Zimmerman_

strumento interattivo che consente la visualizzazione le onde sonore e la loro caratterizzazione basata sulle diverse tonalità [+](https://creatability.withgoogle.com/seeing-music/) [+](https://experiments.withgoogle.com/seeing-music)
![SeeingMusic](https://github.com/peterbaru/archive/blob/master/peterbaru/MakingVisible/img/SeeingMusic.png)


#### Generatore di mondi minecraft 

videogioco interattivo che permette di realizzare mondi surreali e variegati, in modo da rendere l’esperienza di gioco unica e perosnalizzata [+](https://minecraft.tools/it/custom.php/)
![minecraft](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/Minecraft.png)


### Reference progettuali su sistemi che rilevano le immagini
#### Cartoonify
_D. Macnis_

sistema che utilizza una rete neurale per trasformare foto caricate e trasformarle in un fumetto in un fumetto unico. Il progetto è basato sul progetto [Draw This](https://danmacnish.com/drawthis/) che consentiva di creare istantanee e stamparle direttamente sottoforma di fumetto. [+](https://www.kapwing.com/cartoonify)
![cartoonify](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/Cartoonify.png)


#### NORAA (Machinic Doodles)
_Jessica_

progetto fisico che indovina ciò che viene disegnato dall'utente, riproducendo disegnando, la figura inziale [+](https://www.creativeapplications.net/processing/noraa-machinic-doodles-a-human-machine-collaborative-drawing/) [+](https://www.jessicain.net/pagesnoraa)
![NORAA](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/NORAA.png)


#### Pix2Story
_I.Babel - E. de Nicolas Benito_

modello di incorporamento semantico visivo che analizza un'immagine e genera didascalie, secondo diverse tipologie narrative [+](https://pix2story.azurewebsites.net) [+](https://azure.microsoft.com/it-it/blog/pix2story-neural-storyteller-which-creates-machine-generated-story-in-several-literature-genre/)
![Pix2Story](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/img/Pix2Story.png)


### Bibliografia e Sitografia
* traduzione simultanea [+](https://medium.com/@ageitgey/machine-learning-is-fun-part-5-language-translation-with-deep-learning-and-the-magic-of-sequences-2ace0acca0aa)
* rappresentazioni di oggetti comuni per produzione visiva e riconoscimento [+](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6497164/)
* scarabocchiare con Deep Learning! [+](https://towardsdatascience.com/doodling-with-deep-learning-1b0e11b858aa)
* analizzate gli schizzi con sketch-RNN [+](https://medium.com/analytics-vidhya/analyzing-sketches-around-the-world-with-sketch-rnn-c6cbe9b5ac8)
