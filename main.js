
const peliculas = [
    { titulo: "Misión Imposible", precio: 1200, horario: "18:00" },
    { titulo: "Barbie", precio: 1000, horario: "20:30" },
    { titulo: "Oppenheimer", precio: 1100, horario: "22:00" },
  ];
  
  const carrito = [];
  
  function mostrarCartelera() {
    let cartelera = "Cartelera:\n";
    peliculas.forEach((pelicula, index) => {
      cartelera += `${index + 1}. ${pelicula.titulo} - $${pelicula.precio} (${pelicula.horario})\n`;
    });
    alert(cartelera);
  }
  
  function agregarAlCarrito() {
    mostrarCartelera();
    const opcion = parseInt(prompt("Seleccione el número de la película que desea agregar:")) - 1;
    if (opcion >= 0 && opcion < peliculas.length) {
      const peliculaSeleccionada = peliculas[opcion];
      carrito.push(peliculaSeleccionada);
      alert(`${peliculaSeleccionada.titulo} agregada al carrito.`);
    } else {
      alert("Opción inválida.");
    }
  }
  
  function calcularTotal() {
    return carrito.reduce((total, pelicula) => total + pelicula.precio, 0);
  }
  
  function finalizarCompra() {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
  
    const total = calcularTotal();
    let resumen = "Resumen de la compra:\n";
    carrito.forEach(pelicula => resumen += `- ${pelicula.titulo} - $${pelicula.precio}\n`);
    resumen += `Total: $${total}`;
    alert(resumen);
  
    // Simulación de pago
    alert("¡Gracias por su compra!");
    carrito.length = 0; // Vaciar el carrito
  }
  
  // Bucle principal
  while (true) {
    const opcion = prompt(
      "Seleccione una opción:\n1. Ver cartelera\n2. Agregar al carrito\n3. Finalizar compra\n4. Salir"
    );
  
    switch (opcion) {
      case "1":
        mostrarCartelera();
        break;
      case "2":
        agregarAlCarrito();
        break;
      case "3":
        finalizarCompra();
        break;
      case "4":
        alert("¡Hasta luego!");
        break;
      default:
        alert("Opción inválida.");
    }
  
    if (opcion === "4") {
      break; // Salir del bucle
    }
  }
  