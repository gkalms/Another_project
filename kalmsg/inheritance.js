class Person {
    constructor(first, last, email, age) {
      // Base attributes
      this.firstName = first;
      this.lastName = last;
      this.emailAddress = email;
      this.ageInYears = age;
    }
  
    greeting() {
      console.log(`Hey ${this.firstName}!`);
    }
  }
  
//   // Extended the base class to create a teacher
//   class Teacher extends Person {
//     constructor(first, last, email, age, subjectsTaught) {
//       super(first, last, email, age);
//       this.subjects = subjectsTaught;
//     }
  
//     greeting() {
//       console.log(`Hey ${this.firstName}! Be a nice teacher!`);
//     }
// }

