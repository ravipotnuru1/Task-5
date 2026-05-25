
// 1. Spread Operator

let frontEnd =["HTML", "CSS"]
let backEnd = ["Node", "MongoDB"]
let mergedArr = [...frontEnd, ...backEnd]
console.log(mergedArr);

// 2. Copy Array 

let original = [1,2,3]
let copy = [...original]
copy.push(4)
console.log(copy);
console.log(original);  // Original array did not changed

// 3. Object Merge

let student1 ={
    name : "Rahul"
}
 
let student2 = {
    role : "Developer"
}

let mergedObj = {...student1,...student2}
console.log(mergedObj);

// 4. Test Operator 

function MemoryManagement (a,b,...rest){
console.log(a);
console.log(b);
console.log(rest) // prints rest values
lenOfRest = (rest.length) 
console.log(lenOfRest);  // Gives the lenght of rest
;


}

MemoryManagement(1,2,3,4,5,6,7,8,9,0)

// 5. Array Destructure

let colors = [ "red", "green", "blue", 'yellow']
let [r,g,b,y]= colors
console.log(b);    // Prints only blue color


// 6. Nested array Destructuring 

let data = [1,[2,[3,[4]]]]
let [a1,[a2,[a3,[a4]]]]= data
console.log(a1,a2,a3,a4);

// 7. Object Destructuring 

let mobile ={
    brand : "Samsung",
    price : " 20000",
    color : "black"
}

let {brand, price, color}= mobile
console.log(brand+" "+color);

// 8. push() and pop()

let numbers =[1,2,3]
numbers.push(4,5,6)
numbers.pop()
console.log(numbers);

// 9. shift() and unshift()

let fruits = ["banana","orange"]

fruits.shift()
fruits.unshift("Apple")

console.log(fruits);

// 10. splice()

let arr = [ 1,2,  30, 40, 5, 6]
arr.splice(2,2, 3,4)
console.log(arr);

// 11. comcat

let an = [1,2]
let bn= [3,4]
let res =an.concat(bn,4,5)

console.log(res);

// 12. slice()

let marks =[10, 20, 30, 40, 50, 60,70]

s=marks.slice(2,5)
console.log(s);


// 13. flat()

let nest = [1,[2,[3,[4,[5]]]]]

let n = nest.flat(Infinity)

console.log(n);

//14. fill()

let arr4 = [1,2,3,4,5]
let f=arr4.fill("done",3,5)
console.log(f);

// 15. includes()

let values = [10, 20, 30, 40]

console.log(values.includes(20));
console.log(values.includes(100));

// 16. indexOf()

let arr5 = [1,2,3,4,3,2 ]
console.log(arr5.indexOf(3));
console.log(arr5.indexOf(2));

// 17. lastIndexOf()

console.log(arr5.lastIndexOf(3));
console.log(arr5.lastIndexOf(2));

// 18. sort()

let numb = [100, 2, 55, 1,9]
console.log(numb.sort());   
// we got wrong ouput here  [1,100,2,55,9] 
// actual output should be [0,1,2,55,100]

//19. reverse()

let letters = ["a", "b", "c", "d"]
console.log(letters.reverse());

// 21. Shopping Cart 

let cart = [ "Shoes", "Watch", "Phone"]
cart.push("Laptop")
cart.splice(1,1)
console.log(cart.includes("Phone"));

console.log(cart);

// 22.  Employee DataBase

let employee ={
    name :" Naveen",
    role :" web developer ",
    salary : "5LPA"
}

let {nam, rol , sal} = employee
let empCopy = {...employee}
empCopy.salary= "6LPA"
console.log(employee);  // No its not changed in original object


//23. Custom Functions

function company(name, ...Skills){

    console.log(name);
    console.log(Skills);
    console.log(Skills.length);
    
    
    
}
company("Naveen", "HTML", "CSS", "JS", "React")

// 24. Array Analyzer

let data1 = [1,2,3,4,5,6,7,8,9,10]
let data2 = data1.slice(0,5)
console.log(data2.reverse());

console.log(data2.includes(7));
console.log(data1.indexOf(10));

// 25. complete challange

let users = [
 {name:"Rahul",role:"Developer"},
 {name:"Ajay",role:"Designer"},
 {name:"Kumar",role:"Tester"}
]

users.push({name : "Ravi" , role: "Developer"})
console.log(users);

users.pop()


console.log(users);

let users1 = [
 {name:"Rakesh",role:"Frontend"},
 {name:"Akash",role:"Bakcend"},
 {name:"Karthik",role:"FullStack"}
]

let mergedUsers = users.concat(users1)

for (let i =0; i<mergedUsers.length; i++){
    console.log (mergedUsers[i].name);

}

let final = mergedUsers.reverse()
console.log(final);

