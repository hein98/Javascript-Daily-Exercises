// Spread Operator [...]

function getName(data1,data2,...data3){
    console.log(data1,data2)
    data3.forEach(item=>{ //in Array format
        console.log(item)
    })
}

getName('Mike','William','David','Henry','Addrick')
// Mike William
// David
// Henry
// Addrick