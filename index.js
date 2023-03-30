const form = document.getElementById("form")
const input = document.getElementById("input")
const tasks = document.querySelector(".tasks")
// const element = document.createElement("div")
// element.classList.add("delete")

form.addEventListener("submit", event => {
  event.preventDefault()

  let textInput = input.value

  const task = document.createElement("div")
  task.classList.add("task")

  const text = document.createElement("p")
  text.innerText = textInput

  task.appendChild(text)
  // task.appendChild(element)
  tasks.appendChild(task)
})

// task.addEventListener("mouseenter", event => {
//   element.style.transition = `all ${250}ms ease-out`
//   element.classList.remove("hide")
// })
// // console.log(elementTask)
// console.log(close)

// task.addEventListener("mouseleave", event => element.classList.add("hide"))
