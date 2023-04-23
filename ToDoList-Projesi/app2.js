// Tum Elementlersi Secmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch")

// console.log(firstCardBody);

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded); //DOMCcontentLoaded= sayfa yüklendiğinde istediğim metodu çalıştırır.
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosEveryWhere);
    filterInput.addEventListener("keyup", filter);
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim(); //toLowerCase tum degerleri kucuk harf ile isleme koyar. Buyuk kucuk harf farkliligi ortadan kalkmis olur. trim ise sag ve soldaki bosluklari temizlemek icindir.
    const todoLists = document.querySelectorAll(".list-group-item");
    if (todoLists.length > 0) {
        todoLists.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                //
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        });
    } else {
        showAlert("warning", "Filtreleme Yapmak İçin En Az bir Todo Olmalıdır!")
    }
}

function allTodosEveryWhere() {
    const todoLists = document.querySelectorAll(".list-group-item");
    // Ekrandan Silme
    if (todoLists.length > 0) {
        todoLists.forEach(function (todo) {
            todo.remove();
        });
        // Storage'dan Silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("info", "Todo'lar Başarıyla Silindi.");
    } else {
        showAlert("warning", "Silmek İçin En Az Bir Todo Olmalıdır!")
    }
}

function removeTodoToUI(e) {
    if (e.target.className === "fa fa-remove") {
        // Ekrandan Silme
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        // Storage'dan Silme
        removeTodoToStorage(todo.textContent);
        showAlert("info", "Todo Başarıyla Silindi");
    }
}

function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (removeTodo === todo) {
            todos.splice(index, 1) //splice silme methodu
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen Boş Bırakmayınız!")
    } else {
        // Arayuze Ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo Eklendi")
    }

    // Storage Ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo) {  //UI arayuze addTodo eklemesini sagliyor
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li>
    */
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";
    const i = document.createElement("i");
    i.className = "fa fa-remove";
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    // <div class="alert alert-warning" role="alert">
    //                     This is a warning alert—check it out!
    //                 </div>
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2500);
}