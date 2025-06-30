const datos = localStorage.getItem("usuarios");


export function view_user(datos) {
  if (!datos) return;

  const usuarios = JSON.parse(datos);
  const contenedor = document.getElementById("tabla-usuarios");

  let html = `
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Nombre</th>
          <th scope="col" class="px-6 py-3">Apellido</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Eliminar</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < usuarios.length; i++) {
    html += `
     <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
        <td class="px-6 py-4">${usuarios[i].firstName || ''}</td>
        <td class="px-6 py-4">${usuarios[i].lastName || ''}</td>
        <td class="px-6 py-4">${usuarios[i].email || ''}</td>
        <td class="px-6 py-4">
            <button type="button" class="delete-user text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-index="${i}">Eliminar</button>
        </td>
      </tr>
    `;
  }

  html += `</tbody></table>`;
  contenedor.innerHTML = html;

  var botonesEliminar = contenedor.querySelectorAll('.delete-user');
  for (var i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-index'));
      var usuariosActuales = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuariosActuales.splice(idx, 1);
      localStorage.setItem('usuarios', JSON.stringify(usuariosActuales));
      view_user(localStorage.getItem('usuarios'));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const datos = localStorage.getItem("usuarios");
  view_user(datos);
});
