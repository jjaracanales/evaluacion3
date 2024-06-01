// Función para inicializar la validación del formulario
function initFormValidation() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
            showErrorMessage("Error: Todos los campos obligatorios deben estar completos.");
        } else {
            showSuccessMessage("Éxito: El formulario ha sido enviado correctamente.");
        }
    });
}

// Función para validar el formulario
function validateForm() {
    const name = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('mensaje').value.trim();

    return validateField(name) && validateField(email) && validateField(message);
}

// Función para validar un campo individual
function validateField(fieldValue) {
    return fieldValue !== '';
}

// Función para mostrar mensaje de error
function showErrorMessage(message) {
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.innerHTML = message;
    messageDiv.style.color = 'red';
}

// Función para mostrar mensaje de éxito
function showSuccessMessage(message) {
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.innerHTML = message;
    messageDiv.style.color = 'green';
}

// Inicializar la validación del formulario al cargar la página
document.addEventListener('DOMContentLoaded', initFormValidation);


// Función para mostrar mensaje de confirmación de éxito
function showSuccessMessage() {
    alert("¡Éxito! El formulario ha sido enviado correctamente.");
}

// Función para mostrar mensaje de error
function showErrorMessage() {
    alert("Error: Todos los campos obligatorios deben estar completos.");
}

// textValidation.js

// Función para inicializar la validación del texto
function initTextValidation() {
    const messageField = document.getElementById('mensaje');
    messageField.addEventListener('input', function() {
        updateRequestType(messageField.value);
    });
}

// Función para actualizar el tipo de solicitud
function updateRequestType(message) {
    const requestTypeField = document.getElementById('tipo_solicitud');

    if (includesWord(message, 'compra')) {
        setRequestType(requestTypeField, 'compra');
    } else if (includesWord(message, 'venta')) {
        setRequestType(requestTypeField, 'venta');
    } else if (includesWord(message, 'consulta')) {
        setRequestType(requestTypeField, 'consulta');
    } else {
        clearRequestType(requestTypeField);
    }
}

// Función para verificar si un mensaje incluye una palabra específica
function includesWord(message, word) {
    return message.toLowerCase().includes(word.toLowerCase());
}

// Función para establecer el tipo de solicitud
function setRequestType(field, type) {
    field.value = type;
}

// Función para limpiar el tipo de solicitud
function clearRequestType(field) {
    field.value = '';
}

// Inicializar la validación del texto al cargar la página
document.addEventListener('DOMContentLoaded', initTextValidation);