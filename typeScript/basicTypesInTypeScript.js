//this is a typscript file 
// declaring a String data type
var someName = "aditya";
var someAddress = "Udyog Vihar Phase 5, Gurgaon";
var someBigParagraph = "The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, and hypermedia information systems.[1] HTTP is the foundation of data communication for the World Wide Web.\" \n\t\"Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text. HTTP is the protocol to exchange or transfer hypertext.\" \n\t\"Development of HTTP was initiated by Tim Berners-Lee at CERN in 1989. Standards development of HTTP was coordinated by the Internet Engineering Task Force (IETF) and the World Wide Web Consortium (W3C), culminating in the publication of a series of Requests for Comments (RFCs)";
console.log(someBigParagraph);
// you can declare numbers 
var skillScoreOfStudent = 6;
var totalNumberOfUsers = 4580923809;
var userRating = 49.520393;
// you can declare booleans
var isRegisteredUser = true;
var isPaidUser = false;
// you can declare arrays 
var popularSports = ["soccer", "basketball", "cricket", "tennis", "athletics",
    "rugby", "formula 1", "boxing",
    "ice hockey", "volleyball"
];
var someNumberArray = [1, 2, 3, 4, 5, 6];
var AnotherWayNumberArray = [11, 22, 33, 44, 55, 66]; //another way of declaration of array
console.log(someNumberArray[3]);
console.log(AnotherWayNumberArray[4]);
// you can define tuples which are basically array's whose length and value types are known
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
// you can set the type to any and assign any kind of value to the letiable
var iCanStoreAnyValue;
iCanStoreAnyValue = "Aditya";
iCanStoreAnyValue = 3;
iCanStoreAnyValue = ["Something", "someone"];
iCanStoreAnyValue = ["something", 1, 4, true];
// you can set null or undefined also as values
var iDontHaveAValue;
var iHaveUndefinedValue;
var icanOnlyHaveNullAndUndefinedValues;
