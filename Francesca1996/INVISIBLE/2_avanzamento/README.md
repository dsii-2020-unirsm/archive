# Ideas Shape

### Sketch invisible ideas
### Disegnare idee invisibili

<br>

### Keywords
Idea, sketch, objects, profondità, spazio, storyboard.

### Concept 

Le caffetterie inglesi nate nel 1650 sono stati luoghi cruciali per lo sviluppo e la diffusione 
di uno dei più grandi movimenti degli ultimi 500 anni, l’illuminismo. La gente si riuniva 
per consumare bevande e nel mentre scambiava sapere; infatti non è da stupirsi se in quel 
periodo nacquero incredibile un numero di innovazioni.
Il lessico che utilizziamo per descrivere momenti d’ispirazione è ricchissimo: flash, 
colpo di genio, epifania, momento Eureka,… Ognuno di questi concetti, per quanto brillante, 
condividono lo stesso presupposto, quello che un’idea è qualcosa che capita in ogni 
momento di meravigliosa illuminazione, ma di breve durata. 
Le idee sono disegni nella mente, una nuova configurazione che non si era mai formata prima.
Molte persone pensano che non hanno mai un’idea o che non sono creativi, artistici o, 
addirittura, geniali; ma ognuno di noi può averne. Molte grandi idee arrivano quando 
le persone fanno cose semplici nell’arco della giornata, quando non sono focalizzate 
a “trovarne” per forza una. L’idea nasce tra i problemi quotidiani, ascoltando (siamo 
dei buoni ricettori), guardando la realtà attorno a noi. Il più grande segreto per una grande 
idea è scriverla.
Spesso capita che ci si ritrova a non avere un supporto su cui appuntare le proprie idee, 
oppure questi supporti vengono persi, perciò i pensieri svaniscono. <br>
E se grazie agli oggetti quotidiani potessimo rendere visibili le nostre idee?


L’idea progettuale nasce dall’esperienza personale. Mi sono posta l’obiettivo di realizzare 
un “dispositivo intelligente” che attraverso una telecamera, sensori di profondità e algoritmi 
di motion learning, disegnerà l’idea da me immaginata su un monitor digitale. Come? <br>
Gli oggetti quotidiani attorno a noi fungeranno da marker spaziali: disponendoli su un piano, 
a differenti profondità, e tramite il comando vocale, ho la possibilità di “trasformarli” in altro; 
per esempio se mostro un evidenziatore alla telecamera e pronuncio la parola “cavallo”, 
il dispositivo disegnerà un cavallo in quella esatta posizione.

