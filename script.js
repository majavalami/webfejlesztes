//F-L-I-P
var coll=document.getElementsByClassName("flip");

for(i=0;i<coll.length;i++){
    coll[i].addEventListener("click", function(){flip(this)});
}

function flip(obj) {
    obj.classList.toggle('is-flipped');
}



//Q-U-I-Z
document.getElementById("gomb").addEventListener("click", ellenorzes);

function ellenorzes() 
{
    let helyes=0;

    if ((document.getElementById("elso").value)=="Miller bolygója"){helyes++;}
    
    if ((document.getElementById("hamis").checked)==1){helyes++;}
    
    if ((document.getElementById("harmadik").value)=="Guy Pearce"){helyes++;}
    
    if ((document.getElementById("joker").checked)==1 && (document.getElementById("macska").checked)==1 && (document.getElementById("ketarc").checked)==1 && (document.getElementById("hq").checked==0)){helyes++;}
    
    if ((document.getElementById("otodik").value)=="Főhős"){helyes++;}

    
    let szamok=0;
    
    if ((document.getElementById("ot").value)=="5"){szamok++;}
    if ((document.getElementById("ketto").value)=="2"){szamok++;}
    if ((document.getElementById("nyolc").value)=="8"){szamok++;}
    if ((document.getElementById("negy").value)=="4"){szamok++;}
    if ((document.getElementById("kilenc").value)=="9"){szamok++;}
    if ((document.getElementById("egy").value)=="1"){szamok++;}


    if (helyes==5 && szamok==6){alert(`Gratulálok! Biztosan nagyon szeretheted Christopher Nolan filmjeit! Nem tudtunk olyat kérdezni ami ki fogott volna rajtad!`)}
    if (helyes!=5 && szamok==6){alert(`Habár a kódot meg tudtad adni, a kérdésekre nem tudtál helyesen válaszolni.. Az 5-ből ${helyes} pontot értél el.`)}
    if (helyes==5 && szamok!=6){alert(`Ügyesen megoldottad a feladatokat. Viszont a kód kifogott rajtad. Talán legközelebb az is sikerül.`)}
    if (helyes!=5 && szamok!=6){alert(`Bocsi, ez most nem nyert.. Az 5-ból ${helyes} kérdésre tudtál helyesen válaszolni és a kódot sem találtad el.`)}
}


//S-E-G-Í-T-S-É-G
document.getElementsByClassName("help")[0].addEventListener("click", segit);

function segit() {
alert(`A kód Christopher Nolan egyik filmjében egy széf nyitásának kulcsa!`);
}



