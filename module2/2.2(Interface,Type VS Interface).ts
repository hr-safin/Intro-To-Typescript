{
    // interface

    type User1 = {
        name : string;
        age : number;
    }

    interface User2  {
        name : string;
        age : number ;
    }

    interface UserWithRole2 extends User1 {
        role : string;
    }

    type UserWithRole1 = User1 & {role : string}

    const user : UserWithRole2 = {
        name : "Hasibur Rahman Safin",
        age : 23,
        role : "Full stack developer"
    }

    type rollNumber = number


    


    

}