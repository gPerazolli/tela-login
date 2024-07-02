const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordText = document.querySelector("#confirmPassword-text");
const togglePassword = document.querySelector("#toggle-password");

//input de senhas
passwordInput.addEventListener("input", function () {
    
    const password = this.value;

    const strenghtIndicator = document.querySelector("#password-strenght-indicator");

    const strenghtText = document.querySelector("#password-strenght-text");
    const strenghtBar = document.querySelector(".password-strenght-bar");

    const strenghts = {
        0: "Muito Fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte",
        5: "Muito Forte"
    };

    let score = 0;

    //requisitos
    if(password.length >= 8) score++;
    //indentificando se tem esses caracteres
    if(password.match(/[A-Z]/)) score++;
    if(password.match(/[a-z]/)) score++;
    if(password.match(/[^a-zA-Z0-9]/)) score++;
    if(password.match(/[0-9]/)) score++;
    
    // calculo da % para a largura
    const width = (score /4 ) * 100;
    
    switch(score){
        case 1: 
            strenghtIndicator.style.backgroundColor = "#e70b0b";
            break;
        case 2:
            strenghtIndicator.style.backgroundColor = "#FFB74D";
            break;
        case 3: 
            strenghtIndicator.style.backgroundColor = "#FFF176";
            break;
        case 4: 
            strenghtIndicator.style.backgroundColor = "#81C784";
            break;
        default:
            strenghtIndicator.style.backgroundColor = "transparent";
            break;

    }

    strenghtIndicator.style.width = `${width}%`;

    if(password.length > 0){
        strenghtText.innerHTML =  `Força: ${strenghts[score]}`;
        strenghtBar.style.display = "block";

    }else{
        strenghtText.innerHTML = "";
        strenghtBar.style.display = "none";
    }

    if(password == confirmPassword){
        confirmPasswordText.innerHTML = "";

    }else{
        confirmPasswordText.innerHTML = "";
    }

})

//confirmar senha informando mensagem 
confirmPassword.addEventListener("input", function(){
    
    const confirmPassword = this.value

    const password = document.getElementById("password").value;
    
    if(password != confirmPassword){
        confirmPasswordText.innerHTML = `As senhas não coincidem!`;

    }else{
        confirmPasswordText.innerHTML = "";
    }

})


//alterna quando aparece o olho de ver a senha 
confirmPassword.addEventListener("focus", function(){

    togglePassword.style.display = "block";
})

confirmPassword.addEventListener("blur", function(){

    togglePassword.style.display = "none";
})


// Alterna a visibilidade da senha quando o ícone é clicado
togglePassword.addEventListener("mousedown", function(event) {
    
    event.preventDefault();
    
    const type = confirmPassword.type  === "password" ? "text" : "password";
    confirmPassword.type = type;
    password.type = type;
    
    
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

