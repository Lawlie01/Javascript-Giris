// **************** Template Literals Kullanimi ****************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let userName = "Ahmet"
const DOMAIN = "Leonhart.com"

let email = userName + "@" + DOMAIN
// console.log("Merhaba", userName, "Sitemize Hoşgeldin", "mail adresin: ", email)

let info = `Merhaba ${userName} sitemize hoşgeldin.. 
Mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}

Borcunuz: ${(2 + 3) * 10} TL
Günün Saat Bilgisi: ${new Date().getHours()}

Kısa İsminiz: ${userName[0]}.
`


console.log(info)


const kitap = {
    ad: `Fırtına`,
    yazar: `Shakespeare`,
    tarih: 1610
}
const bookTable = `
        <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
      </tr>
   </tbody>
    </table>
  `;

document.body.innerHTML = bookTable