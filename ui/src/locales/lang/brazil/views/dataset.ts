export default {
  title: 'Conhecimento',
  createDataset: 'Criar Conhecimento',
  general: 'Geral',
  web: 'Site',
  relatedApplications: 'Aplicativo Vinculado',
  document_count: 'documentos',
  relatedApp_count: 'aplicativos vinculados',
  searchBar: {
    placeholder: 'Pesquisar por nome'
  },
  setting: {
    vectorization: 'Vetorização',
    sync: 'Sincronizar'
  },
  tip: {
    professionalMessage:
      'Suporta até 50 conhecimentos.',
    syncSuccess: 'Tarefa de sincronização enviada com sucesso',
    updateModeMessage:
      'Após modificar o modelo vetorial do conhecimento, é necessário vetorizar o conhecimento. Deseja continuar salvando?'
  },
  delete: {
    confirmTitle: 'Confirmar exclusão do conhecimento:',
    confirmMessage1: 'Este conhecimento está relacionado com',
    confirmMessage2: 'APP. Excluir será irreversível, prossiga com cuidado.'
  },
  datasetForm: {
    title: {
      info: 'Configurações do Conhecimento'
    },
    form: {
      datasetName: {
        label: 'Nome',
        placeholder: 'Por favor, insira o nome do conhecimento',
        requiredMessage: 'Por favor, insira o nome do conhecimento'
      },
      datasetDescription: {
        label: 'Descrição',
        placeholder:
          'Descreva o conteúdo do conhecimento. Uma descrição detalhada ajudará a IA a entender melhor o conteúdo, melhorando a precisão da recuperação e a taxa de acerto.',
        requiredMessage: 'Por favor, insira a descrição do conhecimento'
      },
      EmbeddingModel: {
        label: 'Modelo de Embedding',
        placeholder: 'Por favor, selecione um modelo de embedding',
        requiredMessage: 'Por favor, selecione o modelo de embedding'
      },
      datasetType: {
        label: 'Tipo',
        generalInfo: 'Carregar documentos locais',
        webInfo: 'Sincronizar dados de texto de um site'
      },
      source_url: {
        label: 'URL Raiz do Site',
        placeholder: 'Por favor, insira a URL raiz do site',
        requiredMessage: 'Por favor, insira a URL raiz do site'
      },
      selector: {
        label: 'Seletor',
        placeholder: 'O padrão é body, pode inserir .classname/#idname/tagname'
      }
    }
  },
  ResultSuccess: {
    title: 'Conhecimento Criado com Sucesso',
    paragraph: 'Segmentos',
    paragraph_count: 'Segmentos',
    documentList: 'Lista de Documentos',
    loading: 'Importando',
    buttons: {
      toDataset: 'Voltar para a Lista de Conhecimentos',
      toDocument: 'Ir para o Documento'
    }
  },
  syncWeb: {
    title: 'Sincronizar Conhecimento',
    syncMethod: 'Método de Sincronização',
    replace: 'Sincronização por Substituição',
    replaceText: 'Buscar novamente os documentos do site, substituindo os documentos no conhecimento local',
    complete: 'Sincronização Completa',
    completeText:
      'Excluir todos os documentos no conhecimento local e buscar novamente os documentos do site',
    tip: 'Nota: Todas as sincronizações excluirão os dados existentes e buscarão novos dados. Prossiga com cuidado.'
  }
}