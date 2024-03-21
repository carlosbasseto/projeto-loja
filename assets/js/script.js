document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        // Recuperando usuários já cadastrados ou inicializando uma lista vazia
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Verificando se o usuário já existe
        const userExists = users.some(user => user.username === newUsername);

        if (!userExists) {
            // Adicionando novo usuário
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Cadastro realizado com sucesso!');
            // Redireciona para a tela de login
            window.location.href = 'index.html';
        } else {
            alert('Usuário já cadastrado. Por favor, escolha outro nome de usuário.');
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulação de validação do usuário (verificação simples)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            // Redireciona para a tela de sucesso
            window.location.href = 'bemvindo.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});