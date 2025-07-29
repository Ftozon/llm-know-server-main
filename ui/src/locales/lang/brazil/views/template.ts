export default {
  title: 'Modelos',
  provider: 'Provedor',
  providerPlaceholder: 'Selecione o Provedor',
  addModel: 'Adicionar Modelo',
  searchBar: {
    placeholder: 'Pesquisar por nome'
  },
  delete: {
    confirmTitle: 'Excluir Modelo',
    confirmMessage: 'Você tem certeza de que deseja excluir o modelo:'
  },
  tip: {
    createSuccessMessage: 'Modelo criado com sucesso',
    createErrorMessage: 'Há erros nas informações básicas',
    errorMessage: 'Variável já existe: ',
    emptyMessage1: 'Por favor, selecione o tipo de modelo e o modelo base nas informações básicas primeiro',
    emptyMessage2: 'O modelo selecionado não suporta configurações de parâmetros',
    updateSuccessMessage: 'Modelo atualizado com sucesso',
    saveSuccessMessage: 'Parâmetros do modelo salvos com sucesso',
    downloadError: 'Falha no download',
    noModel: 'O modelo não existe no Ollama'
  },
  model: {
    allModel: 'Todos os Modelos',
    publicModel: 'Modelos Públicos',
    privateModel: 'Modelos Privados',
    LLM: 'LLM',
    EMBEDDING: 'Modelo de Incorporação (Embedding)',
    RERANKER: 'Rerank',
    STT: 'Fala para Texto (Speech2Text)',
    TTS: 'Texto para Fala (TTS)',
    IMAGE: 'Modelo de Visão',
    TTI: 'Geração de Imagem'
  },
  templateForm: {
    title: {
      baseInfo: 'Informações Básicas',
      advancedInfo: 'Configurações Avançadas',
      modelParams: 'Parâmetros do Modelo',
      editParam: 'Editar Parâmetro',
      addParam: 'Adicionar Parâmetro',
      paramSetting: 'Configurações de Parâmetros do Modelo',
      apiParamPassing: 'Parâmetros da Interface'
    },
    form: {
      templateName: {
        label: 'Nome do Modelo',
        placeholder: 'Defina um nome para o modelo base',
        tooltip: 'Nome personalizado do modelo no LLM-Know',
        requiredMessage: 'O nome do modelo não pode estar vazio'
      },
      permissionType: {
        label: 'Permissão',
        privateDesc: 'Disponível apenas para o usuário atual',
        publicDesc: 'Disponível para todos os usuários',
        requiredMessage: 'A permissão não pode estar vazia'
      },
      model_type: {
        label: 'Tipo de Modelo',
        placeholder: 'Selecione um tipo de modelo',
        tooltip1:
          'LLM: Um modelo de inferência para chats de IA no APP.',
        tooltip2:
          'Modelo de Incorporação: Um modelo para vetorizar o conteúdo de documentos no conhecimento.',
        tooltip3: 'Fala para Texto: Um modelo usado para reconhecimento de fala no APP.',
        tooltip4: 'TTS: Um modelo usado para TTS no APP.',
        tooltip5:
          'Rerank: Um modelo usado para reordenar segmentos candidatos ao usar múltiplas rotas de recuperação na orquestração avançada do APP.',
        tooltip6:
          'Modelo de Visão: Um modelo visual usado para compreensão de imagens na orquestração avançada do APP.',
        tooltip7:
          'Geração de Imagem: Um modelo visual usado para geração de imagens na orquestração avançada do APP.',
        requiredMessage: 'O tipo de modelo não pode estar vazio'
      },
      base_model: {
        label: 'Modelo Base',
        tooltip:
          'Para modelos não listados, insira o nome do modelo e pressione Enter',
        placeholder: 'Insira o nome do modelo base e pressione Enter para adicionar',
        requiredMessage: 'O modelo base não pode estar vazio'
      }
    }
  },
  download: {
    downloading: 'Baixando...',
    cancelDownload: 'Cancelar Download'
  }
}