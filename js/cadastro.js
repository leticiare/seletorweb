import { adicionarHabilidadeNaLista, obterHabilidades } from "./habilidades.js";
import { obterFotoParticipante, ampliarFoto } from "./fotoParticipante.js";
import { redimensionarCaixaTexto } from "./caixaTexto.js";
import { adicionarParticipante } from "./manipularParticipantes.js";

const iconeFavorito = document.getElementById("icone-favorito");
const campoAdicaoHabilidade = document.getElementById("nova-habilidade");
const botaoAdicaoHabilidade = campoAdicaoHabilidade.querySelector("button");
const inputFotoParticipante = document.getElementById("input-foto-participante");
const fotoParticipante = document.getElementById("foto-participante");
const areasTexto = Array.from(document.querySelectorAll("textarea"));
const botaoSalvar = document.getElementById("botao-salvar");

iconeFavorito.addEventListener("click", () => iconeFavorito.classList.toggle("favoritado"));
botaoAdicaoHabilidade.addEventListener("click", adicionarHabilidadeNaLista);
fotoParticipante.addEventListener("click", ampliarFoto);
inputFotoParticipante.addEventListener("change", obterFotoParticipante);
areasTexto.map((areaTexto) => areaTexto.addEventListener("input", redimensionarCaixaTexto));
botaoSalvar.addEventListener("click", salvarParticipante);

/**
 * Esta função serve para adicionar salvar os dados do participante cadastrado
 */
function salvarParticipante() {
  if (adicionarParticipante(obterDadosParticipante())) {
    alert("Participante cadastrado!");
  }
}

/**
 * Esta função tem como objetivo obter todos os dados do participante contidos na página, e transformar em um objeto com os mesmos dados.
 * @returns {Object} Objeto contendo todas as informações do participante, caso não seja violado nenhuma regra.
 */
function obterDadosParticipante() {
  const favorito = document.querySelector(".favoritado") ? true : false;
  const urlFoto = fotoParticipante.src;
  const periodo = parseInt(document.getElementById("menu-periodo").value);
  const nome = document.getElementById("nome-participante").value;
  const curso = document.getElementById("curso-participante").value;
  const habilidades = obterHabilidades();
  const anotacoes = document.getElementById("anotacoes").value;

  const camposNecessariosVazios = (periodo == 0 || nome.replace(/\s/g, '').length == 0 || curso.replace(/\s/g, '').length == 0);

  if (camposNecessariosVazios) {
    alert("É necessário preencher os campos período, nome e curso!");
    return null;
  }

  return {nome, curso, periodo, urlFoto, habilidades, anotacoes, favorito}
}