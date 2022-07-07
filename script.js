const mainButton = document.getElementById("main")
const upgrade1 = document.getElementById("upgrade1")
const upgrade2 = document.getElementById("upgrade2")
const upgrade3 = document.getElementById("upgrade3")
const clicks = document.getElementById("clicks")
const cps = document.getElementById("cps")

const game = {
    perClick: 1,
    perSecond: 0,
    clickAmount: 0,
}

let cost1 = Number(upgrade1.value)
let cost2 = Number(upgrade2.value)
let cost3 = Number(upgrade3.value)

const update = () => {
    clicks.innerText = `${game.clickAmount.toFixed(2)} Clicks`
    cps.innerText = `${game.perSecond.toFixed(2)} Cps`
    upgrade1.innerText = `+1 click | $${cost1.toFixed(2)}`
    upgrade2.innerText = `+0.5 Cps | $${cost2.toFixed(2)}`
    upgrade3.innerText = `+2.5 Cps | $${cost3.toFixed(2)}`
}

mainButton.onclick = () => {
    game.clickAmount += game.perClick
    update()
}

upgrade1.onclick = () => {
    if (game.clickAmount >= cost1) {
        game.clickAmount -= cost1
        cost1 *= 1.25
        game.perClick += 1
        update()
    }
}

upgrade2.onclick = () => {
    if (game.clickAmount >= cost2) {
        game.clickAmount -= cost2
        cost2 *= 1.25
        game.perSecond += 0.5
        update()
    }
}

upgrade3.onclick = () => {
    if (game.clickAmount >= cost3) {
        game.clickAmount -= cost3
        cost3 *= 1.25
        game.perSecond += 2.5
        update()
    }
}

const givecps = setInterval(function(){
    game.clickAmount += game.perSecond
    update()
}, 1000)
