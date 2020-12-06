let arr =   ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
let removed = arr.splice(3,1)
console.log("The removed item is "+ removed);
arr.splice(7,2,"Dharan","Birtamod")
console.log("The final array after adding is "+ arr)
console.log("The length of the array is "+ arr.length)
