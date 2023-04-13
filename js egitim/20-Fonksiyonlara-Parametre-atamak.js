// ****************** Fonksiyonlara Parametlere Atamak ve Fonksiyondan Geri donus Almak ******************

// Temel Kurallar:
// 1: Bir fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir




// Ornekler

// 1--
function toplama(a, b) { //a ve b toplanacak iki sayiyi temsil eden fonksiyon parametreleri(girdileri)
    let sonuc = a + b; // fonksiyonda aldigimiz parametlerle yaptigimiz islem
    return sonuc; // Herhangi iki sayinin toplamindan elde edecegimiz islem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
}

var donenSonuc = toplama(5, 6);
console.log("Toplam =", donenSonuc);

// 2--

const PI = 3.14; // Formulde kullandigimiz sabit sayi pi'yi bu sekilde alabiliriz

function daireAlaniHesaplama(r) // Fonksiyonumuz, r parametresini aliyor.
{
    var islemSonucu = PI * r * r; // Daşrenşn akanşnş hesaokayacak islemimiz.
    return islemSonucu; // return ifadesiyle sonucu donuyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); //arguman oalrak, alanini hesaplamak istedigimiz herhangi bir dairenin yaricapi icin 3 rakami verildi.

console.log("Daire Alani =", donenSonuc);

// Kisaltilmisi

function daireAlaniHesaplama2(r, PI = 3.14){
    return PI*r*r;
}

var donenSonuc2 = daireAlaniHesaplama2(4)
console.log("Daire Alani =", donenSonuc2)