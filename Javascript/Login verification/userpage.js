const user = localStorage.getItem('user');
if (user) {
    const parsedUser = JSON.parse(user);
    document.getElementById("userid").innerHTML = parsedUser.name;
}