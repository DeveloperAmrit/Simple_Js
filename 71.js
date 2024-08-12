try{
    console.log(program)
    console.log('Program ran successfully')
}
catch(error){
    console.log(error)
    // console.log(program)                               // did error in catch yet finally runs
}
finally{
    console.log('I am a good boy')                  // it run wheter error occurs or not
}

// --> finally wala chalega aur niche ka code nhi chalega agar catch me error aaya toh.

/* 
Why finally ? we could simply write it outside

=> Whenever there  is an error out of try, code execution stops but code written in finally always runs no matter what happens.
=> always used with try
=> genrally used to do clean ups
=> agar try ya catch me se koi bhi chala toh finally chalega hi chalega always, chahe duniya kahtam ho jae

REMEBER : try catch finally
*/

// amazing example

const fun = ()=>{
    try{
    console.log('Code ran successfully')
    return 1
    }
    catch(error){
        console.log(tullu)
    }
    finally{
        console.log('Even there is return in try. finally runs')
    }
}
fun()
