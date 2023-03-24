// ********* number *********
//  number veri turutanimlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "Kadeve Oranı:", tax,
    "Kadeve Tutarı:", priceTax,
    "Fiyat:", total
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constrator icine bilgi gonderildi:", Number("111"))

// arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 // uzun yontem
counter += 1;
counter++; // kisa yontem
console.log(counter)

counter--; // kisa yontem
counter -= 1;
console.log(counter)

counter *= 10; //carpim islemi
console.log(counter)

counter /= 2; //bolum islemi
console.log(counter)

// islem onceligi:
console.log(2 + 3 * 10) //50
console.log((2 + 3) * 10) // islem onceligi mat'deki gibi

// mod(kalan) alma %:
//sayi tek mi cift mi ??
console.log(14 % 2) // 0 ise cift 1 ise tek

//8 urun alan koliye tum urunler sigiyor mu
console.log("Koli Kalan Urun ornegi", 18 % 8)

// us alma **:
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

// asagi yuvarlama islemi -> Math.floor:
console.log("Asagi Yuvarlama", Math.floor(1.7)) // -> 1

// yukari yuvarlama islemi -> Math.ceil:
console.log("Yukari Yuvarlama", Math.ceil(1.3)) // -> 2


// yakina yuvarlama islemi -> Math.round:
console.log("Yakina Yuvarlama", Math.round(1.6)) // -> 1.6 = 2 -> 1.3 = 1 -> 1.5 = 2