// 1 basics
// console.log('Hello JS!');
// let x = 10;
// console.log(x);
// window.alert('JS here');
// let name = 'jeff';
// console.log('i am not',x ,'and', name);

// document.getElementById('1').innerHTML = 'hey ' + x;
// document.getElementById('2').innerHTML = 'I am';
// document.getElementById('n').innerHTML = 'Iron Man';
// ---------------------------------------------------------------------

// 2 basics
// let username = window.prompt('was ur name?')
// console.log(username);
// ---------------------------------------------------------------------

// 3 get info from html and then print
// let username;
// document.getElementById('submit').onclick = function () {
//     username = document.getElementById('myText').value;
//     console.log(username);
//     document.getElementById('myLabel').innerHTML = 'Hey ' + username;
// }
// ---------------------------------------------------------------------

// 4 change the datatype of variables
// let x;
// let y;
// let z;

// x = Number('45');
// console.log(x);

// y = String(3.4);
// console.log(y);

// x += 1;

// console.log(x);
// console.log(typeof y);
// ---------------------------------------------------------------------

// 5 using const
// const pi = 22 / 7;
// let radius;
// let circumference;

// radius = window.prompt('wat is da radis?');
// circumference = 2 * pi * radius;
// console.log(circumference);
// ---------------------------------------------------------------------

// 6 using Math library functions
// let x = 5.4353456756;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;
// x = Math.round(x);
// console.log(x);

// x = Math.floor(x);
// console.log(x);

// x = Math.ceil(x);
// console.log(x);

// x = Math.pow(x, 2);
// console.log(x);

// x = Math.sqrt(x);
// console.log(x);

// x = Math.abs(x);
// console.log(x);

// maximum = Math.max(x, y, z);
// console.log(maximum);

// minimum = Math.min(x, y, z);
// console.log(minimum);

// x = Math.PI;
// console.log(x);
// ---------------------------------------------------------------------

// 7 solving hypotenuse - easy way
// let c;
// let a;
// let b;
// a = Number(2);
// b = Number(2);
// let inner = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(inner);
// console.log(c);

// 7 solving hypotenuse - complex way
// let c;
// let a;
// let b;

// document.getElementById('myBtn').onclick = function (){
//     a = document.getElementById('A').value;
//     a = Number(a);

//     b = document.getElementById('B').value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     document.getElementById('ans').innerHTML = 'The hypotenuse is = ' + c;
// }
// ---------------------------------------------------------------------

// 8 counter
// let counter = 0;
// counter = Number(counter);
// document.getElementById('inc').onclick = function (){
//     counter += 1;
//     document.getElementById('numb').innerHTML = counter;
// }

// document.getElementById('reset').onclick = function (){
//     counter = 0;
//     document.getElementById('numb').innerHTML = counter;
// }

// document.getElementById('dec').onclick = function (){
//     counter -= 1;
//     document.getElementById('numb').innerHTML = counter;
// }
// ---------------------------------------------------------------------

// 9 random
// let x = Math.floor(Math.random() * 20) ;
// console.log(x);
// ---------------------------------------------------------------------

// 10 string properties
// let username = 'John Wicc';
// console.log(username);
// console.log(username.length);
// console.log(username.charAt(3));
// console.log(username.endsWith('c'));
// console.log(username.indexOf('n'));
// console.log(username.lastIndexOf('c'));      // when does it appear in the string for the last time
// console.log(username.trim());                // gets rid of any space before or after the username
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());
// console.log(username.replaceAll('c', 'l'));
// console.log(username.replaceAll('c', ''));
// ---------------------------------------------------------------------

// 11 slice
// let fullName = 'John Wicc';
// let firstName;
// let lastName;

// firstName = fullName.slice(0, fullName.indexOf(' '));
// console.log(firstName);

// lastName = fullName.slice(fullName.indexOf(' ') + 1);
// console.log(lastName);
// ---------------------------------------------------------------------

// 12 method chaining
// let username = 'John Wicc';
// console.log(username.charAt(3).toUpperCase().trim());
// ---------------------------------------------------------------------

// 13 if statement
// let x = 3;

// if (x == 5) {
//     console.log('yo');
// }
// else {
//     console.log('i still won somehow')
// }

// if (x <= 4)                                // if x is less than or equal to 4
// {
//     console.log('i won');
// }

// if (x == 3) {
//     console.log('nope');
// }

// let online = true;

// if (online) {
//     console.log("He's online!")
// }
// ---------------------------------------------------------------------

// 14 check property
// const visa = document.getElementById('visa');
// const master = document.getElementById('master');
// const american = document.getElementById('american');

