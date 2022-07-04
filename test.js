const clicker = document.getElementById("clicker")

const game = {
  "clicks": 0,
  "perClick": 0,
}

clicker.onclick = () => {
  game.clicks += game.perClick
}

console.log("5:16:48")
