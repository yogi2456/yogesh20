var array = [2, 3, 4, 5, 7, 8, 9, 10, 45, 56];
var target = 10;

for (var i = 0; i < array.length -2; i++) {
    //console.log(array[i])
    for (var j = i + 1; j < array.length -1; j++) {
       // if(array[i] + array[j] == target) {
         //   console.log(array[i], array[j])
        //}
        for (var k = j + 1; k < array.length; k++) {
            console.log(array[i], array[j], array[k])
            //console.log(i, j, k)
            //if (array[i] + array[j] + array[k] == target) {
              //  console.log(array[i], array[j], array[k] )
           // }
        }
        
    }
}

function name() {
    console.log("inside Code")
    console.log("inside code")
}

name()

function addition() {
    var a = 45;
    var b = 67;
    console.log(a+b)

}

addition()

function substraction() {
    var a = 765;
    var b = 456;
    //console.log(a - b)
    return a - b;
}

//substraction()
console.log(substraction())

function multiplication() {
    var a = 23;
    var b = 45;
    var c = 25;
    //console.log(a * b * c)
    return a * b * c;
}

//multiplication()
console.log(multiplication())

function multi(firstnumber, secondnumber, thirdnumber) {
    console.log(firstnumber, secondnumber, thirdnumber)
    const result = firstnumber + secondnumber;
    const result2 = firstnumber + secondnumber + thirdnumber;
    return result + result2;

}

console.log(multi(23, 456, 654))

function welcome(name, surname, age, city) {
    console.log(`i'm ${name} and my surname is ${surname} and my age is ${age} and i'm from ${city}`)
}

welcome("yogesh", "sakluri", 24, "mumbai")

var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];

function additionofallelements(array) {
    //console.log(array, "array")
    var result = 0;

    for (var i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result;
}

console.log(additionofallelements(array))

var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];
var target = 7;

function find(array, target) {
    for (var i = 0; i < array.length; i++) {
        //console.log(array[i])
        if (array[i] == target) {
            return "gotit";
        }
    }

    return "No"
}

console.log(find(array, target))

var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];
var target = 10;

function yogesh(array, target) {
    for (var i = 0; i < array.length; i++) {
        //console.log(array[i])
        if (array[i] == target) {
            return "gotit";
        }
    }

    return "No"
}

console.log(yogesh(array, target))

var array = [2, 4, 3, 6, 7, 5, 8, 9, 3];
var target = 3;

function find1(array, target) {
    for (var i = 0; i < array.length; i++) {
        //console.log(array[i])

        var count = 0;
        if (array[i] == target) {
            count++;
        }
    }

    return "count"
}

console.log(find1(array, target))