// document.getElementById('submit').onclick = function () {
//     if (visa.checked) {
//         document.getElementById('label').innerHTML = 'You selected Visa Card';
//     }
//     else if (master.checked) {
//         document.getElementById('label').innerHTML = 'You selected Master Card';
//     }
//     else if (american.checked) {
//         document.getElementById('label').innerHTML = 'You selected American Express Card';
//     }
//     else {
//         document.getElementById('label').innerHTML = 'Check a box dude was wrong with u';
//     }
// }
// ---------------------------------------------------------------------

// 15 switch statement
// for letters
// let grade = "B";

// switch (grade) {
//     case 'A':
//         console.log('You did well!');
//         break;
//     case 'B':
//         console.log('You did good');
//         break;
//     case 'C':
//         console.log('You tried well!');
//         break;
//     case 'D':
//         console.log("You could've done better!");
//         break;
//     case 'F':
//         console.log("Pack ur stuff!");
//         break;
//     default:
//         console.log('bruh u need to take the exam asap');
//         break;
// }

// for numbers
// let grade = 92;

// switch (true) {
//     case grade >= 80:
//         console.log('You did well!');
//         break;
//     case grade >= 70:
//         console.log('You did good');
//         break;
//     case grade >= 60:
//         console.log('You tried well!');
//         break;
//     case grade >= 50:
//         console.log("You could've done better!");
//         break;
//     case grade < 50:
//         console.log("Pack ur stuff!");
//         break;
//     default:
//         console.log('bruh u need to take the exam asap');
//         break;
// }
// ---------------------------------------------------------------------

// 16 && || operators
// let price = 699;
// let negotiable = true;
// if (price >= 700 && price <= 1000) {
//     console.log('The price is fine!');
// }
// else if (price >= 400 && price <= 700) {
//     console.log('The price is good!');
// }
// if ((price == 699 || price == 999) && !negotiable) { // price is true but not negotiable
//     console.log('The price is fixed!');
// }
// else if ((price == 699 || price == 999) && negotiable) {
//     console.log('The price is not fixed');
// }
// ---------------------------------------------------------------------

// 17 while loop
// sec 1
// let count = 0;
// x = 50;
// let username = "John Wicc";
// while (username = "John Wicc" && x >= 1){
//     count += 1;
//     console.log(count);
//     x--;
// }

// sec 2
// let username = "";
// while (username == "") {
//     username = window.prompt('Please enter your name');
// }
// console.log('Hello', username);
// ---------------------------------------------------------------------

// 18 do while loop
// let count = 17;
// do{
//     console.log(count);
//     count--;
// }
// while (count >= 1)
// ---------------------------------------------------------------------

// 19 for loop
// sec 1
// for (x = Number(1); x <= 69; x++) {
//     console.log(x);
// }

// sec 2
// for (x = Number(1); x <= 69; x+=7) {
//     console.log(x);
// }
// ---------------------------------------------------------------------

// 20 break / continue
// break is used to get out of a loop when a certain condition is met
// continue will skip the output that was gonna get generated under a certain condition
// for (let i = 1; i <= 20; i += 1) {
//     if (i == 13)
//         break;
//     console.log(i)
// }
// console.log("----------------------");
// for (let i = 1; i <= 20; i += 1) {
//     if (i == 13)
//         continue;
//     console.log(i)
// }
// ---------------------------------------------------------------------

// 21 nested loops
// let symbol = window.prompt('what symbol would you like to make the rectangle of?');
// let rows = window.prompt('how many rows do u want?');
// let columns = window.prompt('how many columns do you want?');

// for (let i = 1; i <= rows; i += 1) {
//     for (let j = 1; j <= columns; j += 1) {
//         document.getElementById('rectangle').innerHTML += symbol;
//     }
//     document.getElementById('rectangle').innerHTML += "<br>";
// }
// ---------------------------------------------------------------------

// 22 function
// sec 1
// function texts(){
//     console.log('sup boi');
//     console.log('sup boi 2');
//     console.log('sup boi 3');
//     console.log('sup boi 4');
// }
// texts();  // output

// sec 2
// function startProgram() {
//     let username = 'John Wicc';                      // the values (username and age) are just limited to the pair of curly braces they are in, if u want to use them
//     let age = '21';                                  // outside of those braces, you have to call the outside function inside of those braces and then
//     display(username, age);                          // assign them the relevant values just like i called display() and then passed username and age so that
// }                                                    // i can use them in the function below.

// startProgram();

// function display(a, b) {
//     console.log('My name is', a);
//     console.log('My age is', b);
// }
// ---------------------------------------------------------------------

