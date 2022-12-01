import { getActiveCell, Build, upgradeBuilding, cell, setActivePlanet} from "./buildsAndUpgrades.js";
import { drawPlanet } from "./drawPlanet.js";
import { fillField, planets,buildings } from "./gameObjects.js";
import { setGlobal } from "./getGlobal.js";
import { tick } from "./tick.js";

const log = console.log

fillField(45, 'earth')

setActivePlanet('earth')

tick(1000)

drawPlanet()

export { log }

setGlobal({planets},{buildings},{upgradeBuilding})

//?работа  event