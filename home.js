{
  /*
 <div class="time-line-card">
  <h2>daily UI challenges </h2>
  <p>create to-do list</p>
</div> 
 */
}

// const timeSection = {
//   0: "8-8:30",
//   1: "8:30-9",
//   2: "9-9:30",
//   3: "9:30-10",
//   4: "10-10:30",
//   5: "10:30-11",
//   6: "11-11:30",
//   7: "11:30-12"
// };
///////////////////////////////////////////
tasksArray = [
  //   {
  //     title: "my first task",
  //     desc: "this task will be done soon",
  //     id: 1,
  //     indexOfPart: 0,
  //     counterOfHalf: 1
  //   },
  //   {
  //     title: "my second task",
  //     desc: "this task won't be done soon",
  //     id: 2,
  //     indexOfPart: 2,
  //     counterOfHalf: 1
  //   }
];

// ${timeIndex}--${taskName}--${taskDescription}--${taskType}
localStorage.tasks
  ? localStorage.tasks.split("##").forEach((ele, index) => {
      tasksArray.push({
        title: ele.split("--")[1],
        desc: ele.split("--")[2],
        id: +index,
        indexOfPart: +ele.split("--")[0] - 8
      });
    })
  : null;

const taskData = {};

//  document.querySelector(".time-line-cards")
const cardGenerator = (
  hearderTxt,
  descriptionTxt,
  id,
  indexOfPart
  //   counterOfHalf
) => {
  let timeLineCard = document.createElement("div");
  timeLineCard.classList.add("time-line-card");
  //top-offset 16px
  console.log(`${indexOfPart * 100 + 16}px`);
  timeLineCard.style.top = `${indexOfPart * 100 + 16}px`;
  //   timeLineCard.style.height = `${counterOfHalf * 100}px`;

  let headerCard = document.createElement("h2");
  headerCard.innerText = hearderTxt;

  let descriptionCard = document.createElement("p");
  descriptionCard.innerHTML = descriptionTxt;

  timeLineCard.appendChild(headerCard);
  timeLineCard.appendChild(descriptionCard);

  document.querySelector(".time-line-cards").appendChild(timeLineCard);
};

tasksArray.forEach(function (element) {
  cardGenerator(
    element.title,
    element.desc,
    element.id,
    element.indexOfPart
    // element.counterOfHalf
  );
});
///////////////////////////////////////

// handle add task
const handleAddTask = () => {
  window.location.pathname = "/addTask.html";
};
//-->
// document.querySelector(".create").addEventListener("click", () => {
//   console.log("salam");
// });
