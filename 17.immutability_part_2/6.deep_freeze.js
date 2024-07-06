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