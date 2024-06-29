// 1

setTimeout(() => {
    console.log('1','Hello')
}, 1000);

// 2

let a = setTimeout(() => {                   // returns a timer id (a=2)
    alert('This has been removed')
}, 1500);

console.log('2',a)
clearTimeout(a)

// 3 Nests well

setTimeout(() => {
    console.log('Printed at time = 2s')
    setTimeout(() => {
        console.log('Printed at time = 4s')
    }, 2000);
}, 2000);

// 4 external function supply

function sum(a,b){
    console.log(a+b)
    return a+b 
}

setTimeout(sum,3000,3,2)         // format setTimeout(function name without(), time, parameters of function )
setTimeout(sum(3,2),3000)        // ERROR! WRONG SYNTAX, prints sum(3,2) at t=0s








