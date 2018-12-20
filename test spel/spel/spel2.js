var voet = [ [2,1,3,1,2,1,1,3,1,3],[2,3,3,1,3,1,2,1,3,2],[3,1,2,2,1,2,2,1,2,2],[1,2,3,3,1,2,1,3,2,1],[3,1,3,2,3,1,1,2,3,3], [2,3,1,2,3,2,2,1,3],[2,3,2,1,2,2,1,3,2,1],[1,2,1,3,2,1,3,3,1,2],[1,1,3,2,3,1,1,2,3,1],[2,2,1,3,1,2,3,2,1,3] ];



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

            kleurkeuze(  voet[i][j]   );

            ellipse(i*50+25 ,j*50+25,10,10);
        }
    }
}

// DIT WORDT NIET GEBRUIKT
function sleepFunctie(mouseX,mouseY, voet) {

    var sleepVanX =  Math.floor(mouseX /50);
    var sleepVanY = Math.floor(mouseY /50);

    var testje = voet[sleepVanX][sleepVanY];
    voet[sleepVanX][sleepVanY] = 0;

    kleurkeuze(  testje   );

    ellipse(mouseX ,mouseY,10,10);
}
// DIT WORD NIET GEBRUIKT
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

// nodige var
var AlreadyPressed = false; // init staat is false
var schuifX = 0;
var schuifY = 0;
var kleurSchuif = 0;
var kleurSchuifNaar = 0;

function sleepV3(mouseIsPressed, mouseX, mouseY, voet) {
    if(mouseIsPressed){
        if(!AlreadyPressed){
            // indien je net (voor het eerst) op de muis drukt
            schuifX =  Math.floor(mouseX /50);
            schuifY = Math.floor(mouseY /50);

            kleurSchuif = voet[schuifX][schuifY];
            voet[schuifX][schuifY] = 0;


            AlreadyPressed = true;
        }else{
            // indien muis al was ingedrukt eerder
            kleurkeuze(kleurSchuif);
            ellipse(mouseX ,mouseY,10,10);



        }
    }else{ // indien muis niet is ingedrukt, kijk na dat AlreadyPressed terug false is.
        AlreadyPressed = false;
    }

}


function schuifIndicator(xxx,yyy, kleurSchuif) {
    //schuifX
    //schuifY

    kleurkeuze(0);
    quad((25+50*xxx)+25 ,(25+50*yyy)-75 ,(25+50*xxx)-25 ,(25+50*yyy)-75 ,(25+50*xxx)-25 ,(25+50*yyy)+75 ,(25+50*xxx)+25 ,(25+50*yyy)+75 );
    quad((25+50*xxx)+75 ,(25+50*yyy)-25 ,(25+50*xxx)-75 ,(25+50*yyy)-25 ,(25+50*xxx)-75 ,(25+50*yyy)+25 ,(25+50*xxx)+75 ,(25+50*yyy)+25 );
    kleurkeuze(kleurSchuif);
    //   x2  y2  x1  y1  x4  y4  x3  y3
    quad((25+50*xxx)+25 ,(25+50*yyy)-25 ,(25+50*xxx)-25 ,(25+50*yyy)-25 ,(25+50*xxx)-25 ,(25+50*yyy)+25 ,(25+50*xxx)+25 ,(25+50*yyy)+25 );
}





// MAIN:
function draw() {
    background(200); //  Background

    if(AlreadyPressed){
        schuifIndicator(schuifX,schuifY, kleurSchuif);
    }

    // teken bollen:
    tekenBasisBord(voet);






    sleepV3(mouseIsPressed, mouseX, mouseY, voet)
}