//  **************** String Veri Turu Islemleri ****************
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "ahmetsadikoglu977@gmail.com"
let firstName = "Ahmet"
let lastName = "SADIKOĞLU"

// string karakter sayisi --> Length
console.log(email.length)

// Ilk arakteri Bulmak --> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))


// Buyuk harf / kucuk harf :
firstName = firstName.toUpperCase() // buyuk harflere cevirmek icin
console.log(firstName)

firstName = firstName.toLowerCase() // kucuk harflere cevirmek icin
console.log(firstName)

// String icinde istedigimiz bilgiyi aramak ve yerini bulmak --> search:
console.log(email.search("@"))
console.log(email[17])

email.search('olmayan') // eger icerisinde gecmeyen bir karakter aratirsam -1 olarak gosterecektir

// belli bir yere kadar al --> slice: (domain bilgisi)
let DOMAIN = email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) // sadece gmail kismini aldik


// Bilgiyi degistir --> replace:
email = email.replace("gmail.com", "leonhart.org")
console.log(email)

// istedigim bilgi var mi? --> includes:
email.includes("@") // true
email.includes("fdsjklfsa") // false

// istedigim bilgi basladi mi? bitti mi? --> startsWidth, endsWidth:
console.log(email.endsWith("leonhart.org"))

// Ilk harflerini buyuk yapmak
firstName = "firstname"
lastName ="lastname"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)


let url = "www.kodluyoruz.org";
let language = "Java";

// Örnek 1: Language değişkenin değerini JavaScript olarak değiştirin
language = language.replace("Java", "Javascript");

console.log(language);

// Örnek 2: url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun
console.log(url.indexOf("."));

domain = url.slice(3+1)
console.log(domain)