"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var User_1 = __importDefault(require("./services/User"));
function helloWorld(request, response) {
    var user = User_1.default({
        email: 'user@test.example',
        password: '123456',
        techs: [
            'NodeJs',
            'ReactJs',
            'React Native',
            { title: 'Typescript', experience: 1000 }
        ]
    });
    return response.json({ message: 'Hello World', user: user });
}
exports.helloWorld = helloWorld;
