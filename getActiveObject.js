let cell = {}

function setActivePlanet(planetName) {
    planets.current = planets[planetName]
}
function getActiveCell(id) {
    let result = planets.current.cells.find(el => el.id === id)
    return result
}