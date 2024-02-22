"use strict";
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
