# Hashtables

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

## Challenge

Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

Using array of linked lists to store values and deal with collsions.

### Bog O
- add() -> time: average O (1) --- worst case O(n)
- get() -> time: average O (1) --- worst case O(n)
- contains() -> time: average O (1) --- worst case O(n)



## API

- Create a new Hash table 

```javascript
 const table = new Hashtable(256); // 256 is the size of the table
```

- Insert new value to your Hash table

```javascript
 table.add(key,value); 
```

- Search for specific key

```javascript
table.contain(key); 
```

- Get a value

```javascript
table.get(key);
```

