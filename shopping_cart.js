

function display_cart_items(){
    var total_price = 0;
    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
    cart_items.forEach(element => {
        var name = element.name;
        var id = element.id;
        var price = element.price;
        var quantity = element.quantity;
        total_price += Number(price)*Number(quantity);
        var image_url = element.image_url;
        var color = element.color;
        var size = element.size;
        var size_and_color = size + " / " + color;
        var total_single_product_price = Number(quantity)*Number(price);
        var total_single_product_price = total_single_product_price.toFixed(2);
        total_single_product_price = Number(total_single_product_price);

        var this_item = document.createElement("div");
        this_item.setAttribute("id", id+"");
        this_item.setAttribute("class", "cart_item");

        this_item.innerHTML = `<div class="image_and_description">
                                    <img class="product_image" src="${image_url}"/>
                                    <div class="contains_description">
                    <p class="product_name">${name}</p>
                    <p class="product_size_and_color">${size_and_color}</p>
                    <button class="remove_button" onclick="remove_item('${id}')">REMOVE</button>
                </div>
                    </div>
                    <div class="price_div">
                        <p class="product_price">$${price}</p>
                    </div>
                    <div class="contains_plus_minus_and_quantity_box_of_item">
                        <div class="plus_minus_and_quantity_box">
                            <div class="minus_sign_box" onclick="decrease_quantity('${id}')">
                                <svg class="minus_sign_icon"   viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                            </div>
                            <div class="quantity_box"><h3 id="product_quantity${id}" class="product_quantity">${quantity}</h3></div>
                            <div class="plus_sign_box" onclick="increase_quantity('${id}')">
                                <svg class="plus_sign_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            </div>
                        </div>
                    </div>
                        <div class="total_product_price_div">
                            <p class="total_product_price" id="total_single_product_price${id}">$${total_single_product_price}</p>
                        </div>`;

        document.querySelector("#contains_cart_items_divs").append(this_item);
    });

    localStorage.setItem("total_price", total_price.toFixed(2) + "");
    document.getElementById("subtotal_amount").innerText = "$" + total_price.toFixed(2);

}

window.onload = function () {
    display_cart_items();
    document.getElementById("contains_cart_items_divs").style.height = "fit-content";

};

function increase_quantity(id){
    var current_quantity = Number(document.getElementById("product_quantity" + id).innerText);
    var new_quantity = current_quantity + 1;

    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    var new_total_single_product_price = 0;

    for(let a = 0; a<cart_items.length; a++){
        var element = cart_items[a];
        if(element.id === id){
            change_total_amount(element.price, 1);
            element.quantity = new_quantity;
            new_total_single_product_price += Number(element.price)*Number(new_quantity);
            break;
        }
    }

    localStorage.setItem("cart_items", JSON.stringify(cart_items));

    document.getElementById("total_single_product_price"+id).innerText = "$" + new_total_single_product_price.toFixed(2);
    document.getElementById("product_quantity" + id).innerText = new_quantity + "";

}

function decrease_quantity(id){
    var current_quantity = Number(document.getElementById("product_quantity" + id).innerText);
    var new_quantity = current_quantity - 1;
    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

    var new_total_single_product_price = 0;

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
                new_total_single_product_price += Number(element.price)*Number(new_quantity);
                element.quantity = new_quantity;
                break;
            }
        }
    
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
    
        document.getElementById("total_single_product_price"+id).innerText = "$" + new_total_single_product_price.toFixed(2);
        document.getElementById("product_quantity" + id).innerText = new_quantity + "";
    }

    

    

}

function change_total_amount(price, code){
    if(code === 0){
        var current_total_price = Number(localStorage.getItem("total_price"));
        var new_reduction_to_price_tag = Number(price);
        var new_total_price = current_total_price - new_reduction_to_price_tag;
        new_total_price = new_total_price.toFixed(2);
        document.getElementById("subtotal_amount").innerText = "$" + new_total_price;
        localStorage.setItem("total_price", new_total_price + "");
    } else{
        var current_total_price = Number(localStorage.getItem("total_price"));
        var new_addition_to_price_tag = Number(price);
        var new_total_price = current_total_price + new_addition_to_price_tag;
        new_total_price = new_total_price.toFixed(2);
        document.getElementById("subtotal_amount").innerText = "$" + new_total_price;
        localStorage.setItem("total_price", new_total_price + "");
    }
}

function remove_item(id){
    var cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
    var total_price_to_be_reduced = 0;
    for(var a = 0; a<cart_items.length; a++){
        var element = cart_items[a];
        if(element.id === id){
            document.getElementById(id).remove();
            var el_price = Number(element.price);
            el_price = el_price.toFixed(2);
            total_price_to_be_reduced += Number(el_price)*Number(element.quantity);
            cart_items.splice(a, 1);
            break;
        }
    }
    change_total_amount(total_price_to_be_reduced + "", 0);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
}