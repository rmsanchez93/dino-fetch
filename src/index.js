document.addEventListener("DOMContentLoaded", () => {
    getDinos()
})

function getDinos() {
    fetch('http://localhost:3000/dinos')
    .then((res) => res.json())
    .then(dinos => {
        // dinos.forEach(dino => console.log(dino))
        // ^ This does the same thing as this v
        dinos.forEach((dino) => {
            renderDinoSpecies(dino)
        })
    })
}

const renderDinoSpecies = (dino) => {
    const dinoMenu = document.querySelector('.dino-menu')

    const dinoSpecies = document.createElement('li')
    dinoSpecies.innerHTML = dino.species

    dinoSpecies.addEventListener("click", () => {
        renderDinoInfo(dino)
    })

    dinoMenu.appendChild(dinoSpecies)
}

const renderDinoInfo = (dino) => {
    const dinoInfo = document.querySelector('.dino-info')
    dinoInfo.innerHTML = ""

    const dinoSpecies = document.createElement('h1')
    dinoSpecies.innerText = dino.species

    const dinoImg = document.createElement('img')
    dinoImg.src = dino.image

    const dinoStatus = document.createElement('p')
    const dinoBtn = document.createElement('button')

    if (dino.extinct == true) {
        dinoStatus.innerText = "They dead."
        dinoBtn.innerText = "Bring 'em back"
    } else {
        dinoStatus.innerText = "These dinos are still livin'"
        dinoBtn.innerText = "Murk 'em"
    }

    dinoBtn.addEventListener("click", () => {
        changeDinoStatus(dino)
    })

    dinoInfo.append(dinoSpecies, dinoImg, dinoStatus, dinoBtn)
}

const changeDinoStatus = (dino) => {
    const newStatus = !dino.extinct
    console.log(newStatus)
    fetch(`http://localhost:3000/dinos/${dino.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            extinct: newStatus
        })
    })
    .then((res) => res.json())
    .then(updatedDino => renderDinoInfo(updatedDino))
}