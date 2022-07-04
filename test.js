let redBox = document.getElementById("red")
let greenBox = document.getElementById("green")
let blueBox = document.getElementById("blue")

const clickAmount = {
  "red": 0,
  "green": 0,
  "blue": 0,
}
const Buttons = document.querySelectorAll(".Clicky")
Buttons.forEach(clicker => {
  clicker.onclick = () => console.log(clicker.value)
})
