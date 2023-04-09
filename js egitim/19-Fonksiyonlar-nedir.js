// Fonksiyon nedir?
// Fonksiyonlar adından anlaşılacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapılardır. Koda işlevsellik katmak için bunu sık sık kullanırız.


//  ilk fonksiyonumuzu tanimlamak:

function hello(){
    console.log("Merhaba")
}

hello();


// function printHello(name) {
//     console.log("Merhaba " + name);
// }

// printHello("Lawlie")


// function addition(sayi1, sayi2) {
//     console.log(sayi1 + sayi2);
// }

// addition(10, 30);

// let sayi3 = 5;
// let sayi4 = 2;

// Deger donduren fonksiyonlar

// function addition2() {
//     let sayi5 = 3;
//     return sayi3 + sayi4 + sayi5;
// }

// function multiplication() {
//     return sayi3 * sayi5;
// } //Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
//kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir

// Callback Fonksiyonlar

// function printScreen1(){
//     console.log("İlk ekran çıktısı")
// }


// function printScreen2(){
//     setTimeout(function(){
//     console.log("İkinci ekran çıktısı")
// }, 3000);
// }

// function printScreen3(){
//     console.log("Üçüncü ekran çıktısı");
// }

// printScreen1();
// printScreen2();
// printScreen3();

// function printScreen1() {
//     console.log("İlk ekran çıktısı")
// }


// function printScreen2(Callback1, Callback2) {
//     setTimeout(function () {
//         Callback1();
//         console.log("İkinci ekran çıktısı")
//         Callback2();
//     }, 3000);
// }

// function printScreen3() {
//     console.log("Üçüncü ekran çıktısı");
// }

// printScreen2(printScreen1, printScreen3);

// Fonksiyon Bildirimi

// function mesajVer(ad, soyad){
//     alert(`Merhabalar ${ad} ${soyad}!!`);
// }

// mesajVer("Lawlie", "Leonhart", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
// mesajVer("Lawlie"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
// mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)

// Geri donus degeri

// function topla(sayi1, sayi2){
//     return sayi1 + sayi2;
// };

// var sonuc = topla(10,20);

// function carp(sayi1, sayi2){
//     return sayi1 * sayi2;
// };

// result=carp(10,20);

// var ekle = function topla(sayi1, sayi2) {
//     return sayi1 + sayi2;
// };

// var sonuc1 = ekle(10,20); 
// var sonuc2 = topla(10,20); // geçersiz

// arrow fanction