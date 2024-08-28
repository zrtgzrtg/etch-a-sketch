
const sizeButton = document.querySelector(".size-button")
let amountOfDivsUser = -1
const container = document.querySelector("#container")
let amountOfDivs = 16*16

createGrid(amountOfDivs)
sizeButton.addEventListener("click", () => {
    
    let delListOldOutput = document.querySelectorAll(".output-text")

    delListOldOutput.forEach((element) => {
        console.log(element)
        element.remove()
    })
    amountOfDivsUser = prompt("How big should the grid be? (max 100)")
    console.log(amountOfDivsUser)
    if(amountOfDivsUser<0 || amountOfDivsUser>100) {
        const outputDiv = document.querySelector(".output-div")
        const retText = document.createElement("div")
        retText.classList.add("output-text")
        retText.textContent = "Choose a size between 0 and 100"
        outputDiv.appendChild(retText)
        return
    }

if(amountOfDivsUser >= 0) {

    amountOfDivs = amountOfDivsUser * amountOfDivsUser
}
    createGrid(amountOfDivs)
})
function createGrid(amountOfDivs) {
    remList = document.querySelectorAll(".copyDiv")
    if(remList !== null) {
    remList.forEach((cpD) => {
        cpD.remove()
    })
    }
for(let i = 0; i<amountOfDivs;i++) {
let copyDiv = document.createElement("div")
copyDiv.classList.add("copyDiv")
copyDiv.id = i
container.appendChild(copyDiv)
}
}
container.addEventListener("mouseover", (event) => {
    let target = event.target
    
    if(target instanceof HTMLDivElement) {
    target.style.cssText = "background-color: grey;"
    }

})
container.addEventListener("mouseout", (event) => {
    let target = event.target
    if(target instanceof HTMLDivElement) {
        target.style.cssText = "background-color: white;"
    }
})