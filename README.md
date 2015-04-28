![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript Objects are First-Class

## Introduction

One of the things that makes Javascript such a powerful language is that in jargon, "functions are first-class objects."  This means that you can do the same things with functions that you can do with any other value: you can store them in variables, you can pass them as arguments to other functions, and return them from other functions.  Today, we're going to be exploring those capabilities.

## Objectives

By the end of this lesson, students should be able to do the following:

- Store and use anonymous functions in variables
- Pass functions as arguments to functions that expect them
- Write functions that take other functions as arguments
- Return functions from functions

## What's in a name?

You've seen functions like this one already:

```javascript
function square(x) {
    return x*x;
}
```

This function has a name: `square`.

But we could have defined it another way:

```javascript
var square = function (x) {
    return x*x;
}
```

The practical result?  No difference at all, yet.

Something to be careful of: the observant among you will have noticed that there are two places that you can give a function a name.  For now: never use both of them, because there are very few good reasons to  and unless you have a good reason to use bth 

But what can we do with this?

## Do something later: callbacks

The `setTimeout()` function takes a function and a delay in milliseconds, and executes the function as soon as possible after that delay has passed.  

```javascript
function announce() { 
    console.log('Ding!'); 
}

var threeSecondTimeout = setTimeout (announce, 3000);

var fiveSecondTimeout = setTimeout (function () { 
    console.log('Ding!'); 
}, 5000);
```

The `setInterval()` function takes a function and a delay in milliseconds, and executes that function as closely as possible each time that interval of milliseconds has passed.

```javascript 
function annoy(){ 
    console.log('Are we there yet?');
}

var threeSecondInterval = setInterval(annoy, 3000);

var fiveSecondInterval = setInterval(function (){
    console.log("I'm bored!");
}, 5000);
```

Things to be careful of:  you need to know what the function expects as parameters.  Javascript is forgiving, but not a mind-reader.

## I'll handle the big picture, you handle the details

There are a lot of problems that can be broken down into two or more smaller, easier problems.  We're going to start with a fairly simple but artifical one: 

```javascript
function countOdds (numbers) {
    var i;
    var count = 0;
    for (i = 0; i < count.length; i++) {
        if (numbers[i] %2 === 1) {
            count++;
        }
    }
}

var inputNumbers = [1, 5, 7, 2, 8, 6, 9, 3];
countOdds(inputNumbers);
```

This is two problems: one, iterating over the list and counting items, and two, determining whether the item should be counted.  So we can rewrite it like this:

```javascript
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

var inputNumbers = [1, 5, 7, 2, 8, 6, 9, 3];
countWhereTrue(inputNumbers, isOdd);
```

## Try it for yourself

1. Open the scripts/exercise-1.js file in this repository and follow the instructions in the comments.  In this exercise you will be writing more predicates.

2. Open the scripts/exercise-2.js file in this repository and follow the instructions in the comments.  In this exercise you will be doing different things with the results of the predicates.

3. Error detection exercise?



