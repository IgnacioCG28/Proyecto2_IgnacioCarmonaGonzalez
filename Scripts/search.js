import { inventory } from "./products.js";
import { deleteProduct } from "./deleteButton.js";
import { editProduct } from "./editButton.js";
import { calculateTotal } from "./totalinventory.js";

export function searchItem() {
  const searchInput = document.getElementById("searchItem");
  const searchText = searchInput.value.toLowerCase();

  const searchResults = inventory.filter((item) => {
    return item.nombre.toLowerCase().includes(searchText);
  });

  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  const tabla = document.getElementById("table-data");

  const { cantidadTotal, precioTotal } = calculateTotal(); // Destructura el objeto devuelto por calculateTotal

  // Borra la tabla actual
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  // Vuelve a insertar los resultados de la búsqueda
  results.forEach((item) => {
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
    editButton.className = "edit-button";
    editButton.addEventListener("click", () => {
      const newName = prompt("Nombre");
      const newQuantity = prompt("Cantidad");
      const newPrice = prompt("Precio");

      if (newName !== null && newQuantity !== null && newPrice !== null) {
        editProduct(item, newName, newQuantity, newPrice); // Llama a la función
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
  // Total fuera de bucle para no imprimirlo por cada item
  const rowTotal = tabla.insertRow();
  const cellTotalLabel = rowTotal.insertCell(0);
  const cellTotalCantidad = rowTotal.insertCell(1);
  const cellTotalPrecio = rowTotal.insertCell(2);
  const cellTotalAcciones = rowTotal.insertCell(3);

  cellTotalLabel.innerHTML = "Total Inventario";
  cellTotalCantidad.innerHTML = cantidadTotal;
  cellTotalPrecio.innerHTML = `${precioTotal}€`;
  cellTotalAcciones.innerHTML = "";
}
