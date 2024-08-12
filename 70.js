// (1) properties of error object

try {
    console.log(harry)
} catch (error) {
    console.log("Error name : ",error.name)
    console.log("Error message : ",error.message)
    console.log("Error stack : ",error.stack)                  // all info about error
}

// (2) custom errors

try{
    // throw new Error('Amrit is not tired')
    throw new ReferenceError('Amrit has not limits')
}
catch(error){
    console.log("2 Error name : ",error.name)
    console.log("2 Error message : ",error.message)
}


// example 

let a =0;
// do{
//     try{
//         let age = parseInt(prompt('Enter your age'))
//         if(age>150){
//             throw new Error('This is probably not true')
//         }
//         else{
//             a++
//         }
//     }
//     catch(error){
//         console.log('Please enter a valid age')
//         console.log(error.name,error.message)
//     }

// }while(a===0)

while(true){
    try{
        let age = parseInt(prompt('Enter your age'))
        if(age > 150){
            throw new Error('This may probably not true')
        }
        else{
            break
        }
    }
    catch(error){
        console.log('Please enter a valid age')
        console.log(error.name,error.message)
    }

}