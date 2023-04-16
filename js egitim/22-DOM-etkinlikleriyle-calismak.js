// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://www.w3bai.com/tr/index.html  3schools un turkce versiyonu

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick) //fare isaretcisi ogeye geldiginde rengi degisir.

function domClick() {
    console.log(event)
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" //boylelikle rengi degisebiliyor
}