// 23 return
// let area;
// let width;
// let height;

// width = window.prompt('enter width');
// height = window.prompt('enter height');

// area = width * height;

// function getArea(){
//     return area;
// }
// console.log(getArea());
// ---------------------------------------------------------------------

// 24 ternary operator, shortcut for if else statements (condition ? exprIfTrue : exprIfFalse)
// sec 1 customary way
// let adult = checkAge(21);
// console.log(adult);
// function checkAge(age) {
//     if (age >= 18)
//         return true;
//     else {
//         return false;
//     }
// }

// sec 2 using ternary operator
// let adult = checkAge(21);
// console.log(adult);
// function checkAge(age) {
//     return age >= 18 ? 'he is an adult, he can go' : 'step outta the dam car';
// }
// ---------------------------------------------------------------------

// 25 let vs var
// let = variables are limited to block scope {}
// var = variables are limited to a function(){}
// sec 1 using let and see if we can use the variable in some other block
// for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
// }
// console.log(i);                                                     // gives error saying i is undefined

// sec 2 the var way
// for (var i = 1; i <= 5; i += 1) {
//     console.log(i);
// }
// console.log(i);                                                     // prints from 1 to 6

// sec 3 the var can't escape a function tho
// checkVar();
// function checkVar() {
//     for (var i = 1; i <= 5; i += 1) {
//         console.log(i);                                                // prints from 1 to 5
//     }
// }
// console.log(i);                                                        // doesn't know the value of i

// sec 4 the best way is to use a global variable (a variable outside of any block or function so that
// it can be used anywhere in our program, BUT BEWARE OF USING THE WORD 'VAR' TO DECLARE GLOBAL VARIABLES
// BECAUSE IT CAN MEDDLE WITH THE BROWSERS OWN PROPERTIES)
// checkVar();
// function checkVar() {
//     for (var i = 1; i <= 5; i += 1) {
//         console.log(i);
//     }
// }
// console.log(i);
// ---------------------------------------------------------------------

// 26 Template literals (`)
// let username = 'john wicc';
// let items = 5;
// let total = 75;

// sec 1
// console.log('Hello', username);
// console.log('You have', items, 'items');
// console.log('Your total is', total);

// sec 2
// console.log(`Hello ${username}`);
// console.log(`You have ${items} items`);
// console.log(`Your total is ${total}`);
// document.getElementById('ternary').innerHTML = `sup ${username}, you have ${items} items, your total
// is ${total}`;
// ---------------------------------------------------------------------

// 27 toLocaleString()
// let myNum = 123456.789;
// myNum = myNum.toLocaleString("en-US");                                         // converts the number in US format
// console.log(myNum);

// myNum = myNum.toLocaleString('en-US', {style: 'currency', currency: 'USD'});   // converts the number into USD format and adds the currency symbol to it
// console.log(myNum);

// myNum = myNum.toLocaleString(undefined, { style: 'percent'});                  // into percent
// console.log(myNum);

// myNum = myNum.toLocaleString(undefined, { style: 'unit', unit: 'celsius'});    // into celsius
// console.log(myNum);
// ---------------------------------------------------------------------

// 28 number guessing game
// const answer = Math.floor(Math.random() * 10 + 1);
// console.log(answer);
// let guessCount = 0;
// document.getElementById('submitbtn').onclick = function () {
//     let guess = document.getElementById('input').value;
//     guessCount += 1;

//     if (guess == answer) {
//         alert(`your guess of ${guess} is right, it took you ${guessCount} guesses`);
//     }
//     else if (guess < answer) {
//         alert(`too small!`);
//     }
//     else {
//         alert(`too big!`);
//     }
// }
// ---------------------------------------------------------------------

// 29 controlling temps
// let temp;
// function toCelsius(temp) {
//     return (temp - 32.0) * 5.0 / 9.0;
// }
// function toFahrenheit(temp) {
//     return (temp * 9.0 / 5.0) + 32.0;
// }

// document.getElementById('submitBtn').onclick = function () {
//     temp = document.getElementById('inputTemp').value;

//     if (document.getElementById('inputUnit1').checked) {
//         temp = toCelsius(temp);
//         document.getElementById('converted').innerHTML = `The temperature in Celsius is °${temp}C`;
//     }
//     else if (document.getElementById('inputUnit2').checked) {
//         temp = toFahrenheit(temp);
//         document.getElementById('converted').innerHTML = `The temperature in Fahrenheit is °${temp}F`;
//     }
//     else {
//         document.getElementById('converted').innerHTML = `Please select a temperature type to convert to`;
//     }
// }
// ---------------------------------------------------------------------

