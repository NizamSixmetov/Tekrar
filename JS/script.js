// alert(`hello`); alert(`world`)


// let name = 'John';
// let admin;
// admin = name;
// alert(admin);


// let name = "Ivan"

// alert(`Hello ${name}`)

// let name = "Ilya";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name}`);



// let age = prompt("Nece yasin var?");
// alert(`senin ${age} yasin var`)


// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss );


// let userName = prompt("Adiniz nedir?");
// alert(`Sizin adiniz ${userName}-dir`);

// let value = true;
// console.log(typeof value); // boolean

// let value = true

// value = String(value);
// console.log(typeof value)


// let a = 1,
//     b = 2;
// console.log(`sizin yazdiginiz regemler cemi ${a + b} edir`)

// let str = "123";
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);

// let age = Number("Lubaya stroka vmesto cisla");
// alert(age)

// let a = 1, b = 1;

// let c = ++a;
// let d = b++;
// alert(c);
// alert(d);

// let a = 2;
// let x = 1 + (a *= 2);

// alert(a);
// alert(x);

// let a = +prompt("Birinci reqem", 1);
// let b = +prompt("ikinci reqem", 2);

// alert(a + b);

// let a = prompt("Birinci reqem", );
// let b = prompt("ikinci reqem", );

// alert(+a + +b);

// let year = prompt("В каком году была опубликована спецификация ECMAScript-2015?");
// if(year == 2015){
//     alert("vi pravi")
//     alert("ti takoy umniy")
// }

// let year = prompt("necenci ilde dogulmusuz?");
// if(year == 1998){
//     alert("dogum tarixiniz 1998dir");
// }


// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?');
// if(year == 2015){
//     alert('da ti znatok');
// }else{
//     alert('a vot i ne pravilno');
// }

// let year = prompt('necenci ilde dogulmusan?');
// if(year == 1998){
//     alert('duzgundur');
// }else{
//     alert('duzgun deil');
// }


// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?');

// if (year < 2015) {
//     alert('eto sliskom rano ...');
// } else if (year > 2015) {
//     alert('eto pozdnovato');
// } else {
//     alert('verno');
// }


// let year = prompt('Nizam necenci ilde dogulub?');

// if (year > 1998) {
//     alert('biraz boyut');
// } else if (year < 1998) {
//     alert('biraz balacalasdir');
// } else {
//     alert('dogrudur');
// }


// let year = prompt('nece yasiniz var?');

// if(year>18){
//     year = true;
// }else{
//     year = false;
// }
// alert(year);


// let age = prompt('vozrast ?');

// let message = (age < 3) ? 'salam malis' :
//     (age < 18) ? 'privet' :
//         (age < 100) ? 'salamlar' :
//             'kakoy neobicniy vozrast';
// alert(message);


// let age = prompt('nece yasiniz var?');

// let message = (age < 18) ? 'yeniyetme' :
// (age < 25) ? 'yetkin' :
// (age < 50) ? 'kisi' :
// (age < 100) ? 'agsakqal' :
// 'uzun omurlu';
// alert(message);



// let carYear = prompt('Masininiz necenci ildi ?');

// let year = (carYear > 2018) ? 'sigorta oluna biler' :
//     (carYear > 2008) ? 'sigorta oluna biler' :
//     (carYear > 2002) ? 'sigorta oluna bilmez' :
//     'masinin ili cox kohnedi';
// alert(year);


// let company = prompt('Какая компания создала JavaScript?');

// if(company == 'Netscape'){
//     alert("duzdu")
// }else{
//     alert('duzgun deil');
// }


// let company = prompt( 'hansi sirket JavaScripti yaradib ?');

// let answer =( company == 'Netscape') ? 'dogrudur' :
// 'dogru deil';
// alert(answer);


// let questions = prompt('Какое «официальное» название JavaScript?');
// if( questions == 'ECMAScript'){
//     alert('Верно!');
// }else{
//     alert('Не знаете? ECMAScript!');
// }


// let number1 = prompt(' vvedite coslo');

// if(number1 > '0'){
//     alert('1');
// }else if(number1 < 0){
//     alert('-1');
// }else{
//     alert('0');
// }



// let hour = 13;

