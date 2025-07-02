// Script para agregar herramientas (APIs) al localStorage
// Guarda objetos con los campos: api_key y nombre_api

// Obtener referencias a los inputs y al formulario (deberás tener un formulario en tu HTML con estos IDs)
const form = document.getElementById('form-add-tool');
const inputApiKey = document.getElementById('api_key');
const inputNombreApi = document.getElementById('nombre_api');

// Función para guardar una nueva herramienta
function addTool(event) {
    event.preventDefault();
    // Obtener valores de los inputs
    const api_key = inputApiKey.value.trim();
    const nombre_api = inputNombreApi.value.trim();
    if (!api_key || !nombre_api) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    // Obtener herramientas existentes o array vacío
    let tools = JSON.parse(localStorage.getItem('tools')) || [];
    // Crear nuevo objeto herramienta
    const nuevaTool = { api_key, nombre_api };
    tools.push(nuevaTool);
    // Guardar en localStorage
    localStorage.setItem('tools', JSON.stringify(tools));
    // Limpiar formulario
    form.reset();
    alert('API agregada correctamente.');
}

// Asignar evento si el formulario existe
if (form && inputApiKey && inputNombreApi) {
    form.addEventListener('submit', addTool);
}
