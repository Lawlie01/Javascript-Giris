//  Prompt ile Kullanicidan Bilgi Almak ************

// let fullName = prompt("Lütfen Adınızı Giriniz: ")

// let title = document.querySelector("#title")
// title.innerHTML = `${title.innerHTML} <small style="color:red">${fullName}</small>`





//  Ornekler

//  function istek() {

//      let kelime = prompt("Bir değer giriniz", "Lütfen sadece kelime giriniz..")
//      document.write(kelime)
//  }

//  istek();

// ----------------------------------------------

// let isim = prompt("Adınız Nedir?")
// document.write("Merhaba, " + isim);

// ----------------------------------------------

// let isim = prompt("Lütfen Adınızı Giriniz:")

// if((isim !="") && (isim != null))
// alert("Merhaba " + isim + "!");
// else if(isim == "")
// alert("Boş bir giriş yaptınız!");
// else if(isim == null)
// alert("Giriş yapmaktan vazgeçtiniz.");

// ----------------------------------------------

let x = prompt("Lütfen ilk sayıyı giriniz:", "");

let y = prompt("Lütfen ikinci sayıyı giriniz:", "");

x = parseInt(x);
y = parseInt(y);
alert("Toplam....:" + (x + y));
