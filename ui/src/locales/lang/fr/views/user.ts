export default {
  title: 'Utilisateur',
  createUser: 'Créer un utilisateur',
  editUser: 'Modifier l\'utilisateur',
  setting: {
    updatePwd: 'Changer le mot de passe'
  },
  tip: {
    professionalMessage:
      'prend en charge jusqu\'à 2 utilisateurs.',
    updatePwdSuccess: 'Mot de passe de l\'utilisateur mis à jour avec succès'
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de l\'utilisateur :',
    confirmMessage:
      'La suppression de cet utilisateur entraînera également la suppression de toutes les ressources (APP, connaissances, modèles) créées par cet utilisateur. Veuillez procéder avec précaution.'
  },
  disabled: {
    confirmTitle: 'Confirmer la désactivation de la fonction :',
    confirmMessage:
      'La désactivation de cette fonction provoquera des erreurs lors de l\'interrogation des APP qui y font référence. Veuillez procéder avec précaution.'
  },
  userForm: {
    form: {
      username: {
        label: 'Nom d\'utilisateur',
        placeholder: 'Veuillez entrer le nom d\'utilisateur',
        requiredMessage: 'Veuillez entrer le nom d\'utilisateur',
        lengthMessage: 'La longueur doit être comprise entre 6 et 20 caractères'
      },
      nick_name: {
        label: 'Nom',
        placeholder: 'Veuillez entrer le nom'
      },
      email: {
        label: 'Email',
        placeholder: 'Veuillez entrer l\'email',
        requiredMessage: 'Veuillez entrer l\'email'
      },
      phone: {
        label: 'Téléphone',
        placeholder: 'Veuillez entrer le numéro de téléphone'
      },
      password: {
        label: 'Mot de passe de connexion',
        placeholder: 'Veuillez entrer le mot de passe',
        requiredMessage: 'Veuillez entrer le mot de passe',
        lengthMessage: 'La longueur doit être comprise entre 6 et 20 caractères'
      },
      new_password: {
        label: 'Nouveau mot de passe',
        placeholder: 'Veuillez entrer le nouveau mot de passe',
        requiredMessage: 'Veuillez entrer le nouveau mot de passe'
      },
      re_password: {
        label: 'Confirmer le mot de passe',
        placeholder: 'Veuillez confirmer le mot de passe',
        requiredMessage: 'Veuillez confirmer le mot de passe',
        validatorMessage: 'Les mots de passe ne correspondent pas'
      }
    }
  },
  source: {
    label: 'Type d\'utilisateur',
    local: 'Utilisateur système',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk'
  }
}