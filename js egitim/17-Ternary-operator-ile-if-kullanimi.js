// ****************** Ternary Operator ile if kullanimi ******************

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// https://muratdogan.medium.com/javascript-hap-yaz%C4%B1s%C4%B1-ternary-operator-2788782189fb
// https://carlosdillon.com/what-does-the-question-mark-mean-in-javascript

let userName = prompt("Kullanici Bilginizi Yaziniz..")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz Bulunamadi :("}`

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz Bulunamadi :("}`


// ornekasdad
let money;
let canBuy =

    (money < 17) ? "Satin alamazsin.." :
        (money > 30) ? "Satin alabilirsin.." :
            "Para miktarini girmen gerekmektedir..";

console.log(canBuy) // satin alabilirsin.

// ornek
const person = 'Lawlie';
person === 'Medusa' ? console.log("Yep, its MEdusa!") : console.log(`Nope, not Medusa. That's ${person}.`); 
