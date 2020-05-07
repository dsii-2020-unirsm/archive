# Making Visible - Guess Text

Gioco costruito attraverso l'utilizzo del Machine Learning. L'obiettivo è quello di indovinare/ricostruire un testo(frase) basandosi sulle immagini che la rete neurale associa a questo. 

## Keywords:
> Racconto, indizi, infinite possibilità, enigma, mistero, immaginazione, barriera, confronto, autori, verità, tempo.

## Dinamica del Gioco:

#### Narratore
 Dataset di frasi. Una di queste frasi viene pescata randomicamente ad inizio partita.
#### Machine Learning - 1 Azione
 Vengono mostrate delle immagini in riferimento al testo caricato, in un intervallo di tempo da definire. 
#### Giocatore
  Dovrà ricostruire la frase basandosi sulle immagini che gli vengono mostrate, in un intervallo di tempo da definire.
  ad esempio: il giocatore deve compilare la sua frase entro 30 secondi.
#### Machine Learning - 2 Azione
  Confronta il testo del Narratore(dataset) con quello del giocatore e ne restituisce la corrispondenza in percentuale %.
#### Giocatore
  Visualizzato il livello di somiglianza tra le due frasi (ad esempio 47%), il giocatore può ritentare cercando di migliorare il suo risultato, verranno quindi visualizzate altre immagini(definirne numero), sempre in riferimento al testo da indovinare. Loop!
#### Fine Partita
  La partita terminerà quando il giocatore deciderà di rendere visibile il testo da indovinare.
  A questo punto potrà iniziare una nuova partita, verrà quindi caricata una nuova frase da indovinare.

## Significato:
 Nel tentativo di attribuire il corretto significato alle immagini visualizzate, il giocatore diventa l'autore di nuove frasi, suggerite o ispirate attraverso la visualizzazione di immagini scelte dalla rete neurale, la quale stimola l'immaginazione del giocatore.
 
## References:
* Gioco del Mimo
* Poker
* Taboo
* "Finchè il caffè è caldo", T.Kawaguchi, 2020
* "Minority Report", D.Spielberg, 2002
* "Mr nobody", J.V.Dormael, 2009
* Guess Who?
* Dixit
* L'indovinello
* Quick, Draw! https://quickdraw.withgoogle.com/
 
## Links:
#### Dandelion-Api
https://dandelion.eu/
#### Text-Similarity
https://learn.ml5js.org/docs/#/reference/word2vec
https://scikitlearn.org/stable/tutorial/text_analytics/working_with_text_data.html
https://www.youtube.com/watch?v=0gI4dqQNNss
https://medium.com/@adriensieg/text-similarities-da019229c894
https://medium.com/@Intellica.AI/comparison-of-different-word-embeddings-on-text-similarity-a-use-case-in-nlp-e83e08469c1c
https://www.researchgate.net/post/What_is_the_best_method_for_finding_document_similarity
http://ai.intelligentonlinetools.com/ml/document-similarity-in-machine-learning-text-analysis-with-elmo/
https://github.com/topics/text-similarity
https://cloud.google.com/solutions/machine-learning/analyzing-text-semantic-similarity-using-tensorflow-and-cloud-dataflow
#### Text-to-Image
https://deepai.org/machine-learning-model/text2img
https://towardsdatascience.com/text-to-image-a3b201b003ae
https://www.youtube.com/watch?v=rAbhypxs1qQ
https://www.youtube.com/watch?v=gmvRStL_Dag
https://github.com/topics/text-to-image
https://bombmagazine.org/articles/ross-goodwins-1-the-road/
#### Daniel Shiffman-The Coding Train-Text Analysis and Word Counting
https://www.youtube.com/watch?v=tE-ZYXU8A8U
* Word Counting
* Parts of Speech Concordance
* Keyword extraction-TF-IDF
* Text Classification
* Node Concordance


