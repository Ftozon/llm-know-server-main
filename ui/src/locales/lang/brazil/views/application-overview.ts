export default {
  title: 'Visão Geral',
  appInfo: {
    header: 'Informações do Aplicativo',
    publicAccessLink: 'URL Pública',
    openText: 'Ligado',
    closeText: 'Desligado',
    copyLinkText: 'Copiar Link',
    refreshLinkText: 'Atualizar Link',
    demo: 'Prévia',
    embedInWebsite: 'Obter Código de Incorporação',
    accessControl: 'Controle de Acesso',
    displaySetting: 'Configurações de Exibição',
    apiAccessCredentials: 'Credenciais de Acesso à API',
    apiKey: 'Chave da API',
    refreshToken: {
      msgConfirm1: 'Tem certeza de que deseja regenerar a URL pública?',
      msgConfirm2:
        'Regenerar a URL Pública afetará os códigos de incorporação existentes em sites de terceiros. Será necessário atualizar o código de incorporação e reintegrá-lo nesses sites. Prossiga com cautela!',
      refreshSuccess: 'Atualizado com Sucesso'
    },
    APIKeyDialog: {
      saveSettings: 'Salvar Configurações',
      msgConfirm1: 'Tem certeza de que deseja excluir a Chave da API?',
      msgConfirm2:
        'Esta ação é irreversível. Uma vez excluída, a Chave da API não poderá ser recuperada. Deseja continuar mesmo assim?',
      enabledSuccess: 'Habilitado',
      disabledSuccess: 'Desabilitado'
    },
    EditAvatarDialog: {
      title: 'Logo do Aplicativo',
      customizeUpload: 'Upload Personalizado',
      upload: 'Enviar',
      default: 'Logo Padrão',
      custom: 'Personalizado',
      sizeTip:
        'Tamanho recomendado: 32×32 pixels. Formatos suportados: JPG, PNG e GIF. Tamanho máximo: 10 MB',
      fileSizeExceeded: 'O tamanho do arquivo excede 10 MB',
      uploadImagePrompt: 'Por favor, envie uma imagem'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'Modo Tela Cheia',
      copyInstructions: 'Copie o código abaixo para incorporar',
      floatingModeTitle: 'Modo Flutuante'
    },
    LimitDialog: {
      dialogTitle: 'Restrições de Acesso',
      showSourceLabel: 'Mostrar Fonte do Conhecimento',
      clientQueryLimitLabel: 'Limite de Consultas por Cliente',
      authentication: 'Autenticação',
      authenticationValue: 'Senha de Acesso',
      timesDays: 'consultas por dia',
      whitelistLabel: 'Domínios Permitidos',
      whitelistPlaceholder:
        'Insira domínios de terceiros permitidos, um por linha. Por exemplo:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'Permitir Acesso entre Domínios',
      crossDomainPlaceholder:
        'Insira endereços de domínio cruzado permitidos. Se habilitado, mas deixado em branco, nenhuma restrição será aplicada.\nInsira um por linha, por exemplo:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingDisplayDialog: {
      dialogTitle: 'Configurações de Exibição',
      languageLabel: 'Idioma',
      showSourceLabel: 'Mostrar Fonte do Conhecimento',
      showExecutionDetail: 'Mostrar Detalhes da Execução',
      restoreDefault: 'Restaurar Padrões',
      customThemeColor: 'Cor Temática Personalizada',
      headerTitleFontColor: 'Cor da Fonte do Título do Cabeçalho',
      default: 'Padrão',
      askUserAvatar: 'Avatar do Usuário (Perguntando)',
      replace: 'Substituir',
      imageMessage:
        'Tamanho recomendado: 32×32 pixels. Formatos suportados: JPG, PNG e GIF. Tamanho máximo: 10 MB',
      AIAvatar: 'Avatar da IA',
      floatIcon: 'Ícone Flutuante',
      iconDefaultPosition: 'Posição Padrão do Ícone',
      iconPosition: {
        left: 'Esquerda',
        right: 'Direita',
        bottom: 'Embaixo',
        top: 'Acima'
      },
      draggablePosition: 'Posição Arrastável',
      showHistory: 'Mostrar Histórico de Conversas',
      displayGuide: 'Mostrar Imagem Guia (Modo Flutuante)',
      disclaimer: 'Aviso Legal',
      disclaimerValue: 'Este conteúdo é gerado por IA e é apenas para referência.'
    }
  },
  monitor: {
    monitoringStatistics: 'Estatísticas de Monitoramento',
    customRange: 'Intervalo Personalizado',
    startDatePlaceholder: 'Data Inicial',
    endDatePlaceholder: 'Data Final',
    pastDayOptions: {
      past7Days: 'Últimos 7 Dias',
      past30Days: 'Últimos 30 Dias',
      past90Days: 'Últimos 90 Dias',
      past183Days: 'Últimos 6 Meses',
      other: 'Personalizado'
    },
    charts: {
      customerTotal: 'Total de Usuários',
      customerNew: 'Novos Usuários',
      queryCount: 'Total de Consultas',
      tokensTotal: 'Total de Tokens Utilizados',
      userSatisfaction: 'Métricas de Feedback dos Usuários',
      approval: 'Gostei',
      disapproval: 'Não Gostei'
    }
  }
}