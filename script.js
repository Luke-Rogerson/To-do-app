window.onload = function () {

    let enterKeyPressed = document.getElementById("task");
    let activeList = document.getElementById("active-tasks");
    let completedList = document.getElementById("completed-tasks");
    
    let button = document.createElement("div"); // create new div
    let remove = document.createElement('button'); // create button element
    remove.innerText = "Delete"; //set button text to "Delete"
    button.appendChild(remove); // add delete button to div
    const newBtn = button.cloneNode(true);


    enterKeyPressed.addEventListener("keypress", addTask);

    function addTask(e) {
        if (e.keyCode == 13) { // check if enter key pressed
            let task = document.getElementById("task").value;
            if (task) { // check task box isn't empty
                let listElement = document.createElement("LI");
                listElement.textContent = task;
                listElement.appendChild(newBtn);
                console.log("OK so far");
                document.getElementById("active-tasks").appendChild(listElement);
                document.getElementById("task").value = ''; // resets task box
            }
        }
    }

   
    newBtn.addEventListener("click", deleteTask);
    function deleteTask() {
        this.parentNode.remove(this); // IDEA: also remove childNode?
        console.log("Task deleted");
        // activeList.removeChild(click.target);
    }


    activeList.addEventListener("click", completeTask);

    function completeTask(event) {
        console.log(event.target.tagName);
        let clickedTask = event.target;
        if (clickedTask.tagName !== 'BUTTON') {
            completedList.appendChild(clickedTask);
        }
    }

    completedList.addEventListener("click", uncompleteTask);

    function uncompleteTask(event) {
        let clickedTask = event.target;
        if (clickedTask.tagName !== 'BUTTON') {
            activeList.appendChild(clickedTask);
        }
    }




    // add a button to click to remove task
    // add ability to click to move task to completed div and "strikethrough" task


}