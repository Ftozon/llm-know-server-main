export default {
  input_type_list: {
    TextInput: 'Entrée de texte',
    PasswordInput: 'Mot de passe',
    Slider: 'Curseur',
    SwitchInput: 'Interrupteur',
    SingleSelect: 'Sélection unique',
    MultiSelect: 'Sélection multiple',
    DatePicker: 'Sélecteur de date',
    JsonInput: 'JSON',
    RadioCard: 'Carte radio',
    RadioRow: 'Ligne radio'
  },
  default: {
    label: 'Valeur par défaut',
    placeholder: 'Veuillez entrer une valeur par défaut',
    requiredMessage: ' est une propriété obligatoire',
    show: 'Afficher la valeur par défaut'
  },
  tip: {
    requiredMessage: 'ne peut pas être vide',
    jsonMessage: 'Format JSON incorrect'
  },
  searchBar: {
    placeholder: 'Veuillez entrer des mots-clés pour rechercher'
  },
  paramForm: {
    field: {
      label: 'Paramètre',
      placeholder: 'Veuillez entrer un paramètre',
      requiredMessage: 'Le paramètre est une propriété obligatoire',
      requiredMessage2: 'Seuls les lettres, chiffres et underscores sont autorisés'
    },
    name: {
      label: 'Nom',
      placeholder: 'Veuillez entrer un nom',
      requiredMessage: 'Le nom est une propriété obligatoire'
    },
    tooltip: {
      label: 'Info-bulle',
      placeholder: 'Veuillez entrer une info-bulle'
    },
    required: {
      label: 'Obligatoire',
      requiredMessage: 'Obligatoire est une propriété requise'
    },
    input_type: {
      label: 'Type',
      placeholder: 'Veuillez sélectionner un type',
      requiredMessage: 'Le type est une propriété obligatoire'
    }
  },
  DatePicker: {
    placeholder: 'Sélectionner une date',
    year: 'Année',
    month: 'Mois',
    date: 'Date',
    datetime: 'Date et heure',
    dataType: {
      label: 'Type de date',
      placeholder: 'Veuillez sélectionner un type de date'
    },
    format: {
      label: 'Format',
      placeholder: 'Veuillez sélectionner un format'
    }
  },
  Select: {
    label: 'Valeur d\'option',
    placeholder: 'Veuillez entrer une valeur d\'option'
  },
  tag: {
    label: 'Étiquette',
    placeholder: 'Veuillez entrer une étiquette d\'option'
  },
  Slider: {
    showInput: {
      label: 'Afficher la zone de saisie'
    },
    valueRange: {
      label: 'Plage de valeurs',
      minRequired: 'La valeur minimale est requise',
      maxRequired: 'La valeur maximale est requise'
    },
    step: {
      label: 'Valeur du pas',
      requiredMessage1: 'La valeur du pas est requise',
      requiredMessage2: 'La valeur du pas ne peut pas être 0'
    }
  },
  TextInput: {
    length: {
      label: 'Longueur du texte',
      minRequired: 'La longueur minimale est requise',
      maxRequired: 'La longueur maximale est requise',
      requiredMessage1: 'La longueur doit être comprise entre',
      requiredMessage2: 'et',
      requiredMessage3: 'caractères',
      requiredMessage4: 'La longueur du texte est un paramètre obligatoire'
    }
  }
}