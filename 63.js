// SHOULD HAVE UNDERSTOOD 62.js WELL 

// .then() for resolve()
let p1 = new Promise((resolve,reject)=>{
    console.log('Hello')
    setTimeout(() => {
        resolve('Has been resooooollllvved')
    }, 2000);
})

p1.then((value)=>{              // .then(function for fulfilled, --(arg2)--function for rejected--(not written here)---) either use arg2 or use .catch() for handling error
    console.log(value)         // this is the same value as passed in resolve()
})

// .catch() for reject()

let p2 = new Promise((resolve,reject)=>{
    console.log('Hello2')
    setTimeout(()=>{
        reject(new Error('Aisse hi reject ho liya re baba'))
    },4000)
})

p2.catch((error)=>{
    console.log(error)
})

// .catch() for error