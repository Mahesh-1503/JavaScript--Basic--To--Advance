//Caching Data: Use Map for caching results of a function:
const cache = new Map();

function fibonacci(n) {
  if (cache.has(n)) {
    return cache.get(n); // Use cached result if available
  }

  if (n <= 1) return n;
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  cache.set(n, result); // Store the result in cache
  return result;
}

console.log(fibonacci(10)); // Output: 55
