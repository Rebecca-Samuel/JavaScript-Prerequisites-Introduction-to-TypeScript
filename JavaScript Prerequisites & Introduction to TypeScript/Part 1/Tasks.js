// JavaScript Prerequisites// 

// Task 1: Arrow Functions//

const square = (n) => n * n
const greet = (name) => `Hello, ${name}!`
const multiply = (a, b) => a * b

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log("Task 1:")
console.log(square(6))               // 25
console.log(greet("Amaka"))          // Hello, Amaka!
console.log(multiply(3, 4))          // 12
console.log(getFullName("Ada", "Obi")) // Ada Obi


//Task 2: Destructuring//

const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" }
const scores = [88, 72, 95, 60, 45]

// Destructure name and course//
const { name, course } = student

// Rename age to studentAge//
const { age: studentAge } = student

// Destructure first and second array values//
const [firstScore, secondScore] = scores

console.log("\nTask 2:")
console.log(name, course)            // Amaka  Frontend Development
console.log(studentAge)              // 22
console.log(firstScore, secondScore) // 88  72


//Task 3: Spread Operator//

const frontend = ["HTML", "CSS", "JavaScript"]
const backend  = ["Node.js", "Express", "MongoDB"]
const userProfile = { username: "coder_ade", email: "ade@example.com" }

// Combine arrays without modifying originals//
const fullStack = [...frontend, ...backend]

// Create new object with updated email; original stays intact//
const updatedProfile = { ...userProfile, email: "newemail@example.com" }

console.log("\nTask 3:")
console.log(fullStack)       // ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
console.log("Original:", userProfile)  // email: ade@example.com — unchanged
console.log("Updated: ", updatedProfile) // email: newemail@example.com


//Task 4:Template Literals //
const personName = "Fatima"
const personAge  = 24

const intro = `My name is ${personName} and I am ${personAge} years old.`

const width  = 8
const height = 5
const areaMessage = `The area of the rectangle is ${width * height}`

console.log("\nTask 4:")
console.log(intro)        // My name is Fatima and I am 24 years old.
console.log(areaMessage)  // The area of the rectangle is 40


//Task 5: Array Methods//
const products = [
  { name: "Laptop",   price: 450000, inStock: true  },
  { name: "Mouse",    price: 8000,   inStock: true  },
  { name: "Monitor",  price: 120000, inStock: false },
  { name: "Keyboard", price: 15000,  inStock: true  },
]
// .map() array of product names//
const productNames = products.map((p) => p.name)

// .filter()  only in-stock products//
const inStockProducts = products.filter((p) => p.inStock)

// Combined uppercase names of in-stock products only//
const inStockNames = products
  .filter((p) => p.inStock)
  .map((p) => p.name.toUpperCase())

console.log("\nTask 5:")
console.log(productNames)    // ['Laptop', 'Mouse', 'Monitor', 'Keyboard']
console.log(inStockProducts) // Laptop, Mouse, Keyboard objects
console.log(inStockNames)    // ['LAPTOP', 'MOUSE', 'KEYBOARD']


//Task 6 — Ternary & Logical &&//

const role      = "editor"
let   cartItems = 0

//Nested ternary for role-based access//
const access =
  role === "admin"  ? "Full Access"  :
  role === "editor" ? "Edit Access"  :
  role === "viewer" ? "Read Only"    :
                      "No Access"

// cartItems && "View Cart"
// When cartItems is 0, JavaScript treats 0 as falsy.
// The && operator short-circuits and returns the left-hand value (0) not "View Cart".
// So logging this prints 0, not "View Cart".
console.log("\nTask 6:")
console.log(access)                     // Edit Access
console.log(cartItems && "View Cart")   // 0  ← prints 0 because 0 is falsy

// Fix: convert to a proper boolean so the result is false (not 0) when empty,
// and "View Cart" when items exist.
cartItems = 3
const cartLabel = cartItems > 0 && "View Cart"
console.log(cartLabel)  // "View Cart" (cartItems is now 3)

cartItems = 0
const cartLabelEmpty = cartItems > 0 && "View Cart"
console.log(cartLabelEmpty) // false nothing renders in React when value is false
