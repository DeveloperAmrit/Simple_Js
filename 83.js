let side_boxes = document.getElementsByClassName('side_box')
let buttons = document.getElementsByClassName('options')

const breakTextByWidth = (longText, container) => {
    const hiddenText = document.getElementById('hidden-text');
    const containerWidth = container.clientWidth;
    let currentLine = '';
    let resultText = '';

    for (let i = 0; i < longText.length; i++) {
        currentLine += longText[i];
        hiddenText.innerText = currentLine;

        if (hiddenText.clientWidth > containerWidth) {
            resultText += currentLine.slice(0, -1) + '\n';
            currentLine = longText[i];
        }
    }

    // Add the last part of the line to resultText
    resultText += currentLine;
    container.innerText = resultText;
};
const changeSideBox = (a) =>{
    for(let i=0;i<side_boxes.length;i++){
        let longtext = (a==1)? Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2)).join("") : '';
        breakTextByWidth(longtext,side_boxes[i])
    }
}

const toggleDisable = () => {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = !buttons[i].disabled;
    }
};

let options_selected = []
const toggleOption = (element)=>{
    if(element.classList.contains('selected')){
        element.classList.remove('selected')
        options_selected.pop(element.textContent.toLowerCase());
    }
    else{
        element.classList.add('selected')
        options_selected.push(element.textContent.toLowerCase());
    }
    console.log(options_selected)
}

let interval;
const handleHackClick = (element) =>{
    if(element.classList.contains('selected')){
        element.classList.remove('selected')
        toggleDisable();
        clearInterval(interval);
        changeSideBox(0);
    }
    else{
        element.classList.add('selected')
        toggleDisable();
        changeSideBox(1)
        interval = setInterval(changeSideBox,500,1)
    }
    // disabling buttons

}

