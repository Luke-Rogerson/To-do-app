window.onload = function () {

    let enterKeyPressed = document.getElementById("task");
    let activeList = document.getElementById("active-tasks");
    let completedList = document.getElementById("completed-tasks");
    
    let button = document.createElement("div"); // create new div
    let remove = document.createElement('button'); // create button element
    remove.innerText = "Delete"; //set button text to "Delete"
    button.appendChild(remove); // add delete button to div
   
    /*
    Get the users input.
    Create the list element.
    Clone the delete button element.
    Assign the users input to the list element textcontent.
    Append the button to the list element.
    Add the eventListener to the button.
    Append the task to the active task section.
    Clear the user input.
    */


    enterKeyPressed.addEventListener("keypress", addTask);

    function addTask(e) {
        if (e.keyCode == 13) { // check if enter key pressed
            let task = document.getElementById("task").value; 
            if (task) { // check task box isn't empty
                let listElement = document.createElement("LI");
                listElement.textContent = task;
                let newBtn = button.cloneNode(true);
                newBtn.addEventListener("click", deleteTask);
                listElement.appendChild(newBtn);
                document.getElementById("active-tasks").appendChild(listElement);
                document.getElementById("task").value = ''; // resets task box
            }
        }
    }

   
   // newBtn.addEventListener("click", deleteTask);
    function deleteTask() {
        this.parentNode.remove(this); // IDEA: also remove childNode?
        console.log("Task deleted");
    }


    activeList.addEventListener("click", completeTask);

    function completeTask(event) {
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

}