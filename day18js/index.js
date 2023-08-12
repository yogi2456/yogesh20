var age = 18;
console.log(age > 18)

if(age > 18) {
    console.log("you are older than 18")
} else {
    console.log("you are smaller than 18")
}

console.log(25 > 10 && 100 > 50 && 7654 > 3456)
console.log(35 > 45 || 78 > 54 || 200 > 300)

var age = 18;
var had = false;
if(age >=19 && age <=80 && had == false) {
    console.log(`you are allowed for DL age - ${age}`)
} else if (age ==18 && !had) {
    console.log(`you are allow for LL - ${age}`)
} else {
    console.log(`you are not allowed for DL. ${age}`)
}

var age = "yogesh";
switch (age) {
    case "yogesh" || "abc":
        console.log("abc")
        break;
    case "xyz":
        console.log(age)
        break;
    default:
        console.log("not matched")
}

for (var i=1; i<=100; i=i+1) {
    console.log(i)
}