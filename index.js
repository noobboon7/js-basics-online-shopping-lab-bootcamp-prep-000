var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var shop = { itemName:`${item}`, 
  itemPrice:Math.floor(Math.random() * 100) + 1};
  cart.push(shop);
  return `${item}` + " has been added to your cart.";
}

function viewCart() {
  for (let i = 0; i < cart.length; i++)
  
  if (cart.length === 1)
  return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  
  else if (cart.length === 2)
  return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}.`;
  
  else if (cart.length === 3)
  return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}, and ${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}.`;
  
  else (cart.length === 0);
  return "Your shopping cart is empty.";
}
function total() {
 var total = 0;

 for (let i = 0; i < cart.length; i++){
  total += cart[i].itemPrice;
}
return total;
}

function removeFromCart(item) {
  for (var i = 0; i < item.length; i++){
    if (item == cart[i]){
      cart.splice(i, 1);
     
       return cart;
    
  }
 else (item != cart[i]);{
    return "That item is not in your cart.";
  } 
    }
}


function placeOrder(cardNumber) {
  var price = total();
   
   if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you.";
   }
   else (cardNumber);{
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`;
   }
   return [];
}
