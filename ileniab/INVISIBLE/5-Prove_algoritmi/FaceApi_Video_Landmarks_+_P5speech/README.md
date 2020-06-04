# FaceApi + p5speech

Ho cercato di unire la FaceApi_video con p5.speech.js. 

https://editor.p5js.org/ileniab/full/ljbjFDtVa

Dopo vari tentativi ho costruito un rettangolo sopra la parte inferiore del volto, in modo tale da sfruttarlo come tela su cui lavorare (sostituendo momentaneamente la mascherina). 
All’interno di questo spazio si scriveranno le frasi che p5 Speech riconosce ad ogni pausa.
Il riquadro segue le coordinate del volto, perciò potrà essere visualizzato anche se la persona indossa una mascherina.

Reference: https://learn.ml5js.org/docs/#/reference/face-api , https://idmnyu.github.io/p5.js-speech/


### Qui di seguito mostro alcuni passaggi:


-	**Passo 1**: rilevamento volto

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/FaceApi_Video_Landmarks_%2B_P5speech/prova_face_speech_1.png)

-	**Passo 2**: prova con mascherina, riesce a rilevare il punti del volto anche indossando la mascherina

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/FaceApi_Video_Landmarks_%2B_P5speech/prova_face_speech_2.png)

-	**Passo 3**: Creazione del rettangolo e unione di due algoritmi, FaceApi con p5 Speech

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/FaceApi_Video_Landmarks_%2B_P5speech/prova_face_speech_3.png)

-	**Passo 4**: Controllo del riquadro, in modo che segua le coordinate del rilevamento volto

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/FaceApi_Video_Landmarks_%2B_P5speech/prova_face_speech_4.png)

-	**Passo 5**: Inserimento del testo all’interno del riquadro

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/FaceApi_Video_Landmarks_%2B_P5speech/prova_face_speech_5.png)

-	**Passo 6**: Prova con mascherina

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/FaceApi_Video_Landmarks_%2B_P5speech/prova_face_speech_6.png)
