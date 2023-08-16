// Data Types
// variables
// if else
// switch
// for


// variables

// var
// let
// const

// var myname = "yogesh";
// console.log(myname, "first log")
// myname = "karan yogesh";           //assign is possible//
// console.log(myname, "second log")
// var myname = "karan yogesh anuj";      //redeclare is possible//
// console.log(myname, "final log")

//var is assign and declare both are possible//


// let mysurname = "sakluri";
// console.log(mysurname,)
// mysurname = 'sakluri yogesh';
// console.log(mysurname,)       //assign is possible//
// let mysurname = "s.yogesh";
// console.log(mysurname)           //redeclare is not possible//

//let is assign is possible and redeclare is not possible//


// const myage = "65";
// console.log(myage)
// myage = "56";
// console.log(myage)         //assign is not possible//
// const myage = "54";
// console.log(myage)         //redeclare is not possible//

//const is assign and redeclare both are not possible//


//Array []//

//var name = ["yogesh, karan, anuj, rahul"];

//var number = [34,87,90,12,35,54,];

//var letter = [a,b,c,d,e,f,g,h];

//var allDataTypes = [a,b,c,34,56,87,23,"yogesh", name];


// var myname = ["yogesh", "karan", "anuj", "rahul", "raj", "ganesh"];
// console.log(myname)
// console.log(myname[0])
// console.log(myname[1])
// console.log(myname[2])
// console.log(myname[3])
// console.log(myname[4])
// console.log(myname[5])
// console.log(myname.length)


//Q find out is "raj" present in given array or not?
var myname = ["yogesh", "karan", "anuj", "rahul", "raj", "ganesh"];
// console.log(myname.length)
// console.log(myname[4])

for(var i=0; i<myname.length; i++) {
    // console.log(myname[i])
    if(myname[i] == "raj") {
        console.log("we got raj and value is ->", myname[i], "and index is", i)
        break;
    }
}


