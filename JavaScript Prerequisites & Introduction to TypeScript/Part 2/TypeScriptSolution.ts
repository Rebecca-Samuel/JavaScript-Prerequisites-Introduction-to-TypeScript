//  Part 2 — Introduction to TypeScript// 


//Task 1:Basic Types//

let studentName: string  = "Tunde";
let studentAge:  number  = 21;
let isEnrolled:  boolean = true;

// Broken declaration is fixed below.//
// What was wrong: the type annotation said `number` but the value is a string.//
let courseName: string = "Frontend Development"   //changed number → string//


//Task 2:Typed Functions//

function addNumbers(a: number, b: number): number {
  return a + b
}

function isAdult(age: number): boolean {
  return age >= 18
}

function getArea(width: number, height: number): number {
  return width * height
}

console.log(addNumbers(4, 6))   // 10
console.log(isAdult(20))        // true
console.log(isAdult(15))        // false
console.log(getArea(8, 5))      // 40


//Task 3 — Objects & Interfaces//

interface Student {
  id:       number
  name:     string
  age:      number
  course:   string
  isActive: boolean
}

const student1: Student = {
  id:       1,
  name:     "Amaka Obi",
  age:      22,
  course:   "Frontend Development",
  isActive: true,
}

const student2: Student = {
  id:       2,
  name:     "Emeka Nwosu",
  age:      25,
  course:   "Backend Development",
  isActive: false,
}

console.log(student1)
console.log(student2)

//Instructor interface//

interface Instructor {
  name:     string
  cohort:   number
  subjects: string[]
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`
}

const stanley: Instructor = {
  name:     "Stanley",
  cohort:   8,
  subjects: ["HTML", "CSS", "JavaScript"],
}

console.log(introduceInstructor(stanley))
// → "Stanley teaches Cohort 8 and covers: HTML, CSS, JavaScript"


//Task 4: Arrays & Union Types//

let names:  string[] = ["Ada", "Bola", "Chidi"]
let scores: number[] = [78, 90, 55, 88]

// Union type id can be a string OR a number; the function always returns a string.
function formatId(id: string | number): string {
  return String(id)
}

console.log(formatId(42))    // "42"
console.log(formatId("abc")) // "abc"