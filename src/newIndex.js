let button = document.getElementById('show-form')
let formContainer = document.querySelector('.dino-form-container')
button.addEventListener('click', ()=>{
    if(formContainer.style.display == 'block'){
        formContainer.style.display = 'none'
    }else{
        formContainer.style.display = 'block'
    }
})