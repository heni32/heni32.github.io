// let group = {

//     title: "Our Group",

//     students: ["John", "Pete", "Alice"],
//     showList: function() {

//         this.students.forEach((student)=> {

//             console.log(this.title + ": " + student);


//         });

//     }

// };

// group.showList();

// let animal = { eats: true };

// let rabbit = {jump: true};

// rabbit = Object.create(animal);

// console.log(rabbit.eats);

// function User(name) {

//     this.name = name;

//     this.isAdmin = false;

// }

// let john = User('John');
// console.log(john)

// const students = [
//     { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
//     { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
//     { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
//     { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
//     { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
//   ];
  
// var student = students.filter(function(aPerson) {
//     return aPerson.courses.includes('cs303');
//   });
//   var avgScore = student.reduce(function (sum, person) {
//     return sum + parseFloat(person.grade);
//   }, 0) / student.length;

//   console.log(avgScore);


// function b() {

//     const x = 10;

//     a(50);

//     function a(x) {

//         console.log(x);

//     }

// }

// var x = 20;

// b();

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() { this.students.forEach(function(student) {
//     console.log(this.title + ": " + student); })
// }
// }
//     group.showList();
