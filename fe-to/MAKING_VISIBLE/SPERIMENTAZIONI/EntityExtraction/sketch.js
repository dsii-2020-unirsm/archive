// -
// Making Visible - Deja-Vu - EntityExtraction  by Federico Topa 
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Dandelion Entity Extraction API for https://dandelion.eu/
// —



function setup() {

  loadJSON('https://api.dandelion.eu/datatxt/nex/v1/?lang=en%20&text="the boy hides behind the bush because he is afraid of the dragon"&include=types%2Cabstract%2Ccategories%2Clod&include=image&min_confidence=0,0&token=5db5cba74eb741bba4068e13c54c917b', gotData);

}

function gotData(datatxt) {

  for (let i = 0; i < datatxt.annotations.length; i++) {
    let keyword = datatxt.annotations[i].spot;

    console.log(datatxt.annotations);

  }
}