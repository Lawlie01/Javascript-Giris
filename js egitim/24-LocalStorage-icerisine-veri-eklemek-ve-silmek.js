


// Ornekler

// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.querySelector('item');
// let itemsArray = localStorage.getItem('items') ?
//     JSON.parse.apply(localStorage.getItem('items')) : [];


// localStorage.setItem('items',
//     JSON.stringify(itemsArray)
// );
// const data = JSON.parse(localStorage.getItem('items'));
// const liMaker = (text) => {
//     const li = document.createElement('li');
//     li.textContent = text;
//     ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     itemsArray.push(input.value);
//     localStorage.setItem('items',
//         JSON.stringify(itemsArray));
//     liMaker(input.value);
//     input.value = "";
// });

// data.forEach(item => {
//     liMaker(item);
// });

// button.addEventListener('click', function () {
//     localStorage.clear();
//     while (ul.firstChild) {
//         ul.removeChild(ul.firstChild);
//     }
//     itemsArray = [];
// });


// ornek-2

// deger ekleme
// localStorage.setItem("item", "Deger")
// localStorage.setItem("item2", "Game")
// localStorage.setItem("item3", "Spor")

// degeri almak

// let value = localStorage.getItem("item3");

// console.log(value);

// deger silmek

// localStorage.removeItem("item2");

// tumunu temizle

// localStorage.clear();

// localStorage.clear();
let items = ["Deger", "Game", "Spor"];

localStorage.setItem("items", JSON.stringify(items)); 

let value = JSON.parse(localStorage.getItem("items")); //Array olarak alinir.
value.forEach(function(item){
    console.log(item);
});