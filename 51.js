// 1

let a = setInterval(() => {
    console.log('1','Tullullu')
}, 1000);

clearInterval(a)

// 2

let i = 0

setInterval(() => {
    console.log(i++)
}, 1000);

// 3

const colors = ['red','gray','green','blue']
let j = 0
setInterval(() => {
    document.body.style.background = colors[j%4]
    j++
}, 2000);

// 4     setInterval(function, interval, parameters)
