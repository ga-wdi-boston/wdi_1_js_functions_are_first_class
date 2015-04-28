// Exercise 3: Javascript Functions are First Class

// Here is example code from the lesson.

// Example 7

function countWhereTrue (numbers, predicate) {
    var i;
    var count = 0;
    for (i = 0; i < count.length; i++) {
        if (predicate(numbers[i])) {
            count++;
        }
    }
}

function isOdd(number) {
    return (number % 2) === 1;
}

// And here is some code to test that the code above works correctly.

var inputNumbers = [3, 1, 6, 2, 4, 9, 7, 5];

if (countWhereTrue(inputNumbers, isOdd) === 4) {
  console.log('isOdd predicate works correctly');
} else {
  console.log('isOdd predicate does not work correctly');
}

// Modify the code below so that instead of returning the count of items
// matching the predicate, it returns an array of them.

function listWhereTrue (numbers, predicate) {

  // your code here
  return undefined;
}

var listResult = listWhereTrue(inputNumbers, isOdd);
if (numberListsEqual(listResult, [3, 1, 9, 7, 5])) {
  console.log('listWhereTrue produces the right answer!');
} else {
  console.log('listWhereTrue is still confused.');
}

// The code below helps to check your answer.  You should not modify it.

function numberListsEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }

  if (a.length != b.length) {
    return false;
  }

  if (a.filter(function(e, i){
    return (typeof e !== "number") || e !== b[i];
  }).length) {
    return false;
  }

  return true;
}
