// ********************* Coklu Kosullarla Calismak *********************

// https://eloquentjavascript.net/1st_edition/appendix1.html
// https://medium.com/front-end-weekly/switch-case-if-else-or-a-lookup-map-a-study-case-de1c801d944
// https://necatiergin2019.medium.com/switch-deyimi-3133d90074a9


let userName = prompt("Kullanici Adiniz: ");
let age = prompt("Yasiniz: ");
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "Ehliyet Alabilir."
} else if (!userName) {
    info.innerHTML = "Kullanici Adi Girmediniz!"
} else if (!(age >= 18)) {
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz!"
}

function getLetter(s) {
    let letter;
   switch (true){
       case "aeiou".includes(s[0]):
       letter = "A";
       break;
       case "bcdfg".includes(s[0]):
       letter = "B";
       break;
       case "hjklm".includes(s[0]):
       letter = "C";
       break;
       case "npqrstvwxyz".includes(s[0]):
       letter = "D";
       break;
   } 
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}






// Hava Durumu Ornegi

let hava = "Gunesli";

switch (hava) {
    case "Yagmurlu":
        console.log("Semsiyeni yanina almayi unutma");
        break;
    case "Gunesli":
        console.log("Hafif giyin");
        break;
    case "Bulutlu":
        console.log("Disari cik");
        break;
    case "Karli":
        console.log("Kalin giyin");
        break;
    case "Firtinali":
        console.log("Bir sure disari cikma");
        break;
    default:
        console.log("Bilinmeyen Hava durumu: ", hava);
};

// baska bir ornek

let islem = function (a, b, operator) {
    switch (operator) {
        case "topla":
            return a + b;
            break;
        case "cikar":
            return a - b;
            break;
        case "carp":
            return a * b;
            break;
        case "bol":
            return a / b;
            break;
        case "karesi":
            return a ** b;
            break;
        default:
            return "tanimlanmamis islem'"
            break;
    }
};

console.log(islem(23, 14, "topla"));
console.log(islem(10, 3, "mod"));
console.log(islem(2, 4, "karesi"));