const clicker = document.getElementById("clicker")
const amount = document.getElementById("amount")
const upgrade = document.getElementById("upgrade")
const upgrade1 = document.getElementById("upgrade1")

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const game = {
  "clicks": 0,
  "perClick": 1,
  "perSecond": 0,
}

clicker.onclick = () => {
  game.clicks += game.perClick
  amount.innerText = `${game.clicks.toFixed(2)} Clicks`
}

upgradeCost = Number(upgrade.value).toFixed(2)
upgrade1Cost = Number(upgrade1.value).toFixed(2)

upgrade.onclick = () => {
  if (game.clicks >= upgradeCost) {
    game.clicks -= upgradeCost
    game.perClick += 1
    upgradeCost *= 1.25
    upgrade.innerText = `click +1 | ${upgradeCost.toFixed(2)}`
    amount.innerText = `${game.clicks.toFixed(2)} Clicks`
  }
}

upgrade1.onclick = () => {
  if (game.clicks >= upgrade1Cost) {
    game.clicks -= upgrade1Cost
    game.perSecond += 0.1
    upgrade1Cost *= 1.25
    upgrade1.innerText = `cps +0.1 | ${upgrade1Cost.toFixed(2)}`
    amount.innerText = `${game.clicks.toFixed(2)} Clicks`
  }
}

const givecps = () => {
  while (1<2) {
    sleep(1000)
    game.clicks += game.perSecond
  }
}

console.log("5:16:48")
