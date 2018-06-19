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
                let textNode = document.createTextNode(task);
                listElement.appendChild(textNode);
                remove.innerText = "Delete";
                button.appendChild(remove); // add delete button to div
                listElement.appendChild(button); // append delete button to list element
                console.log("OK so far");
                document.getElementById("active-tasks").appendChild(listElement);
                document.getElementById("task").value = ''; // resets task box
            }
        }
    }


    button.addEventListener("click", deleteTask);

    function deleteTask() {
        console.log("Success!"); // test
        this.parentNode.remove(this);
    }


    activeList.addEventListener("click", completeTask);

    function completeTask(click) {
        let clickedTask = click.target;
        console.log(clickedTask);
        if (clickedTask != "button") {
            completedList.appendChild(click.target);
        }
    }

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