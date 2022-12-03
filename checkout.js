
    var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    var mainDiv = document.getElementById("cartData");
    
   
    var array = [];
        mainDiv.innerText="";
        cartData.map(function(elem){
        var parentDiv = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("h4");
        var price = document.createElement("h4");

        image.setAttribute("src",elem.pImg);
        parentDiv.setAttribute("id","flex")
        name.innerText = elem.pName;
        price.innerText = elem.pPrice;

            parentDiv.append(image,name,price);
            mainDiv.append(parentDiv);

            var str =  elem.pPrice.replace('$', '');
            array.push(str);

           
        });


        var mainDiv2 = document.getElementById("cartData2");
    
   
        var array2 = [];
            mainDiv2.innerText="";
            cartData.map(function(elem){
            var parentDiv2 = document.createElement("div");
            var image2 = document.createElement("img");
            var name2 = document.createElement("h4");
            var price2 = document.createElement("h4");
    
            image2.setAttribute("src",elem.pImg);
            parentDiv2.setAttribute("id","flex2")
            name2.innerText = elem.pName;
            price2.innerText = elem.pPrice;
    
                parentDiv2.append(image2,name2,price2);
                mainDiv2.append(parentDiv2);
    
                var str =  elem.pPrice.replace('$', '');
                array2.push(str);
            });

    var sum=0;
    
    for(var i =0;i<array.length;i++)
    {
        sum+=parseInt(array[i]);
    }

    var sum2=0;
    
    for(var i =0;i<array2.length;i++)
    {
        sum2+=parseInt(array2[i]);
    }
    
    var total = document.getElementById("totalPrice").innerText=sum;
    document.getElementById("totalPrice2").innerText=sum;

    document.getElementById("coupanCode").addEventListener("click",function(){
        var coupan = document.getElementById("applyCoupan").value;
        if(coupan==="Nirmal10")
        {
            var dis = sum*(10/100);
            var newPrice= sum-dis;
            document.getElementById("totalPrice").innerText=newPrice;

        }
        else{
           alert("wrong code");
        }
    });
    document.getElementById("coupanCode2").addEventListener("click",function(){
        var coupan = document.getElementById("applyCoupan2").value;
        if(coupan==="Nirmal10")
        {
            var dis = sum*(10/100);
            var newPrice= sum-dis;
            document.getElementById("totalPrice2").innerText=newPrice;
            document.getElementById("ppp").innerText=newPrice;

        }
        else{
           alert("wrong code");
        }
    });

    document.getElementById("ppp").innerText=sum;
    
    //continue button

    document.getElementById("continue").addEventListener("click",function(){

        var email = document.getElementById("email").value;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var address = document.getElementById("address").value;
        var landmark = document.getElementById("landmark").value;
        var city = document.getElementById("city").value;
        var zipCode = document.getElementById("zipCode").value;
        var phoneNum = document.getElementById("phoneNum").value;

        if(email===""){
            alert("Enter Email");
        }
        else if(firstName===""){
            alert("Enter First Name");
        }
        else if(lastName===""){
            alert("Enter Last Name");
        }
        else if(address===""){
            alert("Enter Address");
        }
        else if(landmark===""){
            alert("Enter Landmark");
        }
        else if(city===""){
            alert("Enter City");
        }
        else if(zipCode===""){
            alert("Enter Zip-Code");
        }
        else if(phoneNum===""){
            alert("Enter Contact Number");
        }
        else{

            location.href="./Card.html";
        }
    });
