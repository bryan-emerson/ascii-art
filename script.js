//Part 1

let arrayTen = ["1111111111\n"];

for (let i = 0; i < 10 ; i ++) {
  console.log("1111111111\n");
}

//part 2

let triangleArray = ["1\n", "11\n", "111\n", "1111\n", "11111\n", "111111\n", "1111111\n", "11111111\n"]

for(let i = 0; i < triangleArray.length; i ++) {
  console.log(triangleArray[i]);
}

for(let i = triangleArray.length -1; i > 0; i --) {
  console.log(triangleArray[i]);
}

//Part 3
let pyramidArray = ["    1\n", "11\n", "   111\n", "1111\n", "  11111\n", "111111\n", " 1111111\n", "11111111\n", "111111111\n"]

for(let i = 0; i < pyramidArray.length; i += 2) {
  console.log(pyramidArray[i]);
}

for(let i = pyramidArray.length-1; i > 0; i -= 2) {
  console.log(pyramidArray[i]);
}