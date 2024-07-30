// (1) No need to call promise

let p1 = new Promise((resolve,reject)=>{
    console.log('1','I am a promise')                 
})

// if did console.log(p1) shows state pending as no resolve, no error, no reject()


/* WHEN 'fulfilled' AND WHEN 'rejected' state

i)  resolve() 
    error occcured

  => fulfilled

2) reject()
   resolve()

   => rejected

3) error occured
   resolve()

   => rejected

4) resolve()
   reject()

   => fulfilled

5) no resolve(), no error, no reject()

  =>pending

OVERALL : CONSIDER error occured = reject() , 
          JO PAHLE LIKHA HAI VHI STATE JO JAYEGA ,
          AGAR KUCHH NHI LIKHA TOH state pending hi rah jayega execution ke baad bhi
*/

/*
if fulfilled => result is value passed into resolve()
if rejected  => result is error object
*/

/*
DON'T CONFUSE

'fulfilled' instead of 'resolved' for resolve()
'rejected' for reject() or error
*/