//  Liste icerisindeki ogeye erismek ve yeni oge eklemek ************

let lastChild =document.querySelector("ul.liste>li:last-child")
lastChild.innerHTML = "son oge degisti"
let firstChild =document.querySelector("ul.liste>li:first-child")
firstChild.innerHTML = "ilk oge degisti"

let ulDOM = document.querySelector("ul.liste")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) son ogegye ekleme yapma
// ulDOM.prepend(liDOM) ilk ogeye ekleme yapma




// ornekler

//  let one = document.getElementById("walterwhite");

//  let two = document.getElementsByClassName("alternate");

//  for (let i = 0; i < two.length; i++) {
//      two[i].style.color = "red";
//  }

// // ------------------------------------------------------

// let liste = document.querySelector("ul");

// let urun = document.querySelector("#veri");
// let ekle = document.querySelector("#ekle");

// ekle.addEventListener("click", function () {
//     // createElement ile yeni bir listItem (li) oluşturuyoruz
//     let li = document.createElement("li");

//     // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
//     li.textContent = veri.value;

//     // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
//     liste.appendChild(li);

//     // Veri inputu içerisindeki metni siliyoruz.
//     veri.value = "";
// });

