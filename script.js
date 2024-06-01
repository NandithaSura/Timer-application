const workduration = 1;
const smallbreak = 5;
const longbreak = 10;
let pomodo = 4;

function startimer(type, duration){
    const timerStatus = document.getElementById("timerStatus");
    timerStatus.innerHTML = `${type} timer started for ${duration} seconds`;

    setTimeout(() => {
        timerStatus.innerHTML = `${type} timer stopped`;
        if(type === "work"){
            if(pomodo === 1){
                pomodo = 4;
                startimer("break", longbreak);
            } else {
                startimer("break", smallbreak);
            }
        } else if(type === "break"){
            pomodo--;
            startimer("work", workduration);
        }
    }, duration * 1000);
}

document.getElementById("startButton").addEventListener("click", () => {
    startimer("work", workduration);
});

//const readline = require('node:readline');
//const { stdin: input, stdout: output } = require('node:process');

//const rl = readline.createInterface({ input, output });

//const workduration = 1;
//const smallbreak = 5;
//const longbreak = 10;
//let pomodo = 4;

//function startimer(type, duration){
  //  console.log(`${type} timer started`);

    //setTimeout(() => {
      //  console.log(`${type} timer stopped`);
        //if(type == "work"){
          //  if(pomodo == 1){
            //    pomodo = 4
              //  startimer("break", longbreak)
           // }else{
             //   startimer("break", smallbreak)
            //}

       // }else if(type == "break"){
         //   pomodo--;
           // startimer("work", workduration)
        //}

    //}, duration * 1000)
//}

//rl.question('Press Y to start the timer: ', (answer) => {

  //  if (answer == "y" || answer == "Y"){
    //    startimer("work", workduration);
    //}else{
      //  console.log("bye")
    //}
    //rl.close();
   //callback function is called after you entered the input 
  //console.log(`Thank you for your valuable feedback: ${answer}`);

//});