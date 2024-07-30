// 1 onclick, onchange, etc. by HTML

const eventHandlerBtn1 = ()=>{
    console.log('You clicked button 1')
}

// 2 onclick by js

let a = document.getElementById('btn1')

a.onclick = ()=>{
    console.log('See this overrided html event onclick.-- You clicked button 1 --')
}
