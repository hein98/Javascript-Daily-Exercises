let employee=[
    {name:'Mike',gender:'Male',age:20},
    {name:'Sandy',gender:'Female',age:27},
    {name:'Ponnie',gender:'Female',age:21},
    {name:'Leo',gender:'Male',age:20},
]

let result=employee.filter( data =>{return data.gender =='Female'})
console.log(result)

// [
//   { name: 'Sandy', gender: 'Female', age: 27 },
//   { name: 'Ponnie', gender: 'Female', age: 21 }
// ]

let result2=employee.filter(data=>
{
    return data.gender== 'Male' && data.age==20
}
)
console.log(result2)

// [
//   { name: 'Mike', gender: 'Male', age: 20 },
//   { name: 'Leo', gender: 'Male', age: 20 }
// ]

let result3=employee.find(data=>
{
    return data.gender== 'Female' && data.age ==27
}
)
console.log(result3)
// { name: 'Sandy', gender: 'Female', age: 27 }