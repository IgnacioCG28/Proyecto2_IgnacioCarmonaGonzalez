import { listProducts } from "./listproducts.js";
import { insertProducts } from "./insertProducts.js";

document.addEventListener("DOMContentLoaded", (listProducts));

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("product-form-event");
    
    btnForm.addEventListener("click", () => {
      insertProducts();
    });
  });