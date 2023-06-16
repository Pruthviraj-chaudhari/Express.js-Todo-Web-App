module.exports.getDate = function() {

    let currentDate = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        // year: "numeric"
    }
    return currentDate.toLocaleDateString("en-US", options);
}