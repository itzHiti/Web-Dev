console.log('Checking authorization token...');
function checkLogin() {
    const cookie = document.cookie;

    if (cookie.includes('authorization_token')) {
        document.getElementById('txt3').style.display = 'block';
        document.getElementById('txt').style.display = 'none';
    }
    else {
        document.getElementById('txt').style.display = 'block';
        document.getElementById('txt3').style.display = 'none';
    }
}
window.onload = checkLogin;