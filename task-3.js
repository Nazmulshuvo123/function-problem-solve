/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(array){
    let total = 0;
    for(let item of array){
        total = total + item;
        avgNum = total / array.length;
    }
    return avgNum;

}
console.log(make_avg([2,3,4,5,6,7,8,9]))