function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 100000000; i++) {
  var a = Math.random() * 100000000;
}

console.dir(timer);
