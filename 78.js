// local storage stores data in browser can survive refresh and broweser restart

// 1 setItem()

localStorage.setItem('key1','value1')

// 2 removeItem()

localStorage.setItem('key2','value2')
setTimeout((()=>{
    localStorage.removeItem('key2')
}),4000)

// 3 getItem()

console.log(localStorage.getItem('key1'))

// 4 key()

localStorage.key(0)        // takes index

// 5 clear()

setTimeout(()=>{
    localStorage.clear()
},8000)

// 6 .length

console.log(localStorage.length)

// every thing is stored as string in local storgae even null is 'null'
// out of length indexes will return actual null

// 7 storing object in local storage 
  
  // use JSON.stringify(object) to store
  // use JSON.parse(json_string) to access