// if(hour < 10 || hour > 18){
//     alert('ofis baglidir');
// }else{
//     alert('ofis aciqdir')
// }


// let currentUsse =   null;
// let defaultUser = "john";

// let name = currentUsse || defaultUser;
// alert( name );


// let x;

// true || (x = 1);

// alert(x);


// let x;
// false || (x = 1);
// alert(x);


// let hour = 12;
// let minute = 30;
// if(hour == 12 && minute == 30){
//     alert('The time is 12.30');
// }


// let age = prompt('reqem daxil edin')
// if(age >= 14 && age <=90){
//     alert('14 den boyudu, 90 dan balacadi');
// }else{
//     alert('14 den balacadi, 90 dan boyudu');
// }


// let age = prompt('Reqem daxil edin');

// if(age > 14 && age < 90){
//     alert( '14-den boyukdu ve 90 dan balacadi');
// }else if (age == 14){
//     alert('14-de beraberdir');
// }else if(age == 90){
//     alert('90-na beraberdir');
// }else if(age < 14 ){
//     alert('14-den balacadi')
// }else if( age > 90){
//     alert('90-dan boyudu');
// }




// let age = prompt('Reqem daxil edin');

// let ageFinish = (age > 14 && age < 90) ? '14-den boyukdu 90-dan balacadi' :
// (age == 14) ? '14-de beraberdi' :
// (age == 90 ) ? '90-na beraberdi' :
// (age < 14 ) ? '14-den azdir' :
// (age > 90 ) ? '90dan boyudur' :
// '';
// alert(ageFinish);



// let user;

// alert( user ?? 'Anonim');

// let user = 'Ivan';

// alert( user ?? 'Anonim');

// let firstName = null;
// let lastName = null;
// let nickName = 'Superkoder';

// alert(firstName ?? lastName ?? nickName ?? 'Anonim');



// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 50);
// alert(area);

// let x = (4 && 3) ?? 3;

// alert(x);

// let i = 0;
// while (i < 3){
//     alert(i);
//     i++
// }

// let i = 3;
// while (i){
//     alert(i);
//     i--;
// }



// let i = 0;
// while(i < 15){
//     console.log(i);
//     i++;
// }


// let i = 15;
// while(i){
//     alert(i);
//     i--;
// }


// let i = 15;
// while(i){
//     console.log(i);
//     i--;
// }


// let i = 0;
// do{
//     alert(i);
//     i++;
// }while(i<3);


// for(let i = 0; i < 3; i++){
//     alert(i);
// }



// for( let n = 0; n < 50; n++){
//     console.log(n);
// }


// for(let i = 50; i < 100; i++){
//     console.log(i);
// }

// let i = 0;

// for(; i<3; i++){
//     console.log(i);
// }
// console.log(i);



// let i = 0;
// for(; i < 3;){
//     alert(i++);
// }
// alert(i);


// for(; ;){

// }

// let sum = 0;

// while (true) {

//     let value = +prompt("Введите число", '');

//     if (!value) break;

//     sum += value;

// }
// alert( 'Сумма: ' + sum );


// let i = 0;
// while (++i < 5) alert(i);


// let a = 0;
// while (a++ < 5) console.log(a);


// for (let i = 0; i < 5; i++) alert( i );

// for (let a = 0; a < 5; ++a) console.log( a );


// for(let i = 0; i <=10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }



// let i = 0;
// for(; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

// let i = 0;
// while(i < 3){
//     console.log(`number ${i++}!`);
// }




// let a = 2 + 2;

// switch(a){
//     case 3:
//     console.log('azdir');
//     break;
//         case 4:
//         console.log('duzgundur');
//         break;
//             case 5:
//             console.log('coxdur');
//             break;
//                 case 6:
//                 console.log('belesi yoxdur');
//                 break;
//     default:
//     console.log('bele wey yoxdur');
// }



// let a = "1";
// let b = 0;

// switch(+a){
//     case b + 1:
//     console.log("alinacaq");
//     break;
//     default:
//         console.log("alinmadi");
// }


// let a = 3;

// switch(a){
//     case 4:
//     console.log('duzdur');
//     break;
//         case 3:
//         case 5:
//         console.log('duzgun deil');
//         console.log('belke derse qedesen');
//         break;
//     default:
//         console.log('duzun desem qeribe qorsenir');
// }


