const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(form.decision.value)
})


//if (alert("Fist name: Joe", "Last name: Shmoe","Age: 31","Gender: Male")) 
//    {
//  } 


alert("First Name: Joe\nLast Name: Shmoe\nAge: 31\nGender: Male\nLocation: Sahara Desert\nDietary Resrictions: Kosher, Vegetarian");
