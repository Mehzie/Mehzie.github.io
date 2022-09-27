

function addNewTask() {
  //accessing dom elements
  let add_item = document.querySelector('#add_item');
  let task_value = document.querySelector('#newTask input').value;
  let task_list = document.querySelector('#tasks');

  // an if statemnet to handle an exception when
  // user did not enter any value in the input box
  if (task_value == '' || task_value == ' ') {
    alert('Please Enter a Task');
  } else {
    //creating a task div to display task entered and a delete button
    task_list.innerHTML += `
    <div class="task">
    <span id="taskname">
    ${task_value}
    </span>
    <button class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" color="white" height="20" width="20">
    <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z"/></svg>
    </button>
    </div>`;

    //to remove a particular task by removing the parent div when the child is clicked
    let current_task = document.querySelectorAll('.delete');
    for (let i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
}