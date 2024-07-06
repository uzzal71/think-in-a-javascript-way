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
let clonedConfig = {...config};

console.log(Object.isFrozen(config));
console.log(Object.isFrozen(clonedConfig));

console.log(Object.isSealed({}));
