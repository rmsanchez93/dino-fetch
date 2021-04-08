document.addEventListener('DOMContentLoaded', onLoad)


function onLoad(){
    console.log('loaded')
    getDinos()
    let dinoForm = document.querySelector('.dino-form')
    dinoForm.addEventListener('submit', (e) => postNewDino(e))
}

function getDinos(){
    console.log('getting dinos')
    //get all dinos and render to page
    
    //fetch our dinos
    fetch('http://localhost:3000/dinos') //request sent to server
    .then(res => res.json()) //response being parsed
    .then(dinoData => {
        // iterating through array using for...of
        // for(let el of dinoData){
        //     console.log(el)
        // }
        dinoData.forEach(dino => {
            // // {
            //     id: 1, 
            // species: "T-Rex", 
            // extinct: false, 
            // image: "https://images.theconversation.com/files/388279/or…b-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"}

            //create an  element
            const li = document.createElement('li') // <li></li>
            //assign that elements properties to the objects attributes
            li.innerHTML = `<strong>${dino.species}</strong>`

            // addinig a single
            // li.className = "some-class"
            // adding more classes WITHOUT changinig classes already assigned
            // li.classList.add("multiple", "classes")

            //find where we want to add THS element to 
            const dinoMenu = document.querySelector('.dino-menu')
            dinoMenu.appendChild(li)
            // console.log(li)

            li.addEventListener('click', ()=>{
                renderDinoInfo(dino)
            })

        })
        // dinoData.each do | dino |
        
        // end
    })

    function renderDinoInfo(dino){
        //clear dino info div
        let dinoInfoDiv = document.querySelector('.dino-info')
        dinoInfoDiv.innerHTML = "" 

        // console.log(dinoInfoDiv)
        // console.log("dino that was clicked", dino)
        // create elements
        let h1 = document.createElement('h1')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let button = document.createElement('button')
        let deleteButton = document.createElement('button')
        // assign elements
        h1.innerText = dino.species
        img.src = dino.image
        if(dino.extinct === false){
            p.innerText = "They're alive... for now"
            button.innerText = "Murk Em"
        }else{
            p.innerText = "They dead"
            button.innerText = "Lil Stimmy"
        }
        deleteButton.innerText = 'Delete FOREVER'
        button.addEventListener('click', ()=>{
            //for sending a PATCH request
            console.log('button to update was clicked')
            // console.log(dino)
            //update dino's extinct value to the opposite of what it was 
            fetch(`http://localhost:3000/dinos/${dino.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    extinct: !dino.extinct
                })
            })
            .then(res => res.json())
            .then(updatedDino => {
                renderDinoInfo(updatedDino)
            })
            // then render dino again
        })

        deleteButton.addEventListener('click', ()=>{
            //delete a dinosaur
            fetch(`http://localhost:3000/dinos/${dino.id}`,{
                method:'DELETE'
            })
        })
        // and append
        dinoInfoDiv.append(h1, img, p, button, deleteButton)

    }

}

function postNewDino(e){
    e.preventDefault()
        //onSubmit
        //grab values from the form
    let newDinoName = document.getElementById('new-dino-species')
    console.log(newDinoName.value)
    let newDinoImage = document.getElementById('new-dino-image')
    console.log(newDinoImage.value)

    let newDino = {
        species: newDinoName.value,
        extinct: false,
        image: newDinoImage.value
    }
    //post new dino
    fetch('http://localhost:3000/dinos', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(newDino)
    })
    .then(res => res.json())
    .then(newDino => {
        //delete everything in dinoMenu
        const dinoMenu = document.querySelector('.dino-menu')
        dinoMenu.innerHTML = ""
        //and rerun getDinos
        getDinos()
    })
    //reflect changes on DOM
}