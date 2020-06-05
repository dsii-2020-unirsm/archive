## The flow towards Europe [+](https://www.lucify.com/the-flow-towards-europe/)
### _2015, Lucify_
![Imgur](https://i.imgur.com/GesPSwt.png)
#### What is
_"The flow towards Europe"_ è un sistema interattivo open source di rappresentazione di dati sui flussi migratori dei richiedenti asilo verso 
i paesi europei dal 2012 al 2018.
I dati che vengono visualizzati nelle infografiche sono quelli ufficiali dell’[UNHCR](http://popstats.unhcr.org/en/asylum_seekers_monthly).

#### What does it mean
Lucify invita a conoscere e comunicare dati importanti attraverso visualizzazioni interattive. 
Questo progetto vuole evidenziare l'entità della crisi dei rifugiati in un modo intuitivo, memorabile e coinvolgente per portare 
l'utente a riflettere su che cosa significhi che così tante persone abbiano avuto la 
necessità di fare richiesta di asilo politico negli ultimi anni.
Attraverso questo rapido e florido flusso di pallini l'utente rielabora l'immagine in persone. 
Questo tipo di figurazione sicuramente non lascia indifferenti rispetto ad un dato significativo ben rappresentato.  

![Imgur](https://i.imgur.com/vt0XJcH.png)
#### How does it work
La visualizzazione è stata generata con l'ausilio di alcune librerie Javascript (react, d3.js, pixi.js) che utilizzano i dati open source 
aggiornati mensilmente dall'United Nations High Commission for Refugee Agency.
Muovendo il cursore sulla mappa è possibile vedere il punto di partenza ed arrivo del flusso migratorio (ogni puntino mobile presente sulla mappa rappresenta 25 persone). 
Cliccando sulla superficie di ogni stato, la selezione viene bloccata: gli stati da cui partono i vari flussi sono 
colorati di viola e accompagnati da una cifra negativa (rappresentante il numero di persone che lasciano il paese
preso in considerazione), mentre gli stati ospitanti assumono un colore verde e presentano una cifra positiva.
Per convenzione, ogni paese ha un unico punto di riferimento (nella posizione della capitale) dal quale partono ed arrivano i flussi. 
Il tragitto rappresentato dai trattini non riporta quello realmente effettuato dalle persone, mentre la velocità di movimento è 
proporzionale alla reale durata del tragitto.
Una timeline regolabile in velocità permette di seguire la durata del viaggio.
Il grafico a linee, posizionato sopra la mappa, mostra il tasso totale dei richiedenti asilo anno per anno e dà 
la possibilità di far partire la visualizzazione dei dati in un periodo a nostro piacimento.
La terza visualizzazione rappresenta il numero dei richiedenti asilo mese per mese, attraverso linee di spessore diverso che collegano il paese
di partenza a quello di arrivo. Anche in questa visualizzazione è presente una timeline regolabile nel tempo che permette di visualizzare
e comparare i dati nei diversi mesi e anni.
Con l'ultima visualizzazione non interattiva, è possibile fare un focus sulla questione siriana: viene messo a confronto 
il numero dei profughi siriani che hanno cercato asilo in Europa tra aprile 2011 e dicembre 2017, tale per cui si riempirebbero 
15 campi da calcio e il numero dei rifugiati che vivono nei campi profughi situati al confine di un altro stato 
(in quanto solo una parte dei rifugiati che fuggono dalle loro case arriva in Europa), che ne riempirebbero 79.

![Imgur](https://i.imgur.com/8gu4gKl.png)
![Imgur](https://i.imgur.com/3OndrpP.png)

#### What if
Particolarmente interessante sarebbe poter visualizzare i flussi di dati su scala mondiale, non solo europea.
La possibilità di integrare articoli, report, per approfondire il tema e mostrare i dati relativi a coloro che non sono riusciti a 
raggiungere la loro destinazione, o poter ricostruire il percorso di ogni viaggio, fatto di interruzioni e domande respinte. 
Potrebbe essere d'aiuto anche conoscere e visualizzare i motivi che portano un richiedente asilo a spostarsi.  

