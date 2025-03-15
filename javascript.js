// The form validation for email addresses

function validateEmail(email){
    return email.includes("@") && email.includes(".");
}

console.log(validateEmail("test@example.com"));


//Storing the Contact Us message

let feedback = []

function addFeedback(message) {
    feedback.push(message);
    return feedback;
}

console.log(addFeedback("Thank you for your message!"));

//Could include a total price calculator
//just incase they want to add on different special features

const prices = [200.00, 115.00, 325.00];

function getTotalPrice(){
    return prices.reduce((total, price)=> total + price, 0);
}

console.log('Total price: $${getTotalPrice()}')


//See if a car is available in their area

let cars = [
    { model: "Model Y", location: "41169", available: true },
    { model: "Model S", location: "40223", available: false },
    { model: "Model X", location: "41169", available: true },
    { model: "Model 3", location: "41169", available: false }
];

function checkAvailability(location) {
    const availableCars = cars.filter(car => car.location === location && car.available);
    return availableCars.map(car => car.model); 
}

console.log(checkAvailability("41169")); 



// Discount Calculator for the total price for people who work there
function applyDiscount(totalPrice, discountPercentage) {
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const finalPrice = totalPrice - discountAmount;
    return finalPrice.toFixed(2);
}

const totalPrice = getTotalPrice();

// 10% discount
console.log(`Final price after 10% discount is : $${applyDiscount(totalPrice, 10)}`);