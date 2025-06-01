document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            window.location.href = 'dashboard.html';
            return;
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const errorAlert = document.getElementById('errorAlert');

                if (username === 'admin' && password === 'admin') {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', username);

                    window.location.href = 'dashboard.html';
                } else {
                    errorAlert.classList.remove('d-none');

                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';

                    setTimeout(() => {
                        errorAlert.classList.add('d-none');
                    }, 3000);
                }
            });
        }
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}

function checkAuth() {
    if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
        }
    }
} 