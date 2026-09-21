const regForm = document.getElementById("registerForm");

regForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("rusername").value;
    const password = document.getElementById("rpassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists!");
        return;
    }

    const userObj = {
        name: name,
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(userObj));

    alert("Registration successful!");
    window.location.href = "index.html";
});