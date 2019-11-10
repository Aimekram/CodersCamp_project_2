 
const todos = [];
let action = 0;

control();

// ------------start
function start() {
    action = parseInt(prompt('Hello, you entered a todoapp - write a number to choose action\n1 - add new todo'), 10);
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
    }
}

// ------------add new todo
function addTodo() {
    const newTodo = prompt("Add new todo");
    todos.push(newTodo);
    let next = confirm('Continue') ? addTodo() : start();
}








