//array

const array = [10,20,"aswin",5.12,Date()]
console .log("before change")
for (var ele in array){
    console.log(array[ele])
}

console.log("after change")
// array[0]= "reactjs"
array.push("3rd years")  //appending in an array

for (var ele of array){
    console.log(ele)
}

array.pop()  //removing an element in an array

for (var ele of array){
    console.log(ele)
}

array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()

console.log("after poping all the elements", array)

if(array.length > 0){
    console.log("Elements are present")
}
else{
    console.log("No elements are in the array")
}

array.push(1)
if(array.length > 0){
    console.log("Elements are present", array)
}
else{
    console.log("No elements are in the array")
}

// array.forEach(element => {
//     console.log(element)
// })

// Objects in Java script is just a dictionary in python

var a = {
    car : "BMW",
    model : "Volvo x57",
    airbags : 8,
    wheels : 5,
    color : "red"
}

// Extraction from objects
console.log(a["car"])
console.log(a.model)

var some = 'wheels'
console.log(a[some])

console.log(a)
// changing the value of the key
a.car = "mahindra"
a.model = "xuv700"
console.log(a)
// adding a key and value pair
a.sunroof = {shape:"rectangle", is_present:"yes"}
console.log(a.sunroof.shape)
// using for loop
for (var ele in a){
    console.log(ele + ":" + a[ele])
    if (typeof a[ele] == "object"){
        for (var val in a[ele]){
            console.log(val + ":" + a[ele][val])
        }
    }
}


// for (var ele in a) {
//     if (typeof a[key] === "object") {
//         printValues(a[key]);   
//     } else {
//         console.log(a[key]);    
//     }
// }

// function printValues(obj) {
//     for (var key in a) {
//         if (typeof a[key] === "object") {
//             printValues(a[key]);   
//         } else {
//             console.log(a[key]);    
//         }
//     }
// }

// printValues(conversation);
// printValues(conversation);


//functions
// non parametric
// function function_name(){
//     console.log("aswin" + 2064)
// }

// function_name()

// parametric
// function function_name_1(a){
//     return (a ** 5)
// }

// console.log(function_name_1(2))

// a = () => console.log("hello world")

// a()

class AIandDS{
    abcd = "alphabet";
    diff(){
        console.log("hritick mind voice: doli doli doli doli...")
    }
    sum(){
        console.log(this.abcd)
        console.log("aswin")
        this.diff()
    }
    // console.log(abcd)
}
a = new Object()
a.name = "AI and DS"
console.log(a)
object1 = new AIandDS();
// console.log(object1.abcd())
object1.sum()