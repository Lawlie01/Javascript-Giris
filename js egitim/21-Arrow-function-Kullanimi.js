// Arrow Function Kullanimi => Fat arrow demektir.



function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello('Javascript');

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }

helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre bir donus islemi

helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(
    `Merhaba ${firstName} ${lastName}`
) // console log parantezi

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

// ornek 1 - Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunlarin her birine 1'den baslayarak alt alta yazalim

const seriesList = list => {
    list.forEach((series, index) => {
        console.log(`${index + 1}. ${series}`)
    }
    );
};

seriesList(["Firefly", "The Mandalorian", "Braking Bad"]);

// ornek 2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array dondursun. Olusan yeni array'deki cift sayilar 2, tek sayilar ise 3 ile carpilmis olsun. [1,2,3,4,5] => [1x3,2x2,3x3,4x2,5x3] => sonuc ciktimiz **[3,4,9,8,15]** olacak.

const newArray = (nums) => {
    const newNums = nums.map(e=>{
        if(e%2==0){
            return e*2
        } else if (e%2==1){
            return e*3
        }
    });
    return newNums
}

console.log(newArray([1,2,3,4,5]));
