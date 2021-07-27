const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Q1
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  const resp1 = answer;
  //Q2
  rl.question('What\'s an activity you like doing?', (answer) => {
    const resp2 = answer;
    //Q3
    rl.question('What do you listen to while doing that?', (answer) => {
      const resp3 = answer;
      //Q4
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        const resp4 = answer;
        //Q5
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          const resp5 = answer;
          //Q6
          rl.question('Which sport is your absolute favourite?', (answer) => {
            const resp6 = answer;
            //Q7
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              const resp7 = answer;
              //OUTPUT
              console.log(`Hello my name is ${resp1} and I enjoy ${resp2}. My favourite music to listen to is ${resp3} while doing ${resp2}. My favourite meal of the day is ${resp4} and the best part is ${resp5}. ${resp6} is my favourite sport. If I had a super power it would be ${resp7}!`)
    
            rl.close();
            });
          });
        });
      });
    });
  });
});