var readline = require('readline-sync');
var username = readline.question("Enter your clan name\n");
console.log("Welcome\t" + username + "!\n");
console.log("Let's play how well do you naruto\n");
var score = 0
function quiz(question , answer){
var useranswer = readline.question("\n" +question+ "\n")
if(useranswer.toLowerCase() === answer){
console.log("\nRight answer")
score=score+1
}
else{
  console.log('\nWrong answer')
}
console.log("\ncurrentscore:"+ score)
}
var questions =[{question:"what's the name of naruto's clan?", answer:"Uzumaki"},
{question:"Who is naruto's first kiss?", answer:"Sasuke"},
{question:"What's the name of sasuke's clan", answer:"Uchiha"},
{question:"Who is known as trash konoha?", answer:"Sakura"},
{question:"Who is the most savage character in narutoverse?", answer:"Itachi"},
{question:"Who is Brother of Sasuke", answer:"Itachi"},
{question:"Who murdered his entire clan at the age of 13", answer:"Itachi"}]

for (i=0 ;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}
if(score>2){
console.log("Welcome to the shinobi world Commrade")
}
else{
  console.log("Look at your window akatsuki is waiting for you to come out you traitor")
}