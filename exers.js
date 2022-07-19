
// for(let i = 0; i <=5; i++){
//   if(i % 2 ===0){
//     console.log("ლუწი")
//   }
//   if(i % 2 === 1){
//     console.log("კენტი")
//   }
  
// // }
// let s = 0;
// for(i = 1; i <= 10; i+=2){
//     s += i;
// }
// console.log(s);
// for(let i = 0; i <= 5; i ++){
//   if(i % 2 === 1){
//     console.log(i * i);
//   }
// }
// for(i = 0; i < 50; i++){
//   if(i % 15 === 0){
//     console.log(i);
//   }
// }
//  let sum = 0;
// for(i = 0; i < 10; i++){
//   if(i % 2 === 1){
//     sum += i * i;
//   }
//   console.log(sum)
// }
// func();
// let  func = function(){
//   console.log(711);
//   return 7;
// };

// func2();
// function func2(){
//   console.log(700);
//   return 10;
// }
// function func(num){
//  return num * num;  
  
//   // return num * num;
// }
// let result = func(4);
// console.log(result);
 
// function func2(num1, num2){
//  return num1 + num2 ;
// }
// console.log(func2(4, 7));
 
// function func3(num1,  str){
//   return num1 + str.length;
// }
// console.log(func3(7, "natalia"))

// function func4(num1, num2, num3){
//   return num1  + num2 * num3;
// }
// console.log(func4(1, -5, 3));
// let num = func4(1,2,3);
// console.log(num);

// function func5(num){
//   if(num % 2 === 0){
//     return num * num;
//   }else if(num % 2 === 1){
//     return num * num * num;
//   }
// }
// // console.log(func5(2));

// //5 + 7 * 7

// // function func6(num1, num2){
// //   console.log(num1 , num2);
// //   console.log(num2);
// //   console.log(num1 +(num2 * num2));
// //   return  num1 + num2;
// // }
// // let result = func6(2, 3);
// //  console.log(result);
// let num = 7;
// function func7(num1, num2){
//   let result = num1 * num2; 
//   // return  result;
//   console.log(num);
// }
// func7(1, 2)

// console.log(result);

// function func8(num1, num2, num3){
//   if(num1 > 10){
//     console.log(num2 + num3);
//   }else if(num1 <= 10){
//     console.log(num2 - num3);
//   }
// }
// func8( 12, 10, 8)
// function func9(num){
//   for(let i =1 ; i <= num * num; i++){
//     if(i % 2 === 0){
//        console.log(i);
//     }
//   }
// }
// func9(9);
function func10(num){
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

let result = func10(3);
console.log(result)


