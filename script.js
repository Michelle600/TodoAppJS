const tasks = [];

function addTask() {
  const task = prompt('Enter a new task');
  tasks.push(task);
  alert('Task added!');
}

function viewTasks() {
  let taskList = 'Tasks: \n';
  for (const task of tasks) {
    taskList += `-${task}\n`;
  }
  alert(taskList);
}
