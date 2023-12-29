import { habilitarScroll, desabilitarScroll } from "./htmlUtils.js";

/**
 * Esta função é um evento que tem como objetivo obter a foto do participante por meio de um arquivo fornecido por meio de um input, e exibir essa mesma foto na imagem de perfil do cadastro
 * @param {Event} event Evento do DOM que foi acionado
 * @returns {void}
 */
const obterFotoParticipante = (event) => {
  const arquivo = event.target.files[0];

  const leitorArquivo = new FileReader();
  leitorArquivo.onload = (event) => {
    document.getElementById("foto-participante").setAttribute("src", event.target.result);
  }

  leitorArquivo.readAsDataURL(arquivo);
}

/**
 * Esta função é um evento que tem como objetivo ampliar a foto de perfil do participante, para melhor visualização, é incluído também a função para reverter esse comportamento
 * @param {Event} event Evento do DOM que foi acionado
 */
const ampliarFoto = (event) => {
  const fotoParticipante = event.target;
  const divPai = fotoParticipante.parentElement;
  
  fotoParticipante.classList.add("foto-ampliada");
  divPai.classList.add("container-ampliado");
  divPai.querySelector("label").style.display = 'none';

  window.addEventListener("click", reduzirFoto);
  desabilitarScroll();

  /**
   * Esta função é um evento que reverte o comportamento e desfaz a função mãe
   * @param {Event} event Evento do DOM que foi acionado
   */
  function reduzirFoto(event) {
    if (event.target != fotoParticipante) {
      fotoParticipante.classList.remove("foto-ampliada");
      divPai.classList.remove("container-ampliado");
      divPai.querySelector("label").style.display = 'initial';

      habilitarScroll();
      window.removeEventListener("click", reduzirFoto);
    }
  }
}

export { obterFotoParticipante, ampliarFoto }