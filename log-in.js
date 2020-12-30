let btn1 = document.getElementById("login-btn")     // log-in button
let email = document.getElementById("email")        // email input text

email.addEventListener("keyup", onLoad)     // this event is executed when key is released

function onLoad() {     // function to check if user email matches with the registered email
    let emailData = email.value
    if((emailData == "" || emailData != "abc@gmail.com")) {
        btn1.disabled = true    //if user input does not match, log-in button is disabled
        email.style.border = 1 + "px solid red"
        pswd.style.border = 1 + "px solid red"
    }
    else {
        btn1.removeAttribute("disabled")    //if user input matches, log-in button is enabled
        email.style.border = 1 + "px solid #c6d2d9"
        pswd.style.border = 1 + "px solid #c6d2d9"
    }
}