// 30 array
// let fruits = ['apple', 'orange', 'banana'];

// console.log(fruits);

// console.log(fruits[0]);

// fruits[2]='watermelon';
// console.log(fruits[2]);

// fruits.push('banana');               // push to the end
// console.log(fruits);

// fruits.pop();                        // pop the last element
// console.log(fruits);

// fruits.unshift('peach');             // push to the start
// console.log(fruits);

// fruits.shift();                      // pop the first element
// console.log(fruits);

// console.log(fruits.length);
// console.log(fruits.indexOf('orange'));
// ---------------------------------------------------------------------

// 31 iterate array
// let fruits = ['apple', 'orange', 'banana', 'watermelon', 'peach', 'apricot'];

// sec 1
// for (let i = 0; i<fruits.length; i+=1) {
//     console.log(fruits[i]);
// }

// sec 2
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// ---------------------------------------------------------------------

// 32 sort array
// let fruits = ['apple', 'orange', 'banana', 'watermelon', 'peach', 'apricot'];

// fruits = fruits.sort();
// console.log(fruits);

// fruits = fruits.sort().reverse();
// console.log(fruits);
// ---------------------------------------------------------------------

// 33 2D arrays
// let fruits = ['apple', 'orange', 'banana'];
// let vegs = ['carrots', 'onions', 'potatoes'];
// let meat = ['fish', 'beef', 'chicken'];

// // sec 1
// // let foodType = [fruits, vegs, meat];
// // for (let foods of foodType) {
// //     for (let food of foods) {
// //         console.log(food);
// //     }
// // }

// // sec 2 change an element in a 2D array
// let foodType = [fruits, vegs, meat];
// foodType[0][2] = 'watermelon';
// for (let foods of foodType) {
//     for (let food of foods) {
//         console.log(food);
//     }
// }
// ---------------------------------------------------------------------

// 34 spread operator
// unpacks the array so we can have indivisual elements, could be
// helpful in finding the max of an array

// sec 1
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);
// console.log(...numbers);

// console.log(`The max is ${Math.max(...numbers)}`);

// sec 2
// let fruits = ['apple', 'orange', 'banana'];
// let vegs = ['carrots', 'onions', 'potatoes'];

// fruits.push(...vegs);
// console.log(fruits);
// ---------------------------------------------------------------------

// 35 rest parameter
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// let f = 6;

// console.log(sum(a, b, c, d, e, f))
// function sum(...numbers){
//     let total = 0;
//     for (let number of numbers){
//         total += number;
//     }
//     return total;
// }
// ---------------------------------------------------------------------

// 36 callback
// sec 1 customary way
// let total = sum(2, 3);

// function sum(a, b){
//     return a + b;
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById('label').innerHTML = output;
// }

// displayDOM(total);

// sec 2 callback way
// its just calling a function into another function so that:
// a function is not going to run before a task is completed.
// helps us develop asynchronous completed (when one function
// has to wait for another function)

// function sum(a, b, newFunc){
//     let result = a + b;
//     newFunc(result);
// }
// // gave 2 + 3 to result and then called display to display 5 on the browser

// function display(output){
//     document.getElementById('label').innerHTML = output;
// }
// // gets the value 5 as an argument passed by the sum function

// sum(2, 3, display);
// ---------------------------------------------------------------------

// 37 forEach()
// sec 1 simple implementation for better understanding
// let ages = [18, 12, 33, 14, 25, 26];
// ages.forEach(display);
// function display(element){
//     console.log(element);
// }

// sec 2
// let students = ['dang', 'mango', 'sympa'];
// students.forEach(capitalize);                    // pass a function and it will apply that function
// students.forEach(print);                         // to each of the element of the array
// function capitalize (element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }
// function print(element){
//     console.log(element);
// }
// ---------------------------------------------------------------------

// 38 array.map()
// let numbers = [1, 2, 3, 4, 5, 6];
// let squares = numbers.map(square);

// squares.forEach(display);

// function square(element){
//     return Math.pow(element, 2);
// }

// function display(element){
//     console.log(element);
// }
// ---------------------------------------------------------------------

// 39 array.filter()
// let ages = [18, 12, 33, 14, 25, 26];
// let adults = ages.filter(checkAge);
// adults.forEach(display);
// function checkAge(element){
//     return element >= 18;
// }

// function display(element){
//     console.log(element);
// }
// ---------------------------------------------------------------------

// 40 array.reduce()
// let prices = [118, 132, 313, 134, 245, 266];
// let total = prices.reduce(checkOut);

// console.log(`The total is ${total}`);

