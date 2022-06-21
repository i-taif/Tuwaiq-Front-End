function summation(num){
    sum=0
    for(i=1;i<=num;i++)
    sum+=i
    return sum 
}
function summationEven(num){
    sum=0
    for(i=1;i<=num;i++)
    if (i%2==0){
    sum+=i}
    return sum 
}
num=5
console.log(`The sum of ${num} is :${summation(num)}`)
console.log(`The sum of the even number for ${num} is :${summationEven(num)}`)