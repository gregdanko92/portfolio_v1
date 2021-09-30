


let array = [true, 1, 0, 1, 2, 0, 1, 3, "a"]

function moveZeroes(a){
    let zeroArray = []
    for (let i =0;i<a.length;i++){
        if(a[i] === 0){
            zeroArray.push(a[i])
            zeroArray.splice(a[i])
        }
    }
    return a + zeroArray

}

console.log(moveZeroes(array))