let score = document.getElementById('score')
let chances = document.getElementById('chances')
let btns_js_g1 = document.getElementsByClassName('btns_js_g1')
let btns_js_g2 = document.getElementsByClassName('btns_js_g2')
let message = document.getElementById('message')
let list = document.getElementById('list')

let num_chances = 0

function gameResult(u) {

    btns_js_g1.item(u).style.background = 'cyan'
    let c = Math.floor(Math.random() * 3)


    btns_js_g2.item(c).style.background = 'cyan'

    if ((u == 0 && c == 2) || (u == 1 && c == 0) || (u == 2 && c == 1)) {
        score.innerText = parseInt(score.innerText) + 4
        message.innerText = 'WON +4'
    }
    else if (u == c) {
        score.innerText = parseInt(score.innerText) + 1
        message.innerText = 'DRAW +1'
    }
    else {
        message.innerText = 'LOST +0'
    }
    list.innerText = list.innerText + '[ ' + message.innerText + ' ] '
    num_chances += 1
    chances.innerText = num_chances
}

function cleaner() {
    for (let i = 0; i <= 2; i++) {
        btns_js_g1[i].style.background = 'white'
        btns_js_g2[i].style.background = 'white'
    }
}

function game() {
    let arr1 = Array.from(btns_js_g1)
    arr1[0].addEventListener('click', () => {
        cleaner()
        gameResult(0)
    })
    arr1[1].addEventListener('click', () => {
        cleaner()
        gameResult(1)
    })
    arr1[2].addEventListener('click', () => {
        cleaner()
        gameResult(2)
    })

}
game()


/*
0 = stone
1 = paper
2 = scissor
 */