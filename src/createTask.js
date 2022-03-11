import Task from './task.js'

// Create a fully functional div containing a task
export function createTaskDiv(task) {
    // task.text    task.priority   task.dueDate
    const body = document.createElement("div");
    body.id = "task-body";
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    check.className = "make-border"
    check.id = `${task.id}`
    const taskText = document.createElement("p")
    taskText.className = ""
    taskText.innerText = task.text;
    taskText.className = "make-border"
    //Add duedate
    const insertDate = document.createElement("p")
    insertDate.innerText = task.dueDate
    insertDate.className = "make-border"
    //Add priority
    const prio = document.createElement("p")
    prio.innerText = task.priority
    prio.style.fontWeight = "bold"
    prio.className = "make-border"
    //Buttons!!!
    const editBtn = document.createElement("button")
    editBtn.innerText = "edit"
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "deleteBtn"
    deleteBtn.innerText = "X"
    
    // Set local storage 
    if (localStorage.getItem(`${task.id}`) == "true") {
        check.checked = true;
        taskText.classList.add("checked")
    }

    // add checkbox functionality
    check.addEventListener("click", () => {
        if (taskText.classList.contains("checked")) {
            taskText.classList.remove("checked");
            localStorage.setItem(`${task.id}`, "false")
        }
        else {
            taskText.classList.add("checked");
            localStorage.setItem(`${task.id}`, "true")
        }  
    })

    body.append(check, taskText, insertDate, prio, editBtn, deleteBtn);
    return body;
}

export function popPanel(task) {
    let body = document.createElement("li")
    body.innerText = `${task.text.substring(0, 5)}...`;
    return body;
}

// function to set up the modal with inputs
export function setUpModal() {
    let container = document.createElement("div");
    container.classList.add("modalDiv")
    let textLabel = document.createElement("label")
    textLabel.innerText = "Text:"
    let textInput = document.createElement("textArea");
    textInput.id = "textInput";
    //priority stuff
    let priorityLabel = document.createElement("label")
    priorityLabel.innerText = "Priority:"
    let priorityInput  = document.createElement("select");
    priorityInput.id = "priorityInput";
    // Due Date stuff
    let dateLabel = document.createElement("label")
    dateLabel.innerText = "Due Date:"
    let dateInput = document.createElement("input");
    dateInput.id = "dateInput"
    let btn = document.createElement("button");
    btn.id = "submitBtn";
    let priorities = ["High", "Normal", "Low"];

    textInput.setAttribute("type", "text");
    dateInput.setAttribute("type", "datetime-local");

    // Populate select element 
    for (let i in priorities) {
        let opt = document.createElement("option")
        opt.value = priorities[i];
        if (priorities[i] == "Normal") {
            opt.selected = "selected";
        }
        opt.innerText = priorities[i];
        priorityInput.appendChild(opt);
    }
    btn.innerText = "Submit";

    //Append everything
    container.append(textLabel, document.createElement("br"), textInput, document.createElement("br"),
                    dateLabel, document.createElement("br"), dateInput, document.createElement("br"),
                    priorityLabel, priorityInput, document.createElement("br"), btn);

    return container;
}
let count = 0
export function submitTask() {
    let text = document.getElementById("textInput")
    let prio = document.getElementById("priorityInput")
    let due = document.getElementById("dateInput")
    due = due.value.replace("T", " ")
    let newTask = new Task(text.value, prio.value, due);
    count += 1;
    return newTask;
}