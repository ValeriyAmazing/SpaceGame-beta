import { storageGas, storageMetal, storageScience } from "./drawPlanet.js"
import { planets } from "./gameObjects.js"

function tick(interval) {
    for (let [key, value] of Object.entries(planets)) {
        if (key !== 'current') {
            value.storage.metal += value.profit.metal
            value.storage.gas += value.profit.gas
            value.storage.sciencePoints += value.profit.sciencePoints
        }
    }
 
    storageMetal.innerText = `metal: ${Math.round(planets.current.storage.metal)}`
    storageGas.innerText = `gas: ${Math.round(planets.current.storage.gas)}`
    storageScience.innerText = `science: ${Math.round(planets.current.storage.sciencePoints)}`
    setTimeout(tick, interval, interval)
}

export{tick}