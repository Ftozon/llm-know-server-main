export default {
  node: 'Nó',
  nodeName: 'Nome do Nó',
  baseComponent: 'Básico',
  nodeSetting: 'Configurações do Nó',
  workflow: 'Fluxo de Trabalho',
  searchBar: {
    placeholder: 'Pesquisar por nome'
  },
  info: {
    previewVersion: 'Versão Prévia:',
    saveTime: 'Última Salvamento:'
  },
  setting: {
    restoreVersion: 'Restaurar Versão Anterior"',
    restoreCurrentVersion: 'Restaurar para esta Versão',
    addComponent: 'Adicionar',
    public: 'Publicar',
    releaseHistory: 'Histórico de Publicação',
    autoSave: 'Salvar Automaticamente',
    latestRelease: 'Última Publicação',
    copyParam: 'Copiar Parâmetros',
    debug: 'Executar',
    exit: 'Sair',
    exitSave: 'Salvar & Sair',
  },
  tip: {
    publicSuccess: 'Publicado com sucesso',
    noData: 'Nenhum resultado relacionado encontrado',
    nameMessage: 'O nome não pode estar vazio!',
    onlyRight: 'As conexões só podem ser feitas pelo âncora da direita',
    notRecyclable: 'Conexões em loop não são permitidas',
    onlyLeft: 'As conexões só podem ser feitas para o âncora da esquerda',
    applicationNodeError: 'Este aplicativo está indisponível',
    functionNodeError: 'Este nó de função está indisponível',
    repeatedNodeError: 'Já existe um nó com este nome',
    cannotCopy: 'Não pode ser copiado',
    copyError: 'Nó já copiado',
    paramErrorMessage: 'Parâmetro já existe: ',
    saveMessage: 'As alterações atuais ainda não foram salvas. Salvar antes de sair?',
  },
  delete: {
    confirmTitle: 'Confirmar exclusão deste nó?',
    deleteMessage: 'Este nó não pode ser excluído'
  },
  control: {
    zoomOut: 'Reduzir Zoom',
    zoomIn: 'Aumentar Zoom',
    fitView: 'Ajustar à Tela',
    retract: 'Recolher Todos',
    extend: 'Expandir Todos',
    beautify: 'Organizar Automaticamente'
  },
  variable: {
    label: 'Variável',
    global: 'Variável Global',
    Referencing: 'Variável Referenciada',
    ReferencingRequired: 'Variável referenciada é obrigatória',
    ReferencingError: 'Variável referenciada inválida',
    NoReferencing: 'A variável referenciada não existe',
    placeholder: 'Por favor, selecione uma variável'
  },
  condition: {
    title: 'Condição de Execução',
    front: 'Pré-condição',
    AND: 'Todos',
    OR: 'Qualquer',
    text: 'Após a execução do nó conectado, execute o nó atual'
  },
  validate: {
    startNodeRequired: 'O nó inicial é obrigatório',
    startNodeOnly: 'Apenas um nó inicial é permitido',
    baseNodeRequired: 'O nó de informações básicas é obrigatório',
    baseNodeOnly: 'Apenas um nó de informações básicas é permitido',
    notInWorkFlowNode: 'Nó fora do fluxo de trabalho',
    noNextNode: 'O próximo nó não existe',
    nodeUnavailable: 'Nó indisponível',
    needConnect1: 'O ramo do nó precisa ser conectado',
    cannotEndNode: 'Este nó não pode ser usado como nó final'
  },
  nodes: {
    startNode: {
      label: 'Início',
      question: 'Pergunta do Usuário',
      currentTime: 'Hora Atual'
    },
    baseNode: {
      label: 'Informações Básicas',
      appName: {
        label: 'Nome do Aplicativo'
      },
      appDescription: {
        label: 'Descrição do Aplicativo'
      },
      fileUpload: {
        label: 'Upload de Arquivo',
        tooltip: 'Quando habilitado, a página de perguntas e respostas exibirá um botão de upload de arquivo.'
      },
      FileUploadSetting: {
        title: 'Configurações de Upload de Arquivos',
        maxFiles: 'Número máximo de arquivos por upload',
        fileLimit: 'Tamanho máximo por arquivo (MB)',
        fileUploadType: {
          label: 'Tipos de arquivos permitidos para upload',
          documentText: 'Requer o nó "Extração de Conteúdo de Documento" para analisar o conteúdo do documento',
          imageText: 'Requer o nó "Entendimento de Imagem" para analisar o conteúdo da imagem',
          audioText: 'Requer o nó "Transcrição de Áudio" para analisar o conteúdo do áudio'
        }
      }
    },
    aiChatNode: {
      label: 'Chat IA',
      text: 'Converse com um modelo de IA',
      answer: 'Conteúdo de IA',
      returnContent: {
        label: 'Retornar Conteúdo',
        tooltip: `Se desativado, o conteúdo deste nó não será exibido ao usuário.
                  Se deseja que o usuário veja a saída deste nó, ative o interruptor.`
      },
      defaultPrompt: 'Informações Conhecidas',
      think: 'Processo de Pensamento'
    },
    searchDatasetNode: {
      label: 'Recuperação de Conhecimento',
      text: 'Permite consultar conteúdo textual relacionado às perguntas dos usuários no Conhecimento',
      paragraph_list: 'Lista de segmentos recuperados',
      is_hit_handling_method_list: 'Lista de segmentos que atendem aos critérios de resposta direta',
      result: 'Resultado da Pesquisa',
      directly_return: 'Conteúdo de segmentos que atendem aos critérios de resposta direta',
      searchParam: 'Parâmetros de Recuperação',
      searchQuestion: {
        label: 'Pergunta',
        placeholder: 'Por favor, selecione uma pergunta de pesquisa',
        requiredMessage: 'Por favor, selecione uma pergunta de pesquisa'
      }
    },
    questionNode: {
      label: 'Otimização de Perguntas',
      text: 'Otimize e melhore a pergunta atual com base no histórico de bate-papos para melhor corresponder aos segmentos de conhecimento',
      result: 'Resultado da Pergunta Otimizada',
      defaultPrompt1: `Otimize e melhore a pergunta do usuário com base no contexto:`,
      defaultPrompt2: `Por favor, forneça uma pergunta otimizada.`,
      systemDefault: 'Você é um especialista em otimização de perguntas'
    },
    conditionNode: {
      label: 'Ramo Condicional',
      text: 'Dispare diferentes nós com base em condições',
      branch_name: 'Nome do Ramo',
      conditions: {
        label: 'Condições',
        info: 'Atende ao seguinte',
        requiredMessage: 'Por favor, selecione as condições'
      },
      valueMessage: 'Por favor, insira um valor',
      addCondition: 'Adicionar Condição',
      addBranch: 'Adicionar Ramo'
    },
    replyNode: {
      label: 'Resposta Especificada',
      text: 'Especifique o conteúdo da resposta, variáveis referenciadas serão convertidas para strings na saída',
      content: 'Conteúdo',
      replyContent: {
        label: 'Conteúdo da Resposta',
        custom: 'Personalizado',
        reference: 'Referência de Variável'
      }
    },
    rerankerNode: {
      label: 'Recall Multipath',
      text: 'Use um modelo de reclassificação para refinar os resultados de recuperação de várias fontes de conhecimento',
      result_list: 'Lista de Resultados Reordenados',
      result: 'Resultado da Reclassificação',
      rerankerContent: {
        label: 'Conteúdo da Reclassificação',
        requiredMessage: 'Por favor, selecione o conteúdo da reclassificação'
      },
      higher: 'Maior',
      ScoreTooltip: 'Quanto maior a Pontuação, maior a relevância.',
      max_paragraph_char_number: 'Máximo de Caracteres',
      reranker_model: {
        label: 'Reclassificar',
        placeholder: 'Por favor, selecione um reclassificador'
      }
    },
    formNode: {
      label: 'Entrada de Formulário',
      text: 'Coletar entradas do usuário durante o Q&A e usá-las nos processos subsequentes',
      form_content_format1: 'Olá, por favor preencha o formulário abaixo:',
      form_content_format2: 'Clique no botão [Enviar] após preenchê-lo.',
      form_data: 'Todo o Conteúdo do Formulário',
      formContent: {
        label: 'Conteúdo de Saída do Formulário',
        requiredMessage:
          'Por favor, defina o conteúdo de saída deste nó, { form } é um espaço reservado para o formulário.',
        tooltip: 'Defina o conteúdo de saída deste nó. { form } é um espaço reservado para o formulário'
      },
      formAllContent: 'Todo o Conteúdo do Formulário',
      formSetting: 'Configuração do Formulário'
    },
    documentExtractNode: {
      label: 'Extração de Conteúdo de Documento',
      text: 'Extrair conteúdo de documentos',
      content: 'Conteúdo do Documento'
    },
    imageUnderstandNode: {
      label: 'Entendimento de Imagem',
      text: 'Analise imagens para identificar objetos, cenas e fornecer respostas',
      answer: 'Conteúdo de IA',
      model: {
        label: 'Modelo de Visão',
        requiredMessage: 'Por favor, selecione um modelo de visão'
      },
      image: {
        label: 'Selecionar Imagem',
        requiredMessage: 'Por favor, selecione uma imagem'
      }
    },
    variableAssignNode: {
      label: 'Atribuição de Variável',
      text: 'Atualize o valor da variável global',
      assign: 'Definir Valor'
    },
    imageGenerateNode: {
      label: 'Geração de Imagem',
      text: 'Gere imagens com base no conteúdo textual fornecido',
      answer: 'Conteúdo de IA',
      model: {
        label: 'Modelo de Geração de Imagem',
        requiredMessage: 'Por favor, selecione um modelo de geração de imagem'
      },
      prompt: {
        label: 'Prompt Positivo',
        tooltip: 'Descreva elementos e características visuais que você deseja na imagem gerada'
      },
      negative_prompt: {
        label: 'Prompt Negativo',
        tooltip: 'Descreva elementos que você deseja excluir da imagem gerada',
        placeholder:
          'Por favor, descreva o conteúdo que você não deseja gerar, como cores ou conteúdo sangrento'
      }
    },
    speechToTextNode: {
      label: 'Fala-para-Texto',
      text: 'Converta áudio em texto através de modelos de reconhecimento de fala',
      stt_model: {
        label: 'Modelo de Reconhecimento de Fala'
      },
      audio: {
        label: 'Selecionar Arquivo de Áudio',
        placeholder: 'Por favor, selecione um arquivo de áudio'
      }
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'Converta texto em áudio através de modelos de síntese de fala',
      tts_model: {
        label: 'Modelo de Síntese de Fala'
      },
      content: {
        label: 'Selecionar Conteúdo de Texto'
      }
    },
    functionNode: {
      label: 'Função Personalizada',
      text: 'Execute scripts personalizados para processamento de dados'
    },
    applicationNode: {
      label: 'Nó do Aplicativo'
    }
  },
  compare: {
    is_null: 'É nulo',
    is_not_null: 'Não é nulo',
    contain: 'Contém',
    not_contain: 'Não contém',
    eq: 'Igual a',
    ge: 'Maior ou igual a',
    gt: 'Maior que',
    le: 'Menor ou igual a',
    lt: 'Menor que',
    len_eq: 'Comprimento igual a',
    len_ge: 'Comprimento maior ou igual a',
    len_gt: 'Comprimento maior que',
    len_le: 'Comprimento menor ou igual a',
    len_lt: 'Comprimento menor que'
  },
  FileUploadSetting: {}
}