// ********************* Coklu Kosul Yapisi *********************










// Hava Durumu Ornegi

 let hava = "Gunesli";

 switch(hava){
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
        case "karesini-alma":
            return a ** b
        
        default:
            return "tanimlanmamis islem'"
            break;
    }
};

console.log(islem(23, 14, "topla"));
console.log(islem(10, 3, "mod"));