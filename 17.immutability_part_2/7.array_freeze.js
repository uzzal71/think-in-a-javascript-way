let humanSense = ["touch", "sight", "hearing", "smell", "taste"];
Object.freeze(humanSense);

humanSense.push("Walking"); // TypeError: Cannot add property 5, object is not extensible because humanSense is frozen