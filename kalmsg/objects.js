// Objects example
let aboutMe = {
    firstName: "Georgie",
    surname: "Kalms",
    dob: "01/01/1800",
    email: "georgie.test@test.com"
};
/*
//immutable,primitive data type
let my_first_name = aboutMe.firstName
console.log(my_first_name);

//mutable, comlex data type - the reference is to an object or class rather than a variable
let name = aboutMe
aboutMe.firstName = "Lucy";
console.log(name) 
*/

let aboutMyBestFriend = {
    nickName: "lulu",
    starSign: "Pisces",
    Pet: "Koala",
    dob: "19/04/1900"
};

//Test 2
/*
function myLife(aboutMe, aboutMyBestFriend) {
console.log(aboutMe, aboutMyBestFriend);
}   
myLife(aboutMe, aboutMyBestFriend);
*/

//Test 2 - teacher's example
/*
function myLife(aboutMe, aboutMyBestFriend) {
    const myFname = aboutMe.firstName; //allows to extract information
    const myBFF = aboutMyBestFriend.nickName;
    const ournames = { //puts togther above extracted inof into one object instead of two
        x: myFname,
        y: myBFF,
    }
    return ournames ; //the return function can only return 1 value/string
}
const details = myLife(aboutMe, aboutMyBestFriend);
console.log(details);
*/

//Test 3
/* Create a function which takes in two inputs: - aboutMe & aboutMyBestFriendReturn back - your first name - your friend's name- both yours and your friend's dobconsole.log() // your first nameconsole.log() // your friend's first nameconsole.log() // your dobconsole.log() // your friend's dob*/

function thirdTestNames(aboutMe, aboutMyBestFriend) {
    const myFirstName = aboutMe.firstName;
    const myBFFName = aboutMyBestFriend.nickName;
    const myDob = aboutMe.dob;
    const myBffDob = aboutMyBestFriend.dob;
    const ourTestdetails = {
        myname: myFirstName,
        bffName: myBFFName,
        dobMine: myDob,
        dobBFF: myBffDob,
    };
    return ourTestdetails;
}
const moreDetails = thirdTestNames(aboutMe, aboutMyBestFriend);
console.log(moreDetails.myname);
console.log(moreDetails.bffName);
console.log(moreDetails.dobMine);
console.log(moreDetails.dobBFF);