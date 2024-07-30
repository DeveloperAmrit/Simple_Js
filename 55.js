// Q2,Q3 ANSWER
{
    const bookmarks = {
        google: 'www.google.com',
        twitter: 'www.twitter.com',
        wikipedia: 'www.wikipedia.com'
    }

    const btn_box = document.getElementById('btn_box')
    for (i in bookmarks) {
        btn_box.innerHTML = `${btn_box.innerHTML}\n<a href="https://${bookmarks[i]}" target="_blank">${i}</a>`
    }
}

// Q4 ANSWER
{
    const boxa3 = document.getElementById('boxa3')
    let n = 0
    async function fetchJoke(){
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        const jokes = await response.json()
        boxa3.innerHTML = `${boxa3.innerHTML}<br>setup : ${jokes['setup']}<br>punchline : ${jokes['punchline']}<br>`
        console.log(jokes)
        n++
        n>=3? clearInterval(a) : ''
    }
    let a = setInterval(fetchJoke, 5000);


}

// Q5 ANSWER


const bulb = document.getElementById('bulb')
const toggleBulb = ()=>{
    bulb.classList.toggle('bulbOn')
}
