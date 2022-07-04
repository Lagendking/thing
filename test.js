const clicker = document.getElementById("clicker")
const amount = document.getElementById("amount")
const upgrade = document.getElementById("upgrade")

const game = {
  "clicks": 0,
  "perClick": 1,
}

clicker.onclick = () => {
  game.clicks += game.perClick
  amount.innerText = game.clicks
}

upgradeCost = Number(upgrade.value)
upgrade.onclick = () => {
  if (game.clicks >= upgradeCost) {
    game.clicks -= upgradeCost
    game.perClick += 1
    upgradeCost *= 1.25
    upgrade.innerText = `Upgrade $${upgradeCost.toFixed(2)}`
    amount.innerText = `${game.clicks} Clicks`
  }
}

console.log("5:16:48")
