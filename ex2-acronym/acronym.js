

/*
we want to create a program that ask for a sentence and provide with a acronym 

-input.. small sentence from user to promot at the time that start running
-output..provide the first letter of each word uppercase and print a acronym

 set a variable to store sentence--
 transform each word the first letter into uppercase--
 remove the rest of the lenght of the work after keep the first one--
 print this letters uppercase in form of acronym */



// paste your JS generated by blockly below here

var acro, ele1, ele2, ele3;

function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}


acro = window.prompt('Enter you phrase');
acro = textToTitleCase(acro);
acro = acro.split(' ');

ele1 = acro[0].charAt(0);
ele2 = acro[1].charAt(0);
ele3 = acro[2].charAt(0);

window.alert([ele1,ele2,ele3].join(''));