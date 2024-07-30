const btn1 = document.getElementById('btn1')

const x =()=>{
    console.log('Hello world1')
}
const y =()=>{
    console.log('Hello world2')
}

// addEventListener()

btn1.addEventListener('click',x)
btn1.addEventListener('click',y)

// removeEventListener()

const a = prompt('Enter 1 or 2')
a=='2'? btn1.removeEventListener('click',x) : btn1.removeEventListener('click',y)