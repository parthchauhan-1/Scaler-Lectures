function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == "coffee") {
            resolve("Order accepted!!");
        }
        else {
            reject("Order rejected!!");
        }
    })
}
function processOrder(orderStatus) {
    return new Promise(function (resolve) {
        resolve(`${orderStatus} and served!`);
    })
}
function generateBill(bill) {
    return new Promise(function (resolve) {
        resolve(`${bill} and amount is Rs100`);
    })
}

async function serveOrder(drink) {
    try {
        let orderStatus = await placeOrder(drink);
        let orderProcessed = await processOrder(orderStatus);
        let bill = await generateBill(orderProcessed);
        console.log(bill);
    }
    catch(error){
        console.log(error);
    }

}
serveOrder("tea");