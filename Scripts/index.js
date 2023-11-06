document.addEventListener("DOMContentLoaded", () =>{

    const audioElement = document.getElementById("music");
    const toggleCheckbox = document.querySelector(".toggle-checkbox");
  
    // Escucha el cambio en el estado del interruptor
    toggleCheckbox.addEventListener("change", function () {
      if (toggleCheckbox.checked) {
        // Si el interruptor está activado, reproduce la música
        audioElement.play();
      } else {
        // Si el interruptor está desactivado, pausa la música
        audioElement.pause();
      }
    });


})