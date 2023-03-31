const form = document.getElementById("form")
const input = document.getElementById("input")
const tasks = document.querySelector(".tasks")

const todos = JSON.parse(localStorage.getItem("list"))

if (todos) {
  todos.forEach(todo => addTodo(todo))
  console.log(todos)
}

form.addEventListener("submit", event => {
  event.preventDefault()
  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const task = document.createElement("div")
    task.classList.add("task")

    const text = document.createElement("p")
    text.classList.add("text")

    if (todo && todo.completed) {
      text.classList.toggle("completed")
    }

    text.innerText = todoText

    task.addEventListener("click", () => {
      text.classList.toggle("completed")
      updateStorage()
    })

    task.addEventListener("contextmenu", event => {
      event.preventDefault()
      task.remove()
      updateStorage()
    })

    task.appendChild(text)
    tasks.appendChild(task)

    input.value = ""

    updateStorage()
  }
}

function updateStorage() {
  const taskList = document.querySelectorAll(".text")

  const list = []

  taskList.forEach(task => {
    list.push({
      text: task.innerText,
      completed: task.classList.contains("completed")
    })
  })

  localStorage.setItem("list", JSON.stringify(list))
}
