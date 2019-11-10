 
const todos = [];
let action = 0;

control();

// ------------start
function start() {
    action = parseInt(prompt('Hello, you entered a todoapp - write a number to choose action\n1 - add new todo'), 10);
    control();
}

// ------------ log todos
function logTodos() {
    let printTodos = [];
    for(let i = 1; i <= todos.length; i++) {
        printTodos.push(`\n${i}. ${todos[i-1]}`);
    }
    console.log(`Your todos: ${printTodos}`);
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
    }
}

// ------------add new todo
function addTodo() {
    const newTodo = prompt("Add new todo");
    todos.push(newTodo);
    logTodos();
    let next = confirm('Continue') ? addTodo() : start();
}







