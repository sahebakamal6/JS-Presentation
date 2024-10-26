


//=============Presentation Chapters:
//============Chapter 26: Rounding numbers

//=======TOPIC 01:Math.round()

//function: Math.round():it rounds the number with the nearest integer
//which means if the decimal part is 0.5 or above (like 0.6 , 0.7 or 0.9 etc) then
//it rounds up and if the decimal part is below 0.5 (like 0.4, 0.3 etc) then
//it rounds down as show in example:

console.log(Math.round(2.6));//answer will be 3
console.log(Math.round(2.3));//answer will be 2
console.log(Math.round(2.5));//answer will be 3

//in a variable

var newNum = Math.round(4.8)
console.log(newNum);//answer will be 5

var newnUm = Math.round(4.5)
console.log(newnUm);//answer will be 5

var nEwNum = Math.round(4.2)
console.log(nEwNum);//answer will be 4

//=======TOPIC 02:Math.floor()

//function: Math.floor():it always rounds down even if the decimal part
// is 0.5 or above,as shown in example

console.log(Math.floor(2.6));//answer will be 2 cuz it always rounds down
console.log(Math.floor(2.3));//answer will be 2 cuz it always rounds down
console.log(Math.floor(2.9));//answer will be 2 cuz it always rounds down

//in a variable

var neWNum = Math.floor(4.8)
console.log(neWNum);//answer will be 4 cuz it always rounds down

var newnUM = Math.floor(4.5)
console.log(newnUM);//answer will be 4 cuz it always rounds down

var nEwNUM = Math.floor(4.2)
console.log(nEwNUM);//answer will be 4 cuz it always rounds down


//=======TOPIC 03:Math.ceil()

//function: Math.floor():it always rounds up even if the decimal part is below
//0.5 (like 0.4, 0.2 or 0.3 etc)as shown in example

console.log(Math.ceil(2.6));//answer will be 3 cuz it always rounds up
console.log(Math.ceil(2.3));//answer will be 3 cuz it always rounds up
console.log(Math.ceil(2.9));//answer will be 3 cuz it always rounds up

//in a variable

var NewNum = Math.ceil(4.8)
console.log(NewNum);//answer will be 5 cuz it always rounds up

var NeWnUm = Math.ceil(4.5)
console.log(NeWnUm);//answer will be 5 cuz it always rounds up

var nEwNuM = Math.ceil(4.2)
console.log(nEwNuM);//answer will be 5 cuz it always rounds up



//============Chapter 27: Generating random numbers

//function:Math.random()

//without variable
console.log(Math.random());//generating any number in decimal

//in a variable
let number = Math.random()
console.log(number);//generating any number in decimal

//function:Math.random() with Math.round()

console.log(Math.round(Math.random()))//here Math.round(),rounded up the decimal part
//so the answer will be 0 or 1

//without variable
console.log(Math.round(Math.random()*10))//here we multiplied random numbers with 10
//which means it will generate number from 0 to 10 now.

//in a variable
let  Num = Math.round(Math.random()*100)//here we multiplied random numbers with 100
//which means it will generate number from 0 to 100 now.
console.log(Num);


