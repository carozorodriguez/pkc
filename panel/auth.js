const PASSWORD = "prokart2026"; // ← CAMBIAR POR LA QUE QUIERAS

function verificarAcceso(){

  const acceso = sessionStorage.getItem("adminAutorizado");

  if(acceso === "ok") return;

  const intento = prompt("Ingrese contraseña del Panel:");

  if(intento === PASSWORD){
    sessionStorage.setItem("adminAutorizado","ok");
  } else {
    alert("Acceso denegado");
    window.location.href = "../index.html";
  }

}

verificarAcceso();
