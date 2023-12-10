let turn, square, isChecked, crossWins=0, circleWins=0, draws=0, checkedSquares;
const turnRemind = document.getElementById('turn');
const squares = document.getElementsByClassName('square');

function startGame(){
    document.querySelector('button').style.display = 'none';
    document.getElementById('game').style.display = 'grid';
    document.getElementById('wins').style.display = 'block';
    turnRemind.style.display = 'flex';
    turn = 'circle';
    turnRemind.children[1].src = 'circle.png';
    document.getElementById('hover').style.display = 'none';
    document.getElementById('popup').style.display = 'none';

    for (let i=0;i<squares.length;i++){
        squares[i].setAttribute('checked', 'empty');
        squares[i].children[0].src = '';
    }

    checkedSquares = 0;
}

function win(winner){
    document.getElementById('hover').style.display = 'block';
    document.getElementById('popup').style.display = 'flex';
    if (winner==='draw'){
        document.querySelector('h3').innerHTML = `Draw!`;
        draws++;
        document.getElementById('wins').children[2].innerHTML = `Draws: ${draws}`;
    } else {
        document.querySelector('h3').innerHTML = `${winner} won!`;
        winner==='Circle' ? circleWins++ : crossWins++;
        document.getElementById('wins').children[0].innerHTML = `Circle wins: ${circleWins}`;
        document.getElementById('wins').children[1].innerHTML = `Cross wins: ${crossWins}`;
    }
}

function checkWinner(){
    if(squares[0].getAttribute('checked')===squares[1].getAttribute('checked') && squares[1].getAttribute('checked')===squares[2].getAttribute('checked') && squares[0].getAttribute('checked')!=='empty'){
        win(squares[0].getAttribute('checked'));
        console.log('1')
    } else if(squares[0].getAttribute('checked')===squares[3].getAttribute('checked') && squares[3].getAttribute('checked')===squares[6].getAttribute('checked') && squares[0].getAttribute('checked')!=='empty'){
        win(squares[0].getAttribute('checked'));
        console.log('2')
    } else if(squares[0].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[8].getAttribute('checked') && squares[0].getAttribute('checked')!=='empty'){
        win(squares[0].getAttribute('checked'));
        console.log('3')
    } else if(squares[3].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[5].getAttribute('checked') && squares[3].getAttribute('checked')!=='empty'){
        win(squares[3].getAttribute('checked'));
        console.log('4')
    } else if(squares[6].getAttribute('checked')===squares[7].getAttribute('checked') && squares[7].getAttribute('checked')===squares[8].getAttribute('checked') && squares[6].getAttribute('checked')!=='empty'){
        win(squares[6].getAttribute('checked'));
        console.log('5')
    } else if(squares[6].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[2].getAttribute('checked') && squares[6].getAttribute('checked')!=='empty'){
        win(squares[6].getAttribute('checked'));
        console.log('6')
    } else if(squares[1].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[7].getAttribute('checked') && squares[1].getAttribute('checked')!=='empty'){
        win(squares[1].getAttribute('checked'));
        console.log('7')
    } else if(squares[2].getAttribute('checked')===squares[5].getAttribute('checked') && squares[5].getAttribute('checked')===squares[8].getAttribute('checked') && squares[2].getAttribute('checked')!=='empty'){
        win(squares[2].getAttribute('checked'));
        console.log('8')
    } else if (checkedSquares===9){win('draw')}
}

function check(id){
    square = document.getElementById(id);
    isChecked = square.getAttribute('checked');

    if (isChecked==="empty"){
        if (turn==='circle'){
            square.children[0].src = 'circle.png';
            turn = 'cross';
            square.setAttribute('checked', "Circle");
            turnRemind.children[1].src = 'cross.png';
            checkedSquares++;
        } else {
            square.children[0].src = 'cross.png';
            turn = 'circle';
            square.setAttribute('checked', 'Cross');
            turnRemind.children[1].src = 'circle.png';
            checkedSquares++;
        }
    }

    checkWinner()
}

function resetWins(){
    circleWins = 0;
    crossWins = 0;
    draws = 0;
    document.getElementById('wins').children[0].innerHTML = `Circle wins: ${circleWins}`;
    document.getElementById('wins').children[1].innerHTML = `Cross wins: ${crossWins}`;
    document.getElementById('wins').children[2].innerHTML = `Draws: ${draws}`;
}