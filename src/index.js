import Task from './task.js';
import toggleModal from './modal.js';
import {createTaskDiv, popPanel, setUpModal, submitTask} from './createTask.js';
import './style.css';

const main = document.getElementById("main");
const sidePanel = document.getElementById("left-panel")
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content")
const btnModal = document.getElementById("myBtn");

let taskArray;
if (localStorage.getItem("array")) {
    taskArray = JSON.parse(localStorage.getItem("array"));
}
else {
    taskArray = []
}

localStorage.setItem("array", JSON.stringify(taskArray));

function save() {
    localStorage.setItem("array", JSON.stringify(taskArray));
}

function mainContent() {
    for (let item in taskArray) {
        main.appendChild(createTaskDiv(taskArray[item]));
    }
    
}

function createLeftPanel() {
    while (sidePanel.firstChild) {
        sidePanel.removeChild(sidePanel.firstChild)
    }
    let panelList = document.createElement("ul")
    for (let item in taskArray) {
        panelList.appendChild(popPanel(taskArray[item]));
    }
    sidePanel.appendChild(panelList);
}

function deleteHandler() {
    let allDeleteBtns = document.querySelectorAll(".deleteBtn");
    allDeleteBtns.forEach(element => {
        element.addEventListener("click", (e) => {
            // Delete from everywhere alse
            main.removeChild(e.target.parentElement)

            // Delete from array
            let t = element.parentElement.children[1].innerText
            for (let i in taskArray) {
                if (t == taskArray[i].text) {
                    taskArray.splice(i, 1);
                    localStorage.removeItem(`${i}`)
                }
            }
            save()
            createLeftPanel()
        })
    })
}

// Populate the modal
modalContent.appendChild(setUpModal());

//Btn modal function
btnModal.addEventListener("click", () => {
    toggleModal();
})
//Modal submit button
let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", () => {
    console.log("Click on submit")
    let newTask = submitTask();
    taskArray.push(newTask)
    save();
    main.appendChild(createTaskDiv(newTask));
    createLeftPanel();

    deleteHandler()
})

// Build initial site
createLeftPanel();
mainContent()
deleteHandler()