var taskTypeTemp;

document.querySelectorAll(".types").forEach(ele =>
  ele.addEventListener("click", function getTemp(e) {
    taskTypeTemp = e.target.innerHTML;
  })
);

//---> handle add task
document.querySelector("#create-task").addEventListener("click", () => {
  timeIndex = document.querySelector("#time").value;
  taskName = document.querySelector("#task-name").value;
  taskDescription = document.querySelector("#description").value;
  taskType = taskTypeTemp;
  localStorage.tasks = localStorage.tasks
    ? localStorage.tasks +
      `${timeIndex}--${taskName}--${taskDescription}--${taskType}##`
    : `${timeIndex}--${taskName}--${taskDescription}--${taskType}##`;
  console.log(timeIndex, taskName, taskDescription, taskType);
  window.location.pathname = "home.html";
});

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#time").value = "11";
  document.querySelector("#task-name").value = "";
  taskDescription = document.querySelector("#description").value = "";
  taskType = null;
});

// `${timeIndex}--${taskName}--${taskDescription}--${taskType}##`;
