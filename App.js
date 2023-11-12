function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username == "" || password == "") {
        message.innerHTML = "Please Enter the details";
    }
    else {
        message.innerHTML = "you are succesfully logedin"
    }
}
