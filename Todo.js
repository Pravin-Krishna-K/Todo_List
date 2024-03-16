function addTask(){

    let taskInput = document.getElementById("task-input")

    let taskList = document.getElementById("task-list")

    if(taskInput.value.trim()!== ""){

        let newTask = document.createElement("li")
        newTask.innerHTML = `
            ${taskInput.value} 
             <button onclick="updateTask(this)">Edit</button>
             <button onclick="deleteTask(this)">Delete</button>
        `
        taskList.append(newTask)
        taskInput.value= ""
        setTolocalStorage()
    }
}

function deleteTask(button){

    let taskList = document.getElementById("task-list")

    let taskItem = button.parentNode

    taskList.removeChild(taskItem)

    setTolocalStorage()

}

function updateTask(button){

    let taskList = document.getElementById("task-list")

    let newTask = prompt("Update Task",
    button.parentNode.firstChild.textContent.trim()
    )

    if(newTask !== null && newTask.trim()){
        button.parentNode.firstChild.textContent = newTask
    }

    setTolocalStorage()

}


function setTolocalStorage(){
    const data = document.getElementById("task-list").innerHTML
    localStorage.setItem("tasks :", data )
}
function getFromLocalStorage(){
    const taskList = document.getElementById("task-list")

    const data_IN_LS = localStorage.getItem("tasks :")

    if(data_IN_LS){
        taskList.innerHTML = data_IN_LS
    }
    
}

// getFromLocalStorage()

window.onload = function (){
    getFromLocalStorage()
}


// localStorage.setItem("play", "netflix")

// sessionStorage.setItem("play", "hotstar")

const quotesContainer = document.getElementById('quotes-container');
const quoteElement = document.getElementById('quote');

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.log(error);
        });
}

getQuote();

setInterval(getQuote, 10000);


