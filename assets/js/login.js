document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulação de validação do usuário (verificação simples)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            // Redireciona para a tela de sucesso
            window.location.href = 'principal.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
