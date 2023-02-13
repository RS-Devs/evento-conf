// Obtener la fecha actual
const now = new Date();

// Establecer la fecha del evento en un año a partir de ahora
const eventDate = new Date(now.getFullYear() + 1, 0, 1);

// Calcular la diferencia en milisegundos
const diff = eventDate - now;

// Convertir la diferencia a segundos, minutos, horas y días
const sec = Math.floor(diff / 1000);
const min = Math.floor(sec / 60);
const hours = Math.floor(min / 60);
const days = Math.floor(hours / 24);

// Actualizar los valores en el HTML
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours % 24;
document.getElementById("minutes").innerHTML = min % 60;
document.getElementById("seconds").innerHTML = sec % 60;

// Actualizar los valores cada segundo
setInterval(function () {
  document.getElementById("seconds").innerHTML--;
  if (document.getElementById("seconds").innerHTML < 0) {
    document.getElementById("seconds").innerHTML = 59;
    document.getElementById("minutes").innerHTML--;
    if (document.getElementById("minutes").innerHTML < 0) {
      document.getElementById("minutes").innerHTML = 59;
      document.getElementById("hours").innerHTML--;
      if (document.getElementById("hours").innerHTML < 0) {
        document.getElementById("hours").innerHTML = 23;
        document.getElementById("days").innerHTML--;
      }
    }
  }
}, 1000);