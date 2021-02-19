//lesson 1 - Define object to get personal details
let mydetails_objects = {
    name: {
        firtsname: "georgie",
        surname: "kalms",
    },
    phone_number: 613934567,
    email: "test@test.com",
}

function myDetails(details) {
    console.log("Lesson 1", details)
}
myDetails(mydetails_objects)

//Lesson 2 - phone number only
const phone = mydetails_objects.phone_number
console.log("Lesson 2", phone)

//Lesson 3 - Surname only
const mySurname = mydetails_objects.name.surname;
console.log("Lesson 3", mySurname)

//Lesson 4
const myEmail = mydetails_objects["email"]; // instead of mydetails_objects.email
console.log("Lesson 4", myEmail)


//lesson 5 - how to add more key value pairs
let company_1 = mydetails_objects.company_name_1
let company_2 = mydetails_objects.company_name_2

mydetails_objects.company_name_1 = "Deloitte"
mydetails_objects.company_name_2 = "EPA"

console.log("lesson 5", mydetails_objects)

