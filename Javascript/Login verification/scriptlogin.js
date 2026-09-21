const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('lusername').value;
    const password = document.getElementById('lpassword').value;

    const user = localStorage.getItem(username);

    if (user) {
        const parsedUser = JSON.parse(user);

        if (parsedUser.password === password) {
            localStorage.setItem('user', JSON.stringify(parsedUser));

            window.location.href = 'userpage.html';
        } else {
            alert('Incorrect password. Please try again.');
        }
    } else {
        alert('User not found. Please register first.');
    }
});