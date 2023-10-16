console.log("Le fichier JavaScript est correctement lié et lu !");

$(document).ready(function() {
    $('#formulaire').submit(function(event) {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
    
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            event.preventDefault(); // Empêche la soumission du formulaire
        }
    });
});