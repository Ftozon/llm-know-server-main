export default {
  title: 'Modèles',
  provider: 'Fournisseur',
  providerPlaceholder: 'Sélectionner un fournisseur',
  addModel: 'Ajouter un modèle',
  searchBar: {
    placeholder: 'Rechercher par nom'
  },
  delete: {
    confirmTitle: 'Supprimer le modèle',
    confirmMessage: 'Êtes-vous sûr de vouloir supprimer le modèle :'
  },
  tip: {
    createSuccessMessage: 'Modèle créé avec succès',
    createErrorMessage: 'Il y a des erreurs dans les informations de base',
    errorMessage: 'Variable déjà existante : ',
    emptyMessage1: 'Veuillez d\'abord sélectionner le type de modèle et le modèle de base dans les informations de base',
    emptyMessage2: 'Le modèle sélectionné ne prend pas en charge les paramètres',
    updateSuccessMessage: 'Modèle mis à jour avec succès',
    saveSuccessMessage: 'Paramètres du modèle enregistrés avec succès',
    downloadError: 'Échec du téléchargement',
    noModel: 'Le modèle n\'existe pas dans Ollama'
  },
  model: {
    allModel: 'Tous les modèles',
    publicModel: 'Modèles publics',
    privateModel: 'Modèles privés',
    LLM: 'LLM',
    EMBEDDING: 'Modèle d\'intégration',
    RERANKER: 'Réorganisation',
    STT: 'Reconnaissance vocale (Speech2Text)',
    TTS: 'Synthèse vocale (TTS)',
    IMAGE: 'Modèle de vision',
    TTI: 'Génération d\'images'
  },
  templateForm: {
    title: {
      baseInfo: 'Informations de base',
      advancedInfo: 'Paramètres avancés',
      modelParams: 'Paramètres du modèle',
      editParam: 'Modifier le paramètre',
      addParam: 'Ajouter un paramètre',
      paramSetting: 'Paramètres des variables du modèle',
      apiParamPassing: 'Paramètres de l\'interface'
    },
    form: {
      templateName: {
        label: 'Nom du modèle',
        placeholder: 'Définissez un nom pour le modèle de base',
        tooltip: 'Nom personnalisé du modèle dans LLM-Know',
        requiredMessage: 'Le nom du modèle ne peut pas être vide'
      },
      permissionType: {
        label: 'Permission',
        privateDesc: 'Disponible uniquement pour l\'utilisateur actuel',
        publicDesc: 'Disponible pour tous les utilisateurs',
        requiredMessage: 'La permission ne peut pas être vide'
      },
      model_type: {
        label: 'Type de modèle',
        placeholder: 'Sélectionnez un type de modèle',
        tooltip1:
          'LLM : Modèle d\'inférence pour les discussions IA dans l\'APP.',
        tooltip2:
          'Modèle d\'intégration : Modèle utilisé pour vectoriser le contenu des documents dans les connaissances.',
        tooltip3: 'Speech2Text : Modèle utilisé pour la reconnaissance vocale dans l\'APP.',
        tooltip4: 'TTS : Modèle utilisé pour la synthèse vocale dans l\'APP.',
        tooltip5:
          'Réorganisation : Modèle utilisé pour réorganiser les segments candidats lors de l\'utilisation d\'un rappel multi-chemins dans l\'APP avancée.',
        tooltip6:
          'Modèle de vision : Modèle visuel utilisé pour la compréhension d\'images dans l\'APP avancée.',
        tooltip7:
          'Génération d\'images : Modèle visuel utilisé pour la génération d\'images dans l\'APP avancée.',
        requiredMessage: 'Le type de modèle ne peut pas être vide'
      },
      base_model: {
        label: 'Modèle de base',
        tooltip:
          'Pour les modèles non listés, entrez le nom du modèle et appuyez sur Entrée',
        placeholder: 'Entrez le nom du modèle de base et appuyez sur Entrée pour ajouter',
        requiredMessage: 'Le modèle de base ne peut pas être vide'
      }
    }
  },
  download: {
    downloading: 'Téléchargement en cours...',
    cancelDownload: 'Annuler le téléchargement'
  }
}