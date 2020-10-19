const myfs = require('fs');

var num1 = 11, num2 = 2, num3 = 3;
var s, s1;

if( num1 >= num2){
    if( num1 >= num3){
        s = num1 + ' is the largest of the lot.';
        console.log(num1 + ' is the largest of the lot.')
    }else {
        s = num3 + ' is the largest of the lot.';
        console.log(num3 + ' is the largest of the lot.')
    }
}else if(num2 >= num3){
    s = num2 + ' is the largest of the lot.';
    console.log(num2 + ' is the largest of the lot.')
}else{
    s = num3 + ' is the largest of the lot.';
    console.log(num3 + ' is the largest of the lot.')
}

if( num1 <= num2){
    if( num1 <= num3){
        s1 = num1 + ' is the smallest of the lot.';
        console.log(num1 + ' is the smallest of the lot.')
    }else {
        s1 = num3 + ' is the smallest of the lot.';
        console.log(num3 + ' is the smallest of the lot.')
    }
}else if(num2 <= num3){
    s1 = num2 + ' is the smallest of the lot.';
    console.log(num2 + ' is the smallest of the lot.')
}else{
    s1 = num2 + ' is the smallest of the lot.';
    console.log(num3 + ' is the smallest of the lot.')
}

myfs.appendFile('LargestAndSmallestNo.txt', (s + ' ' + s1 + '\n'), (e)=>{
    if(e)throw e;
});