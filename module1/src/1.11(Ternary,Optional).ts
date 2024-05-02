// Ternary Operator, optional Chaining, nullish coalescing operator

{
    const age : number = 12

    // if(age >= 18){
    //     console.log("You are an adult")
    // }

    // else{
    //     console.log("You are still a kid")
    // }


    // ternary operator

    const isAdult = age >= 18 ? "Adult" : "NOT Adult"

    // console.log(isAdult)


    // nullish coalescing = null and undefined
    // null & undefined --> decision making

    const isAuthenticated = ""

    const result1 = isAuthenticated ?? "Guest"
    const result2 = isAuthenticated ? isAuthenticated : "Guest"

    console.log({result1}, {result2})







}