// let arg = prompt('Reqem daxil edin');
// switch(arg){
//     case '0':
//     case '1':
//     console.log('bir ve ya sifir');
//     break;
//         case '2':
//         console.log('iki');
//         break;
//             case 3 :
//             console.log('hecvaxt!');
//             break;
//     default:
//     console.log('Bilinmeyen reqem');
// }


// let browser = prompt("Your browser ?");

// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
//     alert("Okay we support these browsers too");
// } else {
//     alert('We hope that this page looks ok!');
// }


// function showMessage (){
//     alert("hello")
// }
// showMessage();


// function showMessage(){
//     let message = "Hello. I'm 'JavaScript";
//     console.log(message);
// }
// showMessage();


// let userName = "Vasya";

// function showMessage (){
//     let message = "Hello " + userName;
//     alert(message);
// }

// showMessage();


// let userName = 'Вася';
// function showMessage() {
// userName = "Петя"; 
// let message = 'Привет, ' + userName;
// alert(message);
// }

// alert( userName );
// showMessage();
// alert( userName );


// function showMessage(from , text){
//     alert(from + ': '  + text);
// }
// showMessage("Anya" , "Salam");
// showMessage('Piter', "Necesen Anya");



// function showCount(count){
//     alert(count ?? "neizvestno");
// }
// showCount(0);
// showCount(null);
// showCount(undefined);


// function sum (a ,b){
//     return a + b;
// }
// let result = sum(1,2);
// alert(result);

// function toplama(a, b ){
//     return a+ b;
// }
// let cavab = toplama(5 , 10);
// alert(cavab);

// function sum(a , b){
//     return a +b;
// }
// let result = sum(5 , 15);
// alert(result);


// function CheckAge(age){
//     if(age >= 18 ){
//         return true;
//     }else {
//         return confirm('Valideyinler icaze verib ?');
//     }
// }

// let age = prompt('Nece yasiniz var ?');

// if(CheckAge(age)){
//     alert('Qiris serbestdir');
// }else{
//     alert('Qiris qadagandir');
// }


// function checkAge(age){
//     if(age >= 18){
//         return true
//     }else{
//         return confirm('Valideyinlerin icaze verib ?');
//     }
// }

// let age = prompt("Nece yasiniz var ?");
// if (checkAge(age)){
//     alert('Qiris serbestdir');
// }else {
//     alert('Qiris qadagandir');
// }




// function checkAge(age){
//     return age >= 18 ? true : confirm('Roditeli razreshili ?');
// }
// let age = prompt("skolko tele let ?");
//     if (checkAge(age)){
//         alert('Otkrito');
//     }else{
//         alert('zakrito');
//     }


// function checkAge(age){
//     return age >= 18 || confirm('roditeli razresili ?');
// }

// let age = prompt('nece yasiniz var ?');
// if(checkAge(age)){
//     alert('aciqdir');
// }else('baglidir');

// function minNum(a , b){
//     if( a > b ){
//         alert(a);
//     }else{
//         alert(b);
//     }
// }
// minNum(5 , 15);
// minNum(1548 , 2985);


// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(5, 15));


// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(5, 15))



// let sum = (a, b) => a + b;
// alert(sum(5 , 10))

// let double = n => n * 2;
// alert(double(50));

// let sayHi = () => alert('Hello');
// sayHi();


// let age = prompt('skolko vam let ?');

// let welcome = (age < 18) ?
// () => alert('Privet') :
// () => alert('zdraste');

// welcome();


// let age = prompt('nece yasiniz var ?');

// let welcome = (age > 18) ?
// () => alert('zdraste') :
// () => alert ('privet');

// welcome();


// let age = prompt('nece yasiniz var');

// let welcome = (age < 18) ?
// () => console.log('salam') :
// () => console.log('salam aleykum');

// welcome();



// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// alert(sum(2, 5))



// let sum = (a, b) => {
//     let result = a + b;
//     return result
// }
// console.log(sum(5 , 15))


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// let str = "privet";
// console.log(str.toUpperCase());

// let num = 1.258;
// console.log(num.toFixed(3));


// let billion = 1e9;
// console.log(billion);

// let ms  = 1e-6;
// console.log(ms);



