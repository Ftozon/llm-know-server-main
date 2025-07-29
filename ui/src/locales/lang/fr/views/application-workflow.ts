export default {
  node: 'Nœud',
  nodeName: 'Nom du nœud',
  baseComponent: 'Composant de base',
  nodeSetting: 'Paramètres du nœud',
  workflow: 'Flux de travail',
  searchBar: {
    placeholder: 'Rechercher par nom'
  },
  info: {
    previewVersion: 'Version préliminaire :',
    saveTime: 'Dernière sauvegarde :'
  },
  setting: {
    restoreVersion: 'Restaurer la version précédente',
    restoreCurrentVersion: 'Restaurer à cette version',
    addComponent: 'Ajouter',
    public: 'Publier',
    releaseHistory: 'Historique des publications',
    autoSave: 'Sauvegarde automatique',
    latestRelease: 'Dernière publication',
    copyParam: 'Copier les paramètres',
    debug: 'Exécuter',
    exit: 'Quitter',
    exitSave: 'Enregistrer et quitter',
  },
  tip: {
    publicSuccess: 'Publication réussie',
    noData: 'Aucun résultat trouvé',
    nameMessage: 'Le nom ne peut pas être vide !',
    onlyRight: 'Les connexions ne peuvent être faites qu’à partir de l\'ancrage droit',
    notRecyclable: 'Les connexions circulaires ne sont pas autorisées',
    onlyLeft: 'Les connexions ne peuvent être faites qu\'à l\'ancrage gauche',
    applicationNodeError: "Cette application n'est pas disponible",
    functionNodeError: 'Ce nœud fonctionnel est indisponible',
    repeatedNodeError: 'Un nœud avec ce nom existe déjà',
    cannotCopy: 'Ne peut pas être copié',
    copyError: 'Nœud déjà copié',
    paramErrorMessage: 'Le paramètre existe déjà : ',
    saveMessage: 'Les modifications actuelles n\'ont pas été enregistrées. Enregistrer avant de quitter ?',
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de ce nœud ?',
    deleteMessage: 'Ce nœud ne peut pas être supprimé'
  },
  control: {
    zoomOut: 'Zoom arrière',
    zoomIn: 'Zoom avant',
    fitView: 'Adapter à l\'écran',
    retract: 'Réduire tout',
    extend: 'Développer tout',
    beautify: 'Organiser automatiquement'
  },
  variable: {
    label: 'Variable',
    global: 'Variable globale',
    Referencing: 'Variable référencée',
    ReferencingRequired: 'La variable référencée est requise',
    ReferencingError: 'Variable référencée invalide',
    NoReferencing: 'La variable référencée n\'existe pas',
    placeholder: 'Veuillez sélectionner une variable'
  },
  condition: {
    title: 'Condition d\'exécution',
    front: 'Précondition',
    AND: 'Toutes',
    OR: 'N\'importe laquelle',
    text: 'Après l\'exécution du nœud connecté, exécuter le nœud actuel'
  },
  validate: {
    startNodeRequired: 'Le nœud de départ est requis',
    startNodeOnly: 'Un seul nœud de départ est autorisé',
    baseNodeRequired: 'Le nœud d\'information de base est requis',
    baseNodeOnly: 'Un seul nœud d\'information de base est autorisé',
    notInWorkFlowNode: 'Le nœud n\'est pas dans le flux de travail',
    noNextNode: 'Le nœud suivant n\'existe pas',
    nodeUnavailable: 'Nœud indisponible',
    needConnect1: 'La branche du nœud doit être connectée',
    cannotEndNode: 'Ce nœud ne peut pas être utilisé comme nœud final'
  },
  nodes: {
    startNode: {
      label: 'Début',
      question: 'Question utilisateur',
      currentTime: 'Heure actuelle'
    },
    baseNode: {
      label: 'Informations de base',
      appName: {
        label: 'Nom de l\'application'
      },
      appDescription: {
        label: 'Description de l\'application'
      },
      fileUpload: {
        label: 'Téléchargement de fichier',
        tooltip: 'Lorsque activé, une option de téléchargement de fichier sera affichée sur la page de Q&R.'
      },
      FileUploadSetting: {
        title: 'Paramètres de téléchargement de fichiers',
        maxFiles: 'Nombre maximum de fichiers par téléchargement',
        fileLimit: 'Taille maximale par fichier (Mo)',
        fileUploadType: {
          label: 'Types de fichiers autorisés pour le téléchargement',
          documentText: 'Requiert un nœud "Extraction de contenu de document" pour analyser le contenu du document',
          imageText: 'Requiert un nœud "Compréhension d\'image" pour analyser le contenu de l\'image',
          audioText: 'Requiert un nœud "Reconnaissance vocale" pour analyser le contenu audio'
        }
      }
    },
    aiChatNode: {
      label: 'Discussion IA',
      text: 'Discuter avec un modèle d\'IA',
      answer: 'Contenu IA',
      returnContent: {
        label: 'Retourner le contenu',
        tooltip: `Si désactivé, le contenu de ce nœud ne sera pas affiché à l'utilisateur.
                  Si vous voulez que l'utilisateur voit la sortie de ce nœud, activez l'interrupteur.`
      },
      defaultPrompt: 'Informations connues',
      think: 'Processus de réflexion'
    },
    searchDatasetNode: {
      label: 'Recherche de connaissances',
      text: 'Permet de rechercher du contenu textuel lié aux questions de l\'utilisateur dans la base de connaissances',
      paragraph_list: 'Liste des segments récupérés',
      is_hit_handling_method_list: 'Liste des segments répondant aux critères de réponse directe',
      result: 'Résultat de la recherche',
      directly_return: 'Contenu des segments répondant aux critères de réponse directe',
      searchParam: 'Paramètres de recherche',
      searchQuestion: {
        label: 'Question',
        placeholder: 'Veuillez sélectionner une question de recherche',
        requiredMessage: 'Veuillez sélectionner une question de recherche'
      }
    },
    questionNode: {
      label: 'Optimisation de question',
      text: 'Optimiser et améliorer la question actuelle en se basant sur les historiques de discussion pour mieux correspondre aux segments de connaissance',
      result: 'Résultat de la question optimisée',
      defaultPrompt1: `Optimiser et améliorer la question de l'utilisateur en fonction du contexte :`,
      defaultPrompt2: `Veuillez fournir une question optimisée.`,
      systemDefault: 'Vous êtes un expert en optimisation de questions'
    },
    conditionNode: {
      label: 'Branche conditionnelle',
      text: 'Déclencher différents nœuds en fonction des conditions',
      branch_name: 'Nom de la branche',
      conditions: {
        label: 'Conditions',
        info: 'Remplit les critères suivants',
        requiredMessage: 'Veuillez sélectionner des conditions'
      },
      valueMessage: 'Veuillez entrer une valeur',
      addCondition: 'Ajouter une condition',
      addBranch: 'Ajouter une branche'
    },
    replyNode: {
      label: 'Réponse spécifiée',
      text: 'Spécifiez le contenu de la réponse, les variables référencées seront converties en chaînes pour la sortie',
      content: 'Contenu',
      replyContent: {
        label: 'Contenu de la réponse',
        custom: 'Personnalisé',
        reference: 'Variable référencée'
      }
    },
    rerankerNode: {
      label: 'Rappel multipath',
      text: 'Utiliser un modèle de réorganisation pour affiner les résultats de plusieurs sources de connaissances',
      result_list: 'Liste des résultats réorganisés',
      result: 'Résultat de réorganisation',
      rerankerContent: {
        label: 'Contenu de réorganisation',
        requiredMessage: 'Veuillez sélectionner le contenu de réorganisation'
      },
      higher: 'Plus élevé',
      ScoreTooltip: 'Plus le score est élevé, plus la pertinence est forte.',
      max_paragraph_char_number: 'Nombre maximum de caractères',
      reranker_model: {
        label: 'Réorganisation',
        placeholder: 'Veuillez sélectionner une réorganisation'
      }
    },
    formNode: {
      label: 'Formulaire',
      text: 'Collecter les entrées utilisateur lors des Q&R et les utiliser dans les processus ultérieurs',
      form_content_format1: 'Bonjour, veuillez remplir le formulaire ci-dessous :',
      form_content_format2: 'Cliquez sur le bouton [Soumettre] après avoir rempli le formulaire.',
      form_data: 'Tout le contenu du formulaire',
      formContent: {
        label: 'Contenu de sortie du formulaire',
        requiredMessage:
          'Veuillez définir le contenu de sortie de ce nœud, { form } est un espace réservé pour le formulaire.',
        tooltip: 'Définissez le contenu de sortie de ce nœud. { form } est un espace réservé pour le formulaire'
      },
      formAllContent: 'Tout le contenu du formulaire',
      formSetting: 'Configuration du formulaire'
    },
    documentExtractNode: {
      label: 'Extraction de contenu de document',
      text: 'Extraire le contenu des documents',
      content: 'Contenu du document'
    },
    imageUnderstandNode: {
      label: 'Compréhension d\'image',
      text: 'Analyser les images pour identifier les objets, scènes et fournir des réponses',
      answer: 'Contenu IA',
      model: {
        label: 'Modèle de vision',
        requiredMessage: 'Veuillez sélectionner un modèle de vision'
      },
      image: {
        label: 'Sélectionner une image',
        requiredMessage: 'Veuillez sélectionner une image'
      }
    },
    variableAssignNode: {
      label: 'Attribution de variable',
      text: 'Mettre à jour la valeur d\'une variable globale',
      assign: 'Définir la valeur'
    },
    imageGenerateNode: {
      label: 'Génération d\'images',
      text: 'Générer des images à partir d\'un texte fourni',
      answer: 'Contenu IA',
      model: {
        label: 'Modèle de génération d\'images',
        requiredMessage: 'Veuillez sélectionner un modèle de génération d\'images'
      },
      prompt: {
        label: 'Invite positive',
        tooltip: 'Décrivez les éléments et caractéristiques visuelles souhaités dans l\'image générée'
      },
      negative_prompt: {
        label: 'Invite négative',
        tooltip: 'Décrivez les éléments à exclure de l\'image générée',
        placeholder:
          'Veuillez décrire le contenu que vous ne souhaitez pas générer, comme la couleur, contenu sanglant'
      }
    },
    speechToTextNode: {
      label: 'Reconnaissance vocale',
      text: 'Convertir l\'audio en texte via un modèle de reconnaissance vocale',
      stt_model: {
        label: 'Modèle de reconnaissance vocale'
      },
      audio: {
        label: 'Sélectionner un fichier audio',
        placeholder: 'Veuillez sélectionner un fichier audio'
      }
    },
    textToSpeechNode: {
      label: 'Synthèse vocale',
      text: 'Convertir le texte en audio via un modèle de synthèse vocale',
      tts_model: {
        label: 'Modèle de synthèse vocale'
      },
      content: {
        label: 'Sélectionner le contenu textuel'
      }
    },
    functionNode: {
      label: 'Fonction personnalisée',
      text: 'Exécuter des scripts personnalisés pour traiter les données'
    },
    applicationNode: {
      label: 'Nœud APP'
    }
  },
  compare: {
    is_null: 'Est nul',
    is_not_null: 'N\'est pas nul',
    contain: 'Contient',
    not_contain: 'Ne contient pas',
    eq: 'Égal à',
    ge: 'Supérieur ou égal à',
    gt: 'Supérieur à',
    le: 'Inférieur ou égal à',
    lt: 'Inférieur à',
    len_eq: 'Longueur égale à',
    len_ge: 'Longueur supérieure ou égale à',
    len_gt: 'Longueur supérieure à',
    len_le: 'Longueur inférieure ou égale à',
    len_lt: 'Longueur inférieure à'
  },
  FileUploadSetting: {}
}