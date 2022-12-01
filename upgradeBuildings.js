function upgradeBuilding() {
    if (cell.current.building.name !== null && compareForUpgrade()) {
        //take away the cost
        takeCost()

        //icrase level
        cell.current.building.level++

        //set new profit for building
        setNewProfit(config.profitMultipler)

        //set a new upgrade cost
        setNewCost(config.costMultipler)

        //update  planet's profit
        updateProfit()
    }
    
    else alert("Not enought resourses")
}

function compareForUpgrade() {
    if (planets.current.storage.gas >= cell.current.building.cost.gas && planets.current.storage.metal >= cell.current.building.cost.metal) {
        return true
    }

    return false
}