// MATH
// MATH.FLOOR AZ OLAN TEREFE FIRLADIR
// MATH.CEIL COX OLAN TEREFE FIRLADIR
// MATH.ROUND YAXIN HANSIDISA O TEREFE FIRLADIR
// Math.TRUNC NOQTEDEN SONRASINI FIRLATMADAN SILIR


// let num = 1.23456;
// console.log(Math.floor(num * 100) / 100);


// let num = 12.34;
// console.log(num.toFixed(1));


// let num = 12.36;
// console.log(+num.toFixed(1));


// console.log(parseInt('100px'));
// console.log(parseFloat('12.5em'));
// console.log(parseInt('12.3'));
// console.log(parseFloat('12.3.4'));
// console.log(parseInt('a123'));
// console.log(parseFloat('a123'));



// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.max(5, 6, 8, 10, 2));
// console.log(Math.min(5, 8, 2, 0, 4));

// console.log(Math.pow(2, 10));

// let a = +prompt('birinci reqemi daxil edin');
// let b = +prompt('ikinci reqemi daxil edin');
// console.log( a + b);

// let num = 6.35;
// // console.log((num * 10).toFixed(20));
// console.log((Math.round(num * 10)/ 10))


// function readNumber(){
//     let num;

//     do{
//         num = prompt('reqem daxil edin');
//     }while (!isFinite(num));
//     if(num === null || num ==='') return null;
//     return +num;
// }
// alert(`Reqem ${readNumber()}`);

// let arr = ["i" , "go", "home"];
// delete arr [1];
// console.log(arr);
// console.log(arr.length);



// function hello() {
//     return "Hello edabit.com";
// }
// console.log(hello)

// function sum(a, b) {
//     return a + b
// }
// console.log(sum(7 , 3));


// function convertMinute(i){
//     return 60 * i
// }
// console.log(convertMinute(5))
// console.log(convertMinute(3))
// console.log(convertMinute(2))


// function plusOne(i){
//     return i + 1
// }
// console.log(plusOne(0))
// console.log(plusOne(9))
// console.log(plusOne(-3))


// function triArea(a , b){
//     return (a * b) / 2;
// }
// console.log(triArea(3 , 2));
// console.log(triArea(7 , 4));
// console.log(triArea(10 , 10));


// function calcage(i){
//     return (i * 12) * 30
// }
// console.log(calcage(65));
// console.log(calcage(0));
// console.log(calcage(20));


// function cubes(a) {
// 	return a ** 3
// }
// console.log(cubes(3));
// console.log(cubes(5));
// console.log(cubes(10));

// function getFirstValue(i){
//     return i[0];
// }
// console.log(getFirstValue([1 , 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));



// function circuitPower(voltage , current){
//     return voltage * current
// }
// console.log(circuitPower(230 ,10));
// console.log(circuitPower(110, 3));
// console.log(circuitPower(480, 20));


// function howManySeconds(i){
//     return (i * 60) * 60;
// }
// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(24));


// function remainder( a , b){
//     return a % b;
// }
// console.log(remainder(1 , 3));
// console.log(remainder(3, 4));
// console.log(remainder(-9 , 45));
// console.log(remainder(5 , 5));


// function findPerimeter(a, b) {
//     return 2 * (a + b);
// }
// console.log(findPerimeter(6 ,7));
// console.log(findPerimeter(20 ,10));
// console.log(findPerimeter(2 ,9));



// let num_of_digits = function(i){
//     return i.length
// }
// console.log(num_of_digits(1000))

// function wordLengths(){

// }
// console.log(wordLengths(["hello", "world"]));


// function sumFive(i){
//     let arr = i
//     arr.sort();
//     let sum = i[0] * i[1]
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]))


// function wordLengths() {
//     // return wordLengths.length;
//     let a = wordLengths.length
// }
// console.log(wordLengths("hello", "world"))






// function transformToWordLengths(words) {
//     var wordLengths = [];
//     for (var i = 0; i < words.length; i++) {
//         wordLengths.push(words[i].length);
//     }
//     return wordLengths;
// }
// console.log(transformToWordLengths(["hello", "world"]))













// function wordLengths(words) {
//     let uzunluq = [];
//     for (let i = 0; i < uzunluq; i++) {
//         uzunluq.push(words[i].length);
//     }
//     return uzunluq;
// }
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));











