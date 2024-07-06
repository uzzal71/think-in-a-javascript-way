let config = {
    "db": "postgresql",
    "host": "localhost",
    "password": "fake-password",
    "port": 5432,
    "admin": {
        "name": "uzzal",
        "rights": ["create", "update", "delete"]
    },
};

// First working
/*
Object.freeze(config);
config.db = "Oracle";
console.log(config);
config.admin.name = "sujon";
console.log(config);
*/

// Second working
let deepFreeze = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            deepFreeze(obj[key]);
        } else {
            Object.freeze(obj);
        }
    });
};

deepFreeze(config);
// console.log(config);

config.db = "Oracle";
console.log(config);
config.admin.name = "sujon";
console.log(config);