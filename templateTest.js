const message = document.getElementById("message");

let orderTotal = 39.99;
let itemPurchased = "JavaScript All-In-One For Dummies";
let customer = "Jim Zenner";
let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your payment
of ${orderTotal} was successful`;
message.textContent = thankYou;
