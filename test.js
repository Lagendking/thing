const clickAmount = {
  "red": 0,
  "green": 0,
  "blue": 0,
}

const Buttons = document.querySelectorAll(".Clicky")
Buttons.forEach(clicker => {
  clicker.onclick = () => {
    console.log(clicker.value)
    clickAmount[clicker.value] += 1
    clicker.innerText = clickAmount[clicker.value]
  }
})

const clearScore = () => {
  Buttons.forEach(clicker => clickAmount[clicker.value] = 0
}

const clrbutton = document.getElementById("clear")
clrbutton.onclick = () => clearScore()
