function stopWatch() {
  var startTime = new Date().getTime();

  return function () {
    return new Date().getTime() - startTime;
  };
}

var timer = stopWatch();
