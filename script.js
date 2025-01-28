
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function createTaskElement(taskContent) {
  const taskItem = document.createElement('li');

  const taskText = document.createElement('span');
  taskText.textContent = taskContent;
  taskItem.appendChild(taskText);


  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  taskItem.appendChild(editBtn);


  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  taskItem.appendChild(deleteBtn);


  editBtn.addEventListener('click', () => editTask(taskItem, taskText));
  deleteBtn.addEventListener('click', () => deleteTask(taskItem));

  return taskItem;
}


function addTask() {
  const taskContent = taskInput.value.trim();
  if (taskContent === '') {
    alert('Please enter a task');
    return;
  }

  const taskElement = createTaskElement(taskContent);
  taskList.appendChild(taskElement);
  taskInput.value = '';
}


function editTask(taskItem, taskText) {
  const newTaskContent = prompt('Edit your task:', taskText.textContent);
  if (newTaskContent === null || newTaskContent.trim() === '') return;

  taskText.textContent = newTaskContent.trim();
}


function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
