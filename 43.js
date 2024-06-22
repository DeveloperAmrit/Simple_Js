let btn = document.getElementById('tell-me-a-joke')
let setup = document.getElementById('setup')
let punchline = document.getElementById('punchline')

async function fetchJoke(){
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const jokes = await response.json()
    setup.innerText = jokes['setup']
    punchline.innerText = jokes['punchline']
    console.log(jokes)
}

btn.addEventListener('click',()=>{
    fetchJoke()
})