// function checkOut(total, element){
//     return total + element; // we use element bcuz that's the way of fetching the array element
// }
// ---------------------------------------------------------------------

// 41 sort arrays
// let grades = [100, 50, 90, 60, 80];
// grades = grades.sort(asc);

// function desc(x, y){
//     return y - x;                      // meaning reverse the order
// }
// function asc(x, y){
//     return x - y;
// }

// grades.forEach(display);

// function display(element){
//     console.log(element);
// }
// ---------------------------------------------------------------------

// 42 function expression - a function without a name

// sec 1
// const greeting = function(){
//     console.log("Hello");
// }
// greeting();

// sec 2 without a function expression, we will have to write 2 functions
// if the button in HTML is clicked, the function will be called and will do its job, ez!
// on click = run this ("fucntion()") function;
// let count = 0;

// function inc(){
//     count += 1;
//     document.getElementById('label1').innerHTML = count;
// }

// function dec(){
//     count -= 1;
//     document.getElementById('label1').innerHTML = count;
// }

// sec 3 with func expression, we can get rid of the 2 functions
// let count = 0;
// document.getElementById('inc').onclick = function () {
//     count += 1;
//     document.getElementById('label1').innerHTML = count;
// }

// document.getElementById('dec').onclick = function () {
//     count -= 1;
//     document.getElementById('label1').innerHTML = count;
// }
// ---------------------------------------------------------------------

// 43 arrow function =>
// sec 1
// const greeting = (username) => {
//     console.log(`hello ${username}`);
// }
// greeting("bro");

// sec 2
// const percent = (x, y) => {
//     return (x / y) * 100;
// }
// console.log(`it is ${percent(15, 3)}%`);
// ---------------------------------------------------------------------

// 44 a program that shuffles the array
// let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// shuffle = array => {
//     randomIndex = Math.floor(Math.random() * array.length);

//     let currentIndex = 0;
//     while (currentIndex != array.length) {
//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//         currentIndex += 1;
//     }
// }

// shuffle(letters);
// letters.forEach(letter => console.log(letter));
// ---------------------------------------------------------------------

// 45 nested functions
// let username = 'john';
// let texts = 5;
// function login(user, text) {
//     function displayUserName(user){
//         console.log(`hey ${user}!`);
//     }
//     function displayTexts(text){
//         console.log(`u have ${text} new texts lol`);
//     }
//     displayUserName(user);
//     displayTexts(text);
// }
// login(username, texts);
// ---------------------------------------------------------------------

// 46 maps
// const store = new Map([
//     ['t-shirt', 20],
//     ['jeans', 30],
//     ['socks', 10],
//     ['caps', 25]
// ]);
// // we can also add new pairs using the .set() method and delete using .delete() method
// let cart = 0;
// cart += store.get('t-shirt');
// cart += store.get('jeans');
// console.log(`$${cart}`);

// store.set('shoes', 150);
// store.forEach((value, key) => console.log(`${key} $${value}`));
// console.log('\n')                                                      // to add a line break
// store.delete('socks');
// store.forEach((value, key) => console.log(`${key} $${value}`));

// // use .has() method to see if we have an item in the store
// console.log(store.has('caps'));
// console.log(store.has('socks'));

// // we can check the size using the .size() method
// console.log(store.size);
// ---------------------------------------------------------------------

// 47 classes etc.
// class phone {
//     constructor(brand, color, model, price){
//         this.brand = brand;
//         this.color = color;
//         this.model = model;
//         this.price = price;
//     }
// }

// const p1 = new phone('samsung', 'purple', 'a32', '$300');
// console.log(p1);
// ---------------------------------------------------------------------

// 48 static keyword
// lets some variable of the main class have no effect while creating the child classes
// class cart{
//     static itemNo = 0;
//     constructor(item){
//         this.item = item;
//         cart.itemNo += 1;
//     }
// }

// const i1 = new cart('pizza');
// const i2 = new cart('bottle');
// const i3 = new cart('sauce');

// console.log(i1);
// console.log(cart.itemNo);
// ---------------------------------------------------------------------

// 49 inheritance
// class car {
//     mdl;
//     spd;
//     clr;

//     speed() {
//         console.log(`the speed of this car is ${this.spd} miles per hour`)
//     }

//     color() {
//         console.log(`the color of this car is ${this.clr}`)
//     }

//     model() {
//         console.log(`the model of this car is ${this.mdl}`)
//     }
// }

// class honda extends car {
//     prc;
//     price() {
//         console.log(`the price of this honda model is $${this.prc}`);
//     }
// }

// const h1 = new honda();

