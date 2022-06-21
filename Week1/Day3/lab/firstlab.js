/*console.log('hello world')
let a =50
b=10
flat=true
console.log("the sum %d and %d is %d:", a,b,a+b) 
console.log(`the sum ${a} and ${b} is: ${a+b}`)//same result above
console.log(typeof(a)) // number
console.log(typeof(flat)) //boolean
console.log(++b) //after incr
console.log(b)
console.log(a++)//before incr
console.log(a)
if(12===12)// === that mean check for tyep of a and b result True but if (12==='12') result is False
{

}
const age = prompt("Enter your age: ");
if (age <18)
{
age=console.log("Sorry, you can't drive yet")
}
else{
    age=console.log("You can drive, nice car by the way")
}
alert("Your age " +age );

num=9
if (num %2==0){
    console.log("EVEN ")
}
else {
    console.log("odd")
}

grade=100
if (grade>=90){
    grade="A"
}
else if (grade>=80 && grade<=89){
    grade="B"
}

else if (grade>=70 && grade<=79){
    grade="C"
}
else if (grade>=60 && grade<=69){
    grade="D"
}
else if (grade<=59){
    grade="F"
}
console.log(`Your Grade is: ${grade}`)

leapYear=2022
if (leapYear%4 ==0 && (leapYear%100!==0 || leapYear%400==0)) {
    console.log(`The: ${leapYear} it's leap`)
}
else{
    console.log(`The ${leapYear} it's not leap`) 
}

dayNumber=3
switch(dayNumber) {
    case 1:
      console.log("Sunday")
      break;
    case 2:
      console.log("Monday")
      break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wensday")
    case 5:
        console.log("Thursady")
        break;
    case 6:
        console.log("Fraiday")
        break;
    case 7:
        console.log("Satarday")
        break;
  }*/

for (let i = 0; i <= 10; i++) {
   console.log(i)
  }
for (let i = 10; i >= 0; i--) {
    console.log(i)
   }
for (let i = 4; i >= -16; i--) {
    console.log(i)
   }
for (let i =8; i<=41; i+=5) {
    console.log(i)
   }
for (let i = 0; i<=100; i++) {
    if (i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else if (i%3==0 && i%5==0)
    console.log("Fizzbuzz")
   }
fnum=0
snum=1
count=1
console.log(fnum,snum)
while(count<= 20){
    sum=fnum+snum
    fnum=snum
    snum=sum
    console.log(`${count}:${sum}`)
    count++
}
for (i=1;i<=10;i++){
console.log(Math.pow(i,2))
}



