var getTodoUl = document.getElementById("todo-ul")
var hideli = document.getElementById("hide-li")
var getInput = document.getElementById("todoInput");
var getError = document.getElementById("label-error");

function addTodo() {
  hideli = document.getElementById("hide-li")

  //  create li and add input text
  var getTodoLi = document.createElement("li");
  var getTodoText = document.createTextNode(getInput.value);
  getTodoLi.appendChild(getTodoText);

  //  create edit icon
  var iconPencil = document.createElement("i")
  iconPencil.className = "fa fa-pencil-alt"
  iconPencil.setAttribute("onclick", "editTodo(this)")
  iconPencil.setAttribute("id", "myBtn");

  //  create delete icon
  var iconTrash = document.createElement("i")
  iconTrash.className = "fa fa-trash-alt"
  iconTrash.setAttribute("onclick", "deleteTodo(this)")

  //  create div and add both icons
  var getTododiv = document.createElement("div");
  var addIconPencil = getTododiv.appendChild(iconPencil);
  var addIconTrash = getTododiv.appendChild(iconTrash);
  getTododiv.appendChild(addIconPencil)
  getTododiv.appendChild(addIconTrash)
  getTodoLi.appendChild(getTododiv)

  if (getInput.value != '') {
    hideli.style.display = "none";
    getError.style.display= 'none'
    getTodoUl.appendChild(getTodoLi)  
  }
  else{
    getError.style.display= 'block'
    getError.style.color= 'red'
  }

  var getLiLength = getTodoUl.getElementsByTagName('li');

  var todoObj = []
  for (let i = 0; i < getLiLength.length; i++) {
    const element = getLiLength[i].textContent;
    todoObj.push({todoName : element})
  }
   getInput.value = '';
  console.log(todoObj)
}

var x;

function editTodo(x) {
var val = prompt("Enter Updated Value", x.parentNode.parentNode.firstChild.textContent)
  x.parentNode.parentNode.firstChild.textContent = val
}

function deleteTodo(x) {
  x.parentElement.parentElement.remove()
}

function clearAll() {
  getTodoUl.innerHTML = '';
  hideli.style.display = "block";
  var createLabel = document.createElement("label");
  var addLabel = getTodoUl.appendChild(createLabel)

  var createText = document.createTextNode("Don't Have any Task yet..");
  addLabel.appendChild(createText)
  addLabel.setAttribute("id", "hide-li");
  getTodoUl.appendChild(addLabel)
}
