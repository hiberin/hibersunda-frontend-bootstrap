
    
function getAllWords(callbackSuccess, callbackError) {
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function () {
        if (xhttp.status === 200) {
            const data = JSON.parse(xhttp.responseText);
            callbackSuccess(data.words);
        } else {
            callbackError();
        }
    };

    xhttp.open("GET", apiUrl+"undakusukbasa", true);
    xhttp.send();
}


function getWordsBySubstring(substring, callbackSuccess, callbackError) {
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function () {
        if (xhttp.status === 200) {
            const data = JSON.parse(xhttp.responseText);
            callbackSuccess(data);
        } else {
            callbackError();
        }
    };

    xhttp.open("GET", apiUrl+"undakusukbasa/"+substring, true);
    xhttp.send();
}