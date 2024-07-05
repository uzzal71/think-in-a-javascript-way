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

user['spouse'] = "Jane";
console.log(user);

Object.defineProperty(user, 'isMaintainer', {
    value: false,
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(user);