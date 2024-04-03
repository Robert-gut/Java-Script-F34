document.addEventListener('DOMContentLoaded', () =>{
  const boardSize = 10
  const mineCount = 15
  const board = document.getElementById('game-board')
  let mines = []

  function initializeBoard() {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.dataset.row = i
        cell.dataset.col = j
        cell.addEventListener('click', handleCellClick)//лівик кліком по мишці
        cell.addEventListener('contextmenu', handleCellRightClick)//правий кліком по мишці
        board.appendChild(cell)//додали клітинку на наше ігрове поле
      }
    }
  }

  function generateMines() {
    for (let i = 0; i < mineCount; i++) {
      let mineAdded = false
      while(!mineAdded) {
        const row = Math.floor(Math.random() * boardSize)
        const col = Math.floor(Math.random() * boardSize)
        const mine = {row, col}

        if(!mines.some(m => m.row === row && m.col === col)){
          mines.push(mine)
          mineAdded = true
        }
      }
    }
  }

  function handleCellClick(event) {
    const cell = event.target
    const row = parseInt(cell.dataset.row)
    const col = parseInt(cell.dataset.col)

    //перевірка на міну
    if(mines.some(m => m.row === row && m.col === col)){
      revealAllMines()//показувати всі міни
      gameOver()//закінчувати гру
    }else{
      const mineCount = countAdjacentMines(row, col)
      cell.textContent = mineCount > 0 ? mineCount : ''
      cell.classList.add('revealed')
      if(mineCount === 0){
        revealEmptyCells(row, col)
      }
    }
    cell.removeEventListener('click', handleCellClick)
    cell.removeEventListener('contextmenu', handleCellRightClick)
  }

  function handleCellRightClick(event) {
    event.preventDefault()
    const cell = event.target
    cell.classList.toggle('flagged')
  }

  function countAdjacentMines(row, col){
    const adjacentCells = [
      {row: row - 1, col: col - 1},
      {row: row - 1, col: col},
      {row: row - 1, col: col + 1},
      {row: row, col: col - 1},
      {row: row, col: col + 1},
      {row: row + 1, col: col - 1},
      {row: row + 1, col: col},
      {row: row + 1, col: col + 1},
    ]
    return adjacentCells.filter(cell => mines.some(m => m.row === cell.row && m.col === cell.col)).length
  }


  function revealEmptyCells(row, col){
    const adjacentCells = [
      {row: row - 1, col: col - 1},
      {row: row - 1, col: col},
      {row: row - 1, col: col + 1},
      {row: row, col: col - 1},
      {row: row, col: col + 1},
      {row: row + 1, col: col - 1},
      {row: row + 1, col: col},
      {row: row + 1, col: col + 1},
    ]
    adjacentCells.forEach(cell => {
      const cellElement = getCellElement(cell.row, cell.col)
      if(cellElement && !cellElement.classList.contains('revealed')){
        const mineCount = countAdjacentMines(cell.row, cell.col)
        cellElement.textContent = mineCount > 0 ? mineCount : ''
        cellElement.classList.add('revealed')
        // cell.removeEventListener('click', handleCellClick)
        cell.removeEventListener('contextmenu', handleCellRightClick)
        if (mineCount === 0) {
          revealEmptyCells(cell.row, cell.col)
        }
      }
    })
  }

  function revealAllMines(){
    mines.forEach(mine => {
      const cell = getCellElement(mine.row, mine.col)
      cell.textContent = '💣'
      cell.classList.add('mine')
    })
  }

  function getCellElement(row, col){
    return board.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`)
  }

  function gameOver(){
    alert('Game Over!')
  }

  function gameWon(){
    alert('You won!')
  }

  initializeBoard()
  generateMines()
})