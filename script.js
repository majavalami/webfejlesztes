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
    let helyes = 0;

    if ((document.getElementById("elso").value)=="Miller bolygója"){helyes++;}
    
    if ((document.getElementById("hamis").checked)==1){helyes++;}
    
    if ((document.getElementById("harmadik").value)=="Guy Pearce"){helyes++;}
    
    if ((document.getElementById("joker").checked)==1 && (document.getElementById("macska").checked)==1 && (document.getElementById("ketarc").checked)==1 && (document.getElementById("hq").checked==0)){helyes++;}
    
    if ((document.getElementById("otodik").value)=="Főhős"){helyes++;}


    // if (helyes==5){alert(`Gratulálok! Biztosan nagyon szeretheted Christopher Nolan filmjeit! Nem tudtunk olyat kérdezni ami ki fogott volna rajtad!`);}
    // if (helyes==1){alert(`1`)}
    //else{
        alert(`Bocsi, ez most nem nyert.. ${helyes}`)//}
    
}
    
    //J-E-L-S-Z-Ó
    document.getElementById("gomb").addEventListener("click", kodolas);
    
    function kodolas()
{
    let szamok = 0;
    
    if ((document.getElementById("ot").value)=="5"){helyes++;}
    if ((document.getElementById("ketto").value)=="2"){helyes++;}
    if ((document.getElementById("nyolc").value)=="8"){helyes++;}
    if ((document.getElementById("negy").value)=="4"){helyes++;}
    if ((document.getElementById("kilenc").value)=="9"){helyes++;}
    if ((document.getElementById("egy").value)=="1"){helyes++;}
    
    if (szamok==6){alert(`wow`)}
                                            //W-H-Y-Y-Y
    alert(`Eltaláltad a ${szamok} jelszót!`);
    
}

//S-E-G-Í-T-S-É-G
document.getElementsByClassName("help")[0].addEventListener("click", segit);

function segit() {
alert(`A kód Christopher Nolan egyik filmjében egy széf nyitásának kulcsa!`);
}