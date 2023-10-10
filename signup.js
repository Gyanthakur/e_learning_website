const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (!isLoggedIn && window.location.pathname !== "/login1.html" && window.location.pathname !== "/signup1.html") {
    window.location.href = "login1.html";
}


    // Add your event listener and sign-up code here
    document.querySelector("#signUp").addEventListener("submit", function (event) {
        event.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
    
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        if(storedUser.email == email ){
            alert("User with this email already exist")
            return;
        }

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
            return;
        }
    });

console.log("Hello")