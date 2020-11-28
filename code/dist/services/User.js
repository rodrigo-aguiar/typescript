"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    return {
        name: name,
        email: email,
        password: password
    };
}
exports.default = createUser;
