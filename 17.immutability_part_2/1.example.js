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

Object.preventExtensions(user);
console.log(Object.isExtensible(user))

user["salary"] = 5456;
console.log(user)

user["phone"] = "7850-456-123";
console.log(user)

delete user["phone"]
console.log(user)