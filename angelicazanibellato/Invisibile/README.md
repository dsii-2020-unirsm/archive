# Delete Pixel
## Come dimenticano le macchine | Concept


**Introduzione**

La memoria è uno strumento di sopravvivenza, usiamo le nostre esperienze per anticipare e prepararci a eventi e incontri imminenti ma, a lungo andare, ricordare troppe informazioni può diventare un problema. L’album dei ricordi che non abbandona mai l’individuo può essere ingombrante. Possiamo dare a una macchina il controllo su ciò che deve essere ricordato e cosa no?
Immaginiamo un dispositivo che aiuta a ricordare, ma rispetta anche il diritto all’oblio.


**Punto di partenza**

Le reti neurali artificiali sono sistemi di calcolo ispirati alle reti neurali dell’uomo. Tali sistemi “imparano” a svolgere compiti prendendo in considerazione esempi, generalmente senza essere programmati con regole specifiche. Nel riconoscimento delle immagini, potrebbero imparare a identificare immagini che contengono gatti analizzando quelle etichettate manualmente come “gatto” o “nessun gatto” e utilizzando i risultati per identificare i gatti in altre immagini. Lo fanno senza alcuna conoscenza preventiva e generano automaticamente caratteristiche identificative dagli esempi che elaborano.
Questa rete neurale si basa su una raccolta di nodi collegati, chiamati neuroni artificiali. Ogni connessione può trasmettere un segnale ad altri neuroni. Un neurone artificiale che riceve un segnale, quindi, lo elabora e può segnalare i neuroni ad esso collegati.


**Chiave di lettura**

Le macchine possono dimenticare le informazioni?
La rete neurale artificiale è soggetta al fenomeno di dimenticanza catastrofica, ovvero alla tendenza di dimenticare completamente e bruscamente le informazioni precedentemente apprese, dopo aver appreso nuove informazioni. L’oblio catastrofico si verifica perché durante l’apprendimento sequenziale, gli input si mischiano con il nuovo input sovrapposto al vecchio input.


## Idee progettuali

**Dare forma ai ricordi:** un dispositivo che fabbrica memorie visive

- racconto a un dispositivo ciò che vedo in una foto oppure racconto, a voce, un mio ricordo
- il dispositivo scompone le informazioni ricevute in forme
- le forme vengono stratificate su una tela, creando una visualizzazione del ricordo

