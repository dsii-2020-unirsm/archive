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

### stories.jps

stories.jpg è un sistema che genera storie e racconti partendo da un disegno. Le modalità di input che possono essere assegnate sono di due tipi: attraverso **disegni** che l’utente realizza direttamente sul dispositivo, oppure caricando **fotografie** di immagini e disegni.

### cosa significa?

L’**immaginazione** è la capacità degli esseri umani di esplorare idee e concetti che non sono presenti nella loro vita attuale. È importante svilupparla nei bambini e per farlo è necessario bombardarli di stimoli sempre nuovi che li aiutino ad accrescere la loro creatività.

Avere a disposizione **storie sempre nuove e diverse** che vedono come protagonisti i personaggi e gli elementi scelti dal bambino lo aiuterebbero da un lato a far crescere la sua immaginazione, e dall’altro a legare maggiormente con i protagonisti, essendo frutto dei loro disegni. 

Date queste premesse il sistema si pone come obiettivo quello di unire diversi algoritmi di machine learning in grado di supportare l’immaginazione del bambino e di aiutarlo nella costruzione di racconti sempre nuovi.

### Tecnologie

La maggior parte delle tecnologie utilizzate per la costruzione del sistema appartengono alla libreria di _machine learning_ ml5. A queste però ho aggiunto anche altri sistemi per rendere il progetto più efficace.

**The Quick Draw Dataset**: raccolta di 50 milioni di disegni in 345 categorie, forniti dai giocatori del gioco _Quick, Draw!_ [+](https://github.com/googlecreativelab/quickdraw-dataset) [+](https://quickdraw.withgoogle.com/data)

**Sketch-RNN**: modello generativo per disegni vettoriali, disponibile su _Magenta_. Il sistema permette di ricreare in maniera autonoma i disegni realizzati da milioni di utenti su _Quick, Draw!_ [+](https://magenta.tensorflow.org/sketch-rnn-demo) [+](https://magenta.tensorflow.org/assets/sketch_rnn_demo/index.html) [+](https://learn.ml5js.org/docs/#/reference/sketchrnn)

**CharRNN**: strumento in grado di comporre brevi testi (partendo dall'analisi di alcuni testi dati). [+](https://learn.ml5js.org/docs/#/reference/charrnn) 

**ObjectDetector**: strumento in grado di riconoscere gli elementi presenti nelle immagini. [+](https://learn.ml5js.org/docs/#/reference/object-detector) 

**ImageClassify**: sstrumento in grado di riconoscere gli elementi presenti nelle immagini. [+](https://learn.ml5js.org/docs/#/reference/image-classifier) 

**ImageClassification_DoodleNet**: strumento in grado di riconoscere i disegni realizzati su una canvas. [+](https://learn.ml5js.org/docs/#/reference/image-classifier) 

### Prototipazione

I prototipi realizzati utilizzano le modalità di machine learning funzionanti, da utilizzare anche per la realizzazione del progetto.
Tuttavia, a livello di modelli testuali è necessario ricorrere a sistemi più accurati, allenati su testi più lunghi per avere una precisione maggiore nel racconto. Ricorrere ad un sistema GPT-2, scritto in linguaggio _Pyton_, permetterebbe di raggiungere questo obiettivo.
Il prototipo realizzato segue lo stesso flusso che è previsto per il progetto: dopo aver selezionato la modalità e prodotto o caricato il disegno, si può generare un racconto; questo può essere anche letto a voce alta dal sistema.


Link alla collection di p5.js dove raccolgo i singoli algoritmi sperimentati nell'editor online [+](https://editor.p5js.org/peterbaru/collections/HYouLasBw)

![mappa](https://raw.githubusercontent.com/peterbaru/archive/master/peterbaru/MakingVisible/MappaConcettuale_peterbaru.png)


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

### Future implementazioni

Dove finiscono tutti i racconti che vengono generati? Riuscire a tenere traccia di tutte le storie in una raccolta che le unisce ai propri disegni, costituirebbe un libro personalizzato unico, dove, se interessati, si ha la possibilità di selezionare le storie preferite, per poterle leggere anche una seconda volta. 

Inoltre, si potrebbe integrare un sistema che permette di riconoscere e registrare la voce degli utenti, in modo da poter ampliare il database di lettori, trovando tra questi la propria voce, o quella della propria mamma. Nel 2019 Google ha rilasciato un algoritmo, chiamato _Voice Cloning_, scritto in linguaggio _Pyton_, che consente ad un computer di pronunciare frasi utilizzando una qualsiasi voce registrata.



### Bibliografia e Sitografia
* traduzione simultanea [+](https://medium.com/@ageitgey/machine-learning-is-fun-part-5-language-translation-with-deep-learning-and-the-magic-of-sequences-2ace0acca0aa)
* rappresentazioni di oggetti comuni per produzione visiva e riconoscimento [+](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6497164/)
* scarabocchiare con Deep Learning! [+](https://towardsdatascience.com/doodling-with-deep-learning-1b0e11b858aa)
* analizzate gli schizzi con sketch-RNN [+](https://medium.com/analytics-vidhya/analyzing-sketches-around-the-world-with-sketch-rnn-c6cbe9b5ac8)
