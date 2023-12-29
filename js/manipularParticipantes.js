const listaParticipantes = JSON.parse(localStorage.getItem('participantes')) || [];

/**
 * Função com objetivo de obter todos os participantes cadastrados
 * @returns {Array} Lista contendo todos os participantes
 */
const obterTodosOsParticipantes = () => {
  return listaParticipantes;
}

/**
 * Função com objetivo de obter um único participante específico
 * @param {Number} indiceParticipante Índice do participante
 * @returns {Object} Objeto contendo os dados do participante
 */
const obterParticipante = (indiceParticipante) => {
  return listaParticipantes[indiceParticipante];
}

/**
 * Função com objetivo de receber os dados do participante e salvar na lista
 * @param {Object} dadosParticipante Objeto contendo os dados do participante
 * @returns {Boolean} Valor booleano indicando o sucesso ou não da ação
 */
const adicionarParticipante = (dadosParticipante) => {
  if (dadosParticipante == null) return false;
  listaParticipantes.push(dadosParticipante);
  atualizarArmazenamento();
  return true;
}

/**
 * Função com objetivo de atualizar o localStorage
 */
const atualizarArmazenamento = () => {
  localStorage.setItem('participantes', JSON.stringify());
}

export { obterTodosOsParticipantes, obterParticipante, adicionarParticipante }