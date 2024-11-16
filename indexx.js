function checkSession() {
    // Verificamos si el valor 'userLoggedIn' está en localStorage
    const logoutButton = document.getElementById('logoutButton');
    
    if (localStorage.getItem('userLoggedIn') === 'true') {
        // Si está logueado, mostramos el botón de "Cerrar sesión"
        logoutButton.classList.remove('hidden');  // Usar una clase 'hidden' para ocultar
    } else {
        // Si no está logueado, nos aseguramos de que el botón esté oculto
        logoutButton.classList.add('hidden');
    }
}

// Función que se llama al hacer clic en el botón de logout
function logout() {
    // Eliminamos el valor 'userLoggedIn' de localStorage, simulando el cierre de sesión
    localStorage.removeItem('userLoggedIn');
    
    // Ocultamos el botón de logout
    document.getElementById('logoutButton').classList.add('hidden');
    
    // Redirigimos a la página de inicio de sesión o cualquier otra página que desees
    window.location.href = 'iniciar.html'; // Cambia esta URL según tu estructura
}

// Ejecutamos la función `checkSession()` cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', checkSession);