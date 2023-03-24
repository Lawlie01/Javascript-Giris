// let ve const ile dedisken tanimlama

// var ile degisken tanimlama:
// var serverName = "Lawlie.org"
//console.log(serverName);

// let ile degiskeni bos tanimlamak:

let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://lawlie.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
// hatalı kullanım
// console.log(fullName)
// let fullName = "Ahmet Sadıkoğlu"
let fullName = "Ahmet Sadıkoğlu";

// let ile tanımlanan degiskenin icindeki bilgiyi degistirmek
fullName = "Lorem Ipsun Dolor"
console.log(fullName)

// birlestirme veya ekleme islemi
fullName + "Yeni Eklenen Bilgi"
console.log(fullName + " Test Bilgisi")

fullName = fullName + " Yeni Bilgi"

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimamaya calismak
// const serverPassword;  //sadece degisken tanimlandi ama ici bos

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "asdasd123asd"
console.log(SERVER_PASSWORD)

//SERVER_PASSWORD = "1234"
//console.log(SERVER_PASSWORD)

// ********************************************************************************* //

// degisken nedir?

/*
var/let/const degiskenIsmi = degiskenDegeri;
let sayi = 10;
*/

// var : function scope -- ram bellekte cok fazla yer kaplar.
//let/const : block scope ozelligine sahiptir

// function selamVer(){
//     var selam = "Herkese Selam"; // function scope
//     if(true){
//         let b = 10;
//         console.log(b);
//     }

//     console.log(selam);
// }

// selamVer();


// var a = 5;
// var a = 10;
// console.log(a)

// let ve const arasındaki fark

// const (constant) : sabit , degismez.

// const a = 19;
// a = 15;              Uncaught TypeError: Assignment to constant variable.
// console.log(a);

// let b = 5;
// b = 7;
// console.log(b);


const user = {
    userName :"Lawlie",
    passWord :"123"
}

user.userName="LawlieLeonhart"

console.log(user);