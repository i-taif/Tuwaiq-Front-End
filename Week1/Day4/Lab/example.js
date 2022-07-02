/*let fname="Tif"
let lname="Alanazi"
let temp
temp=fname
fname=lname
lname=temp
console.log(`The value of a after swapping: ${fname}`);
console.log(`The value of b after swapping: ${lname}`);

// sawp between values without third part
let a=22
let b=30
a=a+b //52
b=a-b //22
a=a-b //33


function power(x,y){
    resul=1
    for (i=1;i<=y;i++){
        resul*=x
    }
    return resul
//  return x**y  >> same result of power
}
console.log(power(4,5))*/

/*const friends = ["Mansour", "Munira", "Ahmed"];
friends.forEach(function(item){
    console.log(`Hi ${item}`)
})

const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;
nums.forEach(function(item){
    total+=item
})
console.log(`the sum of ${nums} is :${total}`)

const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;
stringNumbers.forEach(function(item){
    item=parseFloat(item)
    if(item<=4000){
        totalNumbersUnder4000+=item
    }
 })
 console.log(`the total number under 4000 of ${stringNumbers} is  : ${totalNumbersUnder4000}`)*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
times100=nums.map(item => {
   return item%2==0 && item%3!=0 &&item%5!=0
})
console.log(`[ ${times100}]`)

/*const iAS = ['Sara', 'Abdullah', 'Ali', 'Khan'];
let capitalizedIAs = [];
capitalizedIAs=iAS.map(item => item.toUpperCase())
console.log(`[${capitalizedIAs}]`)

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];
dayAbbreviations=days.map(item => item.slice(0,3))
console.log(`[${dayAbbreviations}]`)

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 =  [];
century20=years.filter(item => item<=2000) 
console.log(`[${century20}]`)*/

/*const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result=nums.filter(item => item%3==0)
console.log(result);

const names = ["Sara", "Abdulrahman", "Eman"];
result=names.filter(item => item.includes('a'))
console.log(result);
const name = function(names){
    return names.item.includes('a')
  }*/
/*  reduce func

const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439]
const sum=nums.reduce((previousValue, currentValue) => 
previousValue+currentValue)
  console.log(sum);

const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
const totalNumbersUnder4000=nums.reduce((previousValue, currentValue) => 
parseFloat(previousValue) +parseFloat(currentValue))
  console.log(totalNumbersUnder4000);
function addFive(num) {
    return 5 + num;
  }
  */

/* Arrow func 

// same function above but in Arrow
addFive=(num) =>{return 5+ num}
console.log(addFive(7))

function divide(num1, num2) {
    return num1 / num2;
}
// the same but in Arrow
divide=(num1,num2)=> { return num1/num2 }
console.log(divide(15,3))

function whoIsTheBestIA() {
    let iaName = 'Sara';
    console.log(iaName);
  }
whoIsTheBestIA = ()=> {
    let isName='Sara'
    console.log(isName)
  }
  whoIsTheBestIA() */

/* s("some")
function s(name="d"){
    console.log("hello " + name)
}

function fullname(fname ,lname){ // declration function 
    return fname+" "+lname
}
const fullnameArrow= (fname,lname)=>{ // Arrowe Function 
    return fname+" "+lname
}

const fullnameImplicit = (fname, lname) => fname +" "+ lname; // Implicit function

console.log(fullname("taif","alanazi"))
console.log(fullnameArrow("taif","alanazi"))
console.log(fullnameImplicit("taif","alanazi"))
*/



 

