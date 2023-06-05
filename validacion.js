
const home = () => {
    const miFormEl = document.querySelector('.contact__form')
    miFormEl.addEventListener('submit', (e) => {
        e.preventDefault()

        if (validar()) {
            console.log('Formulario enviado')
        } else {
            console.log('Formulario no paso la validacion');
        }
    })
}
home()

const validar = () => {
    const nombreInput = document.getElementById('nombre')
    const emailInput = document.getElementById('email')
    const mensajeInput = document.getElementById('mensaje')
    const mensajes = document.getElementById('mensajeNotification')
    const errores = document.getElementById('errores')

    const container = document.createElement('div')
    const textoContainerMensaje = document.createElement('p')
    const textoContainerErrores = document.createElement('p')

    if (mensajes.firstChild) {
        mensajes.firstChild.remove();
    }

    if (errores.firstChild) {
        errores.firstChild.remove();
    }
    

    const regExNombre = /^[a-zA-Z\s]{5,50}$/
    const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const regExMensaje = /^[\w\s\d.,!?-]{5,200}$/
    let validado = true;

    
    if (nombreInput.value.trim().length > 0 && regExNombre.test(nombreInput.value)) {
        textoContainerMensaje.innerHTML += '<strong>Nombre valido: </strong>' + nombreInput.value
        textoContainerMensaje.innerHTML += '<br>'
        nombreInput.style.border = '1px solid green';
    } else {
        textoContainerErrores.innerHTML += 'Nombre invalido, intente nuevamente'
        textoContainerErrores.innerHTML += '<br>'
        nombreInput.style.border = '1px solid red';
        validado = false
    }

    if (mensajeInput.value.trim().length > 0 && regExMensaje.test(mensajeInput.value)) {
        textoContainerMensaje.innerHTML += '<strong>Mensaje valido: </strong>' + mensajeInput.value
        textoContainerMensaje.innerHTML += '<br>'
        mensajeInput.style.border = '1px solid green';
    } else {
        textoContainerErrores.innerHTML += 'Mensaje no valido, intente nuevamente \n'
        textoContainerErrores.innerHTML += '<br>'
        mensajeInput.style.border = '1px solid red';
        validado = false
    }

    if (emailInput.value.trim().length > 5 && regExEmail.test(emailInput.value)) {
        textoContainerMensaje.innerHTML += '<strong>Email valido: </strong>' + emailInput.value
        textoContainerMensaje.innerHTML += '<br>'
        emailInput.style.border = '1px solid green';
    } else {
        textoContainerErrores.innerHTML += 'Email invalido, intente nuevamente\n'
        textoContainerErrores.innerHTML += '<br>'
        emailInput.style.border = '1px solid red';
        validado = false
    }


    if (validado) {
        container.appendChild(textoContainerMensaje)
        mensajes.appendChild(container)
        mensajes.style.fontSize = '20px'
        mensajes.style.fontWeight = 'bold'
        mensajes.style.color = 'green'
        return validado
    } else {
        container.appendChild(textoContainerErrores)
        errores.appendChild(container)
        errores.style.fontSize = '20px'
        errores.style.fontWeight = 'bold'
        errores.style.color = 'red'
        return validado
    }


}