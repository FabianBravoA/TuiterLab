window.onload = function() {
    /*Esto es porque soy flojo, getElements... entrega arreglo y 
    solo queremos el primero de sus elementos que retorna porque 
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("enviar")[0];
    var thinkInput = document.getElementsByName("loQuePenso")[0];
    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("tení k poner algo oe!");
        }
    }
}