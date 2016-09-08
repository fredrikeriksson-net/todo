function getTasks(){
  
  var tasks = new Array;
  
  var taskItems = localStorage.getItem("theTask");
  
  if (taskItems != null) {
      tasks = JSON.parse(taskItems);
  }
  
    return tasks;
}


function show(){
  
  var tasks = getTasks();
  
  // Här ska en for loop loopa igenom hur många tasks det finns //
    
  var getWrapper = document.getElementById("wrapper");
  var newContainer = document.createElement("div");
  newContainer.setAttribute("id", "taskContainer");
  getWrapper.appendChild(newContainer);
  
  var newParagraph = document.createElement("p");
  newParagraph.setAttribute("id", "paragraph");
  newContainer.appendChild(newParagraph);
  
  newParagraph.innerHTML = tasks[0];

}

function add(){
  
  var tasks = getTasks();
  
  var pushTask = "addTask.value";
  
  tasks.push(pushTask);
  
  localStorage.setItem("theTask", JSON.stringify(pushTask));
  
  show()
  
}

function edit(){
  
}

function del(){
  
}
