const boxd1 = document.getElementsByClassName('boxd1')[0]

for(let i=1;i<=12;i++){

    let boxe = document.createElement('div')
    boxe.className = 'boxe'
    
    let boxf1 = document.createElement('div')
    boxf1.className = 'boxf1 num'
    boxf1.innerHTML = `<div class="boxg1">${i}</div>`

    let boxf2 = document.createElement('div')
    boxf2.className = 'boxf2 space'
    boxf2.innerHTML = ''

    boxe.append(boxf1)
    boxe.append(boxf2)
    boxd1.append(boxe)

    boxe.style.transform = `rotate(${30*i}deg)`
    let boxg1 = document.getElementsByClassName('boxg1')[i-1]
    boxg1.style.transform = `rotate(-${30*i}deg)`
}

const hourhand = document.getElementsByClassName('boxe2')[0]
const minutehand = document.getElementsByClassName('boxe2')[1]
const secondhand = document.getElementsByClassName('boxe2')[2]
const center_dot = document.getElementsByClassName('center_dot')[0]
const boxb2 = document.getElementsByClassName('boxb2')[0]

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let date_ = date.toDateString();

    if((hours>=4)&&(hours<=18)){
        center_dot.style.background = 'yellow'
    }
    else{
        center_dot.style.background = 'grey'
    }

    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;

    hourhand.style.transform = `rotate(${hours*30 + minutes*(1/2)}deg)`
    minutehand.style.transform = `rotate(${minutes*6}deg)`
    secondhand.style.transform = `rotate(${seconds*6}deg)`

    // let strTime = hours + ':' + minutes + ':'+ seconds +' ' + ampm + '\n' + date + '|' 
    let strTime = `<div>${hours}:${minutes}:${seconds} ${ampm}</div>`

    boxb2.innerHTML = strTime
    return strTime;
  }

formatAMPM(new Date)
setInterval(()=>{
    formatAMPM(new Date)
},1000)
  