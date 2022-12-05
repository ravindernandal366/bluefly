




    let Hm = document.getElementById("Home_Buttons");

    let Shoes = document.getElementById("Shoe_Hover");
    let Hand = document.getElementById("Hand_Hover");
    let Design = document.getElementById("Design_Hover");
    let Women = document.getElementById("Women-Hover");
    let Men = document.getElementById("Men_Hover");
    let Glass = document.getElementById("Sunglass_Hover");
    let Watch = document.getElementById("Watch_Hover");
    let Under = document.getElementById("Under_Hover");
    let Beauty = document.getElementById("Beauty_Hover");
    let Clear = document.getElementById("Clearance");

    let Shoe_Nav = document.getElementById("ShoesNav");
    let Hand_Nav = document.getElementById("BagNav");
    let Design_Nav = document.getElementById("DesignerNav");
    let Women_Nav = document.getElementById("WomenNav");
    let Men_Nav = document.getElementById("MenNav");
    let Glass_Nav = document.getElementById("SunglassNav");
    let Watch_Nav = document.getElementById("JewelryNav");
    let Under_Nav = document.getElementById("UnderNav");
    let Beauty_Nav = document.getElementById("BeautyNav");
    let Clear_Nav = document.getElementById("ClearanceNav");

    Shoes.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Show_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Hand.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Show_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Design.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Show_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Women.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Show_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Men.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Show_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Glass.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Show_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Watch.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Show_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Under.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Show_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Beauty.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Show_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });

    Clear.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Show_Clear");
    });

    Hm.addEventListener("mouseover", () => {
        Shoe_Nav.setAttribute("id", "Hide_Shoes");
        Hand_Nav.setAttribute("id", "Hide_Hand");
        Design_Nav.setAttribute("id", "Hide_Design");
        Women_Nav.setAttribute("id", "Hide_Women");
        Men_Nav.setAttribute("id", "Hide_Men");
        Glass_Nav.setAttribute("id", "Hide_Glass");
        Watch_Nav.setAttribute("id", "Hide_Watch");
        Under_Nav.setAttribute("id", "Hide_Under");
        Beauty_Nav.setAttribute("id", "Hide_Beauty");
        Clear_Nav.setAttribute("id", "Hide_Clear");
    });


    
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
            location.href = "login.html"

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
