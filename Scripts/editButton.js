import { inventory } from "./products.js";
import { listProducts } from "./listproducts.js";

export function editProduct(item, newName, newQuantity, newPrice) {
 // Encuentra el índice del producto en el inventario
 const index = inventory.findIndex((product) => product.id === item.id);
  
 if (index !== -1) {
   // Comprueba si newQuantity y newPrice son números válidos
   if (!isNaN(newQuantity) && newQuantity >= 0 && !isNaN(newPrice) && newPrice >= 0) {
     // Actualiza el producto con los nuevos valores
     inventory[index].nombre = newName;
     inventory[index].cantidad = newQuantity;
     inventory[index].precio = newPrice;
     listProducts(); // Actualiza la lista después de la edición
   } else {
     alert("La cantidad y el precio deben ser números válidos y mayores o iguales a cero.");
   }
 }
}
