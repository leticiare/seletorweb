import { adicionarHabilidadeNaLista } from "./habilidades.js";
import { obterFotoParticipante, ampliarFoto } from "./fotoParticipante.js";
import { redimensionarCaixaTexto } from "./caixaTexto.js";

const campoAdicaoHabilidade = document.getElementById("nova-habilidade");
const botaoAdicaoHabilidade = campoAdicaoHabilidade.querySelector("button");
const inputFotoParticipante = document.getElementById("input-foto-participante");
const fotoParticipante = document.getElementById("foto-participante");
const areasTexto = Array.from(document.querySelectorAll("textarea"));

botaoAdicaoHabilidade.addEventListener("click", adicionarHabilidadeNaLista);
fotoParticipante.addEventListener("click", ampliarFoto);
inputFotoParticipante.addEventListener("change", obterFotoParticipante);
areasTexto.map((areaTexto) => areaTexto.addEventListener("input", redimensionarCaixaTexto));