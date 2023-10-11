// var start = 34;
// var end = 72;
// var oddcount = 0;
// var evencount = 0;

// for (var i = start; i <= end; i++) {
//     console.log(i)
//     if (i % 2 == 0) {
//         oddcount++
//     } else {
//         evencount++
//     }
// }

// console.log(oddcount, "this is odd number")
// console.log(evencount, "this is even number")

// var result = 0;

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         result = result + i;
//     }
// }

// console.log(result);

// var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];

// for (var i = 0; i <= array.length; i++) {
//     console.log(array[i])
//     if (array[i] % 2 != 0) {
//         console.log(array[i], "this is odd number")
//     } 
// }


var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];
var additionOfOddNumber = 0;
var additionOfEvenNumber = 0;

for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    if (array[i] % 2 != 0) {
        // console.log(additionOfOddNumber,"+" , array[i])
        additionOfOddNumber = additionOfOddNumber + array[i];

        // console.log(additionOfOddNumber, "value updated")
    }
    else {
        additionOfEvenNumber = additionOfEvenNumber + array[i];
    }
}

console.log(additionOfEvenNumber, "- Addition for even number")
console.log(additionOfOddNumber, "-Addition for Odd number ")