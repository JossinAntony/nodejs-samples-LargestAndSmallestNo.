var num1 = 1, num2 = 2, num3 = 3;

if( num1 >= num2){
    if( num1 >= num3){
        console.log(num1 + ' is the largest of the lot.')
    }else {
        console.log(num3 + ' is the largest of the lot.')
    }
}else if(num2 >= num3){
    console.log(num2 + ' is the largest of the lot.')
}else{
    console.log(num3 + ' is the largest of the lot.')
}

if( num1 <= num2){
    if( num1 <= num3){
        console.log(num1 + ' is the smallest of the lot.')
    }else {
        console.log(num3 + ' is the smallest of the lot.')
    }
}else if(num2 <= num3){
    console.log(num2 + ' is the smallest of the lot.')
}else{
    console.log(num3 + ' is the smallest of the lot.')
}