import Task from './task.js';
import toggleModal from './modal.js';
import {createTask, popPanel, setUpModal, submitTask} from './createTask.js';
import './style.css';

let taskArray = [];

const main = document.getElementById("main");
const sidePanel = document.getElementById("left-panel")
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content")
const btnModal = document.getElementById("myBtn");
let task1 = new Task("Test text", 1, "11/11/11")
let task2 = new Task("Task2 test", 3, "1/13/33")
taskArray.push(task1);
taskArray.push(task2);

function mainContent() {
    for (let item in taskArray) {
        main.appendChild(createTask(taskArray[item]));
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
            console.log(element.parentElement.children[1].innerText);
            //add delete stuff
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
    main.appendChild(createTask(newTask));
    createLeftPanel();
    allDeleteBtns = document.getElementsByClassName("deleteBtn");
    deleteHandler()
})

//create left panel
createLeftPanel();

mainContent()
deleteHandler()