const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//EJERCICIO 1
function IdImpar(array){

  array.forEach(element => {

    if((element.id %2)!= 0){
      console.log("Sabor de pizza: ", element.nombre);
    }

  });

}

//IdImpar(pizzas); 
//SALIDA: 
//Sabor de pizza:  pizza de Muzzarella
//Sabor de pizza:  pizza Napolitana
//Sabor de pizza:  pizza Especial


//EJERCICIO 2
function PizzaMenos600(array) {
  let flag = 0;

  array.forEach((element) => {
    if (element.precio < 600) {
      flag = 1;
    }
  });

  flag === 1 
    ? console.log("Sí, hay pizzas con valor menor a $600") 
    : console.log("No, no hay pizzas con valor menor a $600");
}

//PizzaMenos600(pizzas);
//SALIDA:
//Sí, hay pizzas con valor menor a $600

//EJERCICIO 3
function PizzaNombrePrecio(array){

  array.forEach(element => {
    
    console.log("Sabor: ", element.nombre);
    console.log("Precio: ", element.precio);

  });

}

//PizzaNombrePrecio(pizzas);
//SALIDA
// Sabor:  pizza de Muzzarella
// Precio:  500
// Sabor:  pizza de Cebolla
// Precio:  1500
// Sabor:  pizza Napolitana
// Precio:  1350
// Sabor:  pizza 4 Quesos
// Precio:  1380
// Sabor:  pizza Especial
// Precio:  1000
// Sabor:  pizza con Anana
// Precio:  600

//EJERCICIO 4
function IngredientesPizzas(array){

  array.forEach(element => {

    console.log("Sabor Pizza: ", element.nombre);
    console.log("Ingredientes:")

    element.ingredientes.forEach(ingrediente => {
      
      console.log(ingrediente);


    });

  });

}

//IngredientesPizzas(pizzas);
//SALIDA
// Sabor Pizza:  pizza de Muzzarella
// Ingredientes:
// Muzzarella
// Tomate
// Aceitunas
//Sabor Pizza:  pizza de Cebolla
// Ingredientes:
// Muzzarella
// Tomate
// Cebolla
//Sabor Pizza:  pizza Napolitana
// Ingredientes:
// Muzzarella
// Tomate
// Aceitunas
// Anchoas
//Sabor Pizza:  pizza 4 Quesos
// Ingredientes:
// Muzzarella
// Tomate
// Queso Azul
// Parmesano
// Roquefort
//Sabor Pizza:  pizza Especial
// Ingredientes:
// Muzzarella
// Tomate
// Aceitunas
// Anchoas
// Cebolla
//Sabor Pizza:  pizza con Anana
// Ingredientes:
// Muzzarella
// Tomate
// Anana