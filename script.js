let turn, square, isChecked, crossWins=0, circleWins=0;
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
}

function win(winner){
    document.getElementById('hover').style.display = 'block';
    document.getElementById('popup').style.display = 'flex';
    document.querySelector('h3').innerHTML = `${winner} won!`;
    winner==='circle' ? circleWins++ : crossWins++;
    document.getElementById('wins').children[0].innerHTML = `Circle wins: ${circleWins}`;
    document.getElementById('wins').children[1].innerHTML = `Cross wins: ${crossWins}`;
}

function checkWinner(){
    if(squares[0].getAttribute('checked')===squares[1].getAttribute('checked') && squares[1].getAttribute('checked')===squares[2].getAttribute('checked') && squares[0].getAttribute('checked')!=='empty'){
        win(squares[0].getAttribute('checked'));
        console.log('1')
    }
    if(squares[0].getAttribute('checked')===squares[3].getAttribute('checked') && squares[3].getAttribute('checked')===squares[6].getAttribute('checked') && squares[0].getAttribute('checked')!=='empty'){
        win(squares[0].getAttribute('checked'));
        console.log('2')
    }
    if(squares[0].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[8].getAttribute('checked') && squares[0].getAttribute('checked')!=='empty'){
        win(squares[0].getAttribute('checked'));
        console.log('3')
    }
    if(squares[3].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[5].getAttribute('checked') && squares[3].getAttribute('checked')!=='empty'){
        win(squares[3].getAttribute('checked'));
        console.log('4')
    }
    if(squares[6].getAttribute('checked')===squares[7].getAttribute('checked') && squares[7].getAttribute('checked')===squares[8].getAttribute('checked') && squares[6].getAttribute('checked')!=='empty'){
        win(squares[6].getAttribute('checked'));
        console.log('5')
    }
    if(squares[6].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[2].getAttribute('checked') && squares[6].getAttribute('checked')!=='empty'){
        win(squares[6].getAttribute('checked'));
        console.log('6')
    }
    if(squares[1].getAttribute('checked')===squares[4].getAttribute('checked') && squares[4].getAttribute('checked')===squares[7].getAttribute('checked') && squares[1].getAttribute('checked')!=='empty'){
        win(squares[1].getAttribute('checked'));
        console.log('7')
    }
    if(squares[2].getAttribute('checked')===squares[5].getAttribute('checked') && squares[5].getAttribute('checked')===squares[8].getAttribute('checked') && squares[2].getAttribute('checked')!=='empty'){
        win(squares[2].getAttribute('checked'));
        console.log('8')
    }
}

function check(id){
    square = document.getElementById(id);
    isChecked = square.getAttribute('checked');

    if (isChecked==="empty"){
        if (turn==='circle'){
            square.children[0].src = 'circle.png';
            turn = 'cross';
            square.setAttribute('checked', "circle");
            turnRemind.children[1].src = 'cross.png';
        } else {
            square.children[0].src = 'cross.png';
            turn = 'circle';
            square.setAttribute('checked', 'cross');
            turnRemind.children[1].src = 'circle.png';
        }
    }

    checkWinner()
}

function resetWins(){
    circleWins = 0;
    crossWins = 0;
    document.getElementById('wins').children[0].innerHTML = `Circle wins: ${circleWins}`;
    document.getElementById('wins').children[1].innerHTML = `Cross wins: ${crossWins}`;
}