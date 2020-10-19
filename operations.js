module.exports.findSmallestAndLargest = (num1, num2 ,num3)=>{
    if( num1 >= num2){
        if( num1 >= num3){
            s = num1 + ' is the largest of the lot.';
            //console.log(num1 + ' is the largest of the lot.');
        }else {
            s = num3 + ' is the largest of the lot.';
            //console.log(num3 + ' is the largest of the lot.')
        }
    }else if(num2 >= num3){
        s = num2 + ' is the largest of the lot.';
        //console.log(num2 + ' is the largest of the lot.')
    }else{
        s = num3 + ' is the largest of the lot.';
        //console.log(num3 + ' is the largest of the lot.')
    }
    
    if( num1 <= num2){
        if( num1 <= num3){
            s1 = num1 + ' is the smallest of the lot.';
            //console.log(num1 + ' is the smallest of the lot.')
        }else {
            s1 = num3 + ' is the smallest of the lot.';
            //console.log(num3 + ' is the smallest of the lot.')
        }
    }else if(num2 <= num3){
        s1 = num2 + ' is the smallest of the lot.';
        //console.log(num2 + ' is the smallest of the lot.')
    }else{
        s1 = num2 + ' is the smallest of the lot.';
        //console.log(num3 + ' is the smallest of the lot.')
    }

    return (s + ' ' + s1);

}