# Ideas Shape

### Sketch invisible ideas
### Disegnare idee invisibili

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





