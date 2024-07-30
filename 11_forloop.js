
// for loop

for(let i = 0; i<5; i++){
//                    ^ executed one time after each loop cycle             
//              ^ condition check before each loop cycle
//    ^ Runs one time before loop
    console.log(i)
}

// EXAMPLES

// 1

let n = 4
let sum = 0
for(let i=1; i<=n; i++){
    i!=n? console.log(i+"+") : console.log((i+"="))
    sum+= i
}
console.log(sum)


