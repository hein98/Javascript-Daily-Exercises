let birthDay='20/11/1998'

let data=birthDay.split('/')
console.log(data)
// [ '20', '11', '1998' ]

let[day,month,year]=birthDay.split('/')
console.log(day,month,year)
// 20 11 1998

//----------------------------------------------------------------------------------

let greeting='မင်္ဂလာပါ ||| Hello ||| こんにちは'
let[B,E,J]=greeting.split('|||')
console.log(B,E,J)
// မင်္ဂလာပါ   Hello   こんにちは