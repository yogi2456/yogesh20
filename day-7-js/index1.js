// array

// var array = ["yogesh", 'karan', `anuj`];

// Object

// var object = {key : "value"}
// JSON = {key : "value"}

// var emaina = {name : "yogesh", age : 34, days : ["monday", {myday : "tuesday"}], hii : "everyone", noofdays : true, mydata : {surname : "sakluri", array : [1, 2, 3, 4, 5, 6]} }

// console.log(emaina)
// console.log(emaina.name)
// console.log(emaina.age)
// console.log(emaina.days)
// console.log(emaina.days[0])
// console.log(emaina.days[1])
// console.log(emaina.days[1].myday)
// console.log(emaina.hii)
// console.log(emaina.noofdays)
// console.log(emaina.mydata)
// console.log(emaina.mydata.surname)
// console.log(emaina.mydata.array)
// console.log(emaina.mydata.array[emaina.mydata.array.length-1])

// JSON 

// js to json = code to browser = JSON.stringify(localStorage.setItem({ key: "value" }))
// json to js = browser to code = JSON.parse(localStorage.getItem("name"))


// localStorage

// // save to ls
// localStorage.setItem(key, value)

// // read from ls
// localStorage.getItem(key)
// const mydata = localStorage.getItem("name")

// localStorage.removeItem(JSON.stringify(key))

// const array = ["yogesh", "karan"];

// array.push("anuj")

// console.log(array, "push")

// const array1 = ["yogesh", "karan"];

// array1.unshift("anuj")

// console.log(array1, "unshift")

// const array2 = ["yogesh", "karan", "anuj"];

// array2.pop()

// console.log(array2, "pop")

// const array3 = ["anuj", "yogesh", "karan"];

// array3.shift()

// console.log(array3, "shift")

//----------------------------------------------------------------day--7-------------------------------------------------------------------------


//------------------------------------------------------------------day--1------------------------------------------------------------------------
// var myName = "yogesh";
// var mySurname = "sakluri";
// var age = "34";

// console.log(myName)
// console.log(mySurname)
// console.log(age)

// var num1 = 345;
// var num2 = 234;
// var addition = num1 + num2;
// console.log(addition, "-addition")

// var addition1 = num1 + (num2 - num1);
// console.log(addition1, "-addition")

// var substraction = num1 - num2;
// console.log(substraction, "-substraction")

// var multiplication = num1 * num2;
// console.log(multiplication, "-multiply")

// var division = num1 / num2;
// console.log(division, "divide")

// var myname = "yogesh";
// console.log(myname, typeof(myname))

// var mysurname = "sakluri";
// console.log(mysurname, typeof(mysurname))

// var myage = 34;
// console.log(myage, typeof(myage))

// var yogesh = true;
// console.log(yogesh, typeof(yogesh))

// var karan;
// console.log(karan, typeof(karan))

// var myname = "abc";

// var message = "welcome to our website, mr. ${myname}";

// var newmessage = `welcome to our website, mr. ${myname}`

// console.log(message);
// console.log(newmessage)

//--------------------------------------------------------------day--1-----------------------------------------------------------------------------


//---------------------------------------------------------------day--2----------------------------------------------------------------------------
// var age = 18;
// console.log(age > 18)

// if (age > 18) {
//     console.log("you are older than 18")
// } else {
//     console.log("you are smaller than 18")
// }

// var age = 19;
// var had = false;

// if (age >= 19 && age <= 80 && had == false) {
//     console.log("you are allowed for dl")
// } else if (age == 19 && had) {
//     console.log("you are allowed for ll")
// } else {
//     console.log("you are not allowed for dl")
// }

// var age = "yogesh";
// switch (age) {
//     case "yogesh" || "abc":
//         console.log("abc")
//         break;
//     case "xyz":
//         console.log(age)
//         break;
//     default:
//         console.log("not matched")
// }

// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

//-------------------------------------------------------------------day--2-----------------------------------------------------------------------

//-----------------------------------------------------------------day--3-------------------------------------------------------------------------

