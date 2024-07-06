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

Object.freeze(config);
config.db = "Oracle";
console.log(config);
config.admin.name = "sujon";
console.log(config);

let deepFreeze = () => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            deepFreeze(obj[key]);
        } else {
            Object.freeze(obj[key]);
        }
    });
};