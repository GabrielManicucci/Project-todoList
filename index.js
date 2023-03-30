const form = document.getElementById("form")
const input = document.getElementById("input")
const tasks = document.querySelector(".tasks")

form.addEventListener("submit", event => {
  event.preventDefault()
  addTodo()
})

function addTodo() {
  let textInput = input.value

  if (textInput) {
    const task = document.createElement("div")
    task.classList.add("task")

    const text = document.createElement("p")
    text.innerText = textInput

    task.appendChild(text)
    tasks.appendChild(task)

    task.addEventListener('click', () => {
      text.classList.toggle('completed')
    })

    task.addEventListener('contextmenu', event => {
      event.preventDefault()
      task.remove()
    })

    input.value = ''
  }

  console.log(textInput)
}
