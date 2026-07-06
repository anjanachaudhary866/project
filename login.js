document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let user = document.getElementById("userType").value;

    if(email === ""){
        alert("Please enter your email.");
        return;
    }

    if(password === ""){
        alert("Please enter your password.");
        return;
    }

    if(user === ""){
        alert("Please select a user type.");
        return;
    }

    switch(user){

        case "patient":
            window.location.href = "patient-dashboard.html";
            break;

        case "donor":
            window.location.href = "donor-dashboard.html";
            break;

        case "hospital":
            window.location.href = "hospital-dashboard.html";
            break;

        case "bloodbank":
            window.location.href = "bloodbank-dashboard.html";
            break;

        case "ngo":
            window.location.href = "ngo-dashboard.html";
            break;

        case "admin":
            window.location.href = "admin-dashboard.html";
            break;

        default:
            alert("Invalid User Type");
    }

});