// h1.mdl = 'civic';
// h1.model()

// h1.prc = 25000;
// h1.price();
// ---------------------------------------------------------------------

// 50 super keyword
// takes the constructor values from the parent class
// class car {
//     constructor(spd, clr, mdl) {
//         this.spd = spd;
//         this.clr = clr;
//         this.mdl = mdl;
//     }

//     speed() {
//         console.log(`the speed of this car is ${this.spd} miles per hour`)
//     }

//     color() {
//         console.log(`the color of this car is ${this.clr}`)
//     }

//     model() {
//         console.log(`the model of this car is ${this.mdl}`)
//     }
// }

// class honda extends car {
//     constructor(spd, clr, mdl, prc) {
//         super(spd, clr, mdl);
//         this.prc = prc;
//     }
//     price() {
//         console.log(`the price of this honda model is $${this.prc}`);
//     }
// }

// const h1 = new honda(210, 'black', 'civic', 25000);

// h1.speed();
// h1.color();
// h1.model();
// h1.price();
// ---------------------------------------------------------------------

// 51 getters
// sec 1
// get method is just a function that runs whenever a constructor of that class
// is called. We use it bcuz sometimes we need to perform a couple of functions
// whenever we call a constructor. This helps when we have to call a constructor
// like h1.speed and then by just calling the .speed with h1, we can invoke the
// speed function and perform the required tasks

// class car {
//     constructor(speed, color, model) {
//         this._speed = speed;
//         this._color = color;
//         this._model = model;
//     }

//     get speed() {
//         console.log(`the speed of this car is ${this._speed} miles per hour`)
//         let speeds = [200, 210, 220, 250, 300];
//         console.log('\n')
//         for (let spd of speeds) {
//             console.log(`the speed is ${spd}`);
//         }
//         console.log('\n')
//     }

//     get color() {
//         console.log(`the color of this car is ${this._color}`)
//     }

//     get model() {
//         console.log(`the model of this car is ${this._model}`)
//     }
// }

// class honda extends car {
//     constructor(speed, color, model, price) {
//         super(speed, color, model);
//         this._price = price;
//     }
//     get price() {
//         console.log(`the price of this honda model is $${this._price}`);
//     }
// }

// const h1 = new honda(210, 'black', 'civic', 25000);

// h1.speed;
// h1.color;
// h1.model;
// h1.price;

// sec 2 explanation
// class car {
//     constructor(speed) {
//         this.speed = speed;   // first this.speed
//     }

//     speed() {   // second this.speed
//         console.log(`the speed of this car is ${this.speed} miles per hour`)
//         // The above this.speed isn't considering the first this.speed. Rather, this.speed
//         // means the second this.speed.
//     }
// }
// class honda extends car {
// }

// const h1 = new honda(210);
// h1.speed;
// ---------------------------------------------------------------------

// 52 setters
// they just let you set the value of one of your properties
// class car {
//     constructor(speed, color, model) {
//         this._speed = speed;
//         this._color = color;
//         this._model = model;
//     }

//     get speed() {
//         console.log(`the speed of this car is ${this._speed} miles per hour`)
//     }

//     get color() {
//         console.log(`the color of this car is ${this._color}`)
//     }

//     get model() {
//         console.log(`the model of this car is ${this._model}`)
//     }
// }

// class honda extends car {
//     constructor(speed, color, model, price) {
//         super(speed, color, model);
//         this._price = price;
//     }
//     get price() {
//         console.log(`the price of this honda model is $${this._price}`);
//     }
//     set price(prc) {
//         this._price = prc;
//         if (this._price > 30000) {
//             this._price = 30000;
//         }
//         else if (this._price < 15000) {
//             this._price = 15000;
//         }
//     }
// }

// const h1 = new honda(210, 'black', 'civic', 25000);
// h1.price = 30000;                                 // the set method passes 30,000 to prc
// then we set the price of the car (which is _price in the constructor) to prc i.e, 30,000
// ---------------------------------------------------------------------

// 53 pass objects to functions
// class car{
//     constructor (model, year, color){
//         this.model = model;
//         this.year = year
//         this.color = color
//     }
// }

// const car1 = new car('Lambo', 2022, 'black');
// display(car1);

// function display (cars){
//     console.log(cars.model);
//     console.log(cars.year);
//     console.log(cars.color);
// }
// ---------------------------------------------------------------------

// 54 create array of objects
// sec 1
// class car {
//     constructor(model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }
// const car1 = new car('Lambo', 2022, 'black');
// const car2 = new car('Ferrari', 2024, 'red');
// const car3 = new car('Maclaren', 2022, 'sapphire');
// let cars = [car1, car2, car3]
// console.log(cars[0], cars[1], cars[2]);

