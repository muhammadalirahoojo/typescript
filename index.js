"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myInfo = (myName, age, fvtNum = 10) => {
    return (`I am ${myName} My Age is: ${age} Favourite Number is: ${fvtNum}`);
};
console.log(myInfo("Muhammad Ali", 30, 5));
console.log(myInfo("Nadar Ali", 22, 7));
let light = "Green";
if (light === "Green") {
    console.log("Go");
}
else if (light === "Yellow") {
    console.log("Look");
}
else if (light === "Red") {
    console.log("Stop");
}
else
    console.log("Light is Broken");
const first_js_1 = __importDefault(require("./first.js"));
const second_js_1 = require("./second.js");
console.log(first_js_1.default + second_js_1.b + second_js_1.c);
