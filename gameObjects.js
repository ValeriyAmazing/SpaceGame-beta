import { config } from "./configs.js"

const planets = {
    earth: {
        cells: [],
        buildingsCount: {
            metalFactory: {
                maxValue: 3, currentValue: 0
            },
            gasFactory: {
                maxValue: 3, currentValue: 0
            },
            laboratory: {
                maxValue: 1, currentValue: 0
            },
        },
        storage: {
            metal: 3000, gas: 3000, sciencePoints: 0,
        },
        profit: {
            metal: 0, gas: 0, sciencePoints: 0,
        },
        
    },
    current: {},
}

const buildings = {
    metalFactory: {
        name: 'Metal Factory',
        cost: {
            metal: 100, gas: 250
        },
        profit: {
            metal: 5 * config.profitMetalMultipler, gas: 1*config.profitGasMultipler
        },
        level: 1,
        src: './img/metal-miner.png',
        description:'Allows you to mine metal',
    },
    gasFactory: {
        name: 'Gas Factory',
        cost: {
            metal: 250, gas: 100
        },
        profit: {
            metal: 1 * config.profitMetalMultipler, gas: 5 * config.profitGasMultipler
        },
        level: 1,
        src: './img/gas-miner.png',
        description: 'Allows you to mine gas',
    },
    laboratory: {
        name: 'Laboratory',
        cost: {
            metal: 850, gas: 550
        },
        profit: { sciencePoints: 1*config.profitSciencePointsMultipler },
        level: 1,
        src: './img/laboratory.png',
        description: 'Allows you to research new technologies',
    }
}

function fillField(amount, planet) {
    for (let i = 1; i <= amount; i++) {
        planets[planet].cells.push({ id: i, building: { name:null, src: '' } })
    }
}

export { planets, buildings, fillField }  