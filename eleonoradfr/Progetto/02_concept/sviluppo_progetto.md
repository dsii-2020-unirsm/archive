# Cinema delle emozioni  
  
_È possibile trovare un nuovo parametro di giudizio di un film?   
Come possiamo dare una recensione di un film senza usare le parole?  
Proviamo tutti le stesse emozioni? Reagiamo tutti allo stesso modo?   
Qual è la media? Quali sono le eccezioni?_  
<br>  
### RECENSIONI EMOZIONALI  
visualizzare le emozioni durante la visione di un film  
- registrare le emozioni dell’utente mentre guarda un film  
(espressioni facciali, temperatura corporea, battito cardiaco)  
- visualizzare le emozioni trasformandole in un grafico, un'onda  
(registro le emozioni in un array di valori nel tempo per creare il grafico,  
sentiment analisys del volto e aggiungo la parte di memoria storica)    
- rendere le emozioni un parametro di giudizio cinematografico personale o pubblico  

_Cambia la mia onda emozionale in periodi diversi della mia vita? o la seconda volta che guardo il film?  
È simile a quella degli altri? Qual è la media? Quali sono le eccezioni?  
Posso aiutare gli altri nella scelta di un film? Posso aiutare chi produce film?_    
<br> 

Reference:
- **RECENSIONI**: percentuali, stelle, mi piace / non mi piace ([Coming Soon](https://www.comingsoon.it/), [IMDb](https://www.imdb.com/), [Rotten Tomatoes](https://www.rottentomatoes.com/))
- **REACTION VIDEO**: community, condivisione del momento, come reagiscono le altre persone allo stesso film
- **TRAILER**: emozione immediata, deve attirare l'attenzone in pochi secondi  
  <br>  
- **Face Expression Recognition / FACE API** [(+) ](https://github.com/justadudewhohacks/face-api.js): emozioni categorabilizzabili in una scala da 0 a 1  
![face-api](https://user-images.githubusercontent.com/31125521/50575270-f501d080-0dfb-11e9-9676-8f419efdade4.png)  
  
- **AFFECTIVA** [(+) ](https://www.affectiva.com/):   
![affectiva](https://www.digitalic.it/wp-content/uploads/2019/04/affectiva.jpg)  
  
- **VISAGE TECHNOLOGIES** [(+) ](https://visagetechnologies.com/): il software di riconoscimento delle emozioni rileva le espressioni facciali da immagini o video e restituisce la probabile distribuzione di sette emozioni universali: felicità, tristezza, rabbia, paura, sorpresa, disgusto e neutralità   
![affectiva](https://visagetechnologies.com/wp-content/uploads/2020/02/Add-a-subheading-10.png)  
  
- **SENTIMENT()** [(+) ](https://ml5js.org/reference/api-Sentiment/): di ml5 è stato creato partendo da recensioni cinematografiche, macchina allenata sull'associazione stelle e testo  
  
- **NIKON Finger Sensors** [(+) ](https://petapixel.com/2018/07/16/nikon-working-on-finger-sensors-that-can-read-your-emotions/): di ml5 è stato creato partendo da recensioni cinematografiche, macchina allenata sull'associazione stelle e testo    
<br> 

Idee:  
- si accende la webcam, parte un video, registro le emozioni in una timeline, in uscita ottengo un grafico confrontabile con altri (sensazioni medie, eccezioni)
- cercare relazione tra la struttura del film e il grafico delle emozioni registrate
- mezzo per creare plot, scelgo le emozioni e genero la struttura del film in base a ciò che voglio trasmettere
- scatto una foto di chi guarda il film ogni tot minuti per creare un timelapse di facce (il film scritto in faccia)
- ti chiedo a voce di raccontarmi l'esperienza nel guardare un film, la trasormo in testo e faccio sentiment analysis  
- prefilm, far entrare lo spettatore nel "mood" del film
- mi vengono consigliati altri film da vedere in base alle emozioni che si provano (probabilità di netflix)
- previsione delle emozioni che proverò in quel film in base al mio umore attuale, a come reagisco usualmente, come hanno reagito gli altri
- com'è dal punto di vista strutturale il film, funziona bene?, ..
- problema trasposizione libri/film nella perdita di elementi narrativi importanti 
- trailer delle emozioni, non mi informo sulla trama del film ma sulle emozioni che molto probabilmente mi farà provare
- indovina il film in base alle emozioni che prova lo spettatore
