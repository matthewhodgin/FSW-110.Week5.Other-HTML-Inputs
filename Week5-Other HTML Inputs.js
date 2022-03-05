const form = document.myForm

document.getElementById('text1').style.marginLeft= "5px";
document.getElementById('text2').style.marginLeft= "5px";
document.getElementById('experience').style.marginBottom= "20px";

form.addEventListener("submit", (event) => {
    event.preventDefault()

    alert(`
    First Name: ${form.text1.value} 
    Last Name: ${form.text2.value}
    Age: ${form.text3.value}
    Welcomed: ${form.decision.value}
    How was your experience?:  ${form.experience.value}
    How did you hear about us?:  ${hearAbout()}`);
})

const checkedInputs = [];
    function hearAbout(){
    for(let i = 0; i < form.choice.length; i++){
        if(form.choice[i].checked){
            checkedInputs.push(form.choice[i].value);
        }
    }
    return(checkedInputs)
}






 