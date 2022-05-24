let taskTextBox = document.getElementById("taskTextBox");
let pendingTasks = document.getElementById("pendingTasks");
let completedTasks = document.getElementById("completedTasks");
let taskAddButton = document.getElementById("taskAddButton");

taskAddButton.addEventListener("click", function () {
  let userInput = taskTextBox.value;

  // if empty user input, do not add anything to list

  if (userInput.length == 0) {
    return;
  }

  // create the div element
  let taskItemDiv = document.createElement("div");
  taskItemDiv.setAttribute("class", "taskItem");

  // create checkbox
  let checkbox = document.createElement("input");

  // set attribute to checkbox
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      completedTasks.appendChild(taskItemDiv);
    } else if (!this.checked) {
      pendingTasks.appendChild(taskItemDiv);
    }
  });

  // create label
  let label = document.createElement("label");
  label.innerHTML = userInput;

  // create button
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", function () {
    taskItemDiv.parentNode.removeChild(taskItemDiv);
  });

  // add checkbox to div
  taskItemDiv.appendChild(checkbox);
  taskItemDiv.appendChild(label);
  taskItemDiv.appendChild(removeButton);

  // add div to ul
  pendingTasks.appendChild(taskItemDiv);

  //reset input field to show a blank box
  taskTextBox.value = "";
});
