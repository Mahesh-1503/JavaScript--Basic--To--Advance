//Tracking Objects or Functions: Track metadata associated with objects or functions.
const metadata = new Map();

const obj = { id: 1 };
metadata.set(obj, { createdAt: new Date() });

console.log(metadata.get(obj));
// Output: { createdAt: [current date-time] }
