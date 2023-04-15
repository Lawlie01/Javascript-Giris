// Arrow Function Kullanimi => Fat arrow demektir.



function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello('Javascript');

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }

helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3", "Last name info")

const helloFuncV4 = (firstName, lastName) => {
let info = `Merhaba ${firstName} ${lastName}`
console.log(info)
return info
}

helloFuncV4("helloFuncV4", "Other Info")

// Ornekler

// ES5
var multiplier = function (item, multi) {
    return item * multi
};

multiplier(5, 2);

// ES6

const multiplier2 = (item2, multi2) => item2 * multi2;

multiplier2(5, 2);

// Statement'lar süslü{ } parantez kullanılarak yazılırlar. Eğer fonksiyon içerisinde bu parantezlerden varsa return keyword'ü kullanmamız gerekir. Bir if Statement'i kullanılan bir arrow fonksiyonu yazalım.

var feedTheCat = (cat) => {
    if (cat === 'hungry') {
        return 'Feed The Cat';
    } else {
        return 'Do not feed cat';
    }
}

feedTheCat('hungry');

// this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri her zaman parent fonksiyonuna eşittir. Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.

let movie = {
    name: "La la land", thisInArrow: () => {
        console.log("Movie name is " + this.name);
    },
    thisInRegular() {
        console.log("Movie name is " + this.name);
    }
};

movie.thisInArrow();
movie.thisInRegular();