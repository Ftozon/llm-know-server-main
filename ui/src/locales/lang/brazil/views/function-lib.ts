export default {
  title: 'Função',
  createFunction: 'Criar Função',
  editFunction: 'Editar Função',
  copyFunction: 'Copiar Função',
  importFunction: 'Importar Função',
  searchBar: {
    placeholder: 'Pesquisar pelo nome da função'
  },
  setting: {
    disabled: 'Desativado'
  },
  tip: {
    saveMessage: 'Alterações não salvas serão perdidas. Tem certeza de que deseja sair?'
  },
  delete: {
    confirmTitle: 'Confirmar exclusão da função:',
    confirmMessage:
      'Excluir esta função causará erros nos APPs que a referenciam quando forem consultados. Por favor, prossiga com cautela.'
  },
  disabled: {
    confirmTitle: 'Confirmar desativação da função:',
    confirmMessage:
      'Desativar esta função causará erros nos APPs que a referenciam quando forem consultados. Por favor, prossiga com cautela.'
  },
  functionForm: {
    title: {
      copy: 'Copiar',
      baseInfo: 'Informações Básicas'
    },
    form: {
      functionName: {
        label: 'Nome',
        placeholder: 'Por favor, insira o nome da função',
        requiredMessage: 'Por favor, insira o nome da função'
      },
      functionDescription: {
        label: 'Descrição',
        placeholder: 'Por favor, insira uma descrição da função'
      },
      permission_type: {
        label: 'Permissões',
        requiredMessage: 'Por favor, selecione'
      },
      paramName: {
        label: 'Nome do Parâmetro',
        placeholder: 'Por favor, insira o nome do parâmetro',
        requiredMessage: 'Por favor, insira o nome do parâmetro'
      },
      dataType: {
        label: 'Tipo de Dado'
      },
      source: {
        label: 'Fonte',
        custom: 'Personalizado',
        reference: 'Parâmetro de Referência'
      },
      required: {
        label: 'Obrigatório'
      },
      param: {
        paramInfo1: 'Exibido ao usar a função',
        paramInfo2: 'Não exibido ao usar a função',
        code: 'Conteúdo (Python)',
        selectPlaceholder: 'Por favor, selecione o parâmetro',
        inputPlaceholder: 'Por favor, insira os valores do parâmetro',
      },
      debug: {
        run: 'Executar',
        output: 'Saída',
        runResult: 'Resultado da Execução',
        runSuccess: 'Sucesso',
        runFailed: 'Falha na Execução'
      }
    }
  }
}