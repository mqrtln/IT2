function roter() {
    click++
    if(click === tittel.length){
        click = 0; 
    }
    document.getElementById("bildeOverskrift").innerHTML = tittel[click]; 
    document.getElementById("myimg").src = bilder[click]; 
}
function antiroter() {
    click--
    if(click < 0){
     click = tittel.length - 1;
    }
    document.getElementById("bildeOverskrift").innerHTML = tittel[click];
    document.getElementById("myimg").src = bilder[click]; 
    
}
var click = 0; 

var bilder = ["media/bilde1.jpg", "media/bilde2.jpg","media/bilde3.jpg","media/bilde4.jpg"];
var tittel = ["Bildetittel 1","Bildetittel 2","Bildetittel 3", "Bildetittel 4"];

//var antiBilder = ["media/bilde4.jpg", "media/bilde3.jpg", "media/bilde2.jpg", "media/bilde1.jpg"];
//var antiTittel = ["Bildetittel 4", "Bildetittel 3", "Bildetittel 2", "Bildetittel 1"];
//var kmnt = ["Kommentar for det første bilde", "Kommentar for det andre bilde", "Kommentar for det tredje bilde"];
document.getElementById("bildeOverskrift").innerHTML = tittel[0];
//document.getElementById("bildeKommentar").innerHtml  = kmnt[0]; 
document.getElementById("myimg").src = bilder[0];