// console.log(sumFive([1, 2, 3, 4]))

// function sumFive(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// function sumFive(arr){
//     let sum = 0;
//     for(let i = 0 ; i <arr.length ; i++){
//         if (arr[i] > 5){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]))

// function sumFive(arr){
//     let sum = 0;
//     for (let i = 0 ; i > arr.length; i++){
//         if(arr[i] > 5)[
//             sum += arr[i];
//         ]
//     }
//     return sum;
// }

// function sumFive(arr){
//     let sum = 0;
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] > 5){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }


// function sumFive(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }


// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]))





// function afterNMonths(getFullYear , getMonth){
//     return getFullYear + getMonth;
// }
// console.log(afterNMonths(2020 , 24))







// function calculateFutureYear(year, months) {
//     var totalMonths = year * 12 + months;
//     var futureYear = Math.floor(totalMonths / 12);
//     return futureYear;
// }

// console.log(calculateFutureYear(2020, 24));












// function difference(arr) {
//     let small = arr[0];
//     let big = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if( arr[i] < small){
//             small = arr[i];
//         }
//         if(arr[i] > big){
//             big = arr[i];
//         }
//     }let getdifference = big - small;
//     return getdifference;
// }
// console.log(difference([10, 15, 20, 2, 10, 6]) );














// function difference(arr){
//     let sum = 0;
//     let max = [0];
//     let min = [0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }sum = max - min
//     return sum
// }
// console.log(difference([10, 15, 20, 2, 10, 6]) );















// let user = {
//     name: "John",
//     age: 30,
// };



// for(let value of Object.values(user)){
//     console.log(value);
// }


// let price = {
//     banan: 1,
//     orange : 2,
//     meat: 4,
// };


// let doublePrice = Object.fromEntries(
//     Object.entries(price).map(([key , value])=>[key ,value *2])
// );
// console.log(doublePrice);


// let car = {
//     mercedes: 50000,
//     bmw: 40000,
//     volvo: 35000,
// };

// let doublePrice = Object.fromEntries(
//     Object.entries(car).map(([key , value]) => [key , value *2])
// )
// console.log(doublePrice);



// let people = {
//     man: 50,
//     woman: 25,
//     child: 5,
// };

// let doublePeaple = Object.fromEntries(
//     Object.entries(people).map(([key , value])=> [key, value *5])
// )
// console.log(doublePeaple);



// let pets = {
//     dog: 10,
//     cats: 15,
//     pinguin : 20,
//     dinozaur: 50,
// };

// let doublePets = Object.fromEntries(
//     Object.entries(pets).map(([key , value]) => [key , value *500])
// )
// console.log(doublePets);


// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary
//     }
//     return sum
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// console.log(sumSalaries(salaries));


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function sumSalaries(salaries){
//     let sum = 0;
//     for(let salary of Object.values(salaries)){
//         sum += salary
//     }
//     return sum;
// }
// console.log(sumSalaries(salaries));

// function sumSalaries(salaries){
//     sum = 0;
//     for(let salary of Object.values(salaries)){
//         sum += salary
//     }
//     return sum
// }
// console.log(sumSalaries(salaries))



// function wordLengths(arr) {
//     return arr.map(item => item.length)
// }
// console.log(wordLengths(["hello", "world"]))

// let trueOrFalse = 58 > 18;
// console.log(trueOrFalse);

// let getInfinity = 58 / 0;
// console.log(getInfinity);
// console.log(typeof getInfinity);


// let getNan = 'fff' / 10;
// console.log(getNan);
// console.log(typeof getNan);

// let bigInteger = 12345678901234567890123456789n;
// console.log(bigInteger);
// console.log(typeof bigInteger);


// let string1 = 'stringigi';
// console.log(string1);
// console.log(typeof string1);

// let id = Symbol("id");
// console.log(id);
// console.log(typeof id);


// let userAge = 58;
// console.log(userAge);
// console.log(typeof userAge);
// userAge = String(userAge);
// console.log(userAge);
// console.log(typeof userAge);



// let userTrue = true;
// console.log(userTrue);
// console.log(typeof userTrue);
// userTrue = String(userTrue);
// console.log(userTrue)
// console.log(typeof userTrue);;


// let userAge = "58";
// console.log(userAge);
// console.log(typeof userAge);
// userAge = Number(userAge);
// console.log(userAge);
// console.log(typeof userAge);


// let userAge = `72` / `2`;
// console.log(userAge);
// console.log(typeof userAge);


// let userAge = " ";
// console.log(userAge);
// console.log(typeof userAge);
// userAge = Boolean(userAge);
// console.log(userAge);
// console.log(typeof userAge);


// function filterArray(arr){
//     let newArr = [];
//     if ( arr ==  Number){
//         arr == newArr
//     }
//     return newArr
// }
// console.log(filterArray([1, 2, "a", "b"]))


// --------------------------------D O M ------------------------------------------------



// console.log(document.documentElement.childNodes);
// console.log(document.documentElement.lastChild);
// console.log(document.documentElement.firstChild);

// for (let node of document.documentElement.childNodes){
//     console.log(node);
// }


// for (let node of document.documentElement.childNodes){
//     console.log(node);
// }

// for (let node of document.documentElement.childNodes){
//     console.log(node);
// }

// for (let node of document.documentElement.childNodes){
//     console.log(node);
// }

// for (let node of document.documentElement.childNodes){
//     console.log(node)
// }

// console.log(Array.from(document.documentElement.childNodes))
// console.log(document.documentElement.childNodes)

// console.log(document.documentElement.firstChild.nextSibling.nextSibling);
// console.log(document.documentElement.lastChild.previousSibling.previousSibling);

// console.log(document.body.parentNode === document.documentElement);
// console.log(document.documentElement.lastChild);
// console.log(document.documentElement.lastChild)
// console.log(document.head.nextSibling.nextSibling);
// console.log(document.body.previousSibling.previousSibling);

// console.log(document.body.parentElement);
// console.log(document.body.previousElementSibling);
// console.log(document.head.nextElementSibling);
// console.log(document.documentElement.lastElementChild);
// console.log(document.documentElement.firstElementChild);
// console.log(document.documentElement.children);
// console.log(document.children);
// console.log(document.documentElement.children);

// console.log(document.documentElement.parentElement);

// console.log(document.documentElement.parentNode)

// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling.lastElementChild)



// console.log(elem.type);
// console.log(elem.value);
// console.log(elem.id);
// console.log(elem.tagName);
// console.log(elem.nodeName);
// console.log(document.body.style.background = "black");
// console.log(document.getElementById('elem'));
// console.log(document.getElementById('elem').style.color = "red");
// console.log(document.getElementById('elem').innerHTML = 'Yeni setir');
// console.log(document.body.innerHTML = '<p> Hello World </p>');
// console.log(document.getElementById('elem').nodeValue);
// console.log(document.getElementById('elem').nodeName);
// console.log(document.getElementById('elem').nodeType);

// document.body.myData = {
//     name:'Caesar',
//     title: 'Imperator',
// };
// console.log(document.body.myData.title);

//     document.body.sayTagName = function(){
//         console.log(this.tagName);
//     };
// document.body.sayTagName();


// Element.prototype.sayHi = function () {
//     console.log(`Hello I'm ${this.tagName}`);
// };

// document.documentElement.sayHi();
// document.body.sayHi();


// console.log(document.body.something);

// let div = document.createElement('div')
// let div = document.createElement('div');

// let textNode = document.createTextNode('buda men')
// let textNode = document.createTextNode('Buda men')

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение."; 
// console.log(div);
// console.log(document);

// let div = document.createElementlement('div');
// div.className = "Alert";
// div.innerHTML = "ffffffffffffwefcw efwefwefw"

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение."; 
// document.body.append(div);

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong> Всем привет!</strong> Вы прочитали важное сообщение."; 
// document.body.append(div);

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = '<strong>Hello</strong> motherfucker';
// document.body.append(div);

// let listFirst = document.createElement('li');
// listFirst.innerHTML = "prepend";
// ol.prepend(listFirst);

// let listLast = document.createElement('li');
// listLast.innerHTML = "append";
// ol.append(listLast);

// ol.before('before');
// ol.after('after');

// div.before('<p>Privet</p>', document.createElement('hr'))


// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// document.body.append(div);
// setTimeout(() => div.remove(),10000);

// let li = document.createElement('li');
// li.className = 'lili';
// li.innerHTML = "3";
// document.getElementById("ol").append(li)


// let listLast = document.createElement('li');
// listLast.innerHTML = "append";
// ol.append(listLast);

// let listLast = document.createElement('li');
// listLast.innerHTML = 'append';
// ol.append(listLast);

// let listFirst = document.createElement('li');
// listFirst.innerHTML = 'prepend';
// ol.prepend(listFirst);

// let bef = document.createElement('p');
// bef.innerHTML = "before";
// ol.before(bef);

// let aft = document.createElement('p');
// aft.innerHTML = "after";
// ol.after(aft);

// ol.before('before');
// ol.after('after');


// let div = document.createElement('div');
// div.className = 'mokoko';
// div.innerHTML = "<p> Salamlar olsun sizlere </p>";
// document.body.firstElementChild.before(div);


// document.getElementById('ol').remove();
// document.body.firstElementChild.remove();
// document.body.firstElementChild.nextElementSibling.remove();
// document.body.firstElementChild.nextElementSibling.remove();
// document.body.firstElementChild.remove();
// document.body.remove()



// let ul = document.createElement('ul');
// document.body.append(ul);

// while(true){
//     let data = prompt ("Введите текст для элемента списка", "");
//     if(!data){
//         break;
//     }

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt("Введите текст для элемента списка", "");
//     if (!data) {
//         break;
//     }
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }

