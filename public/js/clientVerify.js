const form = document.querySelector('#form')
const div = document.querySelector('#div')
const button = document.querySelector('#buttonOne')
const userInput = document.querySelector('#exampleInputEmail1')
const passInput = document.querySelector('#exampleInputPassword1')
const p = document.querySelector('p')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    user = userInput.value
    pass = passInput.value
    button.textContent = "Logging In Please Wait ..."
    fetch("https://api.hashify.net/hash/md4/hex?value="+pass).then((response) => {
        response.json().then((data) => {
            hashedPass = data.Digest.toString()
            if(user === "reedhu" && hashedPass === "3a120d37ec99a9f5ce8072e79f23d4dd"){
                p.textContent = "Enjoy My Slut🍆🍑💦"
                div.innerHTML = '<video id="video" bkit-playsinline playinline><source src="/img/demo.mp4" type="video/mp4"></video><br><button id="buttonOne" class="btn btn-secondary">Click Here To Make My Dick Cum</button>'
                const video = document.querySelector("#video")
                const buttonOne = document.querySelector("#buttonOne")
                buttonOne.addEventListener("click", (event)=>{
                    event.preventDefault()
                    if (buttonOne.textContent === "Click Here To Make My Dick Cum"){
                        video.play()
                        buttonOne.textContent = "Restart"
                    } else{
                        video.load()
                        buttonOne.textContent = "Click Here To Make My Dick Cum"
                    }
                })
            } else{
                return div.innerHTML = "<p>Failed Login</p>"
            }  
        })
    })
    
})