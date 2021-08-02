const button = document.querySelector('#button')
const div = document.querySelector('#div')

button.addEventListener('click',(event)=>{
    div.innerHTML = "<p>Bishben is Thinking</p><img src='/img/Iphone-spinner-2.gif' alt='...'> "
    setTimeout(() => {
        div.innerHTML="<p><b><i>Obviously I Love you Dummy, I don't have to think bout that. IMAGINE ITS BEEN 10 MONTHS - just think about it 2 months and its a YEAR❤️</i></b></p>"
    }, 3000)  
})