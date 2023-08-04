// primitives: number, string, boolean
// more comples types: arrays, objects
var age;
age = 12;
var userName;
userName = "John";
var inInstructor;
inInstructor = true;
var hobbies;
hobbies = ['code', 'read'];
var myDog = { name: "Rover", barkVolume: 4 };
var dogs = [{ name: "Rover", barkVolume: 4 }, { name: "Raber", barkVolume: 5 }];
//type inference
var course = 'Angular the Guide';
// course = 11234;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses;
    };
    return Student;
}());
var st1 = new Student('master', 'Student', 22, ['crs1', 'crs2']);
st1.enroll('Angular');
console.log(st1.firstName);
