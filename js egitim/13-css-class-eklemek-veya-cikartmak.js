// *************** css class eklemek veya cikartmak ***************

let greeting = document.querySelector("#greeting")

// classlist.add() oluşturduğumuz greeting id içerisine class lar oluşturmamızı sağlar. -classlist.remove ise class ları silmemizi sağlar.
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek

greeting.classList.remove("title", "second-class", "third-class") // birden ffazla class silmek

//  greeting.classList.item(0); // HTML de class'ı verilen index sırasına göre döndürür

greeting.classList.contains("new-info"); // Element verilen class'ı içeriyorsa true, içermiyorsa false döner.

// greeting.classList.toggle("new-info");  classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.

greeting.classList.toggle("Lawlie");

greeting.classList.replace("new-info", "info"); //  Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.

console.log(greeting.classList)