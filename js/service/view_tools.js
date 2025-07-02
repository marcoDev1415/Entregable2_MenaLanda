// Script para mostrar las herramientas (APIs) guardadas en localStorage
// Muestra una tabla con los campos: nombre_api y api_key

const tablaTools = document.getElementById('tabla-tools');

function viewTools() {
    if (!tablaTools) return;
    let tools = JSON.parse(localStorage.getItem('tools')) || [];
    if (tools.length === 0) {
        tablaTools.innerHTML = '<p class="text-center text-gray-500">No hay APIs registradas.</p>';
        return;
    }
    let html = `
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Nombre API</th>
          <th scope="col" class="px-6 py-3">API Key</th>
          <th scope="col" class="px-6 py-3">Eliminar</th>
        </tr>
      </thead>
      <tbody>
  `;

    for (let i = 0; i < tools.length; i++) {
        html += `
     <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
        <td class="px-6 py-4">${tools[i].nombre_api || ''}</td>
        <td class="px-6 py-4">${tools[i].api_key || ''}</td>
        <td class="px-6 py-4">
            <button type="button" class="delete-tool text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-index="${i}">Eliminar</button>
        </td>
      </tr>
    `;
    }

    html += `</tbody></table>`;
    tablaTools.innerHTML = html;

    var botonesEliminar = tablaTools.querySelectorAll('.delete-tool');
    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function() {
            var idx = parseInt(this.getAttribute('data-index'));
            var toolsActuales = JSON.parse(localStorage.getItem('tools')) || [];
            toolsActuales.splice(idx, 1);
            localStorage.setItem('tools', JSON.stringify(toolsActuales));
            viewTools();
        });
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    viewTools();
});