// sec 2
// class car {
//     constructor(model, year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// let cars = [new car('Lambo', 2022, 'black'),
//             new car('Ferrari', 2024, 'red'),
//             new car('Maclaren', 2022, 'sapphire')];

// console.log(cars[0], cars[1], cars[2]);
// ---------------------------------------------------------------------

// 55 error handling
// sec 1
// try{
//     console.lag('h');
// }
// catch(error){
//     console.log(error)
// }

// OR

// catch{
//     console.log('You made an error!')
// }

// sec 2
// let x = window.prompt('enter a number');
// x = Number(x);
// try{
// if (isNaN(x)){
//     throw 'the entered value is not a number';
// }
// else {
//     console.log(x);
// }
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log('this shit always executes')
// }
// ---------------------------------------------------------------------

// 56 setTimeout()
// const f1 = () => {
//     window.alert('buy my shit pls')
// }

// const f2 = () => {
//     window.alert('buy my shit plsssssss')
// }

// const f3 = () => {
//     window.alert('yoooooooooooooooooo')
// }

// setTimeout(f1, 2000);
// setTimeout(f2, 4000);
// setTimeout(f3, 6000);
// ---------------------------------------------------------------------

// 57 setInterval()
// let day = document.getElementById('day');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');

// let dateFunc = () => {
//     let date = new Date();
//     day.innerHTML = date.getDate();
//     {
//     if ((hours.innerHTML = date.getHours()) > 12)
//     hours.innerHTML = hours.innerHTML- 12;
//     }
//     minutes.innerHTML = date.getMinutes();
//     seconds.innerHTML = date.getSeconds();
// }

// setInterval(dateFunc, 1000)
// ---------------------------------------------------------------------

// 58 diff btw asynchronous and synchronous code
// // synchronous
// console.log('1')
// console.log('2')
// console.log('3')

// // asynchronous
// console.log('1')
// setTimeout(() => {console.log('2')}, 1000)
// console.log('3')
// ---------------------------------------------------------------------

// 59 console.time()
// lets us know how much time a specific piece of code takes to run
// console.time();
// alert('click')
// setTimeout(() => {console.log('Yo')}, 1000);
// console.timeEnd();
// ---------------------------------------------------------------------

// 60 promises
// let userleft = false;
// let userIsWatchingMemes = false;

// let analytics = new Promise ((resolveeee, reject) => {
//     if (userleft){
//         reject ('f')
//     }
//     else if (userIsWatchingMemes){
//         reject ('f')
//     }
//     else {
//         resolveeee ('lmao lol it worked')
//     }
// });

// analytics.then((value) => {console.log(value)})
// .catch((value) => {console.log(value)});
// ---------------------------------------------------------------------

// 61 async
// instead of using the words resolve and reject, we use throw for reject and everything
// else is a resolve
// let userleft = true;

// async function loadfile() {
//     if (userleft) {
//         throw ('f')
//     }
//     else
//         return ('lmao i did it') // returns this as an argument for then(value...)
// }

// loadfile().then((value) => { console.log(value) }).catch((value) => { console.log(value) });
// ---------------------------------------------------------------------

// 62 async with await
// let userleft = false;

// function loadfile() {
//     if (userleft) {
//         throw (`user has left, don't wait`)
//     }
//     else
//         return ('user is here, proceed')
// }

// async function process(){
//     try{
//         let result = await loadfile();
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// process();
// ---------------------------------------------------------------------

////////////////////////// DOM //////////////////////////
// console.log(document.title);
// console.log(document.URL);

// document.title = 'yo sup';
// document.location = 'https://yts.mx/'

// document.body.style.backgroundColor = 'blue';

// ---------------------------------------------------------------------

// let element = document.querySelector('.dom');
// element.style.backgroundColor = 'lightgreen';
// ---------------------------------------------------------------------

// radio buttons
// let fruits = document.getElementsByName('fruits');
// fruits.forEach(fruit => {
//     if (fruit.checked){
//         console.log(fruit.value);
//     }
// })

// let fruits = document.querySelectorAll('[for]');
// fruits.forEach(fruit => {
//     fruit.style.backgroundColor = 'red'
// })
// ---------------------------------------------------------------------

// let element = document.body;
// let child1 = element.firstElementChild;
// child1.style.backgroundColor = 'lightgreen';

// let child2 = document.querySelector('.c');
// child2.style.backgroundColor = 'red';

// let ul3 = document.querySelector('.c');
// ul3.children[2].style.backgroundColor = 'purple';

