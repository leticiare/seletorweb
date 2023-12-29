/**
 * Esta função tem como objetivo validar o campo de texto, verificando se ele possui pelo menos 1 caractere válido.
 * @param {HTMLElement} areaTexto Elemento HTML que possui algum conteúdo de texto
 * @returns {(mensagemAlerta: String) => Boolean} Função que recebe a mensagem de alerta que será disparada
 * @returns {Boolean} Valor boleano que indica a validação do campo
 */
const validarCampoTexto = (areaTexto) => (mensagemAlerta) => {
  const conteudoTexto = areaTexto.value;

  if (conteudoTexto.replace(/\s/g, "").length == 0) {
    alert(mensagemAlerta);
    return false;
  }

  return true;
}

const validarNomeParticipante = validarCampoTexto(document.getElementById("nome-participante"));
const validarCursoParticipante = validarCampoTexto(document.getElementById("curso-participante"));

/**
 * Esta função tem como objetivo validar a seleção do menu
 * @returns {Boolean} Valor boleano que indica a validade do menu
 */
const validarMenuPeriodo = () => {
  const valorMenu = document.getElementById("menu-periodo").value;
  
  if (valorMenu == 0) {
    alert("É preciso selecionar o período!");
    return false;
  }

  return true;
}

/**
 * Esta função tem como objetivo fazer quase todas as verificações necessárias dos campos preenchidos
 * @returns {Boolean} Valor boleano que indica se os campos necessários foram preenchidos corretamente
 */
const camposNecessariosPreenchidos = () => {
  return validarMenuPeriodo()
    && validarNomeParticipante("É preciso informar o nome do participante!")
    && validarCursoParticipante("É preciso informar o curso do participante!");
}

/**
 * Esta é uma função de verificação das habilidades, verificando se alguma delas não possui nível
 * @param {Array} listaHabilidades Lista contendo objetos com dados das habilidades do participante
 * @returns {Boolean} Valor boleano que indica a validade das habilidades
 */
const habilidadesValidas = (listaHabilidades) => {
  const existeHabilidadeInvalida = listaHabilidades.some(habilidade => habilidade.nivel === 0);

  if (existeHabilidadeInvalida) {
    alert("É preciso informar o nível da habilidade!");
    return false;
  }

  return true;
}

export { camposNecessariosPreenchidos, habilidadesValidas }