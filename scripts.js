const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

    function checkInputs() {
        const usernameValue = username.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const passwordconfirmationValue = passwordConfirmation.value;

        if (usernameValue === "") {
            setErrorFor(username, "O nome do usuário é obrigatório."); 
        } else {
            setSuccessFor(username);
        }

        if (emailValue === "") {
            setErrorFor(email, "o email é obrigatório.")
        } else if (!checkEmail(emailValue)) {
            setErrorFor(email, "Por favor, insira um email válido.")
            } else {
                setSuccessFor(email)
            }

        if (passwordValue === "") {
            setErrorFor(password, "A senha é obrigatória.")
        }    else if (passwordValue.length < 7) {
            setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.")
        } else {
            setSuccessFor(password);
        }

        if (passwordconfirmationValue === "") {
            setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória.");
        } else if (passwordconfirmationValue !== passwordValue) {
            setErrorFor(passwordConfirmation, "As senhas não conferem.");
        } else setSuccessFor(passwordConfirmation);

        const formIsControls = form.querySelectorAll(".form-control")

        const formIsValid = [...formIsControls].every(formControl => {
            return (formControl.className === "form-control success");
        })

        if (formIsValid) {
            console.log("O formulário está 100% válido!.");
        }
        } 
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        // adicionar mensagem de error
        small.innerText = message;
        // adicionar a classe de error 
        formControl.className = "form-control error"
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;

      // adicionar a classe de success
            formControl.className = "form-control success";
    }
    
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      }