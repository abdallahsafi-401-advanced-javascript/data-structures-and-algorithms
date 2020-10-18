# Repeated Word

## problem Domain

- Write a function that accepts a lengthy string parameter.
- Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

**input** -> String
**output** -> reapted word in the String input

## Algorithm

- Convert the string into array of words Using regex 
- Make all words lower case
- Create new hastable
- Iterate over the array
- Based on a condition (if hash contatin word) return the word
- If not it will add the word 

## Big o
- time: O(n)
- spase: O(n)

