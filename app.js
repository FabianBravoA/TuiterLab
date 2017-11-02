window.onload = function() {
    /*Esto es porque soy flojo, getElements... entrega arreglo y 
    solo queremos el primero de sus elementos que retorna porque 
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("enviar")[0];
    var thinkInput = document.getElementsByName("loQuePenso")[0];
    var timeLine = document.getElementsByName("lineaDeTiempo")[0];
    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            alert("tení k poner algo oe!");
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            nameSpan.textContent = "El Brayatan";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;

            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }
}