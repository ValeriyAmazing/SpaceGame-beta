function setNewProfit(profitMultipler) {

    if (cell.current.building.profit.gas) {
        cell.current.building.profit.gas *= profitMultipler
    }

    if (cell.current.building.profit.metal) {
        cell.current.building.profit.metal *= profitMultipler
    }

    if (cell.current.building.profit.sciencePoints) {
        cell.current.building.profit.sciencePoints *= profitMultipler
    }
}

function updateProfit() {
    planets.current.profit.metal = 0
    planets.current.profit.gas = 0
    planets.current.profit.sciencePoints = 0

    for (const cell of planets.current.cells) {

        if (cell.building.name !== null) {
            if (cell.building.profit.metal) {
                planets.current.profit.metal += cell.building.profit.metal
            }

            if (cell.building.profit.gas) {
                planets.current.profit.gas += cell.building.profit.gas
            }

            if (cell.building.profit.sciencePoints) {
                planets.current.profit.sciencePoints += cell.building.profit.sciencePoints
            }
        }
    }
}