const clicker = document.getElementById("clicker")
const amount = document.getElementById("amount")

const game = {
  "clicks": 0,
  "perClick": 0,
}

clicker.onclick = () => {
  game.clicks += game.perClick
  amount.innerText(game.clicks)
}

console.log("5:16:48")
