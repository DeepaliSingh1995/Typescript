// In case of functions we need to explicitely define the datatype pf the parameter

// Returning a number from a function
function addTwo (num : number){
return num + 2
}

addTwo(6)

// Returning a string from a function
function getupperCase (val : string){
    return val.toUpperCase()
}

getupperCase("deepali")

// Returning multiple parameters from a function 
function signingUpAUser (email : string, name : string, isPaid : boolean) {

}
signingUpAUser("d@d.com","Deeps",true)

// Returning multiple parameters from an arrow function and declaring the value of one parameter
const loginUser = (email : string, name : string, isPaid : boolean = true) =>{

} 
loginUser("test@test.com","D")

export {}