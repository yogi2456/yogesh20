//merge two sorted list?

// List1 = [1, 2, 4];
// List2 = [1, 3, 4];
// var mergedList = [];

// function sortedList(List1, List2) {
//     for(i = 0; i < List1.length; i++) {
//         mergedList.push(List1[i]);
//     }
//     for(j = 0; j < List2.length; j++) {
//         mergedList.push(List2[j])
//     }
//     return mergedList;
// }

// console.log(sortedList(List1, List2));

//palindrome?

string =123;


function palindrome(string) {
for(var i = 0; i > string.length/2; i++) {
     console.log(string[i])
     if(string[i] !== string(string.length -1 -i)) {
        return false;
     }
}
return true;
}

console.log(palindrome(string))

//missing number?

// let array = [1, 2, 3, 4, 6, 8, 5];

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

//roman to integer?
//input s= III
//output = 3

// var roman = "MMMXXXXXX";

// function romanInteger(roman) {
//     const romanMap = {
//         'I' : 1,
//         'V' : 5,
//         'X' : 10,
//         'L' : 50,
//         'C' : 100,
//         'D' : 500,
//         'M' : 1000,
//     }

//     let total = 0;
//     let preValue = 0;

//     for(let i = roman.length - 1; i >= 0; i--) {
//         let currentValue = romanMap[roman[i]];

//         if(currentValue < preValue) {
//             total = total - currentValue;
//         } else {
//             total = total + currentValue;
//         }

//         preValue = currentValue;
//     }

//     return total;
// }

// console.log(romanInteger(roman));

//valid Parentheses
// function isValid(s) {
//     const stack = [];
//     const mappings = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (mappings[char]) {
//             // If it's a closing bracket, pop from the stack and compare
//             const topElement = stack.pop();
//             if (mappings[char] !== topElement) {
//                 return false;
//             }
//         } else {
//             // Push the opening bracket to the stack
//             stack.push(char);
//         }
//     }

//     // If the stack is empty, then it's valid
//     return stack.length === 0;
// }

// // Test
// let input = "()";
// console.log(isValid(input)); // Expected output: true

// let input = "{}";

// function isValid(s) {
//     const stack = [];
//     const mappings = {
//         ')' : '(',
//         ']' : '[',
//         '}' : '{'
//     };

//     for(let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if(mappings[char]) {
//             const topElement = stack.pop();
//             if(mappings[char] !== topElement) {
//                 return false;
//             }
//         } else {
//             stack.push(char)
//         }
//     }
//     return stack.length === 0;
// }

// console.log(isValid(input))