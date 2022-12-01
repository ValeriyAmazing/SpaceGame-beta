import { Build, cell, getActiveCell, upgradeBuilding } from "./buildsAndUpgrades.js";
import { buildings, planets } from "./gameObjects.js";

const container = document.querySelector('.container')
const planet = createEl('planet')
const storageInfo = createEl('storage-info')
const storageMetal = createEl('storage-metal')
const storageGas = createEl('storage-gas')
const storageScience = createEl('storage-science')

//generate buid  menu
const buildMenu = createEl('build-menu')
const buildMenuWraper = createEl('build-menu-wraper')
const closeBtn = createEl('close')

closeBtn.innerText = 'CLOSE'
closeBtn.addEventListener('click', () => {
    buildMenuWraper.remove()
})
buildMenuWraper.append(closeBtn, buildMenu)


function createEl(_class, _id, _tag = 'div', _src) {
    let element = document.createElement(_tag)

    if (_class)
        element.classList.add(_class)
    if (_id)
        element.id = _id
    if (_src)
        element.style.backgroundImage = `url('${_src}')`
    return element
}

function drawPlanet() {
    if (planets.current.cells) {
        for (let cell of planets.current.cells) {
            const item = createEl('cell', cell.id, 'div', cell.building.src)
            planet.append(item)
        }
    }
}

function drawBuildMenu(building) {

    let item = drawBuildMenuItem(building)
    buildMenu.append(item)
}
function drawBuildMenuItem(building) {
    const item = createEl('build-menu-item')

    const itemName = createEl('build-menu-name')
    itemName.innerHTML = `<p>${buildings[building].name}</p>`

    const buildingInfo = createEl('build-menu-description')
    buildingInfo.innerHTML = `<p>${buildings[building].description}</p>`

    const image = createEl('build-menu-img', '', 'img')
    image.src = buildings[building].src

    const costWrapper = createEl('build-menu-wrapper')

    const costMetal = createEl('build-menu-cost')
    costMetal.innerHTML = `<p>Metal: ${buildings[building].cost.metal}</p>`

    const costGas = createEl('build-menu-cost')
    costGas.innerHTML = `<p>Gas: ${buildings[building].cost.gas}</p>`

    const buildButton = createEl(`build-menu-btn`, ``, 'button')
    buildButton.innerText = 'Build'
    buildButton.addEventListener("click", () => {
        Build(building)
        planet.innerHTML = ''
        buildMenu.innerHTML = ''
        drawPlanet()

    })
    item.append(image)
    item.append(itemName)
    item.append(buildingInfo)
    costWrapper.append(costMetal, costGas)
    item.append(costWrapper)
    item.append(buildButton)
    return item
}

function drawUpgradeMenu(curentCell) {

    let item = drawUpgradeMenuItem(curentCell)
    buildMenu.append(item)
}

function drawUpgradeMenuItem(currentCell) {
    const item = createEl('build-menu-item')

    const itemName = createEl('build-menu-name')
    //!Почему здесь без[],   а в drawBuild тольлко с []?
    itemName.innerHTML = `<p>${currentCell.building.name}</p>`
    const buildingInfo = createEl('build-menu-description')
    buildingInfo.innerHTML = `<p>${currentCell.building.description}</p>`

    const image = createEl('build-menu-img', '', 'img')
    image.src = currentCell.building.src

    const costWrapper = createEl('build-menu-wrapper')
    const costMetal = createEl('build-menu-cost')
    costMetal.innerHTML = `<p>Metal: ${currentCell.building.cost.metal}</p>`
    const costGas = createEl('build-menu-cost')
    costGas.innerHTML = `<p>Gas: ${currentCell.building.cost.gas}</p>`
    const buildButton = createEl(`build-menu-btn`, ``, 'button')
    buildButton.innerText = 'UPGRADE'
    buildButton.addEventListener('click', () => {
        upgradeBuilding()
        buildMenu.innerHTML = ''

    })

    item.append(image)
    item.append(itemName)
    item.append(buildingInfo)
    costWrapper.append(costMetal, costGas)
    item.append(costWrapper)
    item.append(buildButton)

    return item
}
function drawLaboratory() { alert('This function is not ready yet') }

function drawScienceBtn() {
    const btn = createEl('science-btn', '', 'button')
    btn.innerText = 'Open Laboratory'
    btn.addEventListener('click', drawLaboratory)
    return btn
}

planet.addEventListener("click", e => {

    //!разобраться с buildMenuWraper.remove() и альтернатива inner= ''
    buildMenu.innerHTML=''
    let id = Number(e.target.closest('.cell').id)
    cell.current = getActiveCell(id)

    container.prepend(buildMenuWraper)

    if (cell.current.building.name === null) {
        for (let building in buildings) {
            if (planets.current.buildingsCount[building].maxValue > planets.current.buildingsCount[building].currentValue) {
                drawBuildMenu(building)
            }
        }
    }
    if (cell.current.building.name !== null) {
        drawUpgradeMenu(cell.current)
    }
    if (cell.current.building.name === "Laboratory") {
        let btn = drawScienceBtn()
        buildMenu.append(btn)
    }
})

container.append(planet)
container.prepend(storageInfo)
storageInfo.append(storageMetal, storageGas, storageScience)
export { createEl, drawPlanet, storageMetal, storageGas, storageScience }