_Riferimenti:_
[What Neural Networks See](https://experiments.withgoogle.com/what-neural-nets-see), 
[Deep Dream](https://hackernoon.com/what-neural-networks-teach-us-about-schizophrenia-ci3203zhx), 
[Nima Veiseh](https://www.nimaveiseh.com/)

**Archivio delle cose dimenticate:** un dispositivo che crea archivi di memoria

- due dispositivi interagiscono tra loro
- un dispositivo archivia tutti i ricordi che vede (foto e immagini) o che sente (racconti a voce)
- un altro dispositivo raccoglie tutti i ricordi rimossi dal primo dispositivo

_Riferimenti:_
[Interferenza catastrofica](https://github.com/topics/catastrophic-forgetting)

**Selezionare i ricordi:** un di spositivo che riconosce autonomamente i nostri ricordi

- registro su un dispositivo un ricordo vocale
- il dispositivo riconosce le emozioni legate al ricordo attraverso il tono di voce
- il dispositivo seleziona soltanto i ricordi da tenere
- questi ricordi vengono trasformati e visualizzati sotto forma di video

_Riferimenti:_
[Empath](https://webempath.com/)



### References


[Memory Device](http://www.ishback.com/memory/index.html)


[Backtrack ](https://www.yankodesign.com/2015/03/11/share-the-noise-in-your-life/)


[Memorise](https://www.yankodesign.com/2018/09/12/bring-clarity-to-foggy-memories/)


[Drive Memory Pen](https://www.yankodesign.com/2010/08/03/pen-full-of-memories/) 



[Mosaic Virus](http://annaridler.com/mosaic-virus) [+](https://vimeo.com/287645190?utm_campaign=5370367&utm_source=affiliate&utm_channel=affiliate&cjevent=50402b4a8f7d11ea83b400410a18050e/)


## Idee progettuali | Avanzamento

Il progetto ha l'obbiettivo di rendere visibili i ricordi e imitare il processo di dimenticanza.
A partire da un'immagine e un racconto (scritto/orale) ottengono una nuova immagine che mostra soltanto le parti che ricordo.



- **Raccontare il ricordo**

Scrivo un breve testo in cui racconto un ricordo legato ad una foto.

oppure

Racconto con una breve frase, un ricordo legato ad una foto. Con l'algoritmo di p5Speech si traduce il racconto in una stringa di testo.


- **Sentiment Analysis**

Questo modello determina il sentimento del testo con un valore compreso tra 0 (negativo) e 1 (positivo).

Una volta scritto il testo, il modello mi restituisce una percentuale e stampa il colore associato al ricordo.


*Parametri*

**Blu**      Tristezza tra 0% e 25%

**Rosso**    Rabbia tra 25% e 50%

**Giallo**    Divertimento tra 50% e 75%

**Verde**     Felicità tra 75% e 100%

[SentimentAanalysis](https://editor.p5js.org/angelicazanibellato/present/XH4ezvn7R)

[Sentiment+p5Speech](https://editor.p5js.org/angelicazanibellato/present/bKE0ye1F4)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/blu.PNG)

**2 Sentiment Analysis con face-tracking**

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/sad.PNG)


- **Analisi dell'immagine**

Una volta determinato il colore del ricordo, cerco nella foto tutti i pixel che corrispondono a quel colore.
Se il mio ricordo è felice, quindi verde, nella foto rimangono soltanto i pixel verdi mentre su tutti gli altri viene "stampato" un pixel nero

[DeletePixels](https://editor.p5js.org/angelicazanibellato/present/zPUUs4BeG)


### COLORI

Il colore è una cosa molto soggettiva. Il modo in cui qualcuno "vede" un colore non è facilmente misurabile e può essere molto diverso tra gli individui. Il colore è usato in molte culture per comunicare informazioni e creare emozioni. L'idea comune è che un colore può generare un'emozione specifica in qualsiasi momento.


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/colori.PNG)

Fu sviluppata una famosa teoria riguardante i colori e le emozioni chiamata "rosa dei temperamenti", ideata da Goethe e Schiller , abbinando dodici colori alle occupazioni umane o ai loro tratti caratteriali ( tiranni, eroi, avventurieri, edonisti, amanti, poeti, oratori, storici, insegnanti, filosofi, pedanti, sovrani ), raggruppati nei quattro personalità: sanguigna, collerica, malinconica e flemmatica.


### Altri sviluppi progettuali

-  **Raccontare il ricordo**

Scrivo un breve testo in cui racconto un ricordo legato ad una foto.

oppure

Racconto con una breve frase, un ricordo legato ad una foto. Con l'algoritmo di p5Speech si traduce il racconto in una stringa di testo.



- **Sentiment Analysis**

Attraverso il face tracking determino il tipo di emozione legata al ricordo. Ogni emozione ha un valore da 0 (negativo) a 1 (positivo).

Ogni emozione può essere collegata a un valore che modifica l'immagine.


es.


Felicità: i valori cambiamo il colore dei pixel  / applica un filtro colorato

Divertimento: i valori cambiano la grandezza dei pixel / ...

Rabbia: i valori cambiano la forma dei pixel / ...

Tristezza: i valori cambiano l'opacità dell'immagine / visualizza l'immagine in bianco e nero

...




**Analisi dei colori**

Creare un dataset attraverso un gioco (sketch rnn) per associare ad ogni colore un sentimento.

Per esempio per ogni emozione/sentimento propongo una palette di colori tra cui scegliere.

In questo modo si potrebbe pensare di realizzare un modello che riconosce l'emozione/sentimento dal colore.

[joe hallock studio](http://www.joehallock.com/edu/COM498/index.html)



## Progetto ##

**Domande di progetto**

Cosa ci spinge ad agire in una direzione piuttosto che in un’altra? Cosa si nasconde dietro le nostre scelte?
_Non esiste la libertà di decidere, né una parte di noi che ci fa decidere le cose. La scelta non è, come molti di noi immaginano, isolata nel nostro mondo interiore, prché siamo sempre influenzati da quello che accade intorno a noi._ (Daniel C. Dennett, 2020)

In una macchina questa influenza esterna manca, per cui: come è fatta una scelta?
Le reti neurali artificiali si basano su una raccolta di nodi collegati tra loro e ogni connessione trasmette un segnale ad altri nodi.
Questi reti sfruttano l’architettura del cervello umano. Si possono creare macchine che dimenticano o che selezionano, al posto nostro, le informazioni da eliminare?

**Che cos’è**

DeletePixel è un progetto che cerca di imitare il processo di selezione e dimenticanza delle informazioni legate a un ricordo. L’obbiettivo è quello di rendere visibile la forma dei ricordi legati a una foto e al tipo di emozione che suscita.

**Come funziona**

Il progetto è composto da una alcuni algoritmi che permettono all’utente di raccontare i propri ricordi legati a particolari foto e di ottenere nuove immagini che mostrano soltanto alcune parti della foto originale. In questo modo l’utente ha la possibilità di vedere che forma hanno i suoi ricordi. Il processo di scelta delle informazioni da eliminare dalla foto è determinato dal tipo di emozione che l’utente prova nel raccontare il suo ricordo. L’algoritmo di p5Specch permette di ascoltare e registrare il ricordo raccontato dall’utente. Un algoritmo di machine learning fa la sentiment analysis del testo e attribuisce un valore da 0 (negativo) a 100 (positivo). Dopo aver determinato una scala di valori che corrispondono a quattro diverse emozioni, viene individuato il tipo di sentimento che suscita quel ricordo: tristezza, rabbia, divertimento, felicità. A ognuno di questi sentimenti è poi stato associato un colore, rispettivamente: blu, rosso, giallo verde. La scelta del colore da associare al sentimento è stata fatta a partire dal progetto “Colours In Culture”, che individua 10 culture e 84 sentimenti. Per ogni sentimento associa un colore in base alla cultura.
In questo modo avremo un colore specifico associato al ricordo. Ora, questo colore viene preso come elemento di input da un altro algoritmo che permette di eliminare dalla foto tutti i pixel che non corrispondono a quel colore. L’elemento di output finale è un’immagine composta dai pixel del colore del ricordo e l’utente ha la possibilità di vedere che forma hanno i suoi ricordi.

**Che cosa significa**

La memoria costituisce ciò che siamo, è uno strumento di sopravvivenza. Usiamo le nostre esperienze per anticipare e prepararci a eventi o incontri imminenti.  Ma se potessimo cancellare a piacimento parti della nostra vita, smetteremmo di essere chi siamo.
Il cervello “dimentica” i dati e le esperienze in maniera continua. Lo facciamo inconsciamente e senza averne il minimo controllo.
È proprio il cervello a decidere di scartare fatti poco importanti e poco interessanti. Il suo obiettivo è migliorare la sua efficienza.
Ma quali sono sono le informazioni che dimentichiamo? Ci sono ricordi neutri e ricordi emotivi. Il materiale che dimentichiamo quasi all’istante è quello visivo. Gli eventi segnati dall’impronta di un’emozione, invece, resistono all’oblio. Il progetto parte da questi presupposti per cercare di dare forma ai ricordi emotivi, creando una nuova immagine rispetto alla foto che vediamo. La stessa foto, guardata in momenti differenti della nostra vita, potrebbe anche suscitare emozioni contrastanti e, quindi, creare immagini del tutto diverse. Si potrebbe pensare di inserire questi ricordi emotivi in una timeline e taggarli con una didascalia che contiene il ricordo, il tipo di emozione e la data in cui sono stati realizzati.

**Sviluppi futuri**

Una strada alternativa per rappresentare il pocesso di dimenticanza dei ricordi,  potrebbe essere l’utilizzo del face tracking per il riconoscimento di un’emozione suscitata da un ricordo.Il prototipo potrebbe registrare i picchi emozionali durante il racconto ed essere utilizzati come dati per gestire alcuni parametri per manipolare l’immagine. Per esempio, i valori da 0 a 100 registrati con la sentiment analysis possono determinare la grandezza o la forma dei pixel dell’immagine, oppure possono variare la saturazione o la luminosità, in modo da rendere l’immagine più o meno riconoscibile.  Un problema relativo a questi prototipi, è la scelta dell’attribuzione del colore rispetto un certo sentimento. Come è noto, il significato dei colori cambia a seconda delle culture e delle tradizioni. Sarebbe interessante prototipare una macchina che riconosce il sentimento in base a un colore e viceversa. Si potrebbe creare un dataset attraverso un gioco, come SketchRNN, e chiedere all’utente di associare un colore, da scegliere tra una palette di tre colori,a un certo sentimento.


**prototipo**

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/img_def.jpg)

**progetto ideale**

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/screen1.jpg)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/screen2.jpg)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/screen3.jpg)

