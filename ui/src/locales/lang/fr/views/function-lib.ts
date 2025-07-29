export default {
  title: 'Fonction',
  createFunction: 'Créer une fonction',
  editFunction: 'Modifier une fonction',
  copyFunction: 'Copier une fonction',
  importFunction: 'Importer une fonction',
  searchBar: {
    placeholder: 'Rechercher par nom de fonction'
  },
  setting: {
    disabled: 'Désactivé'
  },
  tip: {
    saveMessage: 'Les modifications non enregistrées seront perdues. Êtes-vous sûr de vouloir quitter ?'
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de la fonction :',
    confirmMessage:
      'La suppression de cette fonction entraînera des erreurs dans les applications qui y font référence lorsqu\'elles seront interrogées. Veuillez procéder avec précaution.'
  },
  disabled: {
    confirmTitle: 'Confirmer la désactivation de la fonction :',
    confirmMessage:
      'La désactivation de cette fonction entraînera des erreurs dans les applications qui y font référence lorsqu\'elles seront interrogées. Veuillez procéder avec précaution.'
  },
  functionForm: {
    title: {
      copy: 'Copier',
      baseInfo: 'Informations de base'
    },
    form: {
      functionName: {
        label: 'Nom',
        placeholder: 'Veuillez entrer le nom de la fonction',
        requiredMessage: 'Veuillez entrer le nom de la fonction'
      },
      functionDescription: {
        label: 'Description',
        placeholder: 'Veuillez entrer une description de la fonction'
      },
      permission_type: {
        label: 'Permissions',
        requiredMessage: 'Veuillez sélectionner'
      },
      paramName: {
        label: 'Nom du paramètre',
        placeholder: 'Veuillez entrer le nom du paramètre',
        requiredMessage: 'Veuillez entrer le nom du paramètre'
      },
      dataType: {
        label: 'Type de données'
      },
      source: {
        label: 'Source',
        custom: 'Personnalisé',
        reference: 'Paramètre de référence'
      },
      required: {
        label: 'Obligatoire'
      },
      param: {
        paramInfo1: 'Affiché lors de l\'utilisation de la fonction',
        paramInfo2: 'Non affiché lors de l\'utilisation de la fonction',
        code: 'Contenu (Python)',
        selectPlaceholder: 'Veuillez sélectionner un paramètre',
        inputPlaceholder: 'Veuillez entrer les valeurs du paramètre',
      },
      debug: {
        run: 'Exécuter',
        output: 'Sortie',
        runResult: 'Résultat de l\'exécution',
        runSuccess: 'Réussite',
        runFailed: 'Échec de l\'exécution'
      }
    }
  }
}