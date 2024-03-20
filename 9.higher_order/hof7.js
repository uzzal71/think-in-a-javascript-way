var languages = ["JavaScript", "Python", "PHP", "C"];

function mapCustom(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

console.log(
  mapCustom(languages, function (language) {
    return language.length;
  })
);
