const myfs = require('fs');
const myOp = require('./operations');

var num1 = 11, num2 = 2, num3 = 3;
//var s, s1;
var res;

res = myOp.findSmallestAndLargest(num1, num2, num3);
console.log(res);

myfs.appendFile('LargestAndSmallestNo.txt', (res+ '\n'), (e)=>{
    if(e)throw e;
});
