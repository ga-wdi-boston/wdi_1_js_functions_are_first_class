// Exercise 1: Javascript Functions are First Class

// Here is the necessary code from the lesson.

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

var inputNumbers = [3, 1, 6, 2, 4, 9, 7, 5];

if (countWhereTrue(inputNumbers, isOdd) === 4) {
  console.log('isOdd predicate works correctly');
} else {
  console.log('isOdd predicate does not work correctly')
}

// Rewrite the predicate isEven so that the following code works.
// Note that this, like the example above, is using a named function.

function isEven (number) {
  return false;
}

if (countWhereTrue(inputNumbers, isEven) === 3) {
  console.log('isEven predicate works correctly');
} else {
  console.log('isEven predicate does not work correctly')
}

// Change the following code so that it counts numbers divisible by three.  Note that this is using a completely anonymous function.

if (countWhereTrue(inputNumbers, function(number){
  return false;
}) === 3) {
  console.log('anonymous divisible by 3 predicate works correctly');
} else {
  console.log('anonymous divisible by 3 predicate does not work correctly')
}