// for (var i = 100; i >=50; i--) {
//     console.log(i)
// }

// for (var i =100; i >= 50; i--) {
//     console.log(i)
//     if (i == 80) {
//         console.log("we got 80")
//         break;
//     }
// }

// var start = 23;
// var end = 123;

// for (var i = start; i <= end; i++) {
//     if (i % 2 ==0) {
//         console.log(`${i} - even number`)
//     } else {
//         console.log(`${i} - odd number`)
//     }
// }

// var start = 23;
// var end = 145;
// var oddcount = 0;
// var evencount = 0;

// for (var i = start; i <= end; i++) {
//     if(i % 2 == 0) {
//         oddcount++;
//     } else {
//         evencount++;
//     }
// }

// console.log(oddcount, "-odd number")
// console.log(evencount, "-even number")

//----------------------------------------------------day--3----------------------------------------------------------------------------------

//-------------------------------------------------------day--4------------------------------------------------------------------------------

// var myname = "yogesh";
// console.log(myname)
// myname = "yogesh";   //assign is possible
// console.log(myname)
// var myname = "yogesh";   //declare is possible
// console.log(myname)

// let myname = "yogesh";
// console.log(myname)
// myname = "yogesh";   //assign is possible
// console.log(myname)
// let myname = "yogesh";   //declare is not possible
// console.log(myname)

// const myname = "yogesh";
// console.log(myname)
// myname = "yogesh";     //assign is not possible
// console.log(myname)
// const myname = "yogesh";        //redeclare is not possible
// console.log(myname)

// var array = ["yogesh", "karan", "anuj", "ganesh", "raj", "rahul"]

// console.log(array)
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
// console.log(array[5])
// console.log(array.length)

// var array = ["yogesh", "karan", "anuj", "ganesh", "raj", "rahul"]
// console.log(array.length)

// for (var i = 0; i <= array.length; i++) {
//     console.log(array[i])
//     if (array[i] == "ganesh") {
//         console.log("we got ganesh and value is", array[i], "and index is", i)
//         break;
//     }
// }

//---------------------------------------------------------------------day--4--------------------------------------------------------------------

//--------------------------------------------------------------------day--5-------------------------------------------------------------------

// var array = [23, 34, 65, 12, 3, 5, 7, 6, 8, 9, 89, 78,98];
// for (var i = 0; i <= array.length-1; i++) {
//     //console.log(array[i])
//     if (array[i] % 2 != 0) {
//         console.log(array[i], "this is odd number")
//     } else {
//         console.log(array[i], "this is even number")
//     }
// }

// var array1 = [1, 2, 3, 4, 5, 6, 5, 4, 87, 56, 34, 45, 23, 76,];
// var additionOfOddNumber = 0;
// var additionOfEvenNumber = 0;

// for (var i = 0; i <= array1.length; i++) {
//     console.log(array1[i])
//     if (array1[i] % 2 != 0) {
//         additionOfOddNumber = additionOfOddNumber + array1[i];
//     } else {
//         additionOfEvenNumber = additionOfEvenNumber + array1[i];
//     }
// }

// console.log(additionOfOddNumber, "this odd number")
// console.log(additionOfEvenNumber, "this is even number")

// var array = [2, 3, 6, 5, 8, 3, 4, 9, 10, 14, 7];
// var target = 12;
// for (var i = 0; i < array.length; i++) {
//     //console.log(array[i])
//     for (var j = 1; j < array.length; j++) {
//        // console.log(i,j)
//         //console.log(array[i], array[j])
//         //console.log(array[i] + array[j])
//         //console.log(array[i] + array[j] == target)
//         if (array[i] + array[j] == target) {
//             console.log(array[i], "+", array[j], "=", array[i] + array[j])
//         }

//     }
// }    

//------------------------------------------------------------day--5----------------------------------------------------------------------------

var array = [2, 3, 4, 5, 6, 7, 8, 9];

function additionofallelements(array) {
    var result = 0;
    for (var i = 0; i <= array.length; i++) {
        result = result + array[i];
    }
    return result;
}

console.log(additionofallelements(array))