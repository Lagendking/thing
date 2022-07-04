const clicker = document.getElementById("clicker")
const amount = document.getElementById("amount")

const game = {
  "clicks": 0,
  "perClick": 1,
}

clicker.onclick = () => {
  game.clicks += game.perClick
  amount.innerText = game.clicks
}

amount.onclick = () => {
  if (game.clicks >= amount.value) {
    game.clicks -= amount.value
    amount.value *= 1.25
    game.perClick += 1
  }
}

console.log("5:16:48")
