 
let action = 0;
let printTodos = [];

control();

class Todo {
    constructor(title) {
        this.title = title,
        this.done = false
    }
}

class TodoList {
    constructor() {
        const todos = []
    }

    addTodo() {
        const newTitle = prompt("Add new todo");
        const newTodo = new Todo(newTitle);
        this.todos.push(newTodo);
        logTodos();
        confirm('Add more?') ? addTodo() : start();
    }
}

// let cokolwiek = new Todo('Cokolwiek')
// console.log(cokolwiek)

//------------ control the app
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
        case 3:
            editTodo();
            break;
    }
}

// ------------ start panel
function start() {
    logTodos()
    action = parseInt(prompt('Hello, you entered a todoapp - write a number to choose action\n1 to add a new todo\n2 to delete a todo\n3 to edit a todo'), 10);
    control();
}

// ------------ log todos
function logTodos() {
    printTodos = [];
    for(let i = 1; i <= todos.length; i++) {
        printTodos.push(`\n${i}. ${todos[i-1]}`);
    }
    console.log(`Your todos: ${printTodos}`);
}

// ------------ add new todo
// function addTodo() {
//     const newTitle = prompt("Add new todo");
//     const newTodo = new Todo(newTitle);
//     todos.push(newTodo);
//     logTodos();
//     confirm('Add more?') ? addTodo() : start();
// }

// ------------ delete todo
function deleteTodo() {
    if(todos.length === 0) {
        alert('Your todolist is empty')
        start();
    } else {
        let deleteIndex = prompt(`Enter the number of the todo you want to delete\n ${printTodos}`)

        if(deleteIndex > 0 && deleteIndex <= todos.length) {
            todos.splice(deleteIndex-1, 1);
            logTodos();
        } else {
            alert (`Todo item number ${deleteIndex} doesn't exist`)
        }

        confirm('Delete more?') ? deleteTodo() : start();
    }
}

// ------------ edit todo
function editTodo() {
    let editIndex = prompt(`Enter the number of the todo you want to edit\n ${printTodos}`)-1;

    todos[editIndex] = prompt(`Write the new version of this task"\n${todos[editIndex]}`);
    
    confirm('Edit more?') ? editTodo() : start();
}




