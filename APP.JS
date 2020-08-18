// ARRAY 
let myFriend = [15, 25, 22, 14, 21];
const sonaliAge = myFriend[3];
console.log(sonaliAge);
myFriend[1] = 20;
console.log(myFriend.length);
const position = myFriend.indexOf(23);
myFriend.push(15);
console.log(myFriend);
myFriend.pop();
console.log(myFriend);
myFriend.unshift(19);
console.log(myFriend);
myFriend.shift();
console.log(myFriend);
//array string
let waitingLine = ['arif', 'salam', 'kalam', 'balam'];
waitingLine.push('max', 'marry');
console.log(waitingLine);
const part = waitingLine.slice(1, 4);
console.log(part);
console.log(waitingLine);
//loop while and for and using debug js code less or equal
let num = 5;
while(num <= 9){
    console.log(num);
    num++;
}
//for loop

let num = [11, 55, 88, 45, 22, 44];
for(let i = 0; i<num.length; i++){
    const element = num[i];
    console.log(element);
}
// switch break
//  function 
function sayLove(){
    console.log('i love you');
    console.log('haw maw kaw kaw maaw taw');
}
sayLove();
const date = 14;
const place = restaurant;
sayLove();
//function default value
function add(num1, num2 = 10){
    return num1 + num2;
}
const total = add(12, 3)
console.log(total);
//template string
const firstName = 'jhon';
const lastName = 'kameron'
const fullName = firstName + ' ' + lastName+ ' '+ "is a good boy";
const fullName2 = `${firstName} ${100+50} is a good boy`;
const myLink = `rosly`;
const linkex = `acne+treatment+idea`;
const link = `https://google.com/${myLink}/${linkex}`;
console.log(link);
const multiLine = `hello there
i am jhon kameron
iam from australia`;
console.log(multiLine);
//arrow function multiple parameter
function doubleIt(num){
    return num * 2;
}
const doubleIt = function myfun(num){
   return num *2;
}
const doubleIt = num => num *2;
const add = (x, y) => x + y;
const give5 = ()=> 5;
const result = add(50, 20);
const result2 = give5();
const multiLine = (x, y) => {
    const sum = x +y;
    const diff = x- y;
    const result = sum * diff;
    return result;
}
const doMath = multiLine(8, 5);
console.log(doMath);
console.log(result2);
console.log(result);
//spread operator, concatenate multiple arrays, array max
const ages = [11, 12, 14, 20, 19];
const ages2 = [22, 21, 25, 24, 26];
const ages3 = [33, 55, 44, 32, 66];
const all = ages.concat(ages2).concat([52]).concat(ages3); // older version
const allAges2 = [...ages, ...ages2, 52, ...ages3] // new spread operator method
console.log(allAges2);

const business = 650;
const minister = 550;
const salary = 450;
// const maximum = Math.max(business, minister, salary);
const money = [650, 550, 450];
const maximum = Math.max(...money)
console.log(maximum);
// class constructor create object from class
class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'adarsha school' //default parameter
    }
}

const student1 = new student(12000, 'shuvo'); // create new object
const student2 = new student(14000, 'mahi');
const student3 = new student(15000, 'mohammed')

console.log(student1, student2, student3);
// inheritance extends class super class method
class Parent{
    constructor(){
        this.fatherName = 'kimo paul';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}
const baby = new Child('paulo jorina');
const baby2 = new Child('tommy chill')
console.log(baby.getFullName());
console.log(baby2.getFullName());
// destructive object array destructive complex object
const person = {name: 'Jack William', age:22, job:'facebooker', gfName:'Ema Watson', address:'Bonshal Kocu', phone:2458887880, friedns:['Tom', 'Rocky', "Isabella", 'Marcelo']};


const {gfName, phone, salary, address, friedns} = person;
// const gfName = person.gfName;
// const phoneNum = person.phone;


console.log(gfName, phone, salary, address, friedns[0]);
// array destructure
const friends = ['sakib', 'aliar', 'dundar', 'turgut', 'bamse'];
const [first, second, ...next] = friends;
console.log(next);
// complex object
const complexObject = {
    name: 'artuk bey',
    info: {
        address: 'turkey',
        age: 42
    }
}
const {address} = complexObject.info;
console.log(address);
