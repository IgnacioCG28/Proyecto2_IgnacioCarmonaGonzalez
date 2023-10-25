import { inventory } from "./products.js";

export const listProducts = () => {
  const tabla = document.getElementById("test");

  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  inventory.forEach((item) => {
    const row = tabla.insertRow();
    const cellNombre = row.insertCell(0);
    const cellCantidad = row.insertCell(1);
    const cellPrecio = row.insertCell(2);
    const cellAcciones = row.insertCell(3);

    cellNombre.innerHTML = item.nombre;
    cellCantidad.innerHTML = item.cantidad;
    cellPrecio.innerHTML = `${item.precio}€`;

    // Crear botón de editar
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => {
      let change = prompt("Nombre");
      cellNombre.textContent = change;

      change = prompt("Cantidad");
      if (!isNaN(change) && change > 0) {
        cellCantidad.textContent = change;
      }

      change = prompt("Precio");
      if (!isNaN(change) && change > 0) {
        cellPrecio.textContent = `${change}€`;
      }
    });

    // Crear botón de eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
      if (confirm(`¿Estás seguro de borrar?`)) {
        const index = inventory.findIndex((product) => product.id === item.id);

        if (index !== -1) {
          inventory.splice(index, 1);
        }
      }
      listProducts();
    });

    cellAcciones.appendChild(editButton);
    cellAcciones.appendChild(deleteButton);
  });
};
