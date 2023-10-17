var bot1=1;
var im=document.getElementById('vino_img');
var text=document.getElementById('vino_nom');
function desplasar1(){
    bot1--;
    if(bot1==0){
        bot1=6;
    }
    opcion(bot1);
}
function desplasar2(){
    bot1++;
    if(bot1==7){
        bot1=1;
    }
    opcion(bot1);
}
function opcion(num){
    var num = num;
    switch (num){
        case 1:
            text.textContent = "MONTEPULCIANO";
            im.src="Media/Montepulciano.webp";
            break;
        case 2:
            text.textContent = "PINOT GRIGIO";
            im.src="Media/Pinot.webp";
            break;
        case 3:
            text.textContent = "CHARDONNAY";
            im.src="Media/Chardonnay.webp";
            break;
        case 4:
            text.textContent = "MERLOT";
            im.src="Media/Merlot.webp";
            break;
        case 5:
            text.textContent = "MONTEPULCIANO VIGNAFRANCA";
            im.src="Media/Montepulciano-R.webp";
            break;
        case 6:
            text.textContent = "CERASUOLO D' ABRUZZO";
            im.src="Media/Cerasuolo.webp";
            break;
        default: 
        break;
    }
}
