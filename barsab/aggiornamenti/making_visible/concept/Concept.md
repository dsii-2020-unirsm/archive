#### Analisi
Le disposizioni di sicurezza imposte per la pandemia da coronavirus hanno reso ancora più difficile la vita dei non vedenti. Per orientarsi nel mondo usano il tatto, l'udito e l'olfatto. L'obbligo di indossare i guanti rende loro difficili operazioni come afferrare oggetti, cercare qualcosa nella propria borsa, maneggiare soldi, individuare i pulsanti di ascensori o citofoni leggendone le indicazioni tattili ecc. ecc. 
Subentra un altro problema legato all'obbligo di indossare la mascherina: quando una persona parla con la bocca coperta dalla mascherina, parte dell’emissione sonora viene filtrata. Quindi anche percepire la presenza di persone attraverso le voci, specialmente in mezzo al traffico urbano, è diventato più difficile. Anche l'uso dell'olfatto viene meno indossando la mascherina. 
Dal 4 Maggio 2020, ovvero dal giorno in cui l’Italia entra nella fase due della gestione emergenza coronavirus, quelli che erano i riferimenti orientativi per i non vedenti sono venuti meno.
Bisogna prendere atto del fatto che alcune delle nuove disposizioni di sicurezza sono fortemente penalizzanti per chi non vede e progettare adeguati strumenti di supporto.

#### Non vedenti e distanziamento sociale
Con il DPCM dello scorso 17 maggio, il Governo ha definitivamente chiarito che sono previste deroghe alle norme sul distanziamento sociale per chi accompagna una persona non vedente. «Ma quando il disabile visivo non è accompagnato, rispettare le distanze di sicurezza può essere difficile – spiega il presidente UICI Torino -: infatti, se un vedente percepisce a colpo d’occhio le persone in movimento, un cieco deve affidarsi ai rumori oppure alle indicazioni che riceve tramite il bastone bianco».  
###### Campagna di sensibilizzazione che chiede ai normodotati di aiutare i non vedenti ad osservare correttamente il distanziamento sociale
![Imgur](https://i.imgur.com/eCtoIrH.png)

#### Research Question
Come fa una persona non vedente, che cerca di muoversi autonomamente, a osservare il distanziamento sociale? Come fa a capire, se non ha accompagnatori o operatori di assistenza, la posizione delle persone e/o oggetti che ha accanto? Come potrà orientarsi nel mondo, osservando le disposizioni imposte che rendono più difficile l’utilizzo dei sensi quali udito, olfatto e tatto?
#### Concept 
Il progetto intende riflettere sul come poter rendere l’orientamento nel mondo per i non vedenti più agevole e meno traumatico. Si tratta di un progetto atemporale, ma necessario dato il periodo che stiamo vivendo e le disposizioni di sicurezza che tutti siamo tenuti ad osservare. Potrebbe essere un braccialetto che vibra se rileva oggetti nelle vicinanze e suona se c’è una persona a una distanza inferiore al metro? O un oggetto intelligente da legare al bastone bianco?
#### Tecnologie
- Object detection Coco SSD di ml5 per rilevare persone e oggetti
- Arduino, sensore a ultrasuoni che misura la distanza
- Buzzer che suona in maniera intermittente se si è al limite consentito, in maniera continua ed insistente se la distanza diminuisce sempre di più
- P5.js comunica con Arduino tramite libreria p5.serialport
