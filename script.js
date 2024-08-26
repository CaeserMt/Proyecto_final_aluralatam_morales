// Funcion para verificar si la entrada es válida
function isValidInput(text) {
    // Se verifica que solo contiene letras minúsculas y espacios
    return /^[a-z\s]*$/.test(text);
}

// Funcion para encriptar texto
function encryptText() {
    let input = document.getElementById("inputText").value.trim();

    if (!isValidInput(input)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let encryptedText = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("outputText").value = encryptedText;
}

// Funcion para desencriptar texto
function decryptText() {
    let input = document.getElementById("inputText").value.trim();

    if (!isValidInput(input)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let decryptedText = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").value = decryptedText;
}

// Funcion para copiar texto al portapapeles
function copyToClipboard() {
    let outputText = document.getElementById("outputText").value;

    if (outputText === "") {
        alert("No hay texto para copiar.");
        return;
    }

    // Se utilizo el API del portapapeles 
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
        alert("Hubo un error al copiar el texto.");
    });
}
