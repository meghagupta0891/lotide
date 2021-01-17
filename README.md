# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @meghagupta0891/lotide`

**Require it:**

`const _ = require('@meghagupta0891/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: this function takes two arrays as input and prints assertion passed if two arrays are the same and assertion failed if not.
* `assertEqual`: this function takes two arguments that are primitive type and pritns assertion passed if two arguments are the same and assertion failed if not.
* `assertObjectsEqual`: this function takes two objects as input and prints assertion passed if two objects are the same and assertion failed if not.
* `countLetters`: this function takes a string and returns the object that contains each letters as key and the he number of key occurrences as value.
* `countOnly`: this function counts the number of the items that are passed by user and return the object that contains item as key and count as value.
* `eqArrays`: this function returns true if two arrays are the same and false if not.
* `eqObjects`: this function returns true if two objects are the smae and false if not.
* `findKeyByValue`: this function takes an object and value. this function returns a key when the arugment function returns true with the object.
*  `letterPositions`: this function takes a string as an input and returns all the indexes of occurence of a character in that string.
* `head`: this function takes an array and returns the first element in the array.
* `map`: this function takes an array and function to map the array. It returns a mapped array.
* `middle`: this function takes an array and returns the element in the middle index.
* `tail`: this function takes an array and excludes the first element.
* `without`: this function takes two arrays and return a new array that includes the elements from both first and the second arrays, but any repetitive elements are deleted.

