function Build(building) {
    if (buildings[building] && compareForBuild(building)) {

        //adding buildingts to cell 
        cell.current.building = JSON.parse(JSON.stringify(buildings[building]))

        //take away the cost
        takeCost()

        //incrase buildings value
        planets.current.buildingsCount[building].currentValue++

        //set new profit
        updateProfit()
    } else alert("Not enought resourses")
}

function compareForBuild(building) {
    if (cell.current.building.name === null && planets.current.storage.gas >= buildings[building].cost.gas &&
        planets.current.storage.metal >= buildings[building].cost.metal &&
        planets.current.buildingsCount[building].maxValue > planets.current.buildingsCount[building].currentValue) {
        return true
    }
    return false
}
export {  }