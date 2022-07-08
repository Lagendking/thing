const mainButton = document.getElementById("main")
const upgrade1 = document.getElementById("upgrade1")
const upgrade2 = document.getElementById("upgrade2")
const upgrade3 = document.getElementById("upgrade3")
const clicks = document.getElementById("clicks")
const cps = document.getElementById("cps")
const pupgrade1 = document.getElementById("pupg1")
const info = document.getElementById("inf1")

pupgrade1.addEventListener('mouseover', () => info.style.display = "initial")
pupgrade1.addEventListener('mouseleave', () => info.style.display = "none")

const game = {
    perClick: 1,
    perSecond: 0,
    clickAmount: 0,
    cmulti: 1,
}
const bought = {
    up1: 0,
    up2: 0,
    up3: 0,
}

let cost1 = Number(upgrade1.value)
let cost2 = Number(upgrade2.value)
let cost3 = Number(upgrade3.value)
let pcost1 = Number(pupgrade1.value)

const format = (num, nums) => {
    let suf = ""
    let newnum 
    if (num < 1000 && nums == 0) {newnum = num.toFixed(0), suf = ""; return newnum + suf}
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
    if (bought.up2 >= 5) {
        upgrade3.style.display = "initial"
    }
    if (bought.up1 >= 10) {
        pupgrade1.style.display = "initial"
    }
    clicks.innerText = `${format(game.clickAmount, 0)} Clicks`
    cps.innerText = `${format(game.perSecond, 1)} Cps`
    upgrade1.innerText = `+1 click | $${format(cost1, 0)} | ${format(bought.up1, 0)}`
    upgrade2.innerText = `+0.5 Cps | $${format(cost2, 0)} | ${format(bought.up2, 0)}`
    upgrade3.innerText = `+2.5 Cps | $${format(cost3, 0)} | ${format(bought.up3, 0)}`
}

mainButton.onclick = () => {
    game.clickAmount += game.perClick * game.cmulti
    update()
}

upgrade1.onclick = () => {
    if (game.clickAmount >= cost1) {
        game.clickAmount -= cost1
        cost1 *= 1.25
        game.perClick += 1
        bought.up1 += 1
        update()
    }
}

upgrade2.onclick = () => {
    if (game.clickAmount >= cost2) {
        game.clickAmount -= cost2
        cost2 *= 1.25
        game.perSecond += 0.5
        bought.up2 += 1
        update()
    }
}

upgrade3.onclick = () => {
    if (game.clickAmount >= cost3) {
        game.clickAmount -= cost3
        cost3 *= 1.25
        game.perSecond += 2.5
        bought.up3 += 1
        update()
    }
}

const del = (obj) => {
    obj.style.display="hidden"
}

pupgrade1.onclick = () => {
    if (game.clickAmount >= pcost1) {
        game.cmulti += 0.25
        game.clickAmount -= pcost1
        del(pupgrade1)
        update()
    }
}

const givecps = setInterval(function(){
    game.clickAmount += game.perSecond / 10
    pupgrade1.style.display = "none"
    update()
}, 100)
