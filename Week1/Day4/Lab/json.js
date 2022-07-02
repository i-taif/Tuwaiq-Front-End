myObj =
  '{"names":"joson","age":"30","cars":{ "car1":"Ford","car2":"BMW","car3":"VW" }}';
console.log(myObj);
let obj1 = JSON.parse(myObj); // conver to js
console.log(JSON.stringify(obj1)); //convert to json
