const buildgrid = () => {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
      }
    }
  }

  buildgrid();

  let missings = 0;
  let hits = 1;

const cells = document.querySelectorAll('.cell');
cellsArr = Array.from(cells);
let lastIndex = 100;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const interval = setInterval(() => {
    if (missings >4 ) {
      clearInterval(interval);
      const scores = document.querySelector('.scores');
      scores.innerHTML = '<p>YOU LOST!</p>';
      return;
    }
    const missingsField = document.querySelector('.missings')
    missingsField.textContent =  'Missed: '+  missings++;
    const cellImg = document.querySelector('.hasimg');
    let rndInt = randomIntFromInterval(1, 16);
    if (cellsArr.findIndex(el => el.classList.contains('hasimg')) == lastIndex -1) {
        console.log('TWICE!!!');
        rndInt = randomIntFromInterval(1, 16);
    }
   if (cellImg) cellImg.classList.remove('hasimg');
    
    cellsArr[rndInt - 1].classList.add('hasimg');
}, 1500)

const grid = document.querySelector('.grid');
grid.addEventListener('click', (event)=> {
  if (hits >4) {
    clearInterval(interval);
    const scores = document.querySelector('.scores');
      scores.innerHTML = '<p>YOU WON!</p>';
      return;
  }
    const target = event.target;
    if (target.classList.contains('hasimg')) {
      target.classList.remove('hasimg');
      const hitsField = document.querySelector('.hits')
    hitsField.textContent =  'Hit: '+  hits++;
    missings--;

    }

})
  