/**
 * Esta função tem como objetivo adicionar vários elementos filhos a um elemento pai
 * @param {HTMLElement} elementoPai Elemento pai em que receberá a adição de filhos
 * @param {HTMLElement[]} listaFilhos Lista de elementos filhos que serão adicionados ao elemento pai
 * @returns {void}
 */
const adicionarFilhosNaTagHTML = (elementoPai, listaFilhos) => {
  listaFilhos.map(filho => elementoPai.appendChild(filho));
}

/**
 * Função para desabilitar o scroll da página
 */
const desabilitarScroll = () => {
  document.body.style.overflow = 'hidden';
}

/**
 * Função para habilitar o scroll da página
 */
const habilitarScroll = () => {
  document.body.style.overflow = 'visible';
}

/**
 * Esta função serve para retornar o valor da propriedade de estilo de um elemento HTML
 * @param {HTMLElement} elemento Elemento HTML que deseja obter a propriedade
 * @param {CSSPropertyRule} propriedade Propriedade de estilo do elemento
 * @returns {String} String contendo o valor da propriedade desejada
 */
const obterPropriedadeCss = (elemento, propriedade) => {
  return window.getComputedStyle(elemento, null).getPropertyValue(propriedade);
}

export { adicionarFilhosNaTagHTML, desabilitarScroll, habilitarScroll, obterPropriedadeCss }