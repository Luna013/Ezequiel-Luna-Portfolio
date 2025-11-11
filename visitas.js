async function contarVisitas() {
  const res = await fetch('https://api.countapi.xyz/hit/luna013.github.io/Ezequiel-Luna-Portfolio');
  const data = await res.json();
  document.getElementById('contador').textContent = data.value;
  console.log(`Número de visitas: ${data.value}`);
}

document.addEventListener('DOMContentLoaded', contarVisitas);