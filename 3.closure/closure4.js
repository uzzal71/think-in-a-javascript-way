function apiFunction(url) {
  fetch(url).then((response) => console.log(response));
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");

console.log("i am here");
