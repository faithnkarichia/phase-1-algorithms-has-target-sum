function hasTargetSum(array, target) {
  let seenNumbers = new Set();
  for (let num of array) {
      let complement = target - num;
      if (seenNumbers.has(complement)) {
          return true;
      }
      seenNumbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
create an empty set to store numbers
loop through all the numbers
do target -the numbers looped through and check if the answer is in the set
if so return true else return false
*/

/*
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,4,6,7], 10));
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
