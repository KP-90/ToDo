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
// Populate the modal
modalContent.appendChild(setUpModal());

//Btn modal function
btnModal.addEventListener("click", () => {
    toggleModal();
})
let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", () => {
    console.log("Click on submit")
    let newTask = submitTask();
    main.appendChild(createTask(newTask));
})

//create left panel
let panelList = document.createElement("ul")
for (let item in taskArray) {
    panelList.appendChild(popPanel(taskArray[item]));
    main.appendChild(createTask(taskArray[item]));
}
sidePanel.appendChild(panelList);

