const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Cannot add empty task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("checked");
        saveData();
    }
    else if (element.target.tagName === "SPAN") {
        element.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData();