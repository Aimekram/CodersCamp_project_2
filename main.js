 
const startBtn = document.getElementById('js_startApp')
let action = 0;

class Todo {
    constructor(title) {
        this.title = title,
        this.done = false
    }
}

class TodoList {
    constructor() {
        this.todos = [],
        this.printTodos = []
    }

    logTodos() {
        this.printTodos = [];
        for(let i = 1; i <= this.todos.length; i++) {
            let status = this.todos[i-1].done ? 'done' : 'to do';
            this.printTodos.push(`\n${i}. ${this.todos[i-1].title}, status: ${status}`);
        }
        localStorage.setItem('TodoList', JSON.stringify(this.todos));
        console.log(`Your tasks: ${this.printTodos}`);
    }

    addTodo() {
        const newTitle = prompt("Add new todo");
        const newTodo = new Todo(newTitle);
        this.todos.push(newTodo);
        this.logTodos();
        conf('add'); 
    }

    deleteTodo() {
        validate()
        let index = prompt(`Enter the number of the todo you want to delete\n ${this.printTodos}`);
        validate(index) ? this.todos.splice(index-1, 1) : resetAction();
        conf('delete');
    }

    editTodo() {
        validate()
        let index = prompt(`Enter the number of the todo you want to edit\n ${this.printTodos}`)-1;
        validate(index) ? this.todos[index].title = prompt(`Write the new version of the title of this task\n${this.printTodos[index]}`) : resetAction();
        conf('edit');
    }

    setDone() {
        validate()
        let index = prompt(`Enter the number of the todo you want to change status\n ${this.printTodos}`)-1;
        validate(index) ? this.todos[index].done = !this.todos[index].done : resetAction();
        conf('done');
    }
}

const myList = new TodoList;
startBtn.addEventListener('click', control);

//------------ control the app
function control() {
    switch (isNaN(action) || parseInt(action)) {
        case true: 
            console.log('Click the button to start again');
            resetAction();
            break;
        case 0:
            start();
            break;
        case 1:
            myList.addTodo();
            break;
        case 2:
            myList.deleteTodo();
            break;
        case 3:
            myList.editTodo();
            break;
        case 4:
            myList.setDone();
            break;
        default:
            alert('Wrong input. You need to choose a number from 0 to 4');
            resetAction();
            start();
            break;
    }
}

// ------------ start panel
function start() {
    console.clear();
    myList.logTodos()
    action = parseInt(prompt('Hello, you entered a todoapp - write a number to choose action:\n\n0 to show your todolist in console\n1 to add a new task\n2 to delete a task\n3 to edit a task\n4 to set done status of a given task to true'), 10);
    control();
}


// ------------ confirmations for each action type
function conf(confType) {
    switch(confType) {
        case 'add':
            confirm('Add more?') ? myList.addTodo() : start(); 
            break;
        case 'delete':
            confirm('Delete more?') ? myList.deleteTodo() : start();
            break;
        case 'edit':
            confirm('Edit more?') ? myList.editTodo() : start();
            break;
        case 'done':
            confirm('Mark more todos as done?') ? myList.setDone() : start();
            break;
    }
}

// ------------ data validation
function validate(index) {
    if(myList.todos.length === 0) {
        alert('Your todolist is empty');
        start()
    } 
    if(index <= 0 || index > myList.todos.length) {
        alert (`Todo item number ${index} doesn't exist`)
        return false;
    } else {
        return true;
    }
}

function resetAction() {
    action = 0
}

