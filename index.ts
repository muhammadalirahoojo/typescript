
const myInfo = (myName:string,age:number,fvtNum:number=10):string =>{

    return (`I am ${myName} My Age is: ${age} Favourite Number is: ${fvtNum}`);

}

console.log(myInfo("Muhammad Ali",30));
console.log(myInfo("Nadar Ali",22));

let light="Green"

if(light==="Green"){

    console.log("Go")
}
    else if (light="Yellow"){
    console.log("Look")

    }

    else if (light=="Red"){
        console.log("Stop")
    }

    else
    console.log("Light is Broken")


