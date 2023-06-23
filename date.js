// module.exports.getDate = function() {

//     let currentDate = new Date();
//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         // year: "numeric"
//     }
//     return currentDate.toLocaleDateString("en-US", options);
// }

// OR

// Arrow Function
exports.getDate = () => {
    let currentDate = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    return currentDate.toLocaleDateString("en-US", options);
}


// Another Function
exports.getDay = function() {
    let currentDate = new Date();
    let options = {
        weekday: "long",
    }
    return currentDate.toLocaleDateString("en-US", options);
}

// Another Function
exports.getYear = function() {
    let currentDate = new Date();
    let options = {
        month: "long",
        year: "numeric"
    }
    return currentDate.toLocaleDateString("en-US", options);
}
