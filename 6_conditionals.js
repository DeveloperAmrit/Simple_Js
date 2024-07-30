// let a = prompt("Hey whats your age ?") -> prompt donot work in vs code

a = 1
a = parseInt(a)

// Only ONE of the following will be executed 

if(a<0){
    console.log("Invalid age")      // If enters here , line 8 then directly  line 19 and ahead will be executed
}
else if(a<9){
    console.log("You are a kid. Don't even think of driving")  //
}
else if(a<18 && a>=9){
    console.log("You can think of driving after some time")
}
else {
    console.log("You can drive")
}