// console.log(document.body.firstElementChild.className);
// document.body.firstElementChild.classList.add('mokoko');
// console.log(document.body.firstElementChild.className);

// document.body.firstElementChild.classList.remove('mokoko');
// console.log(document.body.firstElementChild.className);

// document.body.firstElementChild.classList.add('mokoko');
// console.log(document.body.firstElementChild.className);

// document.body.firstElementChild.classList.toggle('mokoko');
// console.log(document.body.firstElementChild.className);

// console.log(document.body.firstElementChild.classList.contains('lkhg'))

// for ( let name of document.body.firstElementChild.classList){
//     console.log(name);
// }

// for (let name of document.body.firstElementChild.classList){
//     console.log(name);
// }




// =======================================================MATH==================================================





// console.log(Math.floor(1.23));
// console.log(Math.floor(0.2));
// console.log(Math.round(5.2));
// console.log(Math.round(4.8));
// console.log(Math.ceil(1.2));
// console.log(Math.ceil(5.1));


// console.log(Math.floor(5.2));
// console.log(Math.floor(5.1));
// console.log(Math.round(5.1));
// console.log(Math.round(5.4));
// console.log(Math.ceil(4.8));
// console.log(Math.ceil(4.6));


// console.log(Math.floor(5.2));
// console.log(Math.floor(5.3));
// console.log(Math.round(5.4));
// console.log(Math.round(5.1));
// console.log(Math.ceil(5.1));
// console.log(Math.ceil(5.9));



// const num = 123.456;
// console.log(num.toFixed(0));

// const num1 = 159.45987;
// console.log(num1.toFixed(5));


// console.log(Math.random() * 100);

// let num = Math.random() * 100;
// console.log(num.toFixed(0));


// console.log(Math.max(58, 65, 48, 25, 87, 55));


// let maxNum = Math.max(55, 45, 45, 78, 95);
// console.log(maxNum);
// let minNum = Math.min(55, 45, 45, 78, 95);
// console.log(minNum);
// console.log(maxNum - minNum);


// const one = 95;
// const two = 80;
// let userMaxAge = Math.max(one , two);
// console.log(userMaxAge);

// console.log(3 ** 3);
// console.log(Math.pow(3, 3));


// const userName = "Nizam"
// const hiUserName = `Hi ${userName}!`;
// console.log(hiUserName);

// const myName = `pasha`;
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// const userName = `Nizam`
// let hiUserName = `hello ${userName.toUpperCase()}`;
// console.log(hiUserName);


// const strLong = '4549155166161656516516665161511631';
// console.log(strLong.length);


// const userAge = 17071998;
// let userAgeToStr = userAge.toString();
// console.log(userAgeToStr);
// let userAgeLength = userAgeToStr.length;
// console.log(userAgeLength);



