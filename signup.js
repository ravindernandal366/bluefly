
document.querySelector("form").addEventListener("submit", create)

let userData = JSON.parse(localStorage.getItem("userobj")) || []

function create() {
    event.preventDefault();
    let userobj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    var flag = true;
    userData.map(function (el) {
        if (el.email == userobj.email) {
            console.log("an");
            flag = false;
            alert("Account already exists")
        }
    });
    if (flag) {
        userData.push(userobj);
        localStorage.setItem("userobj", JSON.stringify(userData))
        alert("account created successfully")
        location.href = "login.html"
    }
    document.getElementById("firstname").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
}
