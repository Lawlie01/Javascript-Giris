// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick) //fare isaretcisi ogeye geldiginde rengi degisir.

function domClick(){
    console.log("etkinlik calisiyor")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" //boylelikle rengi degisebiliyor
}







// Ornekler

