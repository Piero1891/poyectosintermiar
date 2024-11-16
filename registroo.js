const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombres = document.querySelector('#nombres').value;
    const apellidos = document.querySelector('#apellidos').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const genero = document.querySelector('#genero').value;

    // Obtener los usuarios guardados en localStorage (o un arreglo vacío si no hay usuarios)
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el correo ya está registrado
    const isUserRegistred = Users.find(user => user.email === email);
    if (isUserRegistred) {
        return alert('Usuario ya registrado');
    }

    // Agregar el nuevo usuario a la lista
    Users.push({ name: nombres, apellidos: apellidos, email: email, password: password, genero: genero });

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('users', JSON.stringify(Users));

    alert('Registro exitoso');
    window.location.href = 'iniciar.html';  // Redirigir a otra página (por ejemplo, login)
});