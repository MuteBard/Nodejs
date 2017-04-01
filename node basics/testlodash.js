var array = [68,100,95,88,73,93,82]
var lodash = require('lodash')

console.log("Shuffled: "+lodash.shuffle(array))
console.log("Sum     : "+lodash.sum(array))
console.log("Max     : "+lodash.max(array))
console.log("Mean    : "+lodash.mean(array))

// Shuffled: 95,82,93,88,100,68,73
// Sum     : 599
// Max     : 100
// Mean    : 85.57142857142857
