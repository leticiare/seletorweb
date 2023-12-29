import { obterPropriedadeCss } from "./htmlUtils.js";

/**
 * Esta função é um método que tem como objetivo redimensionar as caixas de texto a depender da quantidade de caracteres dentro dela.
 * @param {Event} event Evento do DOM que foi acionado
 */
const redimensionarCaixaTexto = (event) => {
  const caixaTexto = event.target;
  const larguraMaximaCaixaTexto = parseInt(obterPropriedadeCss(caixaTexto, "max-width"));
  const preenchimentoCaixaTexto = parseInt(obterPropriedadeCss(caixaTexto, "padding"));
  const tamanhoLinha = parseInt(obterPropriedadeCss(caixaTexto, 'line-height'));
  const fontSize = obterPropriedadeCss(caixaTexto, 'font-size');
  const fontFamily = obterPropriedadeCss(caixaTexto, 'font-family');

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = fontSize + fontFamily;

  const larguraCaixaTexto = context.measureText(caixaTexto.value).width;
  
  caixaTexto.style.width = larguraCaixaTexto + (preenchimentoCaixaTexto * 2) + 1 + "px";
  caixaTexto.style.height = (Math.floor(larguraCaixaTexto / (larguraMaximaCaixaTexto - preenchimentoCaixaTexto * 2) + 1)) * tamanhoLinha + preenchimentoCaixaTexto * 2 + "px";
}

export { redimensionarCaixaTexto }