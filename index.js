const yourName = document.getElementById("name");
const yourEmail= document.getElementById("email");
const yourActivation= document.getElementById("activation");
const checkbox= document.getElementById("checkbox");
const submit = document.querySelector("#button")
const form= document.querySelector("#container2")
form.addEventListener("submit", validate);


function validate(e){
    e.preventDefault();
    let nameVal= yourName.value;
    if(nameVal == ""){
      return document.getElementById("screen2").textContent="USERNAME MUST BE FILLED OUT!";
    } 

    let emailVal=yourEmail.value;
    if(emailVal == ""){
        return document.getElementById("screen2").textContent="EMAIL MUST BE FILLED OUT!!";
    } 
    
    let activationVal=yourActivation.value;
    if(activationVal == ""){
       return document.getElementById("screen2").textContent="ACTIVATION TOKEN NOT ENTERED!!!";   
    }   
    
    let checkboxVal=checkbox.checked;
    if(checkboxVal == false){
        return document.getElementById("screen2").textContent='PLEASE TICK THE PRIVACY CHECK!!!';
    }
    document.getElementById("screen2").textContent='GREAT, FORM VALIDATED!';
}