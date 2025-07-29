export default {
  title: 'APP',
  createApplication: 'Créer une APP',
  importApplication: 'Importer une APP',
  copyApplication: 'Copier une APP',
  workflow: 'WORKFLOW',
  simple: 'SIMPLE',
  searchBar: {
    placeholder: 'Rechercher par nom'
  },

  setting: {
    demo: 'Démo'
  },
  delete: {
    confirmTitle: 'Êtes-vous sûr de vouloir supprimer cette APP : ',
    confirmMessage:
      "La suppression de cette APP ne fournira plus ses services. Veuillez procéder avec précaution."
  },
  tip: {
    ExportError: 'Échec de l\'exportation',
    professionalMessage:
      "Le nombre maximum d'APP supportées est de 5.",
    saveErrorMessage: 'Échec de la sauvegarde, veuillez vérifier vos données ou réessayer plus tard.',
    loadingErrorMessage: 'Échec du chargement de la configuration, veuillez vérifier vos données ou réessayer plus tard.'
  },

  applicationForm: {
    title: {
      appTest: 'Aperçu du débogage',
      copy: 'copier'
    },
    form: {
      appName: {
        label: 'Nom',
        placeholder: 'Veuillez entrer le nom de l\'APP',
        requiredMessage: 'Le nom de l\'APP est obligatoire.'
      },
      appDescription: {
        label: 'Description',
        placeholder:
          'Décrivez le scénario et l\'utilisation de l\'APP, par exemple : assistant XXX répondant aux questions des utilisateurs sur l\'utilisation du produit XXX.'
      },
      appType: {
        label: 'Type',
        simplePlaceholder: 'Adapté aux débutants pour créer un assistant.',
        workflowPlaceholder: 'Adapté aux utilisateurs avancés pour personnaliser le flux de travail de l\'assistant.'
      },
      appTemplate: {
        blankApp: 'APP vierge',
        assistantApp: 'Assistant de connaissances'
      },
      aiModel: {
        label: 'Modèle IA',
        placeholder: 'Veuillez sélectionner un modèle IA.'
      },
      roleSettings: {
        label: 'Rôle système',
        placeholder: 'Vous êtes un assistant xxx.'
      },

      prompt: {
        label: 'Invite',
        noReferences: '(Aucune référence à la connaissance)',
        references: '(Références à la connaissance)',
        placeholder: 'Veuillez entrer une invite.',
        requiredMessage: 'Veuillez entrer une invite.',
        tooltip:
          "En ajustant le contenu de l'invite, vous pouvez guider la direction de la discussion avec le grand modèle.",

        noReferencesTooltip:
          "En ajustant le contenu de l'invite, vous pouvez guider la direction de la discussion avec le grand modèle. Cette invite sera fixée au début du contexte. Variables utilisées : {question} correspond à la question posée par l'utilisateur.",
        referencesTooltip:
          "En ajustant le contenu de l'invite, vous pouvez guider la direction de la discussion avec le grand modèle. Cette invite sera fixée au début du contexte. Variables utilisées : {data} contient les informations connues issues de la connaissance ; {question} correspond à la question posée par l'utilisateur.",
        defaultPrompt: `Informations connues : {data}
          Question : {question}
           Exigences de réponse : 
           - Veuillez utiliser un langage concis et professionnel pour répondre à la question de l'utilisateur.
           `
      },
      historyRecord: {
        label: 'Historique des conversations'
      },
      relatedKnowledge: {
        label: 'Connaissances associées',
        placeholder: 'Les connaissances associées s\'afficheront ici.'
      },
      multipleRoundsDialogue: 'Dialogue en plusieurs tours',

      prologue: 'Prologue',
      defaultPrologue:
        "Bonjour, je suis l'assistant XXX. Vous pouvez me poser des questions sur l'utilisation de XXX.\n- Quelles sont les principales fonctionnalités de XXX?\n- Quels LLM sont pris en charge par XXX ?\n- Quels types de documents sont pris en charge par XXX ?",
      problemOptimization: {
        label: 'Optimisation des questions',
        tooltip:
          "Optimisez la question actuelle en fonction de l'historique des discussions pour mieux correspondre aux points de connaissance."
      },

      voiceInput: {
        label: 'Entrée vocale',
        placeholder: 'Veuillez sélectionner un modèle de reconnaissance vocale.',
        requiredMessage: 'Veuillez sélectionner un modèle d\'entrée vocale.',
        autoSend: 'Envoi automatique'
      },
      voicePlay: {
        label: 'Lecture vocale',
        placeholder: 'Veuillez sélectionner un modèle de synthèse vocale.',
        requiredMessage: 'Veuillez sélectionner un modèle de lecture vocale.',
        autoPlay: 'Lecture automatique',
        browser: 'Lecture dans le navigateur (gratuit)',
        tts: 'Modèle TTS',
        listeningTest: 'Aperçu'
      },
      reasoningContent: {
        label: 'Sortie de réflexion',
        tooltip:
          "Veuillez définir l'étiquette de réflexion en fonction du retour du modèle, et le contenu entre les étiquettes sera reconnu comme le processus de réflexion.",
        start: 'Début',
        end: 'Fin'
      }
    },
    buttons: {
      publish: 'Enregistrer et publier',
      addModel: 'Ajouter un modèle'
    },
    dialog: {
      addDataset: 'Ajouter des connaissances associées',
      addDatasetPlaceholder: 'Les connaissances sélectionnées doivent utiliser le même modèle d\'intégration.',
      selected: 'Sélectionné',
      countDataset: 'Connaissances',

      selectSearchMode: 'Mode de recherche',
      vectorSearch: 'Recherche vectorielle',
      vectorSearchTooltip:
        "La recherche vectorielle est une méthode basée sur le calcul de distance vectorielle, adaptée aux grands volumes de données dans les connaissances.",
      fullTextSearch: 'Recherche en texte intégral',
      fullTextSearchTooltip:
        "La recherche en texte intégral est une méthode basée sur la similarité textuelle, adaptée aux petits volumes de données dans les connaissances.",
      hybridSearch: 'Recherche hybride',
      hybridSearchTooltip:
        "La recherche hybride est une méthode basée à la fois sur la similarité vectorielle et textuelle, adaptée aux volumes moyens de données dans les connaissances.",
      similarityThreshold: 'Similarité minimale',
      similarityTooltip: 'Plus la similarité est élevée, plus la corrélation est forte.',
      topReferences: 'Top N segments',
      maxCharacters: 'Nombre maximum de caractères par référence',
      noReferencesAction: "Lorsqu'il n'y a aucune référence aux connaissances",
      continueQuestioning: 'Continuer à poser des questions au modèle IA',
      provideAnswer: 'Spécifier le contenu de la réponse',
      designated_answer:
        "Bonjour, je suis l'assistant XXX. Mes connaissances ne contiennent que des informations relatives aux produits XXX. Veuillez reformuler votre question.",
      defaultPrompt1:
        "Le contenu entre parenthèses () représente la question de l'utilisateur. Sur la base du contexte, veuillez deviner et compléter la question de l'utilisateur ({question}). L'exigence est de générer une question complète et de la placer",
      defaultPrompt2: 'balise'
    }
  },
  applicationAccess: {
    title: 'Accès à l\'APP',
    wecom: 'WeCom',
    wecomTip: 'Créer une APP intelligente WeCom',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Créer une APP intelligente DingTalk',
    wechat: 'WeChat',
    wechatTip: 'Créer une APP intelligente WeChat',
    lark: 'Lark',
    larkTip: 'Créer une APP intelligente Lark',
    setting: 'Paramètres',
    callback: 'Adresse de rappel',
    callbackTip: 'Veuillez remplir l\'adresse de rappel.',
    wecomPlatform: 'Plateforme ouverte WeCom',
    wechatPlatform: 'Plateforme ouverte WeChat',
    dingtalkPlatform: 'Plateforme ouverte DingTalk',
    larkPlatform: 'Plateforme ouverte Lark',
    slack: 'Slack',
    slackTip: 'Créer une APP intelligente Slack',
    wecomSetting: {
      title: 'Configuration WeCom',
      cropId: 'ID de l\'entreprise',
      cropIdPlaceholder: 'Veuillez entrer l\'ID de l\'entreprise.',
      agentIdPlaceholder: 'Veuillez entrer l\'ID de l\'agent.',
      secretPlaceholder: 'Veuillez entrer le secret.',
      tokenPlaceholder: 'Veuillez entrer le jeton.',
      encodingAesKeyPlaceholder: 'Veuillez entrer EncodingAESKey.',
      authenticationSuccessful: 'Succès',
      urlInfo:
        '- Gestion des APP - Auto-construit - APP créée - Réception des messages - Définir l\'"URL" reçue par l\'API.'
    },
    dingtalkSetting: {
      title: 'Configuration DingTalk',
      clientIdPlaceholder: 'Veuillez entrer l\'ID client.',
      clientSecretPlaceholder: 'Veuillez entrer le secret client.',
      urlInfo:
        '- Sur la page du robot, définissez le "Mode de réception des messages" en mode HTTP, et remplissez l\'URL ci-dessus dans l\'"Adresse de réception des messages".'
    },
    wechatSetting: {
      title: 'Configuration WeChat',
      appId: 'ID de l\'APP',
      appIdPlaceholder: 'Veuillez entrer l\'ID de l\'APP.',
      appSecret: 'SECRET de l\'APP',
      appSecretPlaceholder: 'Veuillez entrer le SECRET de l\'APP.',
      token: 'TOKEN',
      tokenPlaceholder: 'Veuillez entrer le TOKEN.',
      aesKey: 'Clé de chiffrement des messages',
      aesKeyPlaceholder: 'Veuillez entrer la clé de chiffrement des messages.',
      urlInfo:
        '- Paramètres et développement - Configuration de base - "URL de l\'adresse du serveur" dans la configuration du serveur.'
    },
    larkSetting: {
      title: 'Configuration Lark',
      appIdPlaceholder: 'Veuillez entrer l\'ID de l\'APP.',
      appSecretPlaceholder: 'Veuillez entrer le secret de l\'APP.',
      verificationTokenPlaceholder: 'Veuillez entrer le jeton de vérification.',
      urlInfo:
        '- Événements et rappels - Configuration des événements - Configurer l\'"adresse de demande" de la méthode d\'abonnement.'
    },
    slackSetting: {
      title: 'Configuration Slack',
      signingSecretPlaceholder: 'Veuillez entrer le secret de signature.',
      botUserTokenPlaceholder: 'Veuillez entrer le jeton utilisateur du bot.'
    },
    copyUrl: 'Copiez le lien et remplissez-le ici.'
  },
  hitTest: {
    title: 'Test de récupération',
    text: 'Testez l\'effet de correspondance des connaissances basé sur le texte de requête donné.',
    emptyMessage1: 'Les résultats du test de récupération s\'afficheront ici.',
    emptyMessage2: 'Aucun segment correspondant trouvé.'
  }
}