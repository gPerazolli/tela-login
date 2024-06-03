function validateForm(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if(email.trim() == '' || senha.trim() == ''){
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("formLogin").submit();
}

const togglePassword = document.querySelector("#toggle-password");
const passwordInput = document.querySelector("#password");

// Mostra o ícone quando o input recebe foco
passwordInput.addEventListener("focus", function(){

    togglePassword.style.display = "block";
})

// Esconde o ícone quando o input perde foco
passwordInput.addEventListener("blur", function(){

    togglePassword.style.display = "none";
})

// Alterna a visibilidade da senha quando o ícone é clicado
togglePassword.addEventListener("mousedown", function(event) {
    
    event.preventDefault();

    const type = password.type  === "password" ? "text" : "password";

    password.type = type;

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});
