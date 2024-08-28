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

const randomColorButton = document.querySelector(".random-color-button")
randomColorButton.addEventListener("click", () => {
    let allDivs = document.querySelectorAll(".copyDiv")
    allDivs.forEach((eachDiv)=>{
        let colorArray = rgbRandomizer()
        eachDiv.style.cssText += `background-color: rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
    })
    
})
function createGrid(amountOfDivs) {
    let remList = document.querySelectorAll(".copyDiv")
    if(remList !== null) {
    remList.forEach((cpD) => {
        cpD.remove()
    })
    }
    const totalSpace = 960
    const divsInOneLine = Math.sqrt(amountOfDivs)
    let overhang = totalSpace % divsInOneLine
    let divSize = (totalSpace - overhang) / divsInOneLine
    let divSizeInPercent = (divSize/totalSpace)*100
for(let i = 0; i<amountOfDivs;i++) {
let copyDiv = document.createElement("div")
copyDiv.id = i
copyDiv.classList.add("copyDiv")
            
    copyDiv.style.cssText = `box-sizing: border-box; width: ${divSize}px; height: ${divSize}px; flex: 1 1 calc(100% / ${divsInOneLine}); border: 1px dotted black; aspect-ration: 1:1;`
container.appendChild(copyDiv)
        }
  
    
}


container.addEventListener("mouseover", (event) => {
    let target = event.target
    
    if(target instanceof HTMLDivElement) {
    target.style.cssText += " background-color: grey;"
    rgbArray = rgbRandomizer()
    target.style.cssText += `background-color`
    }

})
container.addEventListener("mouseout", (event) => {
    let target = event.target
    if(target instanceof HTMLDivElement) {
        target.style.cssText += " background-color: white;"
    }
})
function rndNumberRGB() {
    let ret = Math.floor((Math.random()*255))+1
    return ret
}
function rgbRandomizer(){

    return [
        rndNumberRGB(),
        rndNumberRGB(),
        rndNumberRGB()
    ]
}