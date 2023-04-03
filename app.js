const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')



// option choosing
let angle = 0
function flip () {
    const optionShips = Array.from(optionContainer.children)
    if (angle === 0) {
        angle = 90
    } else {
        angle = 0
    }
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

//creating boards

const width = 10

function createBoard(color, user) {
   const gameBoardContainer = document.createElement('div')
   gameBoardContainer.classList.add('game-board')
   gameBoardContainer.style.backgroundColor = color
   gameBoardContainer.id = user

   for (let i = 0; i < width * width; i ++) {
      const block = document.createElement('div')
      block.classList.add('block')
      block.id = i
      gameBoardContainer.append(block)
   }

   gamesBoardContainer.append(gameBoardContainer)
}

createBoard('yellow', 'player')
createBoard('pink', 'computer')

flipButton.addEventListener('click', flip)

// Creating ships

class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const destroyer = new Ship('destroyer', 2) 
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, cruiser]

function addShipPiece(ship) {
    const allBoardBlocks = document.querySelectorAll('#computer div')
    let randomBolean = Math.random() < 0.5
    let isHorizontal = randomBolean
    let randomStartIndex = Math.floor(Math.random() * width * width)
    console.log(randomStartIndex)

    let shipBlocks = []

    for (let i = 0; i < ship.length; i ++) {
        if (isHorizontal) {
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i])
        } else {
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i * width])
        }
    }

    shipBlocks.forEach(shipBlock => {
        shipBlock.classList.add(ship.name)
        shipBlock.classList.add('taken')
    })


    
}
ships.forEach(ship => addShipPiece(ship)) 
