let total = 0;

function addToCart(name, price){

let cart = document.getElementById("cart");

let item = document.createElement("li");

item.innerHTML = name + " - ₹" + price +
" <button onclick='removeItem(this,"+price+")'>Remove</button>";

cart.appendChild(item);

total += price;

document.getElementById("total").innerText = total;
}

function removeItem(button,price){

button.parentElement.remove();

total -= price;

document.getElementById("total").innerText = total;
}

function searchProduct(){

let input = document.getElementById("search").value.toLowerCase();

let products = document.getElementsByClassName("product");

for(let i=0;i<products.length;i++){

let name = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

if(name.includes(input)){
products[i].style.display="block";
}else{
products[i].style.display="none";
}

}

}
