

function tarihSaat() {
    let date = new Date().toLocaleDateString("tr-TR");
    document.getElementById("zaman").innerHTML = date;
}

setInterval(tarihSaat, 1000);