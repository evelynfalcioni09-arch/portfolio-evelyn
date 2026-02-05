let contador= 1;

setInterval(function() {
    proxImg();
    
},5000);

function proxImg() {
    contador++;
    if (contador> 4) {
        contador = 1;
    }
document.getElementById("radio"+ contador)= true;



}