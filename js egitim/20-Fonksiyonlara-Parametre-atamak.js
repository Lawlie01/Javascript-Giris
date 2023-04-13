// ****************** Fonksiyonlara Parametlere Atamak ve Fonksiyondan Geri donus Almak ******************

// Temel Kurallar:
// 1: Bir fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


let firstName = "Lawliett"

function greetings(firstName = "", lastName = "") { // default parametre aliyor..
    // console.log(`Merhaba ${firstName ? firstName : ""}`) farkli bir yontem
    // console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName) // degiskenle ilgili bilgi var
greetings(); // fonksiyona parametre gondermedik??
greetings("Leonhart")

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info;
}

let greetingsInfo = greetings2("Ad", "Soyad");
// let info =  "Deneme" // ????
console.log(greetingsInfo)

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lawlie", "Leonhart"))


// Ornekler

// 1-- Herhangi iki sayiyi toplayip, bir degiskene atayan fonksiyon ifadesini yazalim

function toplama(a, b) { //a ve b toplanacak iki sayiyi temsil eden fonksiyon parametreleri(girdileri)
    let sonuc = a + b; // fonksiyonda aldigimiz parametlerle yaptigimiz islem
    return sonuc; // Herhangi iki sayinin toplamindan elde edecegimiz islem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
}

var donenSonuc = toplama(5, 6);
console.log("Toplam =", donenSonuc);

// 2-- Herhangi bir yaricapa sahip bir dairenin alanini hesaplayan fonksiyonu yaziniz.

const PI = 3.14; // Formulde kullandigimiz sabit sayi pi'yi bu sekilde alabiliriz

function daireAlaniHesaplama(r) // Fonksiyonumuz, r parametresini aliyor.
{
    var islemSonucu = PI * r * r; // Daşrenşn akanşnş hesaokayacak islemimiz.
    return islemSonucu; // return ifadesiyle sonucu donuyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); //arguman oalrak, alanini hesaplamak istedigimiz herhangi bir dairenin yaricapi icin 3 rakami verildi.

console.log("Daire Alani =", donenSonuc);

// Kisaltilmisi

function daireAlaniHesaplama2(r, PI = 3.14) {
    return PI * r * r;
}

var donenSonuc2 = daireAlaniHesaplama2(4)
console.log("Daire Alani =", donenSonuc2)

// 3-- Farkli yaricaplardaki iki farkli dairenin, alanlari carpimini veren bir fonksiyon yaziniz.

function daireAlaniHesaplama3(r, PI = 3.14) {
    return PI * r * r;
}

function carpma(a1, a2) {
    return a1 * a2;
}

var alan1 = daireAlaniHesaplama3(5); // 5 ve 6 argumanlari icin dairelerin alanlari hesaplandi.
var alan2 = daireAlaniHesaplama3(6);
var donenSonuc3 = carpma(alan1, alan2); // Hesaplanan alanlar arguman olarak verildi.
console.log("Carpim =", donenSonuc3);

