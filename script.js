window.onload = function () {

    let enterKeyPressed = document.getElementById("task");
    let activeList = document.getElementById("active-tasks");
    let completedList = document.getElementById("completed-tasks");
    let button = document.createElement("div"); // create new div
    let remove = document.createElement('button'); // create button element


    enterKeyPressed.addEventListener("keypress", addTask);

    function addTask(e) {
        if (e.keyCode == 13) { // check if enter key pressed
            let task = document.getElementById("task").value;
            if (task) { // check task box isn't empty
                let listElement = document.createElement("LI");
                listElement.textContent = task;
                remove.innerText = "Delete";
                button.appendChild(remove); // add delete button to div
                listElement.appendChild(button.cloneNode(true)); // append delete button to list element
                console.log("OK so far");
                document.getElementById("active-tasks").appendChild(listElement);
                document.getElementById("task").value = ''; // resets task box
            }
        }
    }


    remove.addEventListener("click", deleteTask);

    function deleteTask() {
        this.parentNode.remove(this); // IDEA: also remove childNode?
       // activeList.removeChild(click.target);
    }


/*    activeList.addEventListener("click", completeTask);

    function completeTask(element) {
        console.log(element.tagName);
        let clickedTask = element.target;
        if (clickedTask.tagName !== 'BUTTON') {
            completedList.appendChild(clickedTask);
        }
    } */

    /*   activeList.addEventListener("click", deleteTask);

        function deleteTask(click) {
            let clickedTask = click.target;
            console.log(clickedTask);
            activeList.removeChild(click.target);
        } 
    */




    // add a button to click to remove task
    // add ability to click to move task to completed div and "strikethrough" task


}