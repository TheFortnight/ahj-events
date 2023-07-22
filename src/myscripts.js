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