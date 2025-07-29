export default {
  uploadDocument: 'Upload de Documento',
  importDocument: 'Importar Documento',
  syncDocument: 'Sincronizar Documento',
  selected: 'Selecionado(s)',
  items: 'Itens',
  searchBar: {
    placeholder: 'Pesquisar por nome do documento'
  },
  setting: {
    migration: 'Mover',
    cancelGenerateQuestion: 'Cancelar Geração de Perguntas',
    cancelVectorization: 'Cancelar Vetorização',
    cancelGenerate: 'Cancelar Geração',
    export: 'Exportar para'
  },
  tip: {
    saveMessage: 'Alterações atuais não foram salvas. Confirmar saída?',
    cancelSuccess: 'Sucesso',
    sendMessage: 'Enviado com sucesso',
    vectorizationSuccess: 'Vetorização concluída com sucesso',
    nameMessage: 'O nome do documento não pode estar vazio!',
    importMessage: 'Importação realizada com sucesso',
    migrationSuccess: 'Movimentação realizada com sucesso'
  },
  upload: {
    selectFile: 'Selecionar Arquivo',
    selectFiles: 'Selecionar Pasta',
    uploadMessage: 'Arraste e solte arquivos aqui para upload ou',
    formats: 'Formatos suportados:',
    requiredMessage: 'Por favor, faça o upload de um arquivo',
    errorMessage1: 'O tamanho do arquivo excede 100MB',
    errorMessage2: 'Formato de arquivo não suportado',
    errorMessage3: 'O arquivo não pode estar vazio',
    errorMessage4: 'É possível fazer upload de até 50 arquivos de uma vez',
    template: 'Modelo',
    download: 'Baixar'
  },

  fileType: {
    txt: {
      label: 'Arquivo de Texto',
      tip1: '1. Recomenda-se padronizar os marcadores de segmento no arquivo antes do upload.',
      tip2: '2. É possível fazer upload de até 50 arquivos de uma vez, sendo que cada arquivo não deve exceder 100MB.'
    },
    table: {
      label: 'Tabela',
      tip1: '1. Clique para baixar o modelo correspondente e preencher as informações:',
      tip2: '2. A primeira linha deve conter os cabeçalhos das colunas, que devem ser termos significativos. Cada registro na tabela será tratado como um segmento.',
      tip3: '3. Cada planilha no arquivo de planilha carregado será tratada como um documento, com o nome da planilha como o nome do documento.',
      tip4: '4. É possível fazer upload de até 50 arquivos de uma vez, sendo que cada arquivo não deve exceder 100MB.'
    },
    QA: {
      label: 'Pares de Pergunta-Resposta',
      tip1: '1. Clique para baixar o modelo correspondente e preencher as informações:',
      tip2: '2. Cada planilha no arquivo de planilha carregado será tratada como um documento, com o nome da planilha como o nome do documento.',
      tip3: '3. É possível fazer upload de até 50 arquivos de uma vez, sendo que cada arquivo não deve exceder 100MB.'
    }
  },
  setRules: {
    title: {
      setting: 'Definir Regras de Segmentação',
      preview: 'Visualizar'
    },
    intelligent: {
      label: 'Segmentação Automática (Recomendada)',
      text: 'Se você não tem certeza de como definir regras de segmentação, recomenda-se usar a segmentação automática.'
    },
    advanced: {
      label: 'Segmentação Avançada',
      text: 'Os usuários podem personalizar delimitadores de segmentação, comprimento de segmento e regras de limpeza com base nos padrões do documento.'
    },
    patterns: {
      label: 'Delimitadores de Segmento',
      tooltip:
        'Divida recursivamente de acordo com os símbolos selecionados em ordem. Se o resultado da divisão exceder o comprimento do segmento, ele será truncado para o comprimento do segmento.',
      placeholder: 'Por favor, selecione'
    },
    limit: {
      label: 'Comprimento do Segmento'
    },
    with_filter: {
      label: 'Limpeza Automática',
      text: 'Remova símbolos duplicados, espaços, linhas em branco e palavras de tabulação.'
    },
    checkedConnect: {
      label: 'Adicionar seção "Perguntas Relacionadas" para pares de perguntas-respostas durante a importação.'
    }
  },
  buttons: {
    prev: 'Anterior',
    next: 'Próximo',
    import: 'Iniciar Importação',
    preview: 'Aplicar'
  },
  table: {
    name: 'Nome do Documento',
    char_length: 'Caracteres',
    paragraph: 'Segmento',
    all: 'Todos',
    updateTime: 'Hora da Atualização'
  },
  fileStatus: {
    label: 'Status do Arquivo',
    SUCCESS: 'Sucesso',
    FAILURE: 'Falha',
    EMBEDDING: 'Indexando',
    PENDING: 'Na Fila',
    GENERATE: 'Gerando',
    SYNC: 'Sincronizando',
    REVOKE: 'Cancelando',
    finish: 'Concluído'
  },
  enableStatus: {
    label: 'Status',
    enable: 'Ativado',
    close: 'Desativado'
  },
  sync: {
    label: 'Sincronizar',
    confirmTitle: 'Confirmar sincronização de documentos?',
    confirmMessage1:
      'A sincronização excluirá os dados existentes e buscará novos dados. Prossiga com cuidado.',
    confirmMessage2: 'Não é possível sincronizar, defina a URL do documento primeiro.',
    successMessage: 'Sucesso'
  },
  delete: {
    confirmTitle1: 'Confirmar exclusão em lote de',
    confirmTitle2: 'documentos?',
    confirmMessage:
      'Os segmentos dentro dos documentos selecionados também serão excluídos. Prossiga com cuidado.',
    successMessage: 'Sucesso',
    confirmTitle3: 'Confirmar exclusão do documento:',
    confirmMessage1: 'Neste documento',
    confirmMessage2: 'Todos os segmentos serão excluídos, operação deve ser feita com cautela.'
  },
  form: {
    source_url: {
      label: 'URL do Documento',
      placeholder: 'Insira a URL do documento, uma por linha. URLs incorretas causarão falha na importação.',
      requiredMessage: 'Por favor, insira uma URL de documento'
    },
    selector: {
      label: 'Seletor',
      placeholder: 'O padrão é body, você pode inserir .classname/#idname/tagname'
    },
    hit_handling_method: {
      label: 'Recuperar-Responder',
      tooltip: 'Quando o usuário fizer uma pergunta, trate os segmentos correspondentes de acordo com o método configurado.'
    },
    similarity: {
      label: 'Similaridade Acima de',
      placeholder: 'Retornar diretamente o conteúdo do segmento',
      requiredMessage: 'Por favor, insira o valor de similaridade'
    }
  },
  hitHandlingMethod: {
    optimization: 'Otimização do Modelo',
    directly_return: 'Responder Diretamente'
  },
  generateQuestion: {
    title: 'Gerar Perguntas',
    successMessage: 'Sucesso',
    tip1: 'O {data} no prompt é um espaço reservado para o conteúdo segmentado, que será substituído pelo conteúdo segmentado quando executado e enviado ao modelo de IA;',
    tip2: 'O modelo de IA gera perguntas relevantes com base no conteúdo segmentado. Coloque as perguntas geradas dentro das tags',
    tip3: ', e o sistema relacionará automaticamente as perguntas dentro dessas tags;',
    tip4: 'O efeito da geração depende do modelo e do prompt selecionados. Os usuários podem ajustar para obter o melhor resultado.',
    prompt1:
      'Conteúdo: {data}\n \n Por favor, resuma o acima e gere 5 perguntas com base no resumo. \nRequisitos da resposta: \n - Retorne apenas perguntas; \n - Coloque cada pergunta em',
    prompt2: 'tags.'
  }
}