//  ***************** Kosullarla calismak bolum sonu egzersizi *****************

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et 
3- ff bilgisinde uzgun ikonu cikart, digerlerinde ise gulucuk olsun
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
`

const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
`

let notBilgisi = prompt("Puani Girin");
let textinfo;
let info = document.querySelector('#info')

if (notBilgisi >= 0 && notBilgisi <= 100) {
    textinfo = SMILE
    info.classList.add('text-primary')
    if (notBilgisi >= 90) {
        textinfo += " AA"
    } else if (notBilgisi >= 85) {
        textinfo += " BA"
    } else if (notBilgisi >= 80) {
        textinfo += " BB"
    } else if (notBilgisi >= 75) {
        textinfo += " CB"
    } else if (notBilgisi >= 70) {
        textinfo += " CC"
    } else if (notBilgisi >= 65) {
        textinfo += " DC"
    } else if (notBilgisi >= 60) {
        textinfo += " DD"
    } else if (notBilgisi >= 50) {
        textinfo += " FD"
    } else if (notBilgisi >= 0) {
        textinfo = `${FROWN} FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }
} else {
    textinfo = "Eksik Ya da Yanlis Girdiniz!"
}


info.innerHTML = `${textinfo} --> ${notBilgisi}` 