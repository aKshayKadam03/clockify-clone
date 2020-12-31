
var btn = document.getElementById("signup");
var body = document.querySelector('body')

function validateUser(event) {

    var name = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (name == "" || password == "") {
        console.log("cant be null")
        window.alert("Email and Password Cannot be Null")
    }
    else if (name == "hydrogen@gmail.com" && password == "hydrogen") {
        if (!Check()) {
            alert("Please agree for terms and consitions")
        }
        else {
            localStorage.setItem("email",name)
            localStorage.setItem("password",password)
            window.location = "/home/dell/Downloads/Clock_Project/Product/navBar.html"
        }
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