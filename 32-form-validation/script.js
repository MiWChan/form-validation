const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
    //logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        //for ..in - vai interar sobre elementos que tiver no objeto 
        for(let error in field.validity) {
            //se n for customError
            //entao verifica se tem erro
            if(field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError;
    }

    console.log(field.validity)
    
    function CustomMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preeencha um email váilido"
            }
        }
        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {

        const spanError = field.parentNode.querySelector("span.error")

        if(message){
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() {

        const error = verifyErrors()
        
        if(verifyErrors) {
            const message = CustomMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}

function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

//for ..of - vai interar sobre uma lista de campos 
for(field of fields) {
    field.addEventListener("invalid", event => {
        // //eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário")

    //não envia o formulário
    event.preventDefault()
})