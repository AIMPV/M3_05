const tasks = [
  { id: 1, nombre: "Sacar la basura", completed: false },
  { id: 2, nombre: "Lavar la loza", completed: false },
  { id: 3, nombre: "Barrer el patio", completed: false }
];

const taskList = document.getElementById("taskList");
const btnAgregar = document.getElementById("addTaskBtn");


const viewList = () => {
  let html = "";
  tasks.forEach(tasks => {
    html += `
    <li>
      <div class="task-id">${tasks.id}</div>
      <div class="d-flex flex-column ${tasks.completed ? 'opacity-50 text-decoration-line-through': 'opacity-100'}">
        ${tasks.nombre}
        <div>
          ${tasks.completed ? '<span class="w-auto badge text-bg-success">Finalizada</span>' : '<span class="badge text-bg-warning">Pendiente</span>'}
        </div>
      </div>
      <div class="d-flex justify-content-end align-items-baseline">
        <button class="btn btn-success mx-2" onclick="completedTask(${tasks.id})" ${tasks.completed ? 'disabled': ''}">
          <i class="fas fa-check me-2"></i>
          Finalizar tarea
        </button>
        <button class="btn btn-danger mx-2" onclick="deleteTask(${tasks.id})">
          <i class="fas fa-times me-1"></i>
          Eliminar tarea
        </button>
      </div>
    </li>`
    ;
  })
  taskList.innerHTML = html;
  document.getElementById("total").innerHTML = tasks.length;
  document.getElementById("done").innerHTML = tasks.filter(tasks => tasks.completed).length;
}

btnAgregar.addEventListener("click",() => {
  if (document.getElementById("newTask").value.length < 3) {
    alert('No se puede ingresar una tarea sin nombre');
} else {
  const task_name = document.getElementById("newTask").value;
  const task_id = tasks.length > 0 ? tasks[tasks.length -1].id +1 : 1;
  const new_task = {id: task_id, nombre: task_name, completed: false};
  tasks.push(new_task);
  document.getElementById("newTask").value = "";
}
  viewList()
})

const deleteTask = (id) => {
  const index = tasks.findIndex(tasks => tasks.id == id);
  tasks.splice(index,1);
  viewList();
}

const completedTask = (id) => {
  const indexCompleted = tasks.findIndex(tasks => tasks.id == id);
  tasks[indexCompleted].completed = !tasks[indexCompleted.completed];
  console.log(tasks);
  viewList();
}

viewList();
