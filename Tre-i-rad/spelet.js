/* Runna den här functionen när browsern loadar in */
window.addEventListener("DOMContentLoaded", () => {
    const ruta = Array.from(document.querySelectorAll('.ruta'));
    const spelareDisplay = document.querySelector('.display-spelare');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', '',];
    let currentPlayer = 'X';
    let isGameActive = true;

    const SPELAREX_WON = 'SPELAREX_WON';
    const SPELAREO_WON = 'SPELAREO_WON';
    const TIE = 'oavgjort';

    /* 
        Tre i rad tabellen förenklad
        [0] [1] [2]    
        [3] [4] [5]    
        [6] [7] [8]    
    */


    /* Array i en array för att skapa winning conditions*/
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    /* Checkar om vi har en vinnare genom att loopa igenom våran winning condition array. Array i en array som håller tre nummer (represeneterar rutorna) */
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === 'X' ? SPELAREX_WON : SPELAREO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
            announce(TIE);
    }

    const announce = (type) => {
        /* Switch statement väljer mellan de här blocken beroende på type. Efter det ta bort hide  */
        switch (type) {
            case SPELAREO_WON:
                announcer.innerHTML = 'Player <span class="player0">0</span> Won';
                break;
            case SPELAREX_WON:
                announcer.innerHTML = 'Player <span class="SPELAREX_WON">X</span> Won';
                break;
            case TIE:
                announcer.innerHTML = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    /* Checkar om en ruta har en value eller inte. Om den har en value returnar den false annars returnar den true. Gör det för jag vill att spelare bara ska kunna lägga ut på rutor som är tomma.*/
    const isValidAction = (ruta) => {
        if (ruta.innerText === 'X' || ruta.innerText === 'O') {
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }



    /* Tar bort html classen och ändrar till nästa spelare */
    const changePlayer = () => {
        spelareDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        spelareDisplay.innerText = currentPlayer;
        spelareDisplay.classList.add(`player${currentPlayer}`);
    }


    /* Functionen blir kallad när användaren trycker på en ruta. Funktionen hanterar spelarens tur*/
    const userAction = (ruta, index) => {
        if (isValidAction(ruta) && isGameActive) {
            ruta.innerText = currentPlayer;
            ruta.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    /* Skapar en resetboard hook genom att sätta alla rutor till tomma och ändra value tillbaka på isGameActive till true. Eftersom X startar alltid så gör jag en if sats om O är current player byter den till X. ForEach tar bort alla player class relaterade på varje ruta. */
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        ruta.forEach(ruta => {
            ruta.innerText = '';
            ruta.classList.remove('SPELAREX_WON');
            ruta.classList.remove('SPELAREO_WON');
        })
    }


    /* Attachar en addeventlistener till varje ruta  */
    ruta.forEach((ruta, index) => {
        ruta.addEventListener('click', () => userAction(ruta, index));
    });

    resetButton.addEventListener('click', resetBoard);
});