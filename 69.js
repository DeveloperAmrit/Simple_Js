try{
    console.log(amrit)                        // jab error tabhi catch me kud jayega, niche nhi jaygea try me
    console.log("Hello")
}
catch(error){
    console.log(error)                // Don't throw error , instead console.log it
}


// if not used try catch, code execution will stop

/* (1) try ke aandar asynchorus wale block ke error handle nhi hote
   RESON : vo schedule to ho gya hai n
*/

// try{
//     setTimeout(() => {
//         console.log(amrit)            // will cause ERROR
//     }, 1000);
// }
// catch(error){
//     console.log(error)
// }

// DO THIS


setTimeout(() => {
    try{
        console.log(amrit)
    }
    catch(error){
        console.log('1',error)
    }
}, 100);
