export default {
  title: 'Usuário',
  createUser: 'Criar Usuário',
  editUser: 'Editar Usuário',
  setting: {
    updatePwd: 'Alterar Senha'
  },
  tip: {
    professionalMessage:
      'Suporta até 2 usuários.',
    updatePwdSuccess: 'Senha do usuário atualizada com sucesso'
  },
  delete: {
    confirmTitle: 'Confirmar exclusão de usuário:',
    confirmMessage:
      'Excluir este usuário também excluirá todos os recursos (APP, conhecimentos, modelos) criados por este usuário. Por favor, prossiga com cautela.'
  },
  disabled: {
    confirmTitle: 'Confirmar desativação da função:',
    confirmMessage:
      'Desativar esta função causará erros ao consultar APPs que a referenciem. Por favor, prossiga com cautela.'
  },
  userForm: {
    form: {
      username: {
        label: 'Nome de Usuário',
        placeholder: 'Por favor, insira o nome de usuário',
        requiredMessage: 'Por favor, insira o nome de usuário',
        lengthMessage: 'O comprimento deve ser entre 6 e 20 caracteres'
      },
      nick_name: {
        label: 'Nome',
        placeholder: 'Por favor, insira o nome'
      },
      email: {
        label: 'E-mail',
        placeholder: 'Por favor, insira o e-mail',
        requiredMessage: 'Por favor, insira o e-mail'
      },
      phone: {
        label: 'Telefone',
        placeholder: 'Por favor, insira o telefone'
      },
      password: {
        label: 'Senha de Login',
        placeholder: 'Por favor, insira a senha',
        requiredMessage: 'Por favor, insira a senha',
        lengthMessage: 'O comprimento deve ser entre 6 e 20 caracteres'
      },
      new_password: {
        label: 'Nova Senha',
        placeholder: 'Por favor, insira a nova senha',
        requiredMessage: 'Por favor, insira a nova senha'
      },
      re_password: {
        label: 'Confirmar Senha',
        placeholder: 'Por favor, insira a confirmação da senha',
        requiredMessage: 'Por favor, insira a confirmação da senha',
        validatorMessage: 'As senhas não coincidem'
      }
    }
  },
  source: {
    label: 'Tipo de Usuário',
    local: 'Usuário do Sistema',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk'
  }
}