const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li")
        li.innderHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}