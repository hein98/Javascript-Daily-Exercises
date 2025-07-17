let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let date = currentDate.getDate()
let hour = currentDate.getHours()
let minute = currentDate.getMinutes()

currentTime= `${year}/${month}/${date}   ${hour},${minute}`
console.log(currentTime)

// 2025/7/17   13,3