// const strLong = '123456789';
// console.log(strLong[0]);
// console.log(strLong[1]);
// console.log(strLong[8]);
// console.log(strLong[33]);

// console.log(strLong.charAt(0));
// console.log(strLong.charAt(33));

// const myText = "Salam menim adim Nizam-di";
// let userName = myText.slice(-8, -3);
// const userName2 = `Hello ${userName}`;
// console.log(userName2);


// const textStr = "Salam menim adim Nizam-di";
// console.log(textStr.indexOf('Nizam'));
// console.log(textStr.includes('Nizam'));
// console.log(textStr.includes('Nizamm'));


// const textStr = "Salam menim adim Nizam-di";
// let nizamName = textStr.split(' ');
// console.log(nizamName);

// console.log(nizamName.join(' '));


// const textStr = "Salam menim adim nizam-di";
// let nizamName = textStr.split('n').join('N');
// console.log(nizamName);


// let countdown;
// function timer (seconds){
//     const currentTime = Date.now();
//     const endTime = currentTime + seconds * 1000;
//     countdown = setInterval(() => {
//         const secondsLeft = Math.round((endTime - Date.now()) / 1000);
//         if (secondsLeft < 0 ){
//             clearInterval(countdown);
//             return;
//         }
//         console.log(secondsLeft);
//     }, 1000);
// }
// timer(30);


// const obj = {
//     name: 'Nizam',
//     age: 25,
//     job: 'Fullstack'
// };

// const entries = [
//     ['name', 'Nizam'],
//     ['age', 25],
//     ['job', 'Fullstack']
// ];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

// const map = new Map(entries);

// console.log(map);
// console.log(map.get('job'));
// console.log(map.get('name'));
// console.log(map.get('age'));

// map
// .set('newField', 42)
// .set(obj , 'values of object')
// .set(NaN, 'Nan ??')
// console.log(map);
// console.log(map.get(obj));
// console.log(map.get(NaN));
// map.delete('job');
// console.log(map);
// map.has('job');
// console.log(map.has('job'));
// console.log(map.has('name'));
// console.log(map.size);
// map.clear();
// console.log(map.size);


// for(let [key , value] of map){
//     console.log(key, value);
// }
// for(let [key , value] of map){
//     console.log(key, value);
// }


// for (let val of map.values()){
//     console.log(val);
// }
// for(let kiki of map.values()){
//     console.log(kiki);
// // }


// for(let key of map.keys()){
//     console.log(key);
// }
// for(let mokoko of map.keys()){
//     console.log(mokoko);
// }



// map.forEach((val, key , map) => {
//     console.log(key , val);
// // })
// map.forEach((values , key , m) => {
//     console.log(values , key );
// })
// map.forEach((key,value,m)=>{
//     console.log(key, value);
// })


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(value => value.json())
// .then((Response) => console.log(Response))
// .catch((error) => console.log(error))



// function sendRequest(){
//     const container = document.querySelector(".container");

//     fetch("https://jsonplaceholder.typicode.com/users").then(
//         (value) => value.json()
//     ).then((Response) => {
//         console.log(Response);
//     })
// }




// VERSIYA 1


// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

// const container = document.querySelector(".container");
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '16569f9a5fmsh0df1b70ea416905p1f3447jsnde361bf3fc6a',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }
// }

// fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla" , options)
// .then((res) => res.json())
// .then((data) => {
//     console.log(data)
//     data.forEach((element) => {
//         container.innerHTML =`

//         <h2>Name: ${element.make}</h2>
//         <h3>Model: ${element.model}</h3>
//         <h4>Cylinder: ${element.cylinders}</h4>
//         <h5>Fuel: ${element.fuel_type}</h5>
//         <h6>Transmission: ${element.transmission}</h6>
//         <h7> Year: ${element.year}</h7>
//         `
//     })
// })







// VERSIYA 

// const response = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '16569f9a5fmsh0df1b70ea416905p1f3447jsnde361bf3fc6a',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }
// }


// let posts;
// const container = document.querySelector(".container")

// async function getData() {
//     const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla")
//     const result = await response.json()
//     posts = result
//     ul.innerHTML = ""
//     result.forEach((item) => {
//         console.log(item)
//     })
// }