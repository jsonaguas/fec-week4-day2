const loggedIn = true;
const list = {
    eggs: 4.99,
    milk: 2.49,
    bread: 2.99,
    butter: 3.49,
    sugar: 2.99
};
const cart = [];
let price = 0;

if (loggedIn) {
    console.log('You are logged in and can now shop!');
    console.log('Here is a list of items you can add to your cart:');
    for (let key in list) {
        console.log(key + ': $' + list[key]);
    }

    let input = prompt("Enter the name of item you'd like to add to the list");
    cart.push(input);

    if (input in list) {
        price += list[input];
        console.log('You have added ' + input + ' to your cart');
        console.log('Your total is now ' + price);
    }
    
} else if (!loggedIn) {
  console.log('You are not logged in');}



