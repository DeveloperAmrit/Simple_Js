// make function async and we can make any promise in it await

// Which is better  call backs < promises < async await

// Usually API, Servers return promises so we need not to write them

// (1) async returns a promise

async function amrit() {
    return 5
}

amrit().then((value)=>{
    console.log(value)
})

// (2) .then inside async function

async function weather(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Delhi is 27 degree')
        }, 2000);
    })
    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Bangalore is 21 degree')
        }, 3000);
    })

    delhiWeather.then(console.log)                  // NEW SYNTAX alerts the value passed in resolve()
    bangaloreWeather.then(console.log)
}

console.log('Welcome to weather department')
// weather()

// (3) await 

async function wether2() {
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Delhi is 27 degree')
        }, 2000);
    })
    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Bangalore is 21 degree')
        }, 100);
    })
    console.log('Fetching delhi weather')
    let dw = await delhiWeather                 // the function is actually stopping here
    console.log('Fetched for delhi',dw)
    console.log('Fetching for Bangalore')
    let bw = await bangaloreWeather             // the function is actually stopping here
    console.log('Fetched for Banglore',bw)

    return [dw,bw]
}

console.log(wether2())

// (4) await is very powerful works only for promises
