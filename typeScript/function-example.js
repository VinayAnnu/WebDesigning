var multiply = function (x, y) {
    return x * y;
};
var multiplyTs = function (x, y) {
    return x * y;
};
var divide = function (x, y) {
    return x / y;
};
var divideTs = function (x, y) {
    return x / y;
};
// only function definition
var divideTs2;
divideTs2 = function (x, y) {
    return x / y;
};
//optional parameter 
var multiplyOrSquare = function (x, y) {
    if (y) {
        return x * y;
    }
    else {
        return x * x;
    }
};
// rest parameter 
var allPeopleIWantToInvite = [];
var pushToPartyList = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    console.log(people);
    var newPeopleArray = people;
    allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
    console.log(allPeopleIWantToInvite);
    return allPeopleIWantToInvite;
};
pushToPartyList("Aditya", "sid", "rohit");
pushToPartyList("Shikha", "Kavita", "Aarohi");
var numberOfFriends = function (friends) {
    if (typeof friends == 'string') {
        return 'you have 1 friend';
    }
    else {
        var message = "you have " + friends.length + " friends";
        return message;
    }
};
console.log(numberOfFriends("Aditya"));
console.log(numberOfFriends(["Aditya", "Ajay"]));
