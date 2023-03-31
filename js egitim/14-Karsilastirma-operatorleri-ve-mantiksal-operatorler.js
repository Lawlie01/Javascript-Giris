// ************* Karsilastirma-operatorleri-ve-mantiksal-operatorler *************

let price = "0";
let user = "Ahmet";

console.log("==:", price == 1)
console.log("==:", price == 100)
console.log("===:", price === 1)
console.log("===:", price === 100)
console.log("!=:", user != "guest")
console.log("price < 100", price < 100)
console.log("price <= 100", price <= 100)
console.log("price > 100", price > 200)
console.log("price >== 100", price >= 100)

price = 0;
console.log("&&", price > 0 && user != "guest")
console.log("||", price > 0 || user != "guest")

user = "guest"
price = 1;
console.log("!", price > 0 && !user == "guest")
console.log("!!", !!2)


// KARSILASTIRMA OPERATORLERI "==", "===", "!=", "<", "<=", ">", ">="
// Karsilastirma operatorleri, degiskenler veya degerler arasindaki esitlik ve farki bulmak icin kullanilir.

// == birbirine esitse

let a = 10;
let b = "10";

console.log(a == b) // deger ayni olacagi icin true

// === hem degeri hem turu esitse
console.log(a === b) //turu ayni olmadigi icin false

// != esit degilse

console.log(a != b)
console.log(a !== b)

let c = "Lawlie";
let d = "Leonhart";

console.log(c != d);

// <= kucuk veya esitse

let a1 = 10;
let b1 = 10;

console.log(a <= b); // kucuk ya da esit olacagi icin true

// > Buyukse ve >= Buyuk veya esitse

let a2 = 20;
let b2 = 10;

console.log(a2 > b2); // a, b'den buyuk olacagi icin true

let c1 = 20;
let d1 = 20;

console.log(c1 >= d1); // buyuk ya da esit olacagi icin true

//MANTIKSAL OPERATORLER "&&", "||", "!"
// Js mantiksal operatorleri kullanarak karsilastirma islemini birden fazla kosula gore yapabiliriz.

// && ve

let l = 10;
let k = "leonhart";

console.log(l > 11 && k == "leonhart") // &&(ve) mantiksal operatorumuz iceride bulunan iki kosulunda saglanmasi durumunda true sonucu verecektir. Ornekte ise L degeri 11'den buyuk olmadigi icin sonuc false.

// || veya

console.log(l > 11 || k == "leonhart") // ||(veya) iceride bulunan iki kosulkdan birisin saglanmasi durumunda true sonucu verecektir. Ornekte L degeri 11'den buyuk olmamasina ragmen k degeri "lonhart"'a esit oldugu icin sonucumuz true

// ! degil

console.log(!(l > 11 || k == "leonhart")) // bu operatorun calisma mantigi cikan sonucumuzun tam tesini vermesidir. Verdigim ornek ! operatoru olmadan true sonucu donecektirrr fakat ! operatorumuz cikan true sonucu terse cevirdigi icin sonuc false
