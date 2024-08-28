let container = document.getElementById('container')
let notes = []
let input ;

while(true){
    input = prompt('Enter note')
    if(input=='STOP'){
        break
    }
    else{
        let d = new Date()
        localStorage.setItem(`${d.toISOString()}`,input)
    }
}

for(let i=0;i<localStorage.length;i++){
    container.innerHTML += `<br> Date : ${localStorage.key(i)} NOTE : ${localStorage.getItem(localStorage.key(i))}`
}

