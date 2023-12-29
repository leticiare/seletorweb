import { obterTodosOsParticipantes } from "./manipularParticipantes.js";
import { obterElementoHTMLPorString } from "./htmlUtils.js";
import { niveisDeCor } from "./habilidades.js";

const secaoCardsParticipantes = document.querySelector(".secao_cards_participantes");

const listaParticipantes = obterTodosOsParticipantes();

const criarDivIconesCard = (favorito) => {
  const svgFavorito =
  `
  <svg class="card_participantes_icone" width="20" height="20" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 3.23607L25.6005 15.8561L25.825 16.5471H26.5516H39.8211L29.0858 24.3467L28.498 24.7738L28.7225 25.4648L32.8231 38.0848L22.0878 30.2852L21.5 29.8582L20.9122 30.2852L10.1769 38.0848L14.2775 25.4648L14.502 24.7738L13.9142 24.3467L3.17891 16.5471H16.4484H17.175L17.3995 15.8561L21.5 3.23607Z" fill="white" stroke="black" stroke-width="2"/>
    </svg>
  `

  const divIcone = document.createElement("div");
  const iconeFavorito = obterElementoHTMLPorString(svgFavorito);

  const iconeEditar = document.createElement("img");


  divIcone.setAttribute("class", "card_icones");
  iconeFavorito.setAttribute("class", "card_participantes_icone");
  iconeEditar.setAttribute("src", "../assets/images/editar_usuario.svg");
  iconeEditar.setAttribute("class", "card_participantes_icone");

  if (favorito) {
    iconeFavorito.classList.add("favorito");
  }

  divIcone.appendChild(iconeFavorito);
  divIcone.appendChild(iconeEditar);

  return divIcone;
}

const criarDivFotosDados = (urlFoto, nome, curso, periodo) => {
  const divFotoDados = document.createElement("div");
  const fotoParticipante = document.createElement("img");
  const divDadosParticipante = document.createElement("div");
  const nomeParticipante = document.createElement("p");
  const cursoParticipante = document.createElement("p");
  const periodoParticipante = document.createElement("p");

  divFotoDados.setAttribute("class", "card_participante__foto_dados");

  fotoParticipante.setAttribute("class", "card_participante_perfil");
  fotoParticipante.setAttribute("src", urlFoto);

  divDadosParticipante.setAttribute("class", "card_participante_dados");

  nomeParticipante.setAttribute("class", "nome-participante");
  nomeParticipante.textContent = nome;

  cursoParticipante.setAttribute("class", "curso-participante");
  cursoParticipante.textContent = curso;

  periodoParticipante.setAttribute("class", "periodo-participante");
  periodoParticipante.textContent = `${periodo}° período`;

  divDadosParticipante.appendChild(nomeParticipante);
  divDadosParticipante.appendChild(cursoParticipante);
  divDadosParticipante.appendChild(periodoParticipante);

  divFotoDados.appendChild(fotoParticipante);
  divFotoDados.appendChild(divDadosParticipante);

  return divFotoDados;
}

const criarDivHabilidades = (habilidade) => {
  const divHabilidades = document.createElement("div");
  const nomeHabilidade = document.createElement("p");

  divHabilidades.setAttribute("class", "card__habilidade");
  nomeHabilidade.setAttribute("class", "nome-habilidade");

  nomeHabilidade.textContent = `${habilidade.nome}:`;

  const divNiveisHabilidade = document.createElement("div");
  divNiveisHabilidade.setAttribute("class", "checkbox-container");

  const listaCheckbox = [1, 2, 3, 4, 5].map(elemento => {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("disabled", "");
    checkbox.setAttribute("class", "habilidade-checkbox");
    return checkbox;
  });

  listaCheckbox.forEach((checkbox, indice) => {
    if (indice + 1 <= habilidade.nivel) {
      checkbox.setAttribute("checked", "");
      checkbox.style.backgroundColor = niveisDeCor[habilidade.nivel];
    }

    divNiveisHabilidade.appendChild(checkbox);
  });

  divHabilidades.appendChild(nomeHabilidade);
  divHabilidades.appendChild(divNiveisHabilidade);

  return divHabilidades;
}

const criarAreaTexto = (anotacoes) => {
  const areaTexto = document.createElement("textarea");

  areaTexto.setAttribute("name", "anotacoes");
  areaTexto.setAttribute("id", "card__observacao");
  areaTexto.setAttribute("disabled", "");

  areaTexto.textContent = anotacoes;

  return areaTexto;
}

listaParticipantes.map(participante => {
  const divParticipante = document.createElement("div");
  divParticipante.setAttribute("class", "card_participante");

  divParticipante.appendChild(criarDivIconesCard(participante.favorito));
  divParticipante.appendChild(criarDivFotosDados(participante.urlFoto, participante.nome, participante.curso, participante.periodo));
  participante.habilidades.forEach(habilidade => divParticipante.appendChild(criarDivHabilidades(habilidade)));

  divParticipante.appendChild(criarAreaTexto(participante.anotacoes));

  secaoCardsParticipantes.appendChild(divParticipante);
});