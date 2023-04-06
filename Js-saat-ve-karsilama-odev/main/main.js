

let firstName = prompt("Adınızı Giriniz: ");
let showName = document.querySelector('#myName')
showName.innerHTML = firstName;

let clock = document.querySelector('.clock')

tarihSaat()

function tarihSaat() {
    let date = new Date();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let gun = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

     let dsaat = ((hour<10) ? '0' : '') + hour + ":" + ((min < 10) ? '0' : '') + min + ":" + ((sec < 10) ? '0' : '') + sec + " " + gunler[gun];

document.getElementById("myClock").innerHTML = dsaat;
}

setInterval(tarihSaat, 1000);

