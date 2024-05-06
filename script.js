document.querySelectorAll(".leia-mais").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const conteudoCompleto = this.nextElementSibling;
    conteudoCompleto.style.display = "block";
    this.style.display = "none";
  });
});

document.querySelectorAll(".volte-ao-topo").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const conteudoCompleto = this.parentNode;
    const leiaMaisLink = conteudoCompleto.previousElementSibling;
    conteudoCompleto.style.display = "none";
    leiaMaisLink.style.display = "inline";
  });
});
