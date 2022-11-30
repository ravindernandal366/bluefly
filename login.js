
document.querySelector("form").addEventListener("submit", loginfun);

let userData = JSON.parse(localStorage.getItem("userobj")) || [];

function loginfun() {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let validuser = false;
    let usernotallowed = false;

    userData.forEach(function (el) {
        if (el.email == email && el.password == password) {
            validuser = true;
        } else if (el.email == email) {
            usernotallowed = true;
            return;
        }
    });
    if (validuser) {
        alert("Login successfully");
        location.href = "homepage.html";
    } else if (usernotallowed) {
        alert("Incorrect email or password.");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("Please Register Your Account");
        location.href = "signup.html";
    }
}
