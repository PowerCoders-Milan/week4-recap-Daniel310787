// Rewrite the instructions in your own words

// Write the objectives and the tests

// Write the pseudocode

/*
create a variable with a list of selections rock paper Scissor.
create a variable to store input from user 
create a variable with a ramdom selection for computer
a condional  to let us know when users wins or computer wins
loop to let us know who wons by counting the time the user or pc wins


rules
rock beats Scissor
scissor beats paper
paper beats rock



*/


// paste your JS generated by blockly below here

var Pointsforplayer, pointforPC, Player, selections, PC;

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


Pointsforplayer = 0;
pointforPC = 0;
while (!(pointforPC == 3 || Pointsforplayer == 3)) {
  Player = window.prompt('Lets play Rock, Paper and Scisor');
  selections = ['Paper', 'Rock', 'Scisor'];
  PC = listsGetRandomItem(selections, false);
  if (Player == 'Scisor' && PC == 'Paper') {
    window.alert('Player Wins');
    Pointsforplayer = Pointsforplayer + 1;
  } else if (Player == 'Scisor' && PC == 'Rock') {
    window.alert('Computer wins');
    pointforPC = pointforPC + 1;
  } else if (Player == 'Scisor' && PC == 'Scisor') {
    window.alert('We are tied');
  } else if (Player == 'Paper' && PC == 'Rock') {
    window.alert('Player wins');
    Pointsforplayer = Pointsforplayer + 1;
  } else if (Player == 'Paper' && PC == 'Scisor') {
    window.alert('Computer wins');
    pointforPC = pointforPC + 1;
  } else if (Player == 'Paper' && PC == 'Paper') {
    window.alert('We are tied');
  } else if (Player == 'Rock' && PC == 'Scisor') {
    window.alert('Player wins');
    Pointsforplayer = Pointsforplayer + 1;
  } else if (Player == 'Rock' && PC == 'Paper') {
    window.alert('Computer Wins');
    pointforPC = Pointsforplayer + 1;
  } else if (Player == 'Rock' && PC == 'Rock') {
    window.alert('We are tied');
  }
  if (Pointsforplayer == 3) {
    window.alert('You won by 3 against ' + String(pointforPC));
  } else if (pointforPC == 3) {
    window.alert('You lost by 3 against ' + String(Pointsforplayer));
  }
}