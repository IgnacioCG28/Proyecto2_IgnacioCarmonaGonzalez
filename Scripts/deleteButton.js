import { inventory } from "./products.js";
import { listProducts } from "./listproducts.js";

export function deleteProduct(item) {
  const index = inventory.findIndex((product) => product.id === item.id);
  if (index !== -1) {
    inventory.splice(index, 1);
  }
  listProducts();
}
