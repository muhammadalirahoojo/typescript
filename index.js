var myInfo = function (myName, age, fvtNum) {
    if (fvtNum === void 0) { fvtNum = 10; }
    return ("I am ".concat(myName, " My Age is: ").concat(age, " Favourite Number is: ").concat(fvtNum));
};
console.log(myInfo("Muhammad Ali", 30));
console.log(myInfo("Nadar Ali", 22));
