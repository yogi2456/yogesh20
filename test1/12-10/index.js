// var age = 20;

// if(age > 18) {
//     console.log("you are older than 18")
// } else {
//     console.log("you are smaller than 18")
// }

// for( var i = 0; i <= 100; i++) {
//     console.log(i)
//     if(i == 50) {
//         console.log("we got 50")
//         break;
//     }
// }

// var start = 23;
// var end = 50;

// for(var i = start; i <= end; i++) {
//     if(i % 2 == 0) {
//         console.log(`${i} - this is even number`)
//     } else {
//         console.log(`${i} - this is odd number`)
//     }
// }

// var start = 10;
// var end = 20;
// var oddcount = 0;
// var evencount = 0;

// for(var i = start; i <= end; i++) {
//     console.log(i)
//     if(i % 2 != 0) {
//         oddcount++;
//     } else {
//         evencount++;
//     }
// }

// console.log(oddcount, "this is odd")
// console.log(evencount, "this is even")

// var result = 0;

// for(var i = 1; i <= 5; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//         result = result + i;
//     }
// }

// console.log(result);


// var number = 3;
// var result = 1;

// for(var i = 1; i <= number; i++) {
//     result = result * i;
// }

// console.log(result);


// var number = [1, 2, 3, 4, 5, 6, 7,];

// console.log(number)
// console.log(number[0])
// console.log(number[1])
// console.log(number[2])
// console.log(number[3])
// console.log(number[4])
// console.log(number[5])
// console.log(number[6])
// console.log(number.length)

// var number = [1, 2, 3, 4, 5, 6];

// for(var i = 0; i <= number.length; i++) {
//     console.log(number[i])
//     if(number[i] == 5) {
//         console.log("we got 5 and value is", number[i], "and index is", i)
//         break;
//     }
// }

// var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];
// var oddcount = 0;

// for(var i = 0; i <= array.length - 1; i++) {
//     if(array[i] % 2 != 0) {
//         console.log(array[i], "this is odd number")
//         oddcount++;
//     }
// }

// console.log(oddcount, "this is all odd")

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 32, 45, 65, 66];
// var additionOfEvenNumber = 0;
// var additionOfOddNumber = 0;

// for(var i = 0; i <= array.length - 1; i++) {
//     if(array[i] % 2 == 0) {
//         additionOfEvenNumber = additionOfEvenNumber + array[i];
//     } else {
//         additionOfOddNumber = additionOfOddNumber + array[i];
//     }
// }

// console.log(additionOfEvenNumber, "this is even")
// console.log(additionOfOddNumber, "this is odd")

// var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3];
// var target = 10;

// for(var i = 0; i <= array.length; i++) {
//     for(var j = i + 1; j <= array.length; j++) {
//         //console.log(i, j)
//         //console.log(array[i], array[j])
//         //console.log(array[i] + array[j])
//         //console.log(array[i] + array[j] == target)
//         if(array[i] + array[j] == target) {
//             console.log(array[i], "+", array[j], "=", array[i] + array[j])
//         }
//     }
// }

// var array = [2, 3, 4, 5, 7, 8, 9, 10, 45, 56];
// var target = 10;

// for(var i = 0; i <= array.length -3; i++) {
//     for(var j = i + 1; j <= array.length -2; j++) {
//         for(var k = j + 1; k <= array.length -1; k++) {
//             //console.log(i, j, k)
//             //console.log(array[i], array[j], array[k])
//             //console.log(array[i] + array[j] + array[k])
//             //console.log(array[i] + array[j] + array[k] == target)
//             if(array[i] + array[j] + array[k] == target) {
//                 console.log(array[i], "+", array[j], "+", array[k], "=", array[i] + array[j] + array[k])
//             }
//         }
//     }
// }

// function name() {
//      console.log("inside code")
//      console.log("inside code")
// }

// name()

// function addition() {
//     var a = 2;
//     var b = 3;
//     //console.log(a + b)
//     return a + b;
// }

// //addition()
// console.log(addition())

// function substraction() {
//     var a = 10;
//     var b = 5;
//     return a - b;
// }

// console.log(substraction())

// function multiply() {
//     var a = 2;
//     var b = 5;
//     console.log(a * b)
// }

// multiply()

// function multi(firstnumber, secondnumber, thirdnumber) {
//     console.log(firstnumber, secondnumber, thirdnumber)
//     result = firstnumber + secondnumber;
//     result2 = firstnumber + secondnumber + thirdnumber;
//     return result + result2;
// }

// console.log(multi(23, 45, 67))

// function welcome(name, surname, age, city) {
//     console.log(`my name is ${name} and my surname is ${surname} and my age is ${age} and i'm from ${city}`)
// }

// welcome("yogesh", "sakluri", 25, "mumbai")

// var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];

// function additionofallelements(array) {
//     var result = 0;

//     for(var i = 0; i < array.length; i++) {
//          result = result + array[i];
//     }
//     return result;
// }

// console.log(additionofallelements(array))

// var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];
// var target = 7;

// function find(array) {
//     for(var i = 0; i < array.length; i++) {
//         if(array[i] == target) {
//             return "got it";
//         }
//     }
//     return "No";
// }

// console.log(find(array))

// var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];
// var target = 3;

// function find1(array, target) {

//     for(var i = 0; i < array.length; i++) {
//         console.log(array[i])
//         var count = 0;

//         if(array[i] == target) {
//             count++;
//         }
//     }
//     return "count"
// }

// console.log(find1(array, target),)

// const array = [];

// array.push("yogesh")
// array.push("karan")

// console.log(array, "-push")


// const array1 = [1, 2, 3, 4, 5, 6,];

// array1.pop()
// array1.pop()

// console.log(array1, "-pop")

// const array2 = [1, 2, 3, 4, 5];

// array2.unshift(7)
// array2.unshift(8)
// array2.unshift(9)

// console.log(array2, "-unshift")

// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array3.shift()
// array3.shift()
// array3.shift()

// console.log(array3, "-shift")


//missing number

// let array = [1, 2, 3, 5];

// function findMissingNumber(array) {
// //calculate the expected sum for n numbers
// let n = array.length + 1;
// let total = n * (n + 1) / 2;
// //calculate the sum of the elements in the array
// let sum = 0;
// for(let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// //the missing number is the difference between the expected sum and actual sum
// return total - sum;
// }

// console.log(findMissingNumber(array))

// function func() {
//     // length property for string
//     console.log("GFG".length)
// }
// func();

// string =121;


// function palindrome(string) {
// for(var i = 0; i > string.length/2; i++) {
//      console.log(string[i])
//      if(string[i] !== string(string.length -1 -i)) {
//         return false;
//      }
// }
// return true;
// }

// console.log(palindrome(string))

List1 = [];
List2 = [0];
var mergedList = [];

function sortedList(List1, List2) {
    for(i = 0; i < List1.length; i++) {
        mergedList.push(List1[i]);
    }
    for(j = 0; j < List2.length; j++) {
        mergedList.push(List2[j])
    }
    return mergedList;
}

console.log(sortedList(List1, List2));