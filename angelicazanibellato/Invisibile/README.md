# Memoria e Ricordi


**Introduzione**

La *memoria* è uno strumento di sopravvivenza, usiamo le nostre esperienze per anticipare e prepararci a eventi e incontri imminenti ma, a lungo andare, ricordare troppe informazioni può diventare un problema. L’album dei *ricordi* che non abbandona mai l’individuo può essere ingombrante.

*Possiamo dare a una macchina il controllo su ciò che deve essere ricordato e cosa no?*
Immaginiamo un dispositivo che ti aiuta a ricordare, ma rispetta anche il diritto all’oblio.


**Pnto di partenza**

Le *reti neurali artificiali* sono sistemi di calcolo ispirati alle reti neurali dell’uomo. Tali sistemi “imparano” a svolgere compiti prendendo in considerazione esempi, generalmente senza essere programmati con regole specifiche. Nel riconoscimento delle immagini, potrebbero imparare a identificare immagini che contengono gatti analizzando quelle etichettate manualmente come “gatto” o “nessun gatto” e utilizzando i risultati per identificare i gatti in altre immagini. Lo fanno senza alcuna conoscenza preventiva e generano automaticamente caratteristiche identificative dagli esempi che elaborano.

Questa rete neurale si basa su una raccolta di nodi collegati, chiamati neuroni artificiali, che modellano liberamente i neuroni in un cervello biologico. Ogni connessione può trasmettere un segnale ad altri neuroni. Un neurone artificiale che riceve un segnale quindi lo elabora e può segnalare i neuroni ad esso collegati.


**Chiave di lettura**

*Le macchine possono dimenticare le informazioni?*
La rete neurale artificiale è soggetta al fenomeno di dimenticanza catastrofica, ovvero alla tendenza di dimenticare completamente e bruscamente le informazioni precedentemente apprese dopo aver appreso nuove informazioni. L’*oblio catastrofico* si verifica perché durante l’apprendimento sequenziale, gli input si mischiano con il nuovo input sovrapposto al vecchio input.


**Idee progettuali**

**DARE FORMA AI RICORDI**
*un dispositivo fabbrica memorie visive*

* racconto a un dispositivo ciò che vedo in una foto oppure racconto a voce un mio ricordo
* il dispositivo scompone le informazioni ricevute in forme (astratte?)
* le forme vengono stratificate su una tela creando una visualizzazione del mio ricordo

Riferimenti

[What Neural Networks See](https://experiments.withgoogle.com/what-neural-nets-see)
[Deep Dream](https://hackernoon.com/what-neural-networks-teach-us-about-schizophrenia-ci3203zhx)
[Nima Veiseh](https://www.nimaveiseh.com/)

**ARCHIVIO DELLE COSE DIMENTICATE**
*archivi di memoria*

* due dispositivi interagiscono tra loro
* un dispositivo archivia tutti i ricordi che vede (foto e immagini) o che sente (racconti a voce)
* un altro dispositivo raccoglie tutti i ricordi rimossi dal primo dispositivo

Riferimenti

[Interferenza catastrofica](https://github.com/topics/catastrophic-forgetting)

**SELEZIONE DEI RICORDI**
*riconoscimento automatico* 

* registro su un dispositivo un ricordo vocale
* il dispositivo riconosce le emozioni legate al mio ricordo attraverso il tono di voce
* il dispositivo seleziona soltanto i ricordi da tenere
* questi ricordi vengono trasformati e visualizzati sotto forma di video

Riferimenti

[Empath](https://webempath.com/)



**Progetti di riferimento**

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/memory.jpg)

[Memory Device](http://www.ishback.com/memory/index.html) 


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/backt.PNG)

[Backtrack ](https://www.yankodesign.com/2015/03/11/share-the-noise-in-your-life/)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/ricordo.PNG)

[Memorise](https://www.yankodesign.com/2018/09/12/bring-clarity-to-foggy-memories/)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/pen.PNG)

[Drive Memory Pen](https://www.yankodesign.com/2010/08/03/pen-full-of-memories/)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/tulipani.PNG)

[Mosaic Virus](http://annaridler.com/mosaic-virus) [+](https://vimeo.com/287645190?utm_campaign=5370367&utm_source=affiliate&utm_channel=affiliate&cjevent=50402b4a8f7d11ea83b400410a18050e/)


**MIRO**

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/avanzamento1.PNG)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/avanzammento2.PNG)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/avanzamento3.PNG)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/avanzamento4.PNG)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/idee%20progettuali.PNG)



**AVANZAMENTO**


Il progetto ha l'obbiettivo di rendere visibili i ricordi e imitare il processo di dimenticare.
A partire da un'immagine e un racconto (scritto/orale) ottengono una nuova immagine che mostra soltanto le parti che ricordo.



**1 Raccontare il ricordo**

Scrivo un breve testo in cui racconto un ricordo legato ad una foto.

oppure

Racconto con una breve frase, un ricordo legato ad una foto. Con l'algoritmo di p5Speech traduce il racconto in una stringa di testo.


**2 Sentiment Analysis**

Questo modello determina il sentimento del testo con un valore compreso tra 0 (negativo) e 1 (positivo).

Una volta scritto il testo il modello mi restituisce una percentuale  e stampa il colore associato al ricordo.



*Parametri*

Blu         Tristezza tra 0% e 25%

Rosso    Rabbia tra 25% e 50%

Giallo     Divertimento tra 50% e 75%

Verde     Felicità tra 75% e 100%

[sentiment](https://editor.p5js.org/angelicazanibellato/present/XH4ezvn7R)

[p5speech+sentiment](https://editor.p5js.org/angelicazanibellato/present/bKE0ye1F4)


![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/blu.PNG)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/giallo.PNG)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/verde.PNG)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/rosso.PNG)

**2 Sentiment Analysis con face-tracking**

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/sad.PNG)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/excitement.PNG)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/happy.PNG)

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/angry.PNG)


**3 Analisi dell'immagine**

Una volta determinato il colore del ricordo, cerco nella foto tutti i pixel che corrispondono a quel colore.
Se il mio ricordo è felice, quindi verde, nella foto rimangono soltanto i pixel verdi mentre su tutti gli altri viene "stampato" un pixel nero


**COLORI**

Il colore è una cosa molto soggettiva. Il modo in cui qualcuno "vede" un colore non è facilmente misurabile e può essere molto diverso tra gli individui. Il colore è usato in molte culture per comunicare informazioni e creare emozioni. L'idea comune è che un colore può generare un'emozione specifica in qualsiasi momento.

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/colori.PNG)

Fu sviluppata una famosa teoria riguardante i colori e le emozioni chiamata "rosa dei temperamenti", ideata da Goethe e Schiller , abbinando dodici colori alle occupazioni umane o ai loro tratti caratteriali ( tiranni, eroi, avventurieri, edonisti, amanti, poeti, oratori, storici, insegnanti, filosofi, pedanti, sovrani ), raggruppati nei quattro personalità: sanguigna, collerica, malinconica e flemmatica.

![img](https://github.com/angelicazanibellato/archive/blob/master/angelicazanibellato/Invisibile/img/rosa%20temperamenti.PNG)


**Altri sviluppi progettuali**

**1 Raccontare il ricordo**

Scrivo un breve testo in cui racconto un ricordo legato ad una foto.

oppure

Racconto con una breve frase, un ricordo legato ad una foto. Con l'algoritmo di p5Speech traduce il racconto in una stringa di testo.



**2 Sentiment Analysis**

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
