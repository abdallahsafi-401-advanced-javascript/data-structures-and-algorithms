# Problem Domain:

You are working with a file structure with only at most 2 files or folder. Each file directory has either one or two folders/files.

Comparing two file different file directories, create a method that takes in 2 directory structures and compares both and determines whether or not they have the same number of individual files.

- input : two directory structures
- output : boolean


# Visual

- this will return true

![image](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-19/images/mockTree1.PNG)

- this will return false

![image](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-19/images/mockTree2.PNG)


# Big O:

- time o(n)
- space o(n)


# Algorithem 

- create function called fileFolder.
- traverse over the two input trees.
- store the node of the two trees in arrays.
- filter the arrays to get just arrays have 'file'.
- compar the length of the two arrays.


# Implemtation

[code](./file-folder.js)
