// Document Object Model

//DOM (Document Object Module) HTML dökümanları içerisinde bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde işlemler yapabilmek için tasarlanan bir modeldir. DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.

// pathname bilgisine eristik.
console.log(document.location.pathname)

console.log(document.head)
console.log(document.body)

console.log(document.URL)
console.log(document.baseURI)

document.body.style.backgroundColor = "tomato";

let konum = document.getElementById("sehir").innerHTML;
alert(konum);

