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

const format = (num) => {
    let suf = ""
    let newnum 
    if (num < 1000) {newnum = num, suf = ""}
    if (num >= 1e3) {newnum = num / 1e3, suf = "K"}
    if (num >= 1e6) {newnum = num / 1e6, suf = "M"}
    if (num >= 1e9) {newnum = num / 1e9, suf = "B"}
    if (num >= 1e12) {newnum = num / 1e12, suf = "T"}
    if (num >= 1e15) {newnum = num / 1e15, suf = "qa"}
    if (num >= 1e18) {newnum = num / 1e18, suf = "qi"}
    if (num >= 1e21) {newnum = num / 1e21, suf = "sx"}
    if (num >= 1e24) {newnum = num / 1e24, suf = "sp"}
    if (num >= 1e27) {newnum = num / 1e27, suf = "oc"}
    suf = newnum.toFixed(2) + suf
    return suf
}

const update = () => {
    clicks.innerText = `${format(game.clickAmount)} Clicks`
    cps.innerText = `${format(game.perSecond)} Cps`
    upgrade1.innerText = `+1 click | $${format(cost1)}`
    upgrade2.innerText = `+0.5 Cps | $${format(cost2)}`
    upgrade3.innerText = `+2.5 Cps | $${format(cost3)}`
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
