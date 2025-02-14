```
# What is JSON?

JSON stands for **JavaScript Object Notation**. It's a simple and easy way to store or exchange data between a server (like a computer that stores information) and a web application (like a website you use on your browser). Think of it as a language that both the server and the web app can understand.

---

## How Does JSON Look?

JSON uses two main structures:

### 1. **Key-Value Pairs** (like a dictionary or a list of items with labels):
```json
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```
- Here, `"name"`, `"age"`, and `"city"` are **keys**, and `"John"`, `30`, and `"New York"` are their corresponding **values**.
- Keys are always in double quotes (`""`), and values can be strings (text), numbers, arrays, or even other objects.

### 2. **Arrays** (like a list of things):
```json
["apple", "banana", "cherry"]
```
- This is just a list of fruits. Arrays are enclosed in square brackets (`[]`), and each item is separated by a comma.

---

## Why Use JSON?

JSON is lightweight and easy to read, both for humans and computers. It’s commonly used to send data over the internet because it’s simple and works well with many programming languages, not just JavaScript.

---

## Two Important Functions in JSON

When working with JSON in JavaScript, there are two key functions you need to know:

### 1. **`JSON.stringify()`**:
- This function converts a JavaScript object (or any value) into a JSON string.
- Why? Because when sending data over the internet, it needs to be in text format (a string).
- Example:
  ```javascript
  let person = { name: "Alice", age: 25 };
  let jsonString = JSON.stringify(person);
  console.log(jsonString); // Output: '{"name":"Alice","age":25}'
  ```

### 2. **`JSON.parse()`**:
- This function does the opposite: it converts a JSON string back into a JavaScript object.
- Why? Because once the data is received, you’ll want to work with it as an object in your code.
- Example:
  ```javascript
  let jsonString = '{"name":"Alice","age":25}';
  let person = JSON.parse(jsonString);
  console.log(person.name); // Output: 'Alice'
  ```

---

## Summary

- **JSON** is a way to organize and exchange data.
- It looks like either **key-value pairs** (for structured data) or **arrays** (for lists).
- **`JSON.stringify()`** turns a JavaScript object into a JSON string (for sending data).
- **`JSON.parse()`** turns a JSON string back into a JavaScript object (for using the data).

In short, JSON is like a universal translator for data!
```