const second = () => console.log("second");
const third = () => console.log("third");

const first = () => {
  console.log("first");
  setTimeout(second, 0);
  new Promise((resolve, reject) => {
    resolve("I am right after third, before second");
  }).then((resolve) => console.log(resolve));
  third();
};

first();

/**
 * heap
 * call stack
 * web api or c++ api
 * Event loop(Render Queue)
 * callback queue
 * microtask queue
 */
