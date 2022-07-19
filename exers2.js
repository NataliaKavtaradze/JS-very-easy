
let func = function(num1, num2){
  if (num1 < 0 && num2 < 0){
    return true;
  }else if(num1 > 0 && num2 > 0){
    return true;
  }else if(num1 == 0 && num2 == 0){
    return true;
  }else{
    return false;
  }
}
console.log(func(-5, -8));