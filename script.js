let texto="";
let textoEncriptado="";
let textoDesencriptado="";

const a="ai";
const e="enter";
const i="imes";
const o="ober";
const u="ufat";

// funcion copiar valor caja de texto resultado en caja de texto
function copiar(){
    document.getElementById('texto').value = document.getElementById('resultado').value;
    document.getElementById('resultado').value="";
}
// Funcion para desencriptar
function desencriptarTexto(){
    var texto = document.getElementById('texto').value;
    textoDesencriptado="";
    let j=0;
    let vectorCaracteres=[];
    vectorCaracteres = texto.split("");
    while (j<vectorCaracteres.length){
        if(vectorCaracteres[j]=="a"){
            j=j+a.length-1;
            textoDesencriptado=textoDesencriptado+a[0];
        }else if(vectorCaracteres[j]=="e"){
            j=j+e.length-1;
            textoDesencriptado=textoDesencriptado+e[0];
        }else if(vectorCaracteres[j]=="i"){
            j=j+i.length-1;
            textoDesencriptado=textoDesencriptado+i[0];
        }else if(vectorCaracteres[j]=="o"){
            j=j+o.length-1;
            textoDesencriptado=textoDesencriptado+o[0];   
        }else if(vectorCaracteres[j]=="u"){
            j=j+u.length-1;
            textoDesencriptado=textoDesencriptado+u[0];
        }else{
            textoDesencriptado=textoDesencriptado+vectorCaracteres[j];
        }
      
        j++;
    }
    document.getElementById('resultado').value=textoDesencriptado;
    document.getElementById('texto').value="";
   visualizarHtml();
    

   
}

// Funcion para encriptar
function encriptarTexto(){
    var texto = document.getElementById('texto').value;
    let vectorCaracteres=[];
    vectorCaracteres = texto.split("");
    textoEncriptado="";
    for(let j=0;j<vectorCaracteres.length;j++){
   
        if(vectorCaracteres[j]=="a"){
            textoEncriptado=textoEncriptado+a;
        }else if(vectorCaracteres[j]=="e"){
            textoEncriptado=textoEncriptado+e;
        }else if(vectorCaracteres[j]=="i"){
            textoEncriptado=textoEncriptado+i;
        }else if(vectorCaracteres[j]=="o"){
            textoEncriptado=textoEncriptado+o;
        }else if(vectorCaracteres[j]=="u"){
            textoEncriptado=textoEncriptado+u;
        }else{
            textoEncriptado=textoEncriptado+vectorCaracteres[j];
        }
    }
    document.getElementById('resultado').value=textoEncriptado;
    document.getElementById('texto').value="";
    visualizarHtml();
}

function visualizarHtml(){
    /*document.getElementById('informacion').style.display="none";
    document.getElementById('comentario').style.display="none";
    document.getElementById('resultado').style.display="block";
    document.getElementById('copiar').style.display="block";*/
    document.getElementById("mensajeinicial").style.display="none";
    document.getElementById('copiar').style.display="block";
    document.getElementById('resultado').style.display="block";
}

