import { inventory } from "./products.js";

export function calculateTotal() {
  let cantidadTotal = 0;
  let precioTotal = 0;

  inventory.forEach((item) => {
    cantidadTotal += item.cantidad;
    precioTotal += item.precio * item.cantidad;
  });

  return { cantidadTotal, precioTotal };
}
