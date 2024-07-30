let btn1 = document.getElementById('btn1')


const x = (e)=>{                  // e = event object
    console.log(e)
    console.log(e.target)
    console.log(e.target)
}

btn1.addEventListener('click',x)


// event objct is very huge and is very useful

/*
e = event object
e.type = event type 
e.currentTarget = element that handled event
e.clientX / e.clientY = coordinates of mouse click

*/