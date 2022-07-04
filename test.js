let redBox = document.getElementById("red")
let greenBox = document.getElementById("green")
let blueBox = document.getElementById("blue")

const Buttons = document.querySelectorAll(".Clicky")
Buttons.forEach(clicker => {
  clicker.onclick = () => console.log(clicker.value)
})
