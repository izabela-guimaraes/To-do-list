const input = document.getElementById("input-main")
const button = document.getElementById("button-add")
const task = document.getElementById("task-p")
const fullList = document.getElementById("tasks")
const deleteButton = document.getElementById("button-delete")
const rocketButton = document.getElementById("button-rocket")

document.addEventListener("keypress", function (e) { //send data functionality by pressing "enter"
    if (e.key === 'Enter') {
        var btn = document.querySelector("#button-add");
        btn.click();
    }
});

let newTask = []

let arrayTask = () => {

    let newli = ""

    newTask.forEach((element, index) => {

        newli = newli + `<li class="individual-tasks ${element.concluded == true ? "concluded" : ""}">
        <button id="button-rocket"  onclick="buttonconcluded(${index})">
            <i class="fas fa-rocket"></i>
        </button>

        <p id="task-p" class="${element.concluded == true ? "concluded" : ""}">${element.task}</p>

        <button id="button-delete" onclick="buttonDelete(${index})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </li>`
    })

    fullList.innerHTML = newli

    localStorage.setItem("task", JSON.stringify(newTask))
}

taskSave()

let buttonDelete = (index) => {
    newTask.splice(index, 1)
    arrayTask()
}

let buttonconcluded = (index) => {
    newTask[index].concluded = !newTask[index].concluded
    arrayTask()
}

function taskSave(){
    let save = localStorage.getItem("task")
    newTask = JSON.parse(save)
    arrayTask()
}

button.addEventListener("click", () => {
    newTask.push({
        task: input.value,
        concluded: false
    })
    arrayTask()
})





