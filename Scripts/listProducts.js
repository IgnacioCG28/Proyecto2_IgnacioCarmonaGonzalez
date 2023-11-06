import { inventory } from "./products.js";
import { deleteProduct } from "./deleteButton.js";
import { editProduct } from "./editButton.js";

export const listProducts = () => {
  const tabla = document.getElementById("table-data");

  // Con esto borra resetea la tabla causado por la llamada del método pero sin borrar los TH
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

    /* Crear botón de editar
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
    });*/

     // Crear botón de editar
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.addEventListener("click", () => {
    const newName = prompt("Nombre");
    const newQuantity = prompt("Cantidad");
    const newPrice = prompt("Precio");

    if (newName !== null && newQuantity !== null && newPrice !== null) {
      editProduct(item, newName, newQuantity, newPrice); // Llama a la función editItem
    }
  });

    // Crear botón de eliminar
    const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Eliminar";
        deleteButton.className = "delete-button";
     
        deleteButton.addEventListener("click", () => {
          if (confirm(`¿Estás seguro de borrar el item?`)) {
            deleteProduct(item); // Llama a la función.
          }           
        });


    cellAcciones.appendChild(editButton);
    cellAcciones.appendChild(deleteButton);
  });
};
