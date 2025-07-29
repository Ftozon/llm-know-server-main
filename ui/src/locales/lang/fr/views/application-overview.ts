export default {
  title: 'Aperçu',
  appInfo: {
    header: 'Informations sur l\'application',
    publicAccessLink: 'URL publique',
    openText: 'Activé',
    closeText: 'Désactivé',
    copyLinkText: 'Copier le lien',
    refreshLinkText: 'Rafraîchir le lien',
    demo: 'Prévisualisation',
    embedInWebsite: 'Obtenir le code d\'intégration',
    accessControl: 'Contrôle d\'accès',
    displaySetting: 'Paramètres d\'affichage',
    apiAccessCredentials: 'Identifiants d\'accès API',
    apiKey: 'Clé API',
    refreshToken: {
      msgConfirm1: 'Êtes-vous sûr de vouloir régénérer l\'URL publique ?',
      msgConfirm2:
        "La régénération de l'URL publique affectera les codes d'intégration existants sur des sites tiers. Vous devrez mettre à jour le code d'intégration et le réintégrer dans ces sites. Procédez avec précaution !",
      refreshSuccess: 'Rafraîchi avec succès'
    },
    APIKeyDialog: {
      saveSettings: 'Enregistrer les paramètres',
      msgConfirm1: 'Êtes-vous sûr de vouloir supprimer la clé API ?',
      msgConfirm2:
        "Cette action est irréversible. Une fois supprimée, la clé API ne pourra pas être récupérée. Voulez-vous vraiment continuer ?",
      enabledSuccess: 'Activée',
      disabledSuccess: 'Désactivée'
    },
    EditAvatarDialog: {
      title: 'Logo de l\'application',
      customizeUpload: 'Téléchargement personnalisé',
      upload: 'Télécharger',
      default: 'Logo par défaut',
      custom: 'Personnalisé',
      sizeTip:
        'Taille recommandée : 32×32 pixels. Formats pris en charge : JPG, PNG et GIF. Taille maximale : 10 Mo.',
      fileSizeExceeded: 'La taille du fichier dépasse 10 Mo',
      uploadImagePrompt: 'Veuillez télécharger une image.'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'Mode plein écran',
      copyInstructions: 'Copiez le code ci-dessous pour intégrer',
      floatingModeTitle: 'Mode flottant'
    },
    LimitDialog: {
      dialogTitle: 'Restrictions d\'accès',
      showSourceLabel: 'Afficher la source des connaissances',
      clientQueryLimitLabel: 'Limite de requêtes par client',
      authentication: 'Authentification',
      authenticationValue: 'Mot de passe d\'accès',
      timesDays: 'requêtes par jour',
      whitelistLabel: 'Domaines autorisés',
      whitelistPlaceholder:
        'Entrez les domaines tiers autorisés, un par ligne. Par exemple :\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'Autoriser l\'accès inter-domaines',
      crossDomainPlaceholder:
        "Entrez les adresses inter-domaines autorisées. Si activé mais laissé vide, aucune restriction ne s'appliquera.\nEntrez une adresse par ligne, par exemple :\nhttp://127.0.0.1:5678\nhttps://dataease.io"
    },
    SettingDisplayDialog: {
      dialogTitle: 'Paramètres d\'affichage',
      languageLabel: 'Langue',
      showSourceLabel: 'Afficher la source des connaissances',
      showExecutionDetail: 'Afficher les détails d\'exécution',
      restoreDefault: 'Restaurer les paramètres par défaut',
      customThemeColor: 'Couleur de thème personnalisée',
      headerTitleFontColor: 'Couleur de police du titre de l\'en-tête',
      default: 'Par défaut',
      askUserAvatar: 'Avatar de l\'utilisateur (Demande)',
      replace: 'Remplacer',
      imageMessage:
        'Taille recommandée : 32×32 pixels. Formats pris en charge : JPG, PNG et GIF. Taille maximale : 10 Mo',
      AIAvatar: 'Avatar de l\'IA',
      floatIcon: 'Icône flottante',
      iconDefaultPosition: 'Position par défaut de l\'icône',
      iconPosition: {
        left: 'Gauche',
        right: 'Droite',
        bottom: 'Bas',
        top: 'Haut'
      },
      draggablePosition: 'Position glissable',
      showHistory: 'Afficher l\'historique des discussions',
      displayGuide: 'Afficher l\'image de guide (Mode flottant)',
      disclaimer: 'Clause de non-responsabilité',
      disclaimerValue: 'Ce contenu est généré par une IA et est fourni à titre de référence uniquement.'
    }
  },
  monitor: {
    monitoringStatistics: 'Statistiques de surveillance',
    customRange: 'Plage personnalisée',
    startDatePlaceholder: 'Date de début',
    endDatePlaceholder: 'Date de fin',
    pastDayOptions: {
      past7Days: '7 derniers jours',
      past30Days: '30 derniers jours',
      past90Days: '90 derniers jours',
      past183Days: '6 derniers mois',
      other: 'Personnalisé'
    },
    charts: {
      customerTotal: 'Nombre total d\'utilisateurs',
      customerNew: 'Nouveaux utilisateurs',
      queryCount: 'Nombre total de requêtes',
      tokensTotal: 'Nombre total de jetons utilisés',
      userSatisfaction: 'Métriques de retour utilisateur',
      approval: 'J\'aime',
      disapproval: 'Je n\'aime pas'
    }
  }
}