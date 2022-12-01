



var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
display_items(cart_items);

function display_items(cart_items){
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
        
        var product_quantity_id = "product_quantity" + id;
        var product_price_id = "product_price" + id;
        var name = element.name;
        var price = "$" + element.price;
        var color = element.color;
        var size = element.size;
        var image_url = element.image_url;
        var color_and_size = size + " " + color;
        var quantity = element.quantity;
        
        total_price += Number(quantity)*Number(element.price);

        this_item.innerHTML = `<div class="image_containing_div">
            <img class="product_image" src="${image_url}"/>
        </div>
        <div class="product_description_and_plus_minus_containing_div">
            <h3 class="product_name font_style_and_weight">${name}</h3>
            <h4 class="product_color_and_size font_style_and_weight"> ${color_and_size} </h4>
            <div class="contains_plus_minus_and_price_divs">
                <div class="keeps_plus_minus_box_on_left">
                    <div class="plus_minus_and_quantity_box">
                        <div class="minus_sign_box" onclick="decrease_quantity('${id}')">
                            <svg class="minus_sign_icon"   viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </div>
                        <div class="quantity_box"><h3 id="${product_quantity_id}" class="product_quantity">${quantity}</h3></div>
                        <div class="plus_sign_box" onclick="increase_quantity('${id}')">
                            <svg class="plus_sign_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="keeps_price_tag_on_right">
                    <h3 class=" font_style_and_weight" id="${product_price_id}">${price}</h3>
                </div>
            </div>
        </div>`;

        document.querySelector("#contains_cart_items_divs").append(this_item);

    });

    var total_price_after_discount = (total_price/100)*80;
    var total_discount = (total_price/100)*20;

    localStorage.setItem("total_price", total_price_after_discount + "");
    localStorage.setItem("total_discount_price", total_discount + "");
    document.getElementById("subtotal_amount_p_tag").innerText = "$" + total_price_after_discount;
    document.getElementById("discount_amount_p_tag").innerText = "$" + total_discount;

}

function increase_quantity(id){
    var current_quantity = Number(document.getElementById("product_quantity" + id).innerText);
    var new_quantity = current_quantity + 1;

    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    for(let a = 0; a<cart_items.length; a++){
        var element = cart_items[a];
        if(element.id === id){
            change_total_amount(element.price, 1);
            element.quantity = new_quantity;
            break;
        }
    }

    localStorage.setItem("cart_items", JSON.stringify(cart_items));

    document.getElementById("product_quantity" + id).innerText = new_quantity + "";

}

function decrease_quantity(id){
    var current_quantity = Number(document.getElementById("product_quantity" + id).innerText);
    var new_quantity = current_quantity - 1;
    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    if(new_quantity <= 0){
        for(let a = 0; a<cart_items.length; a++){
            var element = cart_items[a];
            if(element.id === id){
                change_total_amount(element.price, 0);
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
                change_total_amount(element.price, 0);
                element.quantity = new_quantity;
                break;
            }
        }
    
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
    
        document.getElementById("product_quantity" + id).innerText = new_quantity + "";
    }

    

    

}

function change_total_amount(price, code){
    if(code === 0){
        var current_total_price = Number(localStorage.getItem("total_price"));
        var current_total_discount_price = Number(localStorage.getItem("total_discount_price"));
        var new_reduction_to_price_tag = (Number(price)/100)*80;
        var new_reduction_to_discount_tag = (Number(price)/100)*20;
        var new_total_price = current_total_price - new_reduction_to_price_tag;
        var new_total_discount_price = current_total_discount_price - new_reduction_to_discount_tag;
        document.getElementById("subtotal_amount_p_tag").innerText = "$" + new_total_price;
        document.getElementById("discount_amount_p_tag").innerText = "$" + new_total_discount_price;
        localStorage.setItem("total_price", new_total_price + "");
        localStorage.setItem("total_discount_price", new_total_discount_price + "");
    } else{
        var current_total_price = Number(localStorage.getItem("total_price"));
        var current_total_discount_price = Number(localStorage.getItem("total_discount_price"));
        var new_addition_to_price_tag = (Number(price)/100)*80;
        var new_addition_to_discount_tag = (Number(price)/100)*20;
        var new_total_price = current_total_price + new_addition_to_price_tag;
        var new_total_discount_price = current_total_discount_price + new_addition_to_discount_tag;
        document.getElementById("subtotal_amount_p_tag").innerText = "$" + new_total_price;
        document.getElementById("discount_amount_p_tag").innerText = "$" + new_total_discount_price;
        localStorage.setItem("total_price", new_total_price + "");
        localStorage.setItem("total_discount_price", new_total_discount_price + "");
    }
}