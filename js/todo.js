// Hämtar tasks
function getTasks(){
  
  var tasks = new Array;
  var taskItems = localStorage.getItem("theTask");
  
  if (taskItems != null) {
      tasks = JSON.parse(taskItems);
  }
    return tasks;
}

// Hämtar Done tasks
function getDoneTasks(){

  var doneTasks = new Array;
  var doneTaskItems = localStorage.getItem("theDoneTask");
  
  if (doneTaskItems != null) {
      doneTasks = JSON.parse(doneTaskItems);
  }
    return doneTasks;
}


function show(){
  
  var tasks = getTasks();

  for(i=0; i < tasks.length; i++){
    
  var getWrapper = document.getElementById("wrapper");
  var newContainer = document.createElement("div");
  newContainer.setAttribute("id", "taskContainer" +i);
  getWrapper.appendChild(newContainer);
  
  var newParagraph = document.createElement("p");
  newParagraph.setAttribute("id", "paragraph");
  newContainer.appendChild(newParagraph);
  
  // Skapar den gömda edit diven
  var newEditContainer = document.createElement("div");
  newEditContainer.setAttribute("id", "editContainer" +i);
  newEditContainer.setAttribute("class", "hidden");
  
  // Skapar edit "stylen"
  var newTextarea = document.createElement("textarea");
  newTextarea.setAttribute("id", "editTask" +i);
  newTextarea.setAttribute("placeholder", tasks[i]);
  
  // Skapar spara knappen
  var saveTask = document.createElement("a");
  saveTask.setAttribute("id", i);
  saveTask.setAttribute("class", "save");
  saveTask.addEventListener("click", save);
  saveTask.innerHTML = "Save";
    
    
  newEditContainer.appendChild(newTextarea);
  newEditContainer.appendChild(saveTask);
  getWrapper.appendChild(newEditContainer);
    
  
  
  
  
  // Done Button
  var doneItem = document.createElement("a");
  doneItem.setAttribute("id", + i);
  doneItem.setAttribute("class", "done");
  doneItem.addEventListener("click", done);
  doneItem.innerHTML = "Done";
  newContainer.appendChild(doneItem);
    
  // Edit Button
  var editItem = document.createElement("a");
  editItem.setAttribute("id", + i);
  editItem.setAttribute("class", "edit");
  
  editItem.addEventListener("click", edit);
    
  editItem.innerHTML = "Edit";
  newContainer.appendChild(editItem);

    
  // Delete Button
  var delTask = document.createElement("a");
  delTask.setAttribute("id", + i);
  delTask.setAttribute("class", "del");
  delTask.addEventListener("click", del);
  delTask.innerHTML = "Delete";
  newContainer.appendChild(delTask);
    
  // Visar Tasks
  newParagraph.innerHTML = tasks[i];
    
  }

  var doneTasks = getDoneTasks();
    
  for(i=0; i < doneTasks.length; i++){

  var getDoneWrapper = document.getElementById("doneWrapper");
  var newDoneContainer = document.createElement("div");
  newDoneContainer.setAttribute("id", "doneTaskContainer" +i)
  getDoneWrapper.appendChild(newDoneContainer);
    
  var newDoneParagraph = document.createElement("p");
  newDoneParagraph.setAttribute("id", "doneParagraph");
  newDoneParagraph.setAttribute("class", "doneStriked");
  newDoneContainer.appendChild(newDoneParagraph);
  
  // Delete Button Done
  var delDone = document.createElement("a");
  delDone.setAttribute("id", + i);
  delDone.setAttribute("class", "del");
  delDone.addEventListener("click", delDoneFunc);
  delDone.innerHTML = "Delete";
  newDoneContainer.appendChild(delDone);
  
  if(doneTasks.length != null){
     var doneHead = document.getElementById("doneHeader");
      
    doneHead.setAttribute("class", "visible")
      
     }
  
  // Visar Done Tasks  
  newDoneParagraph.innerHTML = doneTasks[i];
   
  }
  
}


function add(){
  
  var tasks = getTasks();
  
  if (!addTask.value){
    document.getElementById("addTask").placeholder = "Type in something to do...";
  }
  
  else {
  
  var pushTask = addTask.value;
  tasks.push(pushTask);
  localStorage.setItem("theTask", JSON.stringify(tasks));
  
  
  location.reload();
    
  }

}


function done() {

  var tasks = getTasks();
  var doneTasks = getDoneTasks();
  
  var doneTask = tasks.splice(this.id, 1);

  doneTasks.push(doneTask);
  localStorage.setItem("theTask", JSON.stringify(tasks));
  localStorage.setItem("theDoneTask", JSON.stringify(doneTasks));

  location.reload();
  
}

// ------------------------------------------------------------------------------------------ 

function edit(){
  
  var hideTaskContainer = document.getElementById("taskContainer" + this.id);
  
  // Göm taskContainer
  hideTaskContainer.classList.toggle("hidden");
  
  var showEditContainer = document.getElementById("editContainer" + this.id);
  
  // Visa editContainer
  showEditContainer.classList.toggle("visible");
  
  
}

// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------

function save(){
  var tasks = getTasks();
  

  
  
  var getSave = document.getElementById("editTask" + this.id);
    
  if (!getSave.value){
    document.getElementById("editTask" + this.id).placeholder = "Edit the task before saving...";
  }
    
  else {
    
  var taskValue = getSave.value;

  tasks.splice(this.id, 1, taskValue);
  
  localStorage.setItem("theTask", JSON.stringify(tasks));
    

   location.reload();
    }
  
}

// ------------------------------------------------------------------------------------------

function del(){
  var tasks = getTasks();
  tasks.splice(this.id, 1);
  localStorage.setItem("theTask", JSON.stringify(tasks));

  location.reload();
}

function delDoneFunc(){
  var doneTasks = getDoneTasks();
  doneTasks.splice(this.id, 1);
  localStorage.setItem("theDoneTask", JSON.stringify(doneTasks));
  
  location.reload();
}
