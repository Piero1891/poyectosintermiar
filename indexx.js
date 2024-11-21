function checkSession() {
   
    const logoutButton = document.getElementById('logoutButton');
    
    if (localStorage.getItem('userLoggedIn') === 'true') {
        
        logoutButton.classList.remove('hidden');  
    } else {
       
        logoutButton.classList.add('hidden');
    }
}


function logout() {
   
    localStorage.removeItem('userLoggedIn');
    
  
    document.getElementById('logoutButton').classList.add('hidden');
    
   
    window.location.href = 'iniciar.html'; 
}


document.addEventListener('DOMContentLoaded', checkSession);
