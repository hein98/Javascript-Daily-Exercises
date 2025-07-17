

let city =['New York','Mexico','Bangkok']
let car = ['Lambo','Ferreri','Honda']

let newArr=city.concat(car)// Concat  
console.log(newArr)

// [ 'New York', 'Mexico', 'Bangkok', 'Lambo', 'Ferreri', 'Honda' ]

let newArr2=[...city,...car]
console.log(newArr2)