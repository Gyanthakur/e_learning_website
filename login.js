const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (!isLoggedIn && window.location.pathname !== "/login1.html" && window.location.pathname !== "/signup1.html") {
    window.location.href = "login1.html";
}
console.log("Hello")
console.log(document.querySelector("#loginForm"))
    // Add your event listener and login code here
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.username === email && storedUser.password === password) {
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            alert("Invalid login credentials. Please try again.");
        }
    });