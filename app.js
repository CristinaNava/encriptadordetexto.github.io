function encrypt(){
    let text = document.getElementById("text").value;
    let nadaEncontrado = document.getElementById("nadaEncontrado");
    let containerTwo = document.getElementById("containerTwo");
    let imgMuneco = document.getElementById("imgMuneco");

    let textDesifrado = text
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (text.length != 0){
        document.getElementById("textTwo").value = textDesifrado;
        nadaEncontrado.textContent = "Texto encriptado con exito";
        containerTwo.textContent = "";
        imgMuneco.src = "./img/Muneco.png";

    }else{
        imgMuneco.src = "./img/Muneco.png";
        nadaEncontrado.textContent = "ningun mensaje fue encontrado";
        containerTwo.textContent = "ingrese el texto que desea encriptar";
        alert("Debe de ingresar algun texto");
    }
}

function decrypt(){

    let nadaEncontrado = document.getElementById("nadaEncontrado");
    let containerTwo = document.getElementById("containerTwo");
    let imgMuneco = document.getElementById("imgMuneco");

    let text = document.getElementById("text").value;

    let textDesifrado = text
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    
    if (text.length != 0){
        document.getElementById("textTwo").value = textDesifrado;
        nadaEncontrado.textContent = "Texto desencriptado con exito";
        containerTwo.textContent = "";

    }else{
        imgMuneco.src = "./img.Muneco.png";
        nadaEncontrado.textContent = "ningun mensaje fue encontrado";
        containerTwo.textContent = "ingrese el texto que desea encriptar";
        alert("Debe de ingresar algun texto");
    }
}



