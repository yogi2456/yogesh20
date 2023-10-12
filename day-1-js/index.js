// // Data types



// // syntax = "", '', ``
// // 1.string :
// // examples :
// // "yogesh", 'karan', `my name is yogesh`, "35", "yogeshsagaluri@gmail.com.."


// // 2.number :

// // syntax :
// // 34, 5647, -9876, 34.56, 0


// // 3. boolean :


// // syntax :
// // true , false

// // 4.undefined

// // initially no value



// // variables - 


// // var
// // let
// // const

// // var :

// // syntax : var nameofvarible = value;


// var myName = "yogesh";
// var mySurname = "sakluri";
// var myAge = "24";
// var karan = "saturday"
// var yogesh = "True"

// console.log(myName)
// console.log(mySurname)
// console.log(myAge)
// console.log(karan)
// console.log(yogesh)

// var num1 = 256;
// var num2 = 354;
// var addition = num1 + num2;
// console.log(addition, "-addition")
// var substraction = num1 - (num2 * num1);
// console.log(substraction, "-substraction")
// var multiply = num1 * (num2 + num1);
// console.log(multiply, "-multiply")
// var divide = num1 / num2;
// console.log(divide, "-divide")

// var myname = "yogesh";
// console.log(myname, typeof (myname))
// var mysurname = 'sakluri';
// console.log(mysurname, typeof (mysurname))
// var mycity = "mumbai";
// console.log(mycity, typeof (mycity))


// var myage = 25;
// console.log(myage, typeof (myage))

// var yogesh = true;
// console.log(yogesh, typeof (yogesh))

// var mouni ;
// console.log(mouni, typeof(mouni))

 

// var myname = "xyz";

// var message = "welcome to our website, mr. ${myname}";

// var newmessage = `welcome to our website, mr. ${myname}`

// console.log(message);
// console.log(newmessage)


var array = [3, 4, 2];
var target = 6

function addTwoNum(array, target) {
    for (var i = 0; i <= array.length - 1; i++) {
        for (var j = 1; j <= array.length - 2; j++) {
            if (array[i] + array[j] == target) {
                console.log( i, j)
            }
        }
    }
}

console.log(addTwoNum(array, target))


var array1 = "abcdcba";

function checkp(array1) {
    for(var i = 0; i < array1.length/2; i++) {
        if (array1[i] !== array1[array1.length -1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(checkp(array1))

var num = 12345678;

function reverseInteger(num) {
    let reversedNum = 0;

    while (num !== 0) {
        reversedNum = (reversedNum * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

console.log(reverseInteger(num))