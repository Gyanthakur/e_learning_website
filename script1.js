const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (!isLoggedIn && window.location.pathname !== "/login1.html" && window.location.pathname !== "/signup1.html") {
    window.location.href = "login1.html";
}

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