// let ul2 = document.querySelector('.b');
// let child = Array.from(ul2.children);
// child.forEach(value => {
//     value.style.backgroundColor = 'yellow';
// })
// ---------------------------------------------------------------------

// const heading = document.createElement('h1');
// heading.textContent = `yo sup bro you've gotten pretty far`;
// document.body.append(heading);
// ---------------------------------------------------------------------

// const heading = document.querySelector('.heading');
// heading.style.backgroundColor = 'green';
// heading.style.color = 'white';
// heading.style.textAlign = 'center';
// ---------------------------------------------------------------------

// const heading = document.querySelector('.heading');
// heading.style.backgroundColor = 'green';
// heading.style.color = 'white';
// heading.style.textAlign = 'center';
// heading.style.padding = '35px';
// heading.style.width = '300px';
// heading.style.margin = 'auto';
// heading.style.marginTop = '75px';

// const button = document.querySelector('#clickMeBtn');
// button.style.backgroundColor = 'cyan';
// button.style.border = 'none';
// button.style.padding = '10px 15px';
// button.style.margin = '50px auto';
// button.style.display = 'flex';

// changeColor = () => {
//     button.style.backgroundColor = 'red'
// }
// changeColorBack = () => {
//     button.style.backgroundColor = 'cyan'
// }
// button.addEventListener ('mouseover', changeColor)
// button.addEventListener ('mouseout', changeColorBack)
// ---------------------------------------------------------------------

// const btn = document.querySelector('.imagehide button')
// const img = document.querySelector('.imagehide img')
// btn.addEventListener('click', () => {
//     if (img.style.visibility == 'hidden')
//         img.style.visibility = 'visible';
//     else {
//         img.style.visibility = 'hidden';
//     }
// });
// ---------------------------------------------------------------------

// window.addEventListener('keydown', (event) => {
//     console.log(event.key);
// })
// ---------------------------------------------------------------------

// const myDiv = document.querySelector('#myDiv');
// window.addEventListener('keydown', move);
// let y = 0;
// let x = 0;

// function move(event) {
//     switch (event.key) {
//         case 'ArrowDown':
//             y += 35;
//             myDiv.style.top = y + "px";
//             break;

//         case 'ArrowUp':
//             y -= 35;
//             myDiv.style.top = y + "px";
//             break;

//         case 'ArrowLeft':
//             x -= 35;
//             myDiv.style.left = x + "px";
//             break;

//         case 'ArrowRight':
//             x += 35;
//             myDiv.style.left = x + "px";
//             break;
//     }
// }
// ---------------------------------------------------------------------

// const btn = document.querySelector('.begin');
// btn.style.marginBottom = '25px';

// const animation = document.querySelector('.myDiv')

// btn.addEventListener('click', begin)
// function begin() {
//     let Timer = null;
//     let x = 0;
//     let y = 0;
//     let degree = 0;

//     Timer = setInterval(frame, 1);

//     function frame() {
//         if (x >= 550 ) {
//             clearInterval(Timer);
//         }

//         else {
//             x += 1;
//             y += 1;
//             degree += 5;
//             animation.style.left = x + 'px';
//             animation.style.top = y + 'px';
//             animation.style.transform = 'rotateY(' + degree + 'deg)';
//         }
//     }
// }
// ---------------------------------------------------------------------

// let canvas = document.querySelector('#myCanvas');
// let context = canvas.getContext('2d');

// context.beginPath();
// context.strokeStyle = 'red';
// context.moveTo(0, 0);
// context.lineTo(500, 500);
// context.stroke();
// context.moveTo(250, 250);
// context.lineTo(125, 400);
// context.stroke();
// context.moveTo(125, 400);
// context.lineTo(125, 500);
// context.stroke();
// context.moveTo(125, 500);
// context.lineTo(500, 0);
// context.stroke();
// ---------------------------------------------------------------------

// console.log(window.innerHeight)
// console.log(window.scrollY) // vertical
// console.log(window.scrollX) // horizontal
// let btn = document.querySelector('#myBtn');
// btn.addEventListener('click', () => window.open('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwih2cO3pK37AhWHgf0HHZdGAvQQPAgJ'))
// btn.addEventListener('click', () => window.close());
// ---------------------------------------------------------------------

// document.cookie = 'firstName = John; expires= Sun, 1 January 2030; path = /'
// console.log(document.cookie);

// function setCookie(name, value, daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
//     let expires = 'expires ='  + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires};`
// }

// setCookie ('name', 'john', 50);
// console.log(document.cookie);
// ---------------------------------------------------------------------
