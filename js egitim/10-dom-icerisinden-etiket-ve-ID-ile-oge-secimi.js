//  *********** DOM icinden Oge Secimi ***********

// let item = document.getElementsByTagName('h1')
let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector('#link')
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add('btn')
