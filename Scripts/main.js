/**
 *  Autor: Ignacio Carmona González
 *  Github: https://github.com/IgnacioCG28/Proyecto2_IgnacioCarmonaGonzalez.git
 */
import { listProducts } from "./listproducts.js";
import { insertProducts } from "./insertProducts.js";
import { searchItem } from "./search.js";
import { sounds } from "./sounds.js";


document.addEventListener("DOMContentLoaded", (listProducts));
document.addEventListener("DOMContentLoaded", (sounds));

const searchInput = document.getElementById("searchItem");

searchInput.addEventListener("input", () => {
  searchItem();
});

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("product-form-event");
    
    btnForm.addEventListener("click", () => {
      insertProducts();
    });
  });
