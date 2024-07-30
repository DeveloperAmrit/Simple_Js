
// 1
let navbar = document.getElementsByClassName('navbar')[0]

navbar.firstElementChild.style.color = 'red'
// 2

// BROWSER auto corrects the code and inserts a <tbody> </tbody> tag 
/*
inspect shows tbody
BUT view page source shows RAW code and donot shows auto corrections
*/

// 3



navbar.firstElementChild.style.color = 'red'
navbar.lastElementChild.style.color = 'red'

// 4

let li = document.getElementsByTagName('li')
let arr1 = Array.from(li)
for(i of arr1){
    i.style.background = 'cyan'
}

// 5 (d)

// .closest(css query selector) is used to see closet ansector and not farthest