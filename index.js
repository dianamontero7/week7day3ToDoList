
// Array to store tasks
const tasks = [{title: "Clean the garage", priority: "high" }];


function renderTaskCards(tasksToRender){
    let taskListHTML = document.getElementById("taskList")
    taskListHTML.innerHTML = null
    
    for(let i = 0; i < tasks.length; i++){
        let taskToRender = tasksToRender[i]
        
        let taskCardHTML = document.createElement("div")
        taskCardHTML.className = "task"

        let taskCardTitleHTML = document.createElement("p")
        taskCardTitleHTML.innerText = taskToRender.title

        let taskCardButtonHTML = document.createElement("button")
        taskCardButtonHTML.innerText = "Done✅"

        
        //PARTS 2 & 3
        



        taskCardHTML.appendChild(taskCardTitleHTML)
        taskCardHTML.appendChild(taskCardButtonHTML)
        
        taskListHTML.appendChild(taskCardHTML)

    }
}


let addTaskButtonHTML = document.getElementById("addTaskButton")
addTaskButtonHTML.addEventListener("click", function(){

    //PART 1a

    //Select the "taskTitleInput" element and save to variable called taskTitleInputHTML

    //access the value property on taskTitleInputHTML and save the result to a new a variable called newTaskTitle 


    //PART 1b

    //Select the "taskPriority" element and save to variable called taskPriorityHTML

    //access the value property on taskPriorityHTML and save the result to a new a variable called newTaskPriority



    
    
    // What happens if you uncomment these 3 lines👇

    // let newTask = {title: "Clean room", priority: "low" }
    // tasks.push(newTask)
    // renderTaskCards(tasks)
})





renderTaskCards(tasks)