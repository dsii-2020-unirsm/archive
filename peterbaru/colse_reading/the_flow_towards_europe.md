# The flow towards Europe
_2015, Lucify_

### what is?
_The flow towards Europe: è un progetto di _data visualization_ interattivo che intende descrivere, attraverso grafici di diverso genere, il flusso di richiedenti asilo verso i paesi europei dall’inizio del 2012 a settembre 2018. 


### what does it mean?
Il progetto intende sensibilizzare le persone sulla quantità di rifugiati in cerca di asilo in Europa, cercando di chiarire la portata della crisi. Obiettivo principale è quello di raccontare una storia, che descrive la fuga dai paesi di origine. Grazie alla mappa e al grafico è possibile rendere concerti e comprensibili dati altrimenti difficili da intuire. Aspetto importante è la scelta di indicare con un barchart solo i numeri di persone in ingresso nei vari paesi, e non i numeri negativi relativi alle nazioni di partenza, mettendo in evidenza il flusso in entrata e non quello in uscita. Dalla visualizzazione proposta è possibile comprendere la portata della crisi che colpisce alcuni paesi, e porta le persone a scappare. Oltre che alla crisi, è importante concentrarsi sull'idea di accoglienza di ogni paese, visualizzando la crescirta continua di alcune aree dell'europa. La visualizzazione permette anche di comprendere le difficoltà a cui fanno fronte certe aree, evidenziate da "fughe" sempre più evidenti. 


### how it works?
Il sistema si basa sul set di dati pubblicati dall’agenzia per i rifugiati delle nazioni unite (UNHCR) riguardanti i numeri di richiedenti asilo verso i paesi europei. Il progetto è ripartito in diverse sezioni: la prima cosa che si incontra è una linea del tempo, indicante il numero complessivo dei migranti per ogni singolo giorno, seguita da una cartina geografica dove piccoli punti in movimento individuano i flussi in entrata e uscita dai vari paesi. Ogni punto rappresenta 25-50 persone (l’equivalente di un autobus). Gli spostamenti vengono fatti in linea retta dal paese di partenza a quello di arrivo. Una barra in alto a destra permette di modificare la velocità di spostamento nel tempo. Su ogni paese che rileva l’arrivo di migranti è presente un barchart che evidenzia il numero di persone entrate. Sia il grafico che la linea del tempo sono interattivi: il passaggio del cursore su un paese permette di visualizzarne i relativi dati numerici (flussi individuali, numero di persone entrate o uscite a partire dal 01/01/12). I paesi sono colorati in toni diversi (rosso per le aree di partenza, verde per quelle di arrivo) e con opacità differenti, per evidenziarne i flussi in modo intuitivo. I dati riportati a livello spaziale sulla mappa, tuttavia, sono imprecisi e approssimati, perciò successivamente è stato inserito un Sankey Diagram che permette di visualizzare in maniera esatta ogni singolo spostamento tra i diversi paesi. Anche in questo caso è presente una barra sulla quale è permesso spostarsi per visualizzare i cambiamenti nel tempo. 


### what if?
Il grafico mette in evidenza i flussi migratori, ma non permette di visualizzare l’impatto della migrazione in rapporto alle dimensioni del singolo paese ed in particolare del numero degli abitanti autoctoni. L’utilizzo di un Packed Circle Chart nel quale ogni nazione è individutata da un aggregato di punti con colorazione omogenea che rappresentano gli abitanti originari, ai quali si aggiungono progressivamente altri punti di diverso colore che simboleggiano l’ingresso dei nuovi arrivati, potrebbe rappresentare anche questo dato.

**fonti** [+](https://www.lucify.com/the-flow-towards-europe/) [+](https://blog.lucify.com/a-novel-visualisation-of-the-refugee-crisis-565e40ab5a50#.cljs4da83)
