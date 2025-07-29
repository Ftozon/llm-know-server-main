export default {
  noHistory: 'Aucun historique de conversation',
  createChat: 'Nouvelle conversation',
  history: 'Historique des conversations',
  only20history: 'Affichage des 20 dernières conversations uniquement',
  question_count: 'Questions',
  exportRecords: 'Exporter l\'historique des conversations',
  chatId: 'ID de conversation',
  userInput: 'Entrée utilisateur',
  quote: 'Citation',
  download: 'Cliquez pour télécharger',
  passwordValidator: {
    title: 'Entrez le mot de passe pour accéder',
    errorMessage1: 'Le mot de passe ne peut pas être vide',
    errorMessage2: 'Mot de passe incorrect'
  },
  operation: {
    play: 'Lecture',
    pause: 'Pause',
    regeneration: 'Régénérer la réponse',
    like: 'J\'aime',
    cancelLike: 'Je n\'aime plus',
    oppose: 'Je n\'aime pas',
    cancelOppose: 'Annuler je n\'aime pas',
    continue: 'Continuer',
    stopChat: 'Arrêter la réponse'
  },
  tip: {
    error500Message: 'Désolé, le service est actuellement en maintenance. Veuillez réessayer plus tard !',
    errorIdentifyMessage: 'Impossible de vérifier l\'identité de l\'utilisateur',
    errorLimitMessage: 'Désolé, vous avez atteint le nombre maximum de questions. Veuillez réessayer demain !',
    answerMessage: 'Désolé, aucun contenu pertinent trouvé. Veuillez reformuler votre question ou fournir plus de détails.',
    stopAnswer: 'Réponse arrêtée',
    answerLoading: 'Génération de la réponse...',
    recorderTip: `<p>Cette fonctionnalité nécessite l'accès au microphone. Les navigateurs bloquent l'enregistrement sur des pages non sécurisées. Solutions :<br/>
1. Activer HTTPS ;<br/>
2. Si HTTPS n'est pas disponible, ajustez les paramètres de sécurité du navigateur. Pour Chrome :<br/>
(1) Entrez chrome://flags/#unsafely-treat-insecure-origin-as-secure dans la barre d'adresse ;<br/>
(2) Ajoutez votre site HTTP, par exemple http://127.0.0.1:8080.</p>`,
    recorderError: 'Échec de l\'enregistrement',
    confirm: 'Compris',
    requiredMessage: 'Veuillez remplir tous les champs obligatoires',
    inputParamMessage1: 'Veuillez spécifier un paramètre dans l\'URL',
    inputParamMessage2: 'valeur',
    prologueMessage: 'Désolé, le service est actuellement en maintenance. Veuillez réessayer plus tard !'
  },
  inputPlaceholder: {
    speaking: 'En train de parler...',
    recorderLoading: 'Transcription en cours...',
    default: 'Tapez votre question, Ctrl+Entrée pour un saut de ligne'
  },
  uploadFile: {
    label: 'Télécharger un fichier',
    most: 'Maximum',
    limit: 'fichiers autorisés, chacun jusqu\'à',
    fileType: 'Type de fichier',
    tipMessage: 'Veuillez sélectionner les types de fichiers autorisés dans les paramètres de téléchargement',
    limitMessage1: 'Vous pouvez télécharger jusqu\'à',
    limitMessage2: 'fichiers',
    sizeLimit: 'Chaque fichier ne doit pas dépasser',
    imageMessage: 'Veuillez traiter le contenu de l\'image',
    errorMessage: 'Échec du téléchargement'
  },
  executionDetails: {
    title: 'Détails d\'exécution',
    paramOutputTooltip: 'Chaque document prend en charge l\'aperçu jusqu\'à 500 caractères',
    audioFile: 'Fichier audio',
    searchContent: 'Requête de recherche',
    searchResult: 'Résultats de recherche',
    conditionResult: 'Évaluation des conditions',
    currentChat: 'Conversation en cours',
    answer: 'Réponse IA',
    replyContent: 'Contenu de la réponse',
    textContent: 'Contenu texte',
    input: 'Entrée',
    output: 'Sortie',
    rerankerContent: 'Contenu reclassé',
    rerankerResult: 'Résultats de reclassement',
    paragraph: 'Segment',
    noSubmit: 'Aucune soumission de l\'utilisateur',
    errMessage: 'Journal des erreurs'
  },
  KnowledgeSource: {
    title: 'Source de connaissances',
    referenceParagraph: 'Segment cité',
    consume: 'Jetons',
    consumeTime: 'Temps d\'exécution'
  },
  paragraphSource: {
    title: 'Citation de connaissance',
    question: 'Question utilisateur',
    optimizationQuestion: 'Question optimisée'
  },
  editTitle: 'Modifier le titre',
}