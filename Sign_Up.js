
var btn = document.getElementById("signup");
var body = document.querySelector('body')

function validateUser(event) {

    var name = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (name == "" || password == "") {
        console.log("cant be null")
        alert("Email or Password Cannot be Null")
    }
    // else if (name == "hydrogen@gmail.com" && password == "hydrogen") {
    //     if (!Check()) {
    //         alert("Please agree to terms and conditions")
    //     }
        else {
            localStorage.setItem("email",name)
            localStorage.setItem("password",password)
            window.location = "timesheet.html"
        }
    console.log(name, password)
    event.preventDefault();
}

function Check() {
    var checkbox = document.getElementById('Sign_Up_Checkbox');
    var err = document.getElementById('Sign_Up_error')

    if (checkbox.checked != true) {

        return false;
    }
    else {
        return true;
    }
}
btn.addEventListener('click', validateUser)