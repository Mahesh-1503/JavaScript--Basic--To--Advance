// Callback Hell = Situation in JavaScript where callbacks
//                            are nested within other callbacks to the
//                            degree where the code is difficult to read.
//                            Old pattern to handle asynchronous functions.
//                            Use Promises + async/await to avoid Callback Hell

function task1() {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 2000);
}

function task2() {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000);
}

function task3() {
  setTimeout(() => {
    console.log("Task 3 completed");
  }, 3000);
}

function task4() {
  setTimeout(() => {
    console.log("Task 4 completed");
  }, 1500);
}

task1();
task2();
task3();
task4();
console.log("All Tasks completed");
