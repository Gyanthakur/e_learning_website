const isLoggedIn = sessionStorage.getItem("isLoggedIn");

// if (!isLoggedIn && window.location.pathname !== "/login1.html" && window.location.pathname !== "/signup1.html") {
//     window.location.href = "login1.html";
// }

//password validation for sign up

var pass=document.getElementById("password");
var msg=document.getElementById("msg");
var str=document.getElementById("str");

pass.addEventListener('input',()=>{
    if(pass.value.length>0)
    {
        msg.style.display="block";
    }
    else{
        msg.style.display="none";
    }
    if(pass.value.length<4)
    {
        str.innerHTML="weak";
        pass.style.color="red";
    }
    else if(pass.value.length>=4 && pass.value.length<8)
    {
        str.innerHTML="medium";
        pass.style.color="yellow";
    }
    else if(pass.value.length>=8)
    {
        str.innerHTML="strong";
        pass.style.color="green";
    }
})


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Replace this with actual login validation logic.
    // For the sake of simplicity, we are allowing any non-empty username/password combination.
    if (username.trim() && password.trim()) {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid login credentials. Please try again.");
    }
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    // Replace this with actual signup logic.
    // For the sake of simplicity, we are allowing any non-empty username/email/password combination.
    if (username.trim() && email.trim() && phone.trim() && password.trim()) {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid signup information. Please fill all fields and try again.");
    }
});
