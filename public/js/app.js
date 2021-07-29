const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const mssageTwo = document.querySelector('#messageTwo')

console.log("Hello user")

weatherForm.addEventListener('submit',(event) => {
    event.preventDefault()
    messageOne.textContent = "Searching..."
    messageTwo.textContent = ''
    const location = search.value
    fetch("http://localhost:3000/weather?address="+encodeURI(location)).then((response) => {
    response.json().then((data) => {
        if (data.error){
            messageOne.textContent = "No Location Found"
            messageTwo.textContent = ""
        } else{
            messageOne.textContent = "Location: "+data.location
            messageTwo.textContent = "Temperature: "+data.temp
        }
    })
})
})