![the source](https://github.com/Francesca1996/archive/blob/master/Francesca1996/INVISIBLE/2_avanzamento/sketch.jpg)

### Dati

Attraverso una telecamera come quella già presente sul nostro cellulare o nel computer, possiamo inquadrare l’ipotetica scena che abbiamo in mente, e disponendo nello spazio gli oggetti che abbiamo intorno a noi, acquisiamo il primo dato (posizionamento nello spazio di oggetti fisici). 
Inoltre gli oggetti possono “diventare altro” attraverso il controllo vocale permesso dalla funzione di P5 speech; quindi posso comunicare al software, per esempio, che la mia borraccia in realtà è un albero.

### Trasformazione dati

Gli oggetti, dopo essere stati classificati dall’algoritmo Yolo, assumono un altro aspetto per mezzo di P5 speech ed attraverso l’algoritmo SketchRnn il dato viene trasformato in un disegno digitale.

### Tecnologie

Per la realizzazione di Ideas Shape è necessario utilizzare tre algoritmi: uno per riconsocere gli oggetti, uno per la sintesi e il riconoscimento vocale, ed infinine uno per il disegno.
Quindi la prima parte è caratterizzata dal riconoscimento degli oggetti sul piano 
tramite YOLO  [+](https://learn.ml5js.org/docs/#/reference/yolo) <br>
Dopo aver riconosciuto l’oggetto, questo diventa ciò che noi comunichiamo al software tramite P5 speech
[+](https://cloud.google.com/speech-to-text/?utm_campaign=emea-it-all-it-dr-skws-all-all-trial-e-gcp-1008073&utm_term=KW_web+speech+api-NET_g-PLAC_&gclid=Cj0KCQjwy6T1BRDXARIsAIqCTXrYZdTtMFdJzzA8jS_qlwWOI_TChlD3NBdWiJhkXmMvqzSZ6l40vmMaAvKLEALw_wcB&utm_content=text-ad-none-any-DEV_c-CRE_170512761790-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+%7E+EXA_1%3A1_IT_IT_ML_Speech+API_web+speech+api-KWID_43700053286773738-kwd-64659325349-userloc_20597&utm_source=google&utm_medium=cpc&ds_rl=1245734) <br>
Infine per mezzo dell’algoritmo SketchRNN la scena verrà disegnata
[+](https://learn.ml5js.org/docs/#/reference/sketchrnn?id=examples)

### A cosa serve

L’idea progettuale ha l’obiettivo di fissare le idee.
Può facilitare e velocizzare lo sviluppo di storyboard; essere uno strumento utile per i bambini con difficoltà, disabilità, bisogni educativi speciali (BES), bisogni nell’apprendimento. 

<br>

### Reference

#### 1. Noraa Machinic Doodles

Noraa machinic doodles è un’installazione interattiva creato da Jessica In nel 2018. Utilizza il set di dati di Google QuickDraw, QuickDraw classifier e modelli personalizzati per SketchRNN. Noraa impara a comunicare le idee attraverso i diversi modi in cui creiamo i tratti di un disegno. 
[+](https://www.creativeapplications.net/processing/noraa-machinic-doodles-a-human-machine-collaborative-drawing/)
[+](https://vimeo.com/297579544)
[+](https://vimeo.com/303441462)
[+](https://www.jessicain.net/)


![the source](https://github.com/Francesca1996/archive/blob/master/Francesca1996/INVISIBLE/2_avanzamento/noraa.jpg)

<br>

#### 2. Lumen 

Lumen è un dispositivo di storytelling creato da Arvind Sanjeev. Il progetto esplora le future implicazioni dei media senza schermi per vedere come le persone potrebbero interagire con l’ambiente che li circonda. Lumen è costituito da un proiettore laser in combinazione con una fotocamera e sensori di profondità e si affida alla piattaforma di apprendimento automatico Yolo Darknet per classificare gli oggetti che vengono quindi elaborati dall’algoritmo. 
[+](https://www.creativeapplications.net/environment/lumen-mixed-reality-storytelling-device/)
[+](https://vimeo.com/246152360)
[+](https://vimeo.com/246658766)

![the source](https://github.com/Francesca1996/archive/blob/master/Francesca1996/INVISIBLE/2_avanzamento/lumen.jpg)

<br>

#### 3. OpenDataCam 

OpenDataCam è uno strumento open source realizzato da un team, costituito da una videocamera collegata ad un computer che esegue un’algoritmo di rilevamento degli oggetti (Yolo) che conta e tiene traccia; la scheda, dotata di GPU, consente di elaborare più thread contemporaneamente.
[+](https://www.creativeapplications.net/environment/opendatacam-2-0-an-open-source-tool-to-quantify-the-world/)

![the source](https://github.com/Francesca1996/archive/blob/master/Francesca1996/INVISIBLE/2_avanzamento/openDataCam.jpg)

<br>

#### 4. Temporarily Enslaved Gods

Temporarily Enslaved Gods è un’installazione formata da tre sculture in acciaio e stampe serigrafiche, realizzata nel 2019 da Fabio Lattanzi Antinori. Le tre stampe, per mezzo del tocco del visitatore sulla superficie, cominciano a “parlare” di dati politici, informazioni, notizie,… tramite algoritmi di motion learning. 
[+](https://www.piartworks.com/artists/57-fabio-lattanzi-antinori/works/9618-fabio-lattanzi-antinori-temporarily-enslaved-gods-2019/)
[+](https://lattanziantinori.com/temporarily-enslaved-gods/)
[+](https://www.piartworks.com/artists/57-fabio-lattanzi-antinori/works/)

![the source](https://github.com/Francesca1996/archive/blob/master/Francesca1996/INVISIBLE/2_avanzamento/TEG.jpg)

<br>
<br>
<br>

### Ricerca e sitografia

#### Generatore automatico di dati

- Deep learning 
[+](https://www.ai4business.it/intelligenza-artificiale/deep-learning/deep-learning-cose/)

- Unbabel The technology behind Machine Translation. "In che modo l'IA affronta l'ambiguità e i doppi significati?
"
[+](https://www.behance.net/gallery/89364787/Unbabel-The-technology-behind-Machine-Translation?tracking_source=search_projects_recommended%7Cmotion%20learning)

- Automatic Subtitling Tool, generatore automatico di sottotitoli 
[+](https://www.happyscribe.co/subtitle-generator)

- Automatic Image Captioning 
 [+](https://blog.goodaudience.com/automatic-image-captioning-building-an-image-caption-generator-from-scratch-4bdd8744bc38)
 
 - Image Caption Generator 
[+](https://developer.ibm.com/exchanges/models/all/max-image-caption-generator/)
 
 - MAX Image Caption Generator
[+](http://max-image-caption-generator-web-app.mybluemix.net/?_ga=2.112417027.623191060.1588260577-2056172043.1588260577&cm_mc_uid=82764929109315882605782&cm_mc_sid_50200000=15263521588260578254&cm_mc_sid_52640000=65997501588260578268)

#### Storyboard

Lo Storyboard è un termine inglese che significa "tavola (board) della storia (story)" e viene generalmente utilizzato per indicare la rappresentazione grafica, sotto forma di sequenze disegnate in ordine cronologico, delle inquadrature di un fumetto o di un'opera filmata, dal vero come d’animazione. Quindi è una "sceneggiatura disegnata", "visualizzazione di un'idea di regia”. 
[+](https://en.wikipedia.org/wiki/Storyboard)

- FrameForge, software per pc che genera storyboard, quindi scene in 3D.
[+](https://www.frameforge.com/)

- Storyboarder
[+](https://wonderunit.com/storyboarder/)

- Canva, sito online con layout preimpostati che possono essere modificati tra i componenti di un team.
[+](https://www.canva.com/design/DAD7AGpemg4/Ts3uYmxseecbkHM5lIY4vA/edit?category=tACZCvd_vC0&utm_source=onboarding)

- StoryboardThat, sito online, simile a Canva, in cui è possibile scegliere delle immagine già presenti e modificarne le parti per costruire la propria scena. 
[+](https://www.storyboardthat.com/storyboard-creator)

- Plot, sito online con layout.
 [+](https://theplot.io/)
 
 #### Rigging

- Character rigging 
 [+](https://www.behance.net/gallery/79001011/Character-rigging-and-animation-masterclass?tracking_source=search_projects_recommended%7Crigging)
 
 - Duik, plug-in di After Effects.
 [+](https://rainboxlab.org/tools/duik/)
 
 - Moho 
 [+](https://my.smithmicro.com/moho-2D-animation-software.html)













