var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDesencriptar = document.querySelector(".btn-desencriptar");
var desenho = document.querySelector(".container-desenho");
var container = document.querySelector(".container-paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarCaixa();
    var textocaixa = recuperarTexto()
    resultado.textContent = encriptarTexto(textocaixa);
}

function desencriptar(){
    ocultarCaixa();
    var textocaixa = recuperarTexto()
    resultado.textContent = desencriptarTexto(textocaixa);
}

function recuperarTexto(){
    var textocaixa = document.querySelector(".caixatexto")
    return textocaixa.value
}

function ocultarCaixa(){
    desenho.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Hello"); 
});