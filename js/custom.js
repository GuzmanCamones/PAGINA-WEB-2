function toggleFondo() {
  document.body.classList.toggle("oscuro");
  const oscuro = document.body.classList.contains("oscuro");
  localStorage.setItem("oscuro", oscuro);
}

if (localStorage.getItem("oscuro") === "true") {
  document.body.classList.add("oscuro");
}
