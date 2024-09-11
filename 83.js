let side_boxes = document.getElementsByClassName('side_box')
let buttons = document.getElementsByTagName('button')

const changeSideBox = () =>{
    side_boxes[0].innerText = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2));
    side_boxes[1].innerText = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2));
}

const disableButtons = ()=>{
    for(let i=0;i<buttons.length;i++){
        buttons[i]
    }
}
const handleHackClick = () =>{

    // 01 effect
    changeSideBox()
    setInterval(changeSideBox,500)

    // disabling buttons
}

