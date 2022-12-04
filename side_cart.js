





var first_time = true;

function display_items(){
    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
    var index = 0;
    var total_price = 0;
    cart_items.forEach(element => {
        var id = element.id;
        var this_item = document.createElement("div");
        this_item.setAttribute("class", "cart_item_div");
        this_item.setAttribute("id", id);
        if(index === 0){
            this_item.style.borderTop = "0px";
        }
        index++;
        
        var product_quantity_side_cart__id = "product_quantity_side_cart_" + id;
        var product_price_side_cart_id = "product_price_side_cart" + id;
        var name = element.name;
        var price = "$" + element.price;
        var color = element.color;
        var size = element.size;
        var image_url = element.image_url;
        var color_and_size = size + " " + color;
        var quantity = element.quantity;
        
        total_price += Number(quantity)*Number(element.price);

        this_item.innerHTML = `<div class="image_containing_div_side_cart">
            <img class="product_image_side_cart" src="${image_url}"/>
        </div>
        <div class="product_description_and_plus_minus_containing_div_side_cart">
            <h3 class="product_name_side_cart font_style_and_weight">${name}</h3>
            <h4 class="product_color_and_size_side_cart font_style_and_weight"> ${color_and_size} </h4>
            <div class="contains_plus_minus_and_price_divs_side_cart">
                <div class="keeps_plus_minus_box_on_left_side_cart">
                    <div class="plus_minus_and_quantity_box_side_cart">
                        <div class="minus_sign_box_side_cart" onclick="decrease_quantity_side_cart('${id}')">
                            <svg class="minus_sign_icon_side_cart"   viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </div>
                        <div class="quantity_box_side_cart"><h3 id="${product_quantity_side_cart__id}" class="product_quantity_side_cart">${quantity}</h3></div>
                        <div class="plus_sign_box_side_cart" onclick="increase_quantity_side_cart('${id}')">
                            <svg class="plus_sign_icon_side_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="keeps_price_tag_on_right_side_cart">
                    <h3 class=" font_style_and_weight" id="${product_price_side_cart_id}">${price}</h3>
                </div>
            </div>
        </div>`;

        document.querySelector("#contains_side_cart_items_divs").append(this_item);

    });

    total_price = total_price.toFixed(2);

    localStorage.setItem("total_price", total_price + "");
    document.getElementById("subtotal_amount_p_tag").innerText = "$" + total_price;

}

function increase_quantity_side_cart(id){
    var current_quantity = Number(document.getElementById("product_quantity_side_cart_" + id).innerText);
    var new_quantity = current_quantity + 1;

    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    for(let a = 0; a<cart_items.length; a++){
        var element = cart_items[a];
        if(element.id === id){
            change_total_amount_side_cart(element.price, 1);
            element.quantity = new_quantity;
            break;
        }
    }

    localStorage.setItem("cart_items", JSON.stringify(cart_items));

    document.getElementById("product_quantity_side_cart_" + id).innerText = new_quantity + "";

}

function decrease_quantity_side_cart(id){
    var current_quantity = Number(document.getElementById("product_quantity_side_cart_" + id).innerText);
    var new_quantity = current_quantity - 1;
    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    if(new_quantity <= 0){
        for(let a = 0; a<cart_items.length; a++){
            var element = cart_items[a];
            if(element.id === id){
                change_total_amount_side_cart(element.price, 0);
                cart_items.splice(a, 1);
                break;
            }
        }
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        document.getElementById(id).remove();
    } else{
        for(let a = 0; a<cart_items.length; a++){
            var element = cart_items[a];
            if(element.id === id){
                change_total_amount_side_cart(element.price, 0);
                element.quantity = new_quantity;
                break;
            }
        }
    
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
    
        document.getElementById("product_quantity_side_cart_" + id).innerText = new_quantity + "";
    }

    

    

}

function change_total_amount_side_cart(price, code){
    if(code === 0){
        var current_total_price = Number(localStorage.getItem("total_price"));
        var new_reduction_to_price_tag = Number(price);
        var new_total_price = current_total_price - new_reduction_to_price_tag;
        new_total_price = new_total_price.toFixed(2);
        document.getElementById("subtotal_amount_p_tag").innerText = "$" + new_total_price;
        localStorage.setItem("total_price", new_total_price + "");
    } else{
        var current_total_price = Number(localStorage.getItem("total_price"));
        var new_addition_to_price_tag = Number(price);
        var new_total_price = current_total_price + new_addition_to_price_tag;
        new_total_price = new_total_price.toFixed(2);
        document.getElementById("subtotal_amount_p_tag").innerText = "$" + new_total_price;
        localStorage.setItem("total_price", new_total_price + "");
    }
}

function bring_side_cart(){
    if(first_time){
        display_items();
        first_time = false;
    } else{

    }
    document.getElementById("side_cart").style.right = "0px";
    document.getElementById("contains_side_cart_items_divs").style.height = "53vh";
    let myElements = document.querySelectorAll("*");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.visibility = "visible";
    }

    //bringing black div to the center
    document.getElementById("black_div").style.right = "0px";

}

function hide_cart(){
    document.getElementById("side_cart").style.right = "-400px";
    document.getElementById("contains_side_cart_items_divs").style.height = "0vh";
    document.getElementById("black_div").style.right = "-100vw";
}