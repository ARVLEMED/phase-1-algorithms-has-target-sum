function hasTargetSum(array, target) {
  const checkedNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (checkedNumbers.has(complement)) {
      return true; 
    }
    checkedNumbers.add(number);
  }

  return false; 
}


/* 
  o(n)
*/

/* 
  iterate through numbers in array,
  subtract each from target to look for complement
  if complement available return true else false
*/

/*
  i will write a function that initializes an empty array to store 
  new set of new numbers after iteration of each value and subtrated
  from target to find complement .if complement is there returns true 
  else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
