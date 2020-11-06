///srcipt que mudar o nome da mensagem de erro 

const fields = document.querySelectorAll("[required]")

//console.log(fields)

function customValidation(event) {

    //eliminar o bubble
    //event.preventDefault()

    const field = event.target

    //logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;
    
        //for ..in - vai interar sobre elementos que tiver no objeto 
        for(let error in field.validity) {
            //se n for customError
            //entao verifica se tem erro
            if(error != "customError" && field.validity[error]) {
                foundError = error
        }
    }
    return foundError;
    }   

    const error = verifyErrors()
    console.log("Error Exists: ", error)

    if(error){
        //trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }

}

//for ..of - vai interar sobre uma lista de campos 
for(field of fields) {
    field.addEventListener("invalid", customValidation)
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário")

    //não envia o formulário
    event.preventDefault()
})