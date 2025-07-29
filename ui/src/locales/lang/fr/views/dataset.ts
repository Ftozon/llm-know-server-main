export default {
  title: 'Connaissance',
  createDataset: 'Créer une connaissance',
  general: 'Général',
  web: 'Site Web',
  relatedApplications: 'Application liée',
  document_count: 'documents',
  relatedApp_count: 'applications liées',
  searchBar: {
    placeholder: 'Rechercher par nom'
  },
  setting: {
    vectorization: 'Vectorisation',
    sync: 'Synchronisation'
  },
  tip: {
    professionalMessage:
      'Supporte jusqu\'à 50 connaissances.',
    syncSuccess: 'Tâche de synchronisation envoyée avec succès',
    updateModeMessage:
      'Après avoir modifié le modèle vectoriel de la connaissance, vous devez vectoriser la connaissance. Voulez-vous continuer à enregistrer ?'
  },
  delete: {
    confirmTitle: 'Confirmer la suppression de la connaissance :',
    confirmMessage1: 'Cette connaissance est liée à',
    confirmMessage2: 'application(s). Sa suppression sera irréversible, veuillez procéder avec précaution.'
  },
  datasetForm: {
    title: {
      info: 'Paramètres de connaissance'
    },
    form: {
      datasetName: {
        label: 'Nom',
        placeholder: 'Veuillez entrer le nom de la connaissance',
        requiredMessage: 'Veuillez entrer le nom de la connaissance'
      },
      datasetDescription: {
        label: 'Description',
        placeholder:
          'Décrivez le contenu de la connaissance. Une description détaillée aidera l\'IA à mieux comprendre le contenu, améliorant ainsi la précision de la récupération et le taux de correspondance.',
        requiredMessage: 'Veuillez entrer la description de la connaissance'
      },
      EmbeddingModel: {
        label: 'Modèle d\'intégration (Embedding)',
        placeholder: 'Veuillez sélectionner un modèle d\'intégration',
        requiredMessage: 'Veuillez sélectionner le modèle d\'intégration'
      },
      datasetType: {
        label: 'Type',
        generalInfo: 'Télécharger des documents locaux',
        webInfo: 'Synchroniser les données textuelles depuis un site web'
      },
      source_url: {
        label: 'URL racine du site web',
        placeholder: 'Veuillez entrer l\'URL racine du site web',
        requiredMessage: 'Veuillez entrer l\'URL racine du site web'
      },
      selector: {
        label: 'Sélecteur',
        placeholder: 'Par défaut : body, vous pouvez saisir .classname/#idname/tagname'
      }
    }
  },
  ResultSuccess: {
    title: 'Connaissance créée avec succès',
    paragraph: 'Segments',
    paragraph_count: 'segments',
    documentList: 'Liste des documents',
    loading: 'Import en cours',
    buttons: {
      toDataset: 'Retour à la liste des connaissances',
      toDocument: 'Aller au document'
    }
  },
  syncWeb: {
    title: 'Synchroniser la connaissance',
    syncMethod: 'Méthode de synchronisation',
    replace: 'Remplacement par synchronisation',
    replaceText: 'Récupérer à nouveau les documents du site web, en remplaçant les documents dans la connaissance locale',
    complete: 'Synchronisation complète',
    completeText:
      'Supprimer tous les documents dans la connaissance locale et récupérer à nouveau les documents du site web',
    tip: "Note : Toutes les synchronisations supprimeront les données existantes et récupéreront de nouvelles données. Veuillez procéder avec précaution."
  }
}