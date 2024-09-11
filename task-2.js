/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the resul
 */

function multiply(number){
   let result;

   if( number % 2 === 1){
    result = number * 2;
   }
   else if(number % 2 === 0){
    result = number / 2;
   }
   return result;
}
console.log(multiply(5));
console.log(multiply(6));