 
const todos = [];
let action = 0;
let printTodos = [];

control();

// ------------start
function start() {
    logTodos()
    action = parseInt(prompt('Hello, you entered a todoapp - write a number to choose action\n1 - add new todo\n2 - delete todo'), 10);
    control();
}

//------------control the app
function control() {
    switch (action) {
        case 0:
            start();
            break;
        case 1:
            addTodo();
            break;
        case 2:
            deleteTodo();
            break;
    }
}

// ------------ log todos
function logTodos() {
    printTodos = [];
    for(let i = 1; i <= todos.length; i++) {
        printTodos.push(`\n${i}. ${todos[i-1]}`);
    }
    console.log(`Your todos: ${printTodos}`);
}

// ------------add new todo
function addTodo() {
    const newTodo = prompt("Add new todo");
    todos.push(newTodo);
    logTodos();
    let next = confirm('Continue?') ? addTodo() : start();
}

// ------------delete todo
function deleteTodo() {
    todos.splice((prompt(`Enter the number of the todo you want to delete\n ${printTodos}`))-1, 1);
    logTodos();
    let next = confirm('Continue?') ? deleteTodo() : start();
}





