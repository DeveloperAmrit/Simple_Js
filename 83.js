let side_boxes = document.getElementsByClassName('side_box')
let buttons = document.getElementsByClassName('options')
let messageDiv = document.getElementById('screen_text_box')
let hackbtn = document.getElementById('hack_btn')

// written by chatGPT
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

    resultText += currentLine;
    container.innerText = resultText;
};

const changeSideBox = (a) => {
    for (let i = 0; i < side_boxes.length; i++) {
        let longtext = (a == 1) ? Array.from({ length: 1500 }, () => Math.floor(Math.random() * 2)).join("") : '';
        breakTextByWidth(longtext, side_boxes[i])
    }
}

const toggleDisable = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = !buttons[i].disabled;
    }
};

let options_selected = []
const toggleOption = (element) => {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected')
        options_selected.pop(element.textContent.toLowerCase());
    } else {
        element.classList.add('selected')
        options_selected.push(element.textContent.toLowerCase());
    }
    console.log(options_selected)
}

// written by chatGPT
async function fetchJson(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return {};
    }
}
let messagesData = {};
(async () => {
    messagesData = await fetchJson('83_messages.json');
})();

// written by chatGPT
const displayMessages = async () => {
    let allMessages = [];

    options_selected.forEach(option => {
        if (messagesData[option]) {
            allMessages = allMessages.concat(messagesData[option]);
        }
    });

    if (allMessages.length > 0) {
        messageDiv.innerText = '';
        await showMessagesWithDelay(allMessages, 0);
    } else {
        messageDiv.innerText = 'No options selected. Please select at least one option.';
    }
    clearInterval(interval);
    changeSideBox(0);
    toggleDisable();
    hackbtn.disabled = false;
    hackbtn.classList.remove('selected');
    options_selected = [];
};

// written by chatGPT
const showMessagesWithDelay = (messages, index) => {
    return new Promise((resolve) => {
        if (index < messages.length) {
            messageDiv.innerText += messages[index] + '\n';
            const randomDelay = Math.random() * 2000;
            messageDiv.scrollTop = messageDiv.scrollHeight;

            setTimeout(() => {
                showMessagesWithDelay(messages, index + 1).then(resolve);
            }, randomDelay);
        } else {
            resolve();
        }
    });
};

let interval;
const handleHackClick = async (element) => {
    element.classList.add('selected');
    element.disabled = true;
    toggleDisable();
    changeSideBox(1);
    
    interval = setInterval(changeSideBox, 500, 1);
    
    await displayMessages();
};
