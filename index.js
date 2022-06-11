const numGuesGame = (num) => {
  let score = 1;
  let g=2;
  while (g > 1){
    let range = Math.floor(Math.random() * num) +1;
    console.log(range);
    console.log('\nSTAGE ' + (num-1));
    console.log("\Lets Begin\n");
    let guessedNumber = prompt('Guess the number from 1 to '+ num);

    if (guessedNumber==range){
       console.log('\nYou Guessed Right ' + username + '. Your New Point is ' + score);
       console.log('\nMove on to the next Stage');                         
       console.log("\Youre doing well\n");
       num++;
       score++;
       g++;
    }
    else{
      console.log('\nYou Guessed Wrong. Game Over!!!');
      console.log('\nYour Final Score is ' + score);
      break;
    }
  }
}

console.log("HI, WELCOME TO THE NUMBER GUESS GAME");
console.log("\nloading....\n");
let username = prompt('Please Enter Your Username');
console.log("\n");

let play = prompt('Hello '+ username + '. Are You Ready To Play (Y/N)');

if (play == 'y'){
  return numGuesGame(2);
}
else{
  console.log("Bye " + username + ", See You Again")
}