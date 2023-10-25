export {inventory};

const getRandomQuantity = () => {
    return Math.floor(Math.random() * 500) + 1;
  };

  const getRandomPrice = () => {
    return Math.floor(Math.random() * 500000) + 1;
  };

  const inventory = [
    {id: 1, nombre: "M4A1", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 2, nombre: "AK-47", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 3, nombre: "MP5", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 4, nombre: "Shotgun", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 5, nombre: "Tank M4", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 6, nombre: "Desert Eagle", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 7, nombre: "Grenade Launcher", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 8, nombre: "PEM", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 9, nombre: "Mustard Bomb", cantidad: getRandomQuantity(), precio: getRandomPrice()},
    {id: 10, nombre: "Nuke", cantidad: 5, precio: 5000000}
];
