/* Função para adicionar redirecionamento à página de cadastro de fases*/
var img_pagina_adicionar_fase = document.getElementById(
  "pagina_adicionar_fase"
);
img_pagina_adicionar_fase.addEventListener("click", function () {
  window.location.href = "cadastrar_fase.html";
});
