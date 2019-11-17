 
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
        confirm('Add more?') ? this.addTodo() : start(); 
    }

    deleteTodo() {
        if(this.todos.length === 0) {
            alert('Your todolist is empty')
            start();
        } else {
            let deleteIndex = prompt(`Enter the number of the todo you want to delete\n ${this.printTodos}`)
    
            if(deleteIndex > 0 && deleteIndex <= this.todos.length) {
                this.todos.splice(deleteIndex-1, 1);
                this.logTodos();
            } else {
                alert (`Todo item number ${deleteIndex} doesn't exist`)
            }
    
            confirm('Delete more?') ? this.deleteTodo() : start();
        }
    }

    editTodo() {
        let editIndex = prompt(`Enter the number of the todo you want to edit\n ${this.printTodos}`)-1;
        this.todos[editIndex] = prompt(`Write the new version of this task"\n${this.todos[editIndex]}`);
        confirm('Edit more?') ? this.editTodo() : start();
    }

    setDone() {
        let doneIndex = prompt(`Enter the number of the todo you want to change status\n ${this.printTodos}`)-1;
        this.todos[doneIndex].done = !this.todos[doneIndex].done
        confirm('Edit more todos?') ? this.setDone() : start();
    }
}

const myList = new TodoList;
startBtn.addEventListener('click', control);

//------------ control the app
function control() {
    switch (action) {
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
            action = 0;
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


