// Q. given array

// array

// var array = ["yogesh", 24, "karan"]

//object

//var emaina = {key : "value"}

//json = {key : "value"}

var emaina = {name : "yogesh", age : 24, noofdays : ["monday", {day : "tuesday"}], yogesh : true, mydata : {hii : "everyone", Array : [1, 2, 3, 4, 5, 6, 7]}}

console.log(emaina)
console.log(emaina.name)
console.log(emaina.age)
console.log(emaina.noofdays)
console.log(emaina.yogesh)
console.log(emaina.mydata)
console.log(emaina.noofdays[0])
console.log(emaina.noofdays[1])
console.log(emaina.noofdays[1].day)
console.log(emaina.mydata.hii)
console.log(emaina.mydata.Array)
console.log(emaina.mydata.Array[2])
console.log(emaina.mydata.Array[emaina.mydata.Array.length-1])


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

const array = [];

array.push("yogesh")
array.push("karan")
array.push("anuj")
array.push("srinivas")
array.push(34)

console.log(array, "-push")

const array1 = ["yogesh", "karan", "anuj", "srinivas", "nihil"];

array1.pop()
//array1.pop()
//array1.unshift("ram")
//array1.push("lakshmi")
//array1.shift()
//array1.unshift(34, 45, 56)
//array1.push(65, 87, 90, 23)

console.log(array1, "-pop")

const array2 = ["yogesh", "karan", "anuj", "srinivas", "ram", "ramesh"];

array2.unshift("34, 45, 65, 78, 34, 56, 34, ")

console.log(array2, "-unshift")

const array3 = ["yogesh", "karan", "anuj", "srinivas", "ram", "ramesh"];

array3.shift()
array3.shift()

console.log(array3, "-shift")

const array4 = ["yogesh", "karan", "anuj", "srinivas", "ram", "ramesh"];

array4.push("prabhas")
array4.push("balu")

console.log(array4, "-push")