// ******** Boolean veri turu ile calismak ********

// Js Boolean iki değerden birini temsil eder. true veya false - 1 veya 0

// 0 ve 1'i Anlamak -->
let isActive = false // 0
isActive = true // 1
console.log(isActive)


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user"
console.log("User Name:", Boolean(userName))

//  0, -0, null, false, NaN, undefined, ("") -->

Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) //true
Boolean(0 === 0) //true "===" veri türleri eşit mi ibaresi taşır -- "==" eşit mi ibaresi taşır

Boolean(userName.length > 0) // true

let x=true;
let y=false;

        function verify(){
            if(x==y){
                document.getElementById("result").innerHTML="Bunlar Eşit";
            } 
            else{
                document.getElementById("result").innerHTML="Bunlar Eşit değil";
            }
            
        }

    // function verify(){
    //     document.getElementById("result").innerHTML=
    //     Boolean(0)+"<br>"+ -- fale
    //     Boolean(-0)+"<br>"+ -- false
    //     Boolean("")+"<br>"+
    //     Boolean(null)+"<br>"+ // null değeri boş demektir.
    //     Boolean(false)+"<br>"+
    //     Boolean(x)+"<br>"+
    //     Boolean(y)+"<br>"+
    //     Boolean(NaN)+"<br>"; Not a Number
    // }