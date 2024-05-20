const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordText = document.querySelector("#confirmPassword-text");

passwordInput.addEventListener("input", function () {
    
    const password = this.value;

    const strenghtIndicator = document.querySelector("#password-strenght-indicator");

    const strenghtText = document.querySelector("#password-strenght-text");

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

    }else{
        strenghtText.innerHTML = "";
    }

    if(password == confirmPassword){
        confirmPasswordText.innerHTML = "";

    }else{
        confirmPasswordText.innerHTML = "";
    }

})

confirmPassword.addEventListener("input", function(){
    
    const confirmPassword = this.value

    const password = document.getElementById("password").value;
    
    if(password != confirmPassword){
        confirmPasswordText.innerHTML = `As senhas não coincidem!`;

    }else{
        confirmPasswordText.innerHTML = "";
    }

})

function validateForm(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;

    if(nome.trim() === '' || sobrenome.trim() === '' || email.trim() === ''){
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("formCadastro").submit();
}