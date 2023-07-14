function submitdata()  {
    //    alert("hello students")
    var name = document.getElementById("xyz").value;
    console.log(name, "-name")
    var password = document.getElementById("xyz").value;
    if(password. length < 9){
        return Res.send("password should be 8 digit")
    }
    console.log(password, "-password")
}