// ***************** LocalStorage Islemleri *****************






// let userStatus = {userName: 'Leonhart', isActive: true}
// localStorage.setItem('user', userStatus); 

let user = { userName: "Lawlie", isActive: true }
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user));

let userInfo = localStorage.getItem('userInfo'); // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

let items = [1, 2, 3, user]
localStorage.setItem('newItem', items)
localStorage.setItem('newItem', JSON.stringify(items))
localStorage.getItem('newItem')
JSON.parse(localStorage.getItem('newItem'))