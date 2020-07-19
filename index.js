// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
  let count=0;
  return process(num,count); 
}
function process(num,count){
 let numArray=num.toString().split("");
  if(numArray.length===1){
   return count;
  }
  else{
    let prod=1;
  for(let i=0;i<numArray.length;i++){
    prod*=numArray[i];
    }
    count++;
    return process(prod,count);
  }
 }
 console.log(persistence(39));
 console.log(persistence(3));