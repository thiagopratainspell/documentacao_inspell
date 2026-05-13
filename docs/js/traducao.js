document.addEventListener("DOMContentLoaded", function () {
  const traducoes = {
    "Previous": "Anterior",
    "Next": "Próximo"
  };

  document.querySelectorAll(".rst-footer-buttons a").forEach(function (btn) {
    percorrerNosDeTexto(btn, traducoes);
  });

  function percorrerNosDeTexto(elemento, mapa) {
    elemento.childNodes.forEach(function (no) {
      if (no.nodeType === Node.TEXT_NODE) {
        const textoOriginal = no.textContent.trim();
        if (mapa[textoOriginal]) {
          no.textContent = no.textContent.replace(textoOriginal, mapa[textoOriginal]);
        }
      } else if (no.nodeType === Node.ELEMENT_NODE) {
        percorrerNosDeTexto(no, mapa);
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {

  const footer = document.querySelector("footer");

  if (footer) {
    const botoes = footer.querySelector(".rst-footer-buttons");

    footer.innerHTML = "";

    if (botoes) footer.appendChild(botoes);

    const hr = document.createElement("hr");
    footer.appendChild(hr);

    const rodapeTexto = document.createElement("div");
    rodapeTexto.setAttribute("role", "contentinfo");
    rodapeTexto.innerHTML = `Copyright © Inspell Softwares 2026`;
    footer.appendChild(rodapeTexto);
  }

});

document.addEventListener("DOMContentLoaded", function () {

  const campoBusca = document.querySelector(".wy-form input[type='text']");

  if (campoBusca) {
    campoBusca.placeholder = "Digite para pesquisar";
  }

});

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".rst-versions .rst-current-version a").forEach(function (link) {
    link.innerHTML = link.innerHTML
      .replace("Previous", "Anterior")
      .replace("Next", "Próximo");
  });

});