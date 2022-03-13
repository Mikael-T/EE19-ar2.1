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
    const winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    const announce = (type) => {
        /* Switch statement väljer mellan de här blocken beroende på type */
        switch (type) {
            case PLAYERO_VANN:
                announcer.innerHTML = 'Player <span class="player0">0</span> Won';
                break;
            case PLAYERX_VANN:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerHTML = 'Tie';
        }
        announcer.classList.remove('hide');
    };



    /* Tar bort html classen och ändrar till nästa spelare */
    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
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
    /* Attachar en addeventlistener till varje ruta  */
    ruta.forEach((ruta, index) => {
        ruta.addEventListener('click', () => userAction(ruta, index));
    });

    resetButton.addEventListener('click', resetBoard);
});