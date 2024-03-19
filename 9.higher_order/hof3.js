function hello() {
  return function () {
    console.log("Hello World!");
  };
}

hello()();
