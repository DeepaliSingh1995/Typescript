var greetings : string = "Hello Deepali"
greetings.toUpperCase()

console.log(greetings);


/**How do we define "int" and "float" in typescript ?
 *  We DON'T : JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
 */ 


// number ; int; float
let userId : number = 12345

// boolean
let isValueOf : boolean = true



/**Typescript is smart enough to detect the type of the values (in case of variables only not in case of functions) so we do not need to declare the datatype everytime. For eg :  */
let userIdWithoutDatatype = 55455
console.log(userIdWithoutDatatype);  // Here it will automatically take the datatype as number by infering the value





// any keyword
/**TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors. */

export {}