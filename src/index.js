document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
function deleteTask(taskList, task) {
  const index = taskList.indexOf(task);
  if (index > -1) {
    taskList.splice(index, 1);
  }
}
function sortTasks(taskList, order) {
  const priorityOrder = ['High', 'Medium', 'Low'];
  taskList.sort((a, b) => {
    const priorityA = priorityOrder.indexOf(a.priority);
    const priorityB = priorityOrder.indexOf(b.priority);
    if (order === 'ascending') {
      return priorityA - priorityB;
    } else {
      return priorityB - priorityA;
    }
  });
}