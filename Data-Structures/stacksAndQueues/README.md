# Stacks and Queues

## Stack
A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

**Common terminology for a stack is:**

- **Push** - Nodes or items that are put into the stack are pushed
- **Pop** - Nodes or items that are removed from the stack are popped.
  - When you attempt to pop an empty stack an exception will be raised.
- **Top** - This is the top of the stack.
- **Peek** - When you peek you will view the value of the top Node in the stack. 
  - When you attempt to peek an empty stack an exception will be raised.
- **IsEmpty** - returns true when stack is empty otherwise returns false.

**Stacks follow these concepts:**

- FILO:

First In Last Out

This means that the first item added in the stack will be the last item popped out of the stack.

- LIFO:

Last In First Out

This means that the last item added to the stack will be the first item popped out of the stack


## Queue

**Common terminology for a stack is:**

- **Enqueue** - Nodes or items that are added to the queue.
- **Dequeue** - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
- **Front** - This is the front/first Node of the queue.
- **Rear** - This is the rear/last Node of the queue.
- **Peek** - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.
- **IsEmpty** - returns true when queue is empty otherwise returns false.
Queues follow these concepts:

- FIFO:

First In First Out

This means that the first item in the queue will be the first item out of the queue.

- LILO:

Last In Last Out

This means that the last item in the queue will be the last item out of the queue.


## Challenge

Implement Singly Linked List in javascript and implement a way to insert, search and get linked list values.

## Approach & Efficiency

### Bog O
- time: O (1)




## API (Stack)

- Create a new stack

```javascript
const stack = new Stack();
```

- Add new node to your stack

```javascript
stack.push(value); 
```

- Pop from stack

```javascript
stack.pop(); \\return value that popped
```

- Get the top item in stack

```javascript
stack.peek(); \\return stack top Item
```

- Check if the stack is empty

```javascript
stack.isEmpty(); \\return true or false
```

## API (Queue)

- Create a new queue

```javascript
const queue = new Queue();
```

- Add new node to your queue

```javascript
queue.enqueue(value); 
```

- Remove from queue

```javascript
queue.dequeue(); \\return value that removed
```

- Get the top item in stack

```javascript
queue.peek(); \\return queue front Item
```

- Check if the queue is empty

```javascript
queue.isEmpty(); \\return true or false
```





