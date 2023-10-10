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

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            alert("Invalid login credentials. Please try again.");
        }
    });

console.log("Hello")


    // Add your event listener and sign-up code here
    document.querySelector("#signUp").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;

        if (username.trim() && email.trim() && phone.trim() && password.trim()) {
            // Create a user object with the data
            const user = {
                username,
                email,
                phone,
                password
            };

            // Save the user object to local storage
            localStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("isLoggedIn", "true");
            console.log("Hello")
            window.location.href = "index.html";
        } else {
            alert("Invalid signup information. Please fill all fields and try again.");
        }
    });

console.log("Hello")
