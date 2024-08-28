let url = 'https://official-joke-api.appspot.com/random_ten'
let jc = document.getElementById('jokes_container')

let a = fetch(url)
a.then((r)=>{
    return r.json()
}).then((response)=>{
    for(i in response){
        // console.log(response[i])
        let ahtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${response[i]['setup']}</h5>
              <p class="card-text">${response[i]['punchline']}</p>
            </div>
        </div>`
        jc.innerHTML += ahtml
    }
    return response
})