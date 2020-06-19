## Prototipo definitivo v_2.5  
FULL---> https://editor.p5js.org/fabriziodedo13/full/cFMd_Vcev  
SKETCH---> https://editor.p5js.org/fabriziodedo13/sketches/cFMd_Vcev 
  
  - aggiornato alla versione v_2_5_1  
  - aggiunto cerchio su puntatore per segnalare stato di penDown, quando la penna ha stato 1 il cerchio appare e da feedback visivo.
#### prototipo funzionante con bug minori:  
  - consigliato, in questa fase di prototipazione, di dettare subito la frase, ci sono dei problemi con p5Speech il quale probabilmente va in timeout e non invia o riceve dal sever. 
  
Giunto alla luce il prototipo completo.  
Funzionamento: in fase di caricamento vengono caricati i motori di FaceApi e p5Speech, è vivamente consigliato parlare fin da subito, p5speech
dopo un po' smette di ascoltare e la richiesta di scrittura su path potrebbe dari errori poichè non ricevendo dati dal server si genera un 
errore sulla lunghezza dell'array contenente i risultati. L'apertura della bocca in senso verticale, è il trigger che darà nell'area di disegno
il consenso a disegnare, mentre effettuerà la selezione degli strumenti di disegno e relativo colore nell'area interfaccia. Durante il disegno è 
possibile interromperlo per spostarsi, cambiare strumento o colore, semplicemente aprendo e chiudendo verticalmente la bocca (labbro superiore 
ed inferiore nelle direzioni opposte il più possibile senza allargare gli angoli della bocca).  
Il tracciamento del cursore è basato sulla punta del naso. Inoltre è stato inserito un remap della posizione in modo da amplificarne lo 
spostamento del cursore, a scapito della precisione e richiede una illuminazione ambientale adeguata.  
  
### Tool Disegno  
ispirati da :Generative Gestaltung http://www.generative-gestaltung.de, progetti: P_2_3_1_02 e P_2_3_3_01  
  


![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/prototipi/proto_def_2_5_1/img/pointer.png)  
![](https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/prototipi/proto_def_2_5_1/img/img.png)
