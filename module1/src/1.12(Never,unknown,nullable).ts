// Never , Unknown and Nullable Type

//Nullable Type

const searchName = (value : string | null) => {

     if(value){
        console.log("Searching")
     }
     else{
        console.log("There is nothing to search")
     }
}

// searchName(null)