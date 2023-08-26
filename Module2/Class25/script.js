function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == "coffee") {
            resolve("Order has been accepted");
        }
        else {
            reject("Order has been rejected");
        }
    })
}
function processDrink(orderStatus) {
    return new Promise(function (resolve) {
        resolve(`${orderStatus} and served!`);
    })
}

function generateBill(orderProcessed) {
    return new Promise(function (resolve) {
        resolve(`${orderProcessed} and bill is Rs100`)
    })
}

let placeOrderPromise = placeOrder("coffee");
placeOrderPromise.then(function (orderStatus) {
    // console.log(orderStatus);
    return processDrink(orderStatus)
}).then(function (orderStatus) {
    // console.log(orderStatus);
    return generateBill(orderStatus);
}).then(function (bill) {
    console.log(bill);
})

placeOrderPromise.catch(function (error) {
    console.log(error);
})