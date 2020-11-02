function lol(arr) {
    let len = arr.length
    let odds = 0
    for (i of arr) {
        if (i%2 !==0) {
            len--
            odds++
        }
        if (len <= odds) return Math.ceil(odds / 2)
    }
    return Math.ceil(odds / 2)
}

console.log(lol([3,7,2,5,1,8,7,10]))
console.log(lol([3,5,3,7,9,4,2]))
console.log(lol([5,34,24,6,23,7]))
console.log(lol([83,674,3,6,36,75,3,76,22,9]))
console.log(lol([22,6,2,1,2,2,1,2,2,2,2,2,2,2]))