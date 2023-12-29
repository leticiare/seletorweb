import { adicionarFilhosNaTagHTML } from './htmlUtils.js'

/**
 * Mapeamento do nível de cor com o seu respectivo código rgb
 */
const niveisDeCor = {
  1: 'rgb(235, 50, 50)',
  2: 'rgb(255, 165, 0)',
  3: 'rgb(255, 255, 0)',
  4: 'rgb(154, 205, 50)',
  5: 'rgb(0, 255, 255)'
};

const listaHabilidades = document.getElementById("lista-habilidades");

/**
 * Esta função serve para adicionar uma nova habilidade à lista e é ativada quando o botão de adição de habilidade é clicado
 * @returns {void}
 */
const adicionarHabilidadeNaLista = () => {  
  const campoAdicaoHabilidade = document.getElementById("nova-habilidade");
  const elementoLista = document.createElement("li");

  const nomeHabilidade = document.createElement("p");
  const divNiveisHabilidade = document.createElement("div");
  const svgLixeiro = obterSvgLixeiro();

  elementoLista.setAttribute("class", "habilidade");
  nomeHabilidade.setAttribute("class", "nome-habilidade");
  divNiveisHabilidade.setAttribute("class", "niveis-habilidade");

  nomeHabilidade.addEventListener("click", (event) => nomearHabilidade(event));

  const niveisHabilidades = [1, 2, 3, 4, 5];
  niveisHabilidades.map(nivel => {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", `nivel-${nivel}`);

    checkbox.addEventListener("click", (event) => selecionarCaixas(event));

    divNiveisHabilidade.appendChild(checkbox);
  });

  svgLixeiro.addEventListener("click", () => {
    listaHabilidades.removeChild(elementoLista);
  });

  listaHabilidades.removeChild(campoAdicaoHabilidade);

  adicionarFilhosNaTagHTML(elementoLista, [nomeHabilidade, divNiveisHabilidade, svgLixeiro]);
  adicionarFilhosNaTagHTML(listaHabilidades, [elementoLista, campoAdicaoHabilidade]);

  nomeHabilidade.click();

  /**
   * Esta função serve para transformar a string contendo o código do svg do ícone de lixeiro em um elemento HTML, para facilitar a manipulação dele
   * @returns {SVGElement}
   */
  function obterSvgLixeiro() {
    const codigoSvg =
      `
      <svg class="lixeiro" width="20" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
        <g>
            <path d="M24,41h77v63c0,9.37-7.63,17-17,17H44c-9.37,0-17-7.63-17-17V52c0-1.66-1.34-3-3-3s-3,1.34-3,3v52c0,12.68,10.32,23,23,23
                    h40c12.68,0,23-10.32,23-23V40.64c5.72-1.36,10-6.5,10-12.64c0-7.17-5.83-13-13-13H24c-7.17,0-13,5.83-13,13S16.83,41,24,41z
                    M24,21h80c3.86,0,7,3.14,7,7s-3.14,7-7,7H24c-3.86,0-7-3.14-7-7S20.14,21,24,21z"/>
            <path d="M49,7h30c1.66,0,3-1.34,3-3s-1.34-3-3-3H49c-1.66,0-3,1.34-3,3S47.34,7,49,7z"/>
            <path d="M53,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S53,105.66,53,104z"/>
            <path d="M81,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S81,105.66,81,104z"/>
        </g>
      </svg>
      `;
    
    const divTemporaria = document.createElement("div");
    divTemporaria.innerHTML = codigoSvg;
    const elementoSvg = divTemporaria.querySelector("svg.lixeiro");
    return elementoSvg;
  }
}

/**
 * Esta função é um evento que consiste na mudança do nome da habilidade
 * @param {Event} event Evento do DOM que foi acionado
 * @returns {void}
 */
const nomearHabilidade = (event) => {
  const nomeHabilidadeClicada = event.target;
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("maxlength", "20");

  /**
   * Este evento serve para que seja impossibilitado de escrever caracteres de pontuação ou números
   */
  input.addEventListener("input", () => {
    const textoInput = input.value;

    const novoTexto = textoInput.replace(/[0-9'"\\!@#$%&()\|,.<>;:/?{}\[\]_*-+=ºª]/g, '');

    event.target.value = novoTexto;
  });

  /**
   * Este é evento serve para substituir o elemento <input> pelo elemento <p>, com todo o conteúdo digitado
   */
  input.addEventListener("blur", () => {
    const nomeHabilidade = document.createElement("p");
    nomeHabilidade.setAttribute("class", "nome-habilidade");

    if (input.value == "") {
      const quantidadeHabilidades = listaHabilidades.children.length;
      nomeHabilidade.textContent = `Habilidade ${quantidadeHabilidades - 1}:`;
    } else {
      nomeHabilidade.textContent = input.value + ":";
    }

    nomeHabilidade.addEventListener("click", (event) => nomearHabilidade(event));

    input.parentElement.replaceChild(nomeHabilidade, input);
  });

  /**
   * Evento para ativar a substituição de foco a partir da tecla 'Enter'
   */
  input.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      input.blur();
    }
  })

  nomeHabilidadeClicada.parentElement.replaceChild(input, nomeHabilidadeClicada);

  input.focus();
}

/**
 * Esta função é um evento que consiste na seleção das caixas seleção de nível inferior à que foi clicada, e colorir com cor respectiva do nível
 * @param {Event} event Evento do DOM que foi acionado
 * @returns {void}
 */
const selecionarCaixas = (event) => {
  const caixaSelecionada = event.target;
  const nivelHabilidade = caixaSelecionada.name.substr(caixaSelecionada.name.length - 1);
  const caixaSelecionadaEComCorCorrespondente = caixaSelecionada.hasAttribute("checked") &&
    caixaSelecionada.style.backgroundColor == niveisDeCor[nivelHabilidade];
  
  const listaCaixas = Array.from(caixaSelecionada.parentElement.querySelectorAll("input[type='checkbox'"));

  if (caixaSelecionadaEComCorCorrespondente) {
    listaCaixas.map(caixaSelecao => {
      caixaSelecao.removeAttribute("checked");
      caixaSelecao.style.backgroundColor = 'white';
    });

    return;
  }

  listaCaixas.map(caixaSelecao => {
    const nivelCaixa = caixaSelecao.name.substr(caixaSelecao.name.length - 1);
    if (nivelCaixa <= nivelHabilidade) {
      caixaSelecao.setAttribute("checked", "");
      caixaSelecao.style.backgroundColor = niveisDeCor[nivelHabilidade];
    }
    else {
      caixaSelecao.removeAttribute("checked");
      caixaSelecao.style.backgroundColor = 'white';
    }
  });
}

export { adicionarHabilidadeNaLista, nomearHabilidade, selecionarCaixas}