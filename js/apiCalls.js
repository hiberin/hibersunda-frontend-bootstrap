
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("list").innerHTML = this.responseText;
    } else {
    document.getElementById("list").innerHTML = `Something's wrong!`;
    }
    };

xhttp.open("GET", apiUrl+"undakusukbasa", true);
xhttp.send();