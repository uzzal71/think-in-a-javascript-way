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