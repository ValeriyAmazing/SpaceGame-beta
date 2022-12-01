function takeCost() {
    if (cell.current.building.cost.gas) { planets.current.storage.gas -= cell.current.building.cost.gas }
    if (cell.current.building.cost.metal) { planets.current.storage.metal -= cell.current.building.cost.metal }
}

function setNewCost(costMultipler) {

    if (cell.current.building.cost.gas) { cell.current.building.cost.gas = Math.round(cell.current.building.cost.gas * costMultipler) }
    if (cell.current.building.cost.metal) { cell.current.building.cost.metal = Math.round(cell.current.building.cost.metal * costMultipler) }
}