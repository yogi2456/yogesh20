// for (starting; ending; sequence) {

//} 



for (var i=100; i>=50; i--) {
    console.log(i)
}

for (var i=100; i>=50; i--) {
    console.log(i)
    if (i == 80) {
        console.log("we got 80.")
        break;
    }
}


//find numbers who are even from 35 - 256;

var start = 98;
var end = 345;

for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - even number`)
    } else {
        console.log(`${i} - odd number`)
    }
}


//          _____ 5 - Q
//          2 / 11
//              10
//               1 - R
//
//          10 / 2 = Q
//         10 % 2 = R -> 0 - even




// find total count from range 178 - 765, who are odd

var start = 178;
var end = 776;
var oddcount = 0;
var evencount = 0;
 

for (var i = start; i<=end; i++) {
    if (i % 2 != 0) {
        console.log(i) 
        oddcount++;    
    } else {
        evencount++;
    }
}


console.log(oddcount, "total odd number")
console.log(evencount, "total even number")


// Q. find out addition of first natural numbers who are even....

var result = 0;

for (var i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        result = result + i;
    }
}

console.log(result);


// Q. find the factorial... 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12 

var number = 4;
var result = 1;

for (var i = 2; i <= number; i++) {
    result = result * i;
}

console.log(result);

var number = 5;
var result ;

for (var i = 1; i <= number; i++) {
    if(result == undefined) {
        result = i;
    } else {
        result = result * i;
    }
}
console.log(result);