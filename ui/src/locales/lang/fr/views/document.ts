export default {
  uploadDocument: 'Télécharger un document',
  importDocument: 'Importer un document',
  syncDocument: 'Synchroniser un document',
  selected: 'Sélectionné(s)',
  items: 'Élément(s)',
  searchBar: {
    placeholder: 'Rechercher par nom de document'
  },
  setting: {
    migration: 'Déplacer',
    cancelGenerateQuestion: 'Annuler la génération de questions',
    cancelVectorization: 'Annuler la vectorisation',
    cancelGenerate: 'Annuler la génération',
    export: 'Exporter vers'
  },
  tip: {
    saveMessage: 'Les modifications actuelles n\'ont pas été enregistrées. Confirmer la sortie ?',
    cancelSuccess: 'Opération réussie',
    sendMessage: 'Opération réussie',
    vectorizationSuccess: 'Opération réussie',
    nameMessage: 'Le nom du document ne peut pas être vide !',
    importMessage: 'Opération réussie',
    migrationSuccess: 'Opération réussie'
  },
  upload: {
    selectFile: 'Sélectionner un fichier',
    selectFiles: 'Sélectionner un dossier',
    uploadMessage: 'Glissez-déposez les fichiers ici pour les télécharger ou',
    formats: 'Formats supportés :',
    requiredMessage: 'Veuillez télécharger un fichier',
    errorMessage1: 'La taille du fichier dépasse 100 Mo',
    errorMessage2: 'Format de fichier non pris en charge',
    errorMessage3: 'Le fichier ne peut pas être vide',
    errorMessage4: 'Un maximum de 50 fichiers peut être téléchargé à la fois',
    template: 'Modèle',
    download: 'Télécharger'
  },

  fileType: {
    txt: {
      label: 'Fichier texte',
      tip1: '1. Il est recommandé de normaliser les marqueurs de segment dans le fichier avant de le télécharger.',
      tip2: '2. Un maximum de 50 fichiers peut être téléchargé à la fois, chaque fichier ne devant pas dépasser 100 Mo.'
    },
    table: {
      label: 'Tableau',
      tip1: '1. Cliquez pour télécharger le modèle correspondant et complétez les informations :',
      tip2: '2. La première ligne doit contenir les en-têtes de colonne, qui doivent être des termes significatifs. Chaque enregistrement du tableau sera traité comme un segment.',
      tip3: '3. Chaque feuille du fichier de feuille de calcul téléchargé sera traitée comme un document, avec le nom de la feuille comme nom de document.',
      tip4: '4. Un maximum de 50 fichiers peut être téléchargé à la fois, chaque fichier ne devant pas dépasser 100 Mo.'
    },
    QA: {
      label: 'Paires de Q/R',
      tip1: '1. Cliquez pour télécharger le modèle correspondant et complétez les informations :',
      tip2: '2. Chaque feuille du fichier de feuille de calcul téléchargé sera traitée comme un document, avec le nom de la feuille comme nom de document.',
      tip3: '3. Un maximum de 50 fichiers peut être téléchargé à la fois, chaque fichier ne devant pas dépasser 100 Mo.'
    }
  },
  setRules: {
    title: {
      setting: 'Définir les règles de segmentation',
      preview: 'Aperçu'
    },
    intelligent: {
      label: 'Segmentation automatique (recommandé)',
      text: 'Si vous ne savez pas comment définir les règles de segmentation, il est recommandé d\'utiliser la segmentation automatique.'
    },
    advanced: {
      label: 'Segmentation avancée',
      text: 'Les utilisateurs peuvent personnaliser les délimiteurs de segments, la longueur des segments et les règles de nettoyage en fonction des standards du document.'
    },
    patterns: {
      label: 'Délimiteurs de segments',
      tooltip:
        'Diviser récursivement selon les symboles sélectionnés dans l\'ordre. Si le résultat dépasse la longueur du segment, il sera tronqué à cette longueur.',
      placeholder: 'Veuillez sélectionner'
    },
    limit: {
      label: 'Longueur du segment'
    },
    with_filter: {
      label: 'Nettoyage automatique',
      text: 'Supprimer les symboles, espaces, lignes vides et tabulations en double.'
    },
    checkedConnect: {
      label: 'Ajouter une section "Questions associées" pour les paires Q/R lors de l\'import.'
    }
  },
  buttons: {
    prev: 'Précédent',
    next: 'Suivant',
    import: 'Démarrer l\'import',
    preview: 'Appliquer'
  },
  table: {
    name: 'Nom du document',
    char_length: 'Caractères',
    paragraph: 'Segment',
    all: 'Tous',
    updateTime: 'Heure de mise à jour'
  },
  fileStatus: {
    label: 'Statut du fichier',
    SUCCESS: 'Succès',
    FAILURE: 'Échec',
    EMBEDDING: 'Indexation',
    PENDING: 'En attente',
    GENERATE: 'Génération en cours',
    SYNC: 'Synchronisation en cours',
    REVOKE: 'Annulation en cours',
    finish: 'Terminé'
  },
  enableStatus: {
    label: 'Statut',
    enable: 'Activé',
    close: 'Désactivé'
  },
  sync: {
    label: 'Synchronisation',
    confirmTitle: 'Confirmer la synchronisation du document ?',
    confirmMessage1:
      'La synchronisation supprimera les données existantes et récupérera de nouvelles données. Veuillez procéder avec précaution.',
    confirmMessage2: 'Impossible de synchroniser, veuillez d\'abord définir l\'URL du document.',
    successMessage: 'Opération réussie'
  },
  delete: {
    confirmTitle1: 'Confirmer la suppression groupée de',
    confirmTitle2: 'documents ?',
    confirmMessage:
      'Les segments des documents sélectionnés seront également supprimés. Veuillez procéder avec précaution.',
    successMessage: 'Opération réussie',
    confirmTitle3: 'Confirmer la suppression du document :',
    confirmMessage1: 'Sous ce document,',
    confirmMessage2: 'tous les segments seront supprimés, merci de faire attention.'
  },
  form: {
    source_url: {
      label: 'URL du document',
      placeholder: 'Entrez l\'URL du document, une par ligne. Une URL incorrecte entraînera un échec de l\'import.',
      requiredMessage: 'Veuillez entrer une URL de document'
    },
    selector: {
      label: 'Sélecteur',
      placeholder: 'Par défaut : body, vous pouvez saisir .classname/#idname/tagname'
    },
    hit_handling_method: {
      label: 'Méthode de traitement des correspondances',
      tooltip: 'Lorsque l\'utilisateur pose une question, traitez les segments correspondants selon la méthode définie.'
    },
    similarity: {
      label: 'Similarité supérieure à',
      placeholder: 'Renvoyer directement le contenu du segment',
      requiredMessage: 'Veuillez entrer une valeur de similarité'
    }
  },
  hitHandlingMethod: {
    optimization: 'Optimisation du modèle',
    directly_return: 'Répondre directement'
  },
  generateQuestion: {
    title: 'Générer des questions',
    successMessage: 'Opération réussie',
    tip1: 'Le {data} dans le prompt est un espace réservé pour le contenu segmenté, qui est remplacé par le contenu segmenté lors de l\'exécution et envoyé au modèle IA ;',
    tip2: 'Le modèle IA génère des questions pertinentes basées sur le contenu segmenté. Veuillez placer les questions générées dans les balises',
    tip3: ', et le système reliera automatiquement les questions contenues dans ces balises ;',
    tip4: 'L\'effet de génération dépend du modèle sélectionné et du prompt. Les utilisateurs peuvent ajuster pour obtenir les meilleurs résultats.',
    prompt1:
      'Contenu : {data}\n \n Veuillez résumer ce qui précède et générer 5 questions basées sur le résumé. \nExigences de réponse : \n - Veuillez n\'afficher que des questions ; \n - Veuillez placer chaque question dans la balise',
    prompt2: '.'
  }
}