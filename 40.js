let card_title_1 = document.getElementById('card-title-1')

card_title_1.style.color = 'red'

let a = document.getElementById('card-title-1')
let b = document.getElementsByClassName('card')
let c = document.getElementsByName('form-input-name')            // for input tags
let d = document.getElementsByTagName('div')
let e = document.getElementsByTagNameNS('http://www.w3.org/1998/Math/MathML','div')
let f = document.querySelector('.card')     // css query selectors , returns first element
let g = document.querySelectorAll('.card')          // . for class # for id

console.log('1',a)
console.log('2',b)
console.log('3',c)
console.log('4',d)
console.log('5',e)
console.log('6',f)
console.log('7',g)

// It is not necessary that we use this on document, we can also use them on any element to search inside it