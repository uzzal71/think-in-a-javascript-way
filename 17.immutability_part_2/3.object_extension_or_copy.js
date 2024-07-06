let user = {
    name: 'John Doe',
    age: 25,
    country: "USA",
    city: "New York",
    email: "john.doe@gmail.com",
    phone: "123-456-7850",
    address: "123 Main St.",
    zip: "5456",
    password: "1235479",
    isAdmin: true
}

const obj = {name: "uzzal", address: "Dhaka"}
const copyObj = {};
Object.assign(copyObj, obj);
console.log(obj);

console.log(copyObj === obj);

const newObjCopy = {...obj};
console.log(newObjCopy);
console.log(newObjCopy === obj);

newObjCopy["isMarried"] = true;
console.log(newObjCopy);
console.log(obj);