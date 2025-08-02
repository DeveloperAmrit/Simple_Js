const avg1 = (x,y)=>{
    let a = (x+y)/2
    return a
}

// is same as

function avg2(x,y){
    let a = (x+y)/2
    return a
}

// see

console.log(avg1(7,8))
console.log(avg2(7,8))

// The four combinations  https://chatgpt.com/share/688dd6fc-e7ac-8006-8852-7de9258df4d6

    // pre-requisites
        // window is caller for function passed to setTimeOut
        // regular function's this refers to caller object
        // arrow functions's this is lexical, refers to enclosing scope 

// 1 | regular then regular

const obj1 = {
  name: "Raj",
  greet: function () {         
    console.log("greet regular function 1 - ",this.name); // this refers to obj1 (obj1 is caller)
    setTimeout(function () {
      console.log("greet timeout function 1 - ",this.name); // this refers to global object (window is caller), not obj1
    }, 1000);
  },
};
obj1.greet(); // raj , undefined

// 2 | regular then arrow

const obj2 = {
  name: "Raj",
  greet: function () {         
    console.log("greet regular function 2 - ",this.name); // this refers to obj1 (this1)
    setTimeout(() => {
      console.log("greet timeout function 2 - ",this.name); // this refers to obj1 (this2) (as this2 uses this1 and this1 refers to obj1)
    }, 1000);
  },
};
obj2.greet(); // raj , raj

// 3 | arrow then arrow

const obj3 = {
  name: "Raj",
  greet: () => {         
    console.log("greet regular function 3 - ",this.name); // this refers to window (this1) (lexical )
    setTimeout(() => {
      console.log("greet timeout function 3 - ",this.name); // this refers to window (this 2) (this 2 uses this1 and this1 refers to window)
    }, 1000);
  },
};
obj3.greet(); // undefined , undefined

// 4 | arrow then regular

const obj4 = {
  name: "Raj",
  greet: () => {         
    console.log("greet regular function 4 - ",this.name); // this refers to window (this1) (lexical )
    setTimeout(function () {
      console.log("greet timeout function 4 - ",this.name); // this refers to window (as window is caller)
    }, 1000);
  },
};
obj4.greet(); // undefined , undefined




