var todos = ['item1','item2','item3'];
//Function to display todos.
function displayTodos(){
  console.log('Mytodos:', todos);  
}
//Function to add todos.
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

//Function to change todos.
function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}
  
//Function to delete todos.
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

addTodo('item4')