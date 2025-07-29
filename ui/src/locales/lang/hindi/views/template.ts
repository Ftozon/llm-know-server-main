export default {
  title: 'मॉडल',
  provider: 'प्रदाता',
  providerPlaceholder: 'प्रदाता चुनें',
  addModel: 'मॉडल जोड़ें',
  searchBar: {
    placeholder: 'नाम से खोजें'
  },
  delete: {
    confirmTitle: 'मॉडल हटाएं',
    confirmMessage: 'क्या आप वाकई इस मॉडल को हटाना चाहते हैं:'
  },
  tip: {
    createSuccessMessage: 'मॉडल सफलतापूर्वक बनाया गया',
    createErrorMessage: 'मूल जानकारी में त्रुटियाँ हैं',
    errorMessage: 'चर पहले से मौजूद है: ',
    emptyMessage1: 'कृपया पहले मॉडल प्रकार और बेस मॉडल चुनें',
    emptyMessage2: 'चयनित मॉडल पैरामीटर सेटिंग्स का समर्थन नहीं करता',
    updateSuccessMessage: 'मॉडल सफलतापूर्वक अपडेट किया गया',
    saveSuccessMessage: 'मॉडल पैरामीटर सफलतापूर्वक सहेजे गए',
    downloadError: 'डाउनलोड विफल',
    noModel: 'ओलामा में मॉडल मौजूद नहीं'
  },
  model: {
    allModel: 'सभी मॉडल',
    publicModel: 'सार्वजनिक मॉडल',
    privateModel: 'निजी मॉडल',
    LLM: 'LLM',
    EMBEDDING: 'एम्बेडिंग मॉडल',
    RERANKER: 'रीरैंक',
    STT: 'स्पीच2टेक्स्ट',
    TTS: 'टीटीएस',
    IMAGE: 'विज़न मॉडल',
    TTI: 'छवि जनरेशन'
  },
  templateForm: {
    title: {
      baseInfo: 'मूल जानकारी',
      advancedInfo: 'उन्नत सेटिंग्स',
      modelParams: 'मॉडल पैरामीटर',
      editParam: 'पैरामीटर संपादित करें',
      addParam: 'पैरामीटर जोड़ें',
      paramSetting: 'मॉडल पैरामीटर सेटिंग्स',
      apiParamPassing: 'इंटरफ़ेस पैरामीटर'
    },
    form: {
      templateName: {
        label: 'मॉडल का नाम',
        placeholder: 'बेस मॉडल के लिए नाम सेट करें',
        tooltip: 'LLM-Know में कस्टम मॉडल नाम',
        requiredMessage: 'मॉडल नाम खाली नहीं हो सकता'
      },
      permissionType: {
        label: 'अनुमति',
        privateDesc: 'केवल वर्तमान उपयोगकर्ता के लिए उपलब्ध',
        publicDesc: 'सभी उपयोगकर्ताओं के लिए उपलब्ध',
        requiredMessage: 'अनुमति खाली नहीं हो सकती'
      },
      model_type: {
        label: 'मॉडल प्रकार',
        placeholder: 'मॉडल प्रकार चुनें',
        tooltip1: 'LLM: ऐप्प में एआई चैट के लिए अनुमान मॉडल',
        tooltip2: 'एम्बेडिंग मॉडल: ज्ञान में दस्तावेज़ सामग्री वेक्टराइज़ करने के लिए मॉडल',
        tooltip3: 'स्पीच2टेक्स्ट: ऐप्प में स्पीच रिकग्निशन के लिए उपयोग किया जाने वाला मॉडल',
        tooltip4: 'टीटीएस: ऐप्प में टेक्स्ट-टू-स्पीच के लिए उपयोग किया जाने वाला मॉडल',
        tooltip5: 'रीरैंक: उन्नत ऑर्केस्ट्रेशन ऐप्प में मल्टी-रूट रिकॉल के दौरान उम्मीदवार अनुच्छेदों को पुन: क्रमित करने के लिए मॉडल',
        tooltip6: 'विज़न मॉडल: उन्नत ऑर्केस्ट्रेशन ऐप्प में छवि समझ के लिए उपयोग किया जाने वाला दृश्य मॉडल',
        tooltip7: 'छवि जनरेशन: उन्नत ऑर्केस्ट्रेशन ऐप्प में छवि जनरेशन के लिए उपयोग किया जाने वाला दृश्य मॉडल',
        requiredMessage: 'मॉडल प्रकार खाली नहीं हो सकता'
      },
      base_model: {
        label: 'बेस मॉडल',
        tooltip: 'सूची में नहीं होने पर मॉडल नाम दर्ज कर Enter दबाएँ',
        placeholder: 'बेस मॉडल नाम दर्ज करें और जोड़ने के लिए Enter दबाएँ',
        requiredMessage: 'बेस मॉडल खाली नहीं हो सकता'
      }
    }
  },
  download: {
    downloading: 'डाउनलोड हो रहा है...',
    cancelDownload: 'डाउनलोड रद्द करें'
  }
}