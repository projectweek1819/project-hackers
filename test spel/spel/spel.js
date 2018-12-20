var voet = [ [2,1,3,1,2,1,1,3,2,2],[2,3,3,1,3,1,2,2,3,2],[3,3,2,2,1,2,2,1,2,2],[2,1,3,1,2,2,1,3,2,2],[2,1,3,1,2,2,1,3,2,2],  [2,1,3,1,2,2,1,3,2,2],[2,1,3,1,2,2,1,3,2,2],[2,1,3,1,2,2,1,3,2,2],[2,1,3,1,2,2,1,3,2,2],[2,1,3,1,2,2,1,3,2,2] ];

function setup() {
    createCanvas(500, 500);
    background(200);
}



function kleurkeuze(n){
    if(n === 1){            // keuze 1 ROOD
        fill(255,0,0);
    } else if(n === 2){     // keuze 2 GROEN
        fill(0,255,0);
    } else if(n === 3){     // keuze 3 BLAUW
        fill(0,0,255);
    } else{                 // ERROR
        fill(50,50,50);
    }
}


function tekenBasisBord(voet){
    //
    for(var i = 0 ; i < 10 ; i++){
        for(var j = 0 ; j < 10 ; j++){

            var testje = voet[i][j];

            kleurkeuze(  testje   );

            ellipse(i*50+25 ,j*50+25,10,10);
        }
    }
}



function sleepFunctie(mouseX,mouseY, voet) {

    var sleepVanX =  Math.floor(mouseX /50);
    var sleepVanY = Math.floor(mouseY /50);

    var testje = voet[sleepVanX][sleepVanY];
    voet[sleepVanX][sleepVanY] = 0;

    kleurkeuze(  testje   );

    ellipse(mouseX ,mouseY,10,10);
}




function sleepV2(mouseIsPressed, voet, mouseX, mouseY) {
    if(mouseIsPressed){

        var sleepVanX =  Math.floor(mouseX /50);
        var sleepVanY = Math.floor(mouseY /50);

        var testje = voet[sleepVanX][sleepVanY];
        voet[sleepVanX][sleepVanY] = 0;

        kleurkeuze(  testje   );

        ellipse(mouseX ,mouseY,10,10);

    }

}









// MAIN:
function draw() {
    background(200); //  Background

    // MATRIX


    // teken bollen:
    tekenBasisBord(voet);






    sleepV2(mouseIsPressed, voet, mouseX, mouseY)

}
