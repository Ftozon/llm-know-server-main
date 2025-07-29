export default {
  title: 'APP',
  createApplication: 'Criar APP',
  importApplication: 'Importar APP',
  copyApplication: 'Copiar APP',
  workflow: 'FLUXO DE TRABALHO',
  simple: 'SIMPLES',
  searchBar: {
    placeholder: 'Pesquisar por nome'
  },

  setting: {
    demo: 'Demonstração'
  },
  delete: {
    confirmTitle: 'Tem certeza de que deseja excluir este APP: ',
    confirmMessage:
      'Excluir este APP fará com que seus serviços não estejam mais disponíveis. Por favor, proceda com cautela.'
  },
  tip: {
    ExportError: 'Exportação falhou',
    professionalMessage:
      'Suporta até 5 APPs.',
    saveErrorMessage: 'Falha ao salvar, por favor verifique sua entrada ou tente novamente mais tarde',
    loadingErrorMessage: 'Falha ao carregar a configuração, por favor verifique sua entrada ou tente novamente mais tarde'
  },

  applicationForm: {
    title: {
      appTest: 'Prévia de Depuração',
      copy: 'copiar'
    },
    form: {
      appName: {
        label: 'Nome',
        placeholder: 'Por favor, insira o nome do APP',
        requiredMessage: 'O nome do APP é obrigatório'
      },
      appDescription: {
        label: 'Descrição',
        placeholder:
          'Descreva o cenário e uso do APP, por exemplo: Assistente XXX respondendo perguntas de usuários sobre o uso do produto XXX'
      },
      appType: {
        label: 'Tipo',
        simplePlaceholder: 'Apropriado para iniciantes criarem assistentes.',
        workflowPlaceholder: 'Apropriado para usuários avançados personalizarem o fluxo de trabalho do assistente'
      },
      appTemplate: {
        blankApp: 'APP em Branco',
        assistantApp: 'Assistente de Conhecimento'
      },
      aiModel: {
        label: 'Modelo de IA',
        placeholder: 'Por favor, selecione um modelo de IA'
      },
      roleSettings: {
        label: 'Papel do Sistema',
        placeholder: 'Você é o assistente xxx'
      },

      prompt: {
        label: 'Prompt',
        noReferences: '(Sem referências de conhecimento)',
        references: ' (Com referências de conhecimento)',
        placeholder: 'Por favor, insira o prompt',
        requiredMessage: 'Por favor, insira o prompt',
        tooltip:
          'Ao ajustar o conteúdo do prompt, você pode guiar a direção da conversa do grande modelo.',

        noReferencesTooltip:
          'Ao ajustar o conteúdo do prompt, você pode guiar a direção da conversa do grande modelo. Este prompt será fixado no início do contexto. Variáveis usadas: {question} é a pergunta feita pelo usuário.',
        referencesTooltip:
          'Ao ajustar o conteúdo do prompt, você pode guiar a direção da conversa do grande modelo. Este prompt será fixado no início do contexto. Variáveis usadas: {data} contém informações conhecidas do conhecimento; {question} é a pergunta feita pelo usuário.',
        defaultPrompt: `Informações conhecidas: {data}
          Pergunta: {question}
           Requisitos de resposta: 
           - Por favor, use linguagem concisa e profissional para responder à pergunta do usuário.
           `
      },
      historyRecord: {
        label: 'Histórico de Conversas'
      },
      relatedKnowledge: {
        label: 'Conhecimento Relacionado',
        placeholder: 'Os conhecimentos relacionados serão exibidos aqui'
      },
      multipleRoundsDialogue: 'Diálogo de Múltiplas Rodadas',

      prologue: 'Prólogo',
      defaultPrologue:
        'Olá, sou o Assistente XXX. Você pode me fazer perguntas sobre como usar o XXX.\n- Quais são os principais recursos do XXX?\n- Qual LLM o XXX suporta?\n- Que tipos de documentos o XXX suporta?',
      problemOptimization: {
        label: 'Otimização de Perguntas',
        tooltip:
          'Otimiza a pergunta atual com base no histórico de chat para melhor combinar pontos de conhecimento.'
      },

      voiceInput: {
        label: 'Entrada de Voz',
        placeholder: 'Por favor, selecione um modelo de reconhecimento de fala',
        requiredMessage: 'Por favor, selecione um modelo de entrada de voz',
        autoSend: 'Envio Automático'
      },
      voicePlay: {
        label: 'Reprodução de Voz',
        placeholder: 'Por favor, selecione um modelo de síntese de fala',
        requiredMessage: 'Por favor, selecione um modelo de reprodução de voz',
        autoPlay: 'Reprodução Automática',
        browser: 'Reprodução no Navegador (grátis)',
        tts: 'Modelo TTS',
        listeningTest: 'Prévia'
      },
      reasoningContent: {
        label: 'Saída de Raciocínio',
        tooltip:
          "Defina a etiqueta de raciocínio com base no retorno do modelo, e o conteúdo no meio da etiqueta será reconhecido como o processo de raciocínio.",
        start: 'Início',
        end: 'Fim'
      }
    },
    buttons: {
      publish: 'Salvar e Publicar',
      addModel: 'Adicionar Modelo'
    },
    dialog: {
      addDataset: 'Adicionar Conhecimento Relacionado',
      addDatasetPlaceholder: 'Os conhecimentos selecionados devem usar o mesmo modelo de embedding',
      selected: 'Selecionado',
      countDataset: 'Conhecimentos',

      selectSearchMode: 'Modo de Recuperação',
      vectorSearch: 'Busca por Vetor',
      vectorSearchTooltip:
        'A busca por vetor é um método de recuperação baseado em cálculos de distância vetorial, adequado para grandes volumes de dados no conhecimento.',
      fullTextSearch: 'Busca de Texto Completo',
      fullTextSearchTooltip:
        'A busca de texto completo é um método de recuperação baseado na similaridade de texto, adequado para pequenos volumes de dados no conhecimento.',
      hybridSearch: 'Busca Híbrida',
      hybridSearchTooltip:
        'A busca híbrida é um método de recuperação baseado tanto na similaridade vetorial quanto textual, adequado para volumes médios de dados no conhecimento.',
      similarityThreshold: 'Similaridade Mínima',
      similarityTooltip: 'Quanto maior a similaridade, mais forte a correlação.',
      topReferences: 'Top N Segmentos',
      maxCharacters: 'Máximo de Caracteres por Referência',
      noReferencesAction: 'Quando não há referências de conhecimento',
      continueQuestioning: 'Continuar fazendo perguntas ao modelo de IA',
      provideAnswer: 'Especificar Conteúdo de Resposta',
      designated_answer:
        'Olá, sou o Assistente XXX. Meu conhecimento contém apenas informações relacionadas aos produtos XXX. Por favor, reformule sua pergunta.',
      defaultPrompt1:
        "O conteúdo dentro dos parênteses () representa a pergunta do usuário. Com base no contexto, especule e complete a pergunta do usuário ({question}). O requisito é gerar uma pergunta completa e colocá-la",
      defaultPrompt2: 'tag'
    }
  },
  applicationAccess: {
    title: 'Acesso ao APP',
    wecom: 'WeCom',
    wecomTip: 'Criar APP inteligente WeCom',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Criar APP inteligente DingTalk',
    wechat: 'WeChat',
    wechatTip: 'Criar APP inteligente WeChat',
    lark: 'Lark',
    larkTip: 'Criar APP inteligente Lark',
    setting: 'Configuração',
    callback: 'Endereço de Retorno',
    callbackTip: 'Por favor, preencha o endereço de retorno',
    wecomPlatform: 'Plataforma Aberta WeCom',
    wechatPlatform: 'Plataforma Aberta WeChat',
    dingtalkPlatform: 'Plataforma Aberta DingTalk',
    larkPlatform: 'Plataforma Aberta Lark',
    slack: 'Slack',
    slackTip: 'Criar APP inteligente Slack',
    wecomSetting: {
      title: 'Configuração WeCom',
      cropId: 'ID da Empresa',
      cropIdPlaceholder: 'Por favor, insira o ID da empresa',
      agentIdPlaceholder: 'Por favor, insira o ID do agente',
      secretPlaceholder: 'Por favor, insira o segredo',
      tokenPlaceholder: 'Por favor, insira o token',
      encodingAesKeyPlaceholder: 'Por favor, insira a EncodingAESKey',
      authenticationSuccessful: 'Sucesso',
      urlInfo:
        '-Gerenciamento de APP-Autoconstruído-APP Criado-Receber Mensagens-Definir o "URL" recebido pela API'
    },
    dingtalkSetting: {
      title: 'Configuração DingTalk',
      clientIdPlaceholder: 'Por favor, insira o ID do cliente',
      clientSecretPlaceholder: 'Por favor, insira o segredo do cliente',
      urlInfo:
        '-Na página do robô, defina o "Modo de Recebimento de Mensagens" para modo HTTP e preencha o URL acima no "Endereço de Recebimento de Mensagens"'
    },
    wechatSetting: {
      title: 'Configuração WeChat',
      appId: 'ID do APP',
      appIdPlaceholder: 'Por favor, insira o ID do APP',
      appSecret: 'Segredo do APP',
      appSecretPlaceholder: 'Por favor, insira o Segredo do APP',
      token: 'TOKEN',
      tokenPlaceholder: 'Por favor, insira o TOKEN',
      aesKey: 'Chave de Criptografia de Mensagens',
      aesKeyPlaceholder: 'Por favor, insira a chave de criptografia de mensagens',
      urlInfo:
        '-Configurações e Desenvolvimento-Configuração Básica-"URL do Endereço do Servidor" na configuração do servidor'
    },
    larkSetting: {
      title: 'Configuração Lark',
      appIdPlaceholder: 'Por favor, insira o ID do APP',
      appSecretPlaceholder: 'Por favor, insira o segredo do APP',
      verificationTokenPlaceholder: 'Por favor, insira o token de verificação',
      urlInfo:
        '-Eventos e callbacks - configuração de eventos - configurar o "endereço de solicitação" do método de inscrição'
    },
    slackSetting: {
      title: 'Configuração Slack',
      signingSecretPlaceholder: 'Por favor, insira o segredo de assinatura',
      botUserTokenPlaceholder: 'Por favor, insira o token do usuário bot'
    },
    copyUrl: 'Copie o link e preencha-o'
  },
  hitTest: {
    title: 'Teste de Recuperação',
    text: 'Teste o efeito de acerto do Conhecimento com base no texto de consulta fornecido.',
    emptyMessage1: 'Os resultados do teste de recuperação aparecerão aqui',
    emptyMessage2: 'Nenhuma seção correspondente encontrada'
  }
}