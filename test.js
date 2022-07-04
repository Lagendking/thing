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

clicktext = Number(amount.value)
amount.onclick = () => {
  if (game.clicks >= clicktext) {
    game.clicks -= clicktext
    clicktext *= 1.25
    game.perClick += 1
  }
}

console.log("5:16:48")
