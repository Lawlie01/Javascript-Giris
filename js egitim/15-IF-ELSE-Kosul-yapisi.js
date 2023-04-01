// ************** IF ELSE Kosul Yapisi **************









// ornek buyuktur kucuktur.
let x = 25;
let y = 24;

if (x > y) {
    console.log(x + " Sayisi " + y + " sayisindan buyuktur.")
}

else {
    console.log(x + " Sayisi " + y + " sayisindan kucuktur.")
};

// Not ortalama ornegi
let ogrVizeNot = 70;
let ogrFinalNot = 95;
let ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if (ogrOrtalama >= 0 && ogrOrtalama <= 30) {
    console.log("Not Ortalamaniz: " + ogrOrtalama + " Kaldiniz(FF).");
}

else if (ogrOrtalama >= 31 && ogrOrtalama <= 49) {
    console.log("Not Ortalamaniz: " + ogrOrtalama + " DC - Kosullu.")
}

else if (ogrOrtalama >= 50 && ogrOrtalama <= 84) {
    console.log("Not Ortalamaniz: " + ogrOrtalama + " CC - Geçtiniz.")
}

else if (ogrOrtalama >= 85 && ogrOrtalama <= 100) {
    console.log("Not Ortalamaniz: " + ogrOrtalama + " AA - Geçtiniz.")
}

// Tahmin oyunu
let randomSayi = Math.floor(Math.random() * 10);

// Girdigimiz sayiyi aklinda tutmasi icin prompt degiskene atanir

// let tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");

// if (tahmin === randomSayi && tahmin != null) alert ("Bildin!!!") 
// else if(tahmin == "") alert ("Boş giriş yaptınız!");
// else if (tahmin == null) alert ("Giriş yapmaktan vazgeçtiniz!");

// else{
//     alert("Bir daha denee :( , Random Sayı: " + randomSayi);
// }

// vucut kitle indeksi

// Formül: vki = kg/(m * m)


// function vkiHesapla(weight, height) {
//     let vki;
//     if (vki < 18.5) return alert(`Vucut kitle indexsiniz:  ${vki}, degerleriniz dusuktur`);

//     if (vki >= 18.5 && vki <= 24.9) return alert(`Vucut kitle indexsiniz:  ${vki}, normal degerdesiniz`);

//     if (vki >= 25.0 && vki <= 29.9) return alert(`Vucut kitle indexsiniz:  ${vki}, kilolusunuz`);
//     if (vki > 30) return alert(`Vucut kitle indexsiniz:  ${vki}, Asiri kilolusunuz`);
//     return alert("Girdiginiz degerleri kontrol ediniz");
// };

// vkiHesapla(weight, height);