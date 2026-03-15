document.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro")
const logo = document.getElementById("introLogo")
const container = document.querySelector(".container")

logo.addEventListener("click", () => {

intro.classList.add("move")

setTimeout(() => {
container.classList.add("show")
}, 500)

})

})