// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function deepClone(person) {
    var returnObject = {};

    for (var key in person) {
        if (Array.isArray(person[key])) {
            var localArray = [];

            for (var i = 0; i < person[key].length; i++) {
                localArray[i] = deepClone(person[key][i]);
            }

            returnObject[key] = localArray;
        } else if (typeof person[key] === 'object' && person[key] !== null) {
            // Handle nested objects correctly by recursively cloning
            returnObject[key] = deepClone(person[key]);
        } else {
            // For primitive values, return them as is
            returnObject[key] = person[key];
        }
    }

    return returnObject;
}


var car={
    "name":"abc",
    "model":"n",
    "engine": "petrol",
    specs:{
        "color":"red",
        "isElectic": false
    }
}

console.log(deepClone(car));








https://chat.whatsapp.com/K6lHHFyhqUu74aCTqkWEut
