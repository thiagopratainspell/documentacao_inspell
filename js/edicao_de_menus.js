document.addEventListener("DOMContentLoaded", function () {

  const protegidos = ["Revendedor", "Inspell"];

  document.querySelectorAll(".wy-menu-vertical a").forEach(function (link) {
    const texto = link.textContent.trim();

    if (protegidos.some(p => texto.includes(p))) {
      link.classList.add("menu-protegido");
    }
  });

});

document.addEventListener("DOMContentLoaded", function () {

  const emDesenvolvimento = [
  ];

  const emRevisao = [
    "Coletores",
    "Cadastros Auxiliares",
    "Revendedor",
    "Inspell",
    
  ];

  document.querySelectorAll(".wy-menu-vertical a").forEach(function (link) {
    const texto = link.textContent.trim();

    if (emDesenvolvimento.includes(texto)) {
      link.style.color = "#e74c3c";
      link.textContent = texto + " [EM DESENVOLVIMENTO]";

    } else if (emRevisao.includes(texto)) {
      link.style.color = "#006eff";
      link.textContent = texto + " [EM REVISÃO]";
    }
  });

});