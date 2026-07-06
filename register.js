document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    document.getElementById("successMessage").innerHTML =
    "✅  Your account has been created .";

    document.getElementById("successMessage").style.color = "green";
    document.getElementById("successMessage").style.fontWeight = "bold";
    document.getElementById("successMessage").style.marginTop = "15px";
    document.getElementById("successMessage").style.textAlign = "center";

    document.getElementById("registerForm").reset();

    setTimeout(function(){
        window.location.href = "login.html";
    }, 3000);

});