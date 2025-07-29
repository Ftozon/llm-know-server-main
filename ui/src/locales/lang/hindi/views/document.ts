export default {
  uploadDocument: 'दस्तावेज़ अपलोड करें',
  importDocument: 'दस्तावेज़ आयात करें',
  syncDocument: 'दस्तावेज़ सिंक करें',
  selected: 'चयनित',
  items: 'आइटम',
  searchBar: {
    placeholder: 'दस्तावेज़ नाम से खोजें'
  },
  setting: {
    migration: 'स्थानांतरित करें',
    cancelGenerateQuestion: 'प्रश्न जनरेशन रद्द करें',
    cancelVectorization: 'वेक्टराइज़ेशन रद्द करें',
    cancelGenerate: 'जनरेशन रद्द करें',
    export: 'निर्यात करें'
  },
  tip: {
    saveMessage: 'वर्तमान परिवर्तन सहेजे नहीं गए हैं। बाहर निकलने की पुष्टि करें?',
    cancelSuccess: 'सफल',
    sendMessage: 'सफल',
    vectorizationSuccess: 'सफल',
    nameMessage: 'दस्तावेज़ नाम खाली नहीं हो सकता!',
    importMessage: 'सफल',
    migrationSuccess: 'सफल'
  },
  upload: {
    selectFile: 'फ़ाइल चुनें',
    selectFiles: 'फ़ोल्डर चुनें',
    uploadMessage: 'फ़ाइलें यहाँ खींचें और छोड़ें या',
    formats: 'समर्थित प्रारूप:',
    requiredMessage: 'कृपया फ़ाइल अपलोड करें',
    errorMessage1: 'फ़ाइल आकार 100mb से अधिक',
    errorMessage2: 'असमर्थित फ़ाइल प्रारूप',
    errorMessage3: 'फ़ाइल खाली नहीं हो सकती',
    errorMessage4: 'एक बार में अधिकतम 50 फ़ाइलें अपलोड करें',
    template: 'टेम्पलेट',
    download: 'डाउनलोड करें'
  },
  fileType: {
    txt: {
      label: 'टेक्स्ट फ़ाइल',
      tip1: '1. अपलोड से पहले सेगमेंट मार्कर स्टैंडर्डाइज़ करने की सिफारिश की जाती है।',
      tip2: '2. एक बार में अधिकतम 50 फ़ाइलें, प्रत्येक 100MB से अधिक नहीं।'
    },
    table: {
      label: 'टेबल',
      tip1: '1. टेम्पलेट डाउनलोड कर जानकारी पूरी करें:',
      tip2: '2. पहली पंक्ति कॉलम हेडर होनी चाहिए। प्रत्येक रिकॉर्ड एक सेगमेंट माना जाएगा।',
      tip3: '3. प्रत्येक शीट एक दस्तावेज़ के रूप में, शीट नाम दस्तावेज़ नाम होगा।',
      tip4: '4. एक बार में अधिकतम 50 फ़ाइलें, प्रत्येक 100MB से अधिक नहीं।'
    },
    QA: {
      label: 'QA जोड़े',
      tip1: '1. टेम्पलेट डाउनलोड कर जानकारी पूरी करें:',
      tip2: '2. प्रत्येक शीट एक दस्तावेज़ के रूप में, शीट नाम दस्तावेज़ नाम होगा।',
      tip3: '3. एक बार में अधिकतम 50 फ़ाइलें, प्रत्येक 100MB से अधिक नहीं।'
    }
  },
  setRules: {
    title: {
      setting: 'सेगमेंट नियम सेट करें',
      preview: 'पूर्वावलोकन'
    },
    intelligent: {
      label: 'स्वचालित विभाजन (अनुशंसित)',
      text: 'यदि नियम सेट करने में अनिश्चित हैं तो स्वचालित विभाजन का उपयोग करें।'
    },
    advanced: {
      label: 'उन्नत विभाजन',
      text: 'उपयोगकर्ता विभाजक, सेगमेंट लंबाई और सफाई नियम कस्टमाइज़ कर सकते हैं।'
    },
    patterns: {
      label: 'विभाजक प्रतीक',
      tooltip: 'चयनित प्रतीकों के क्रम में पुनरावर्ती विभाजन करें।',
      placeholder: 'कृपया चुनें'
    },
    limit: {
      label: 'सेगमेंट लंबाई'
    },
    with_filter: {
      label: 'स्वचालित सफाई',
      text: 'अतिरिक्त प्रतीक, रिक्त स्थान, खाली पंक्तियाँ हटाएँ।'
    },
    checkedConnect: {
      label: 'QA जोड़े आयात करते समय "संबंधित प्रश्न" अनुभाग जोड़ें।'
    }
  },
  buttons: {
    prev: 'पिछला',
    next: 'अगला',
    import: 'आयात शुरू करें',
    preview: 'लागू करें'
  },
  table: {
    name: 'दस्तावेज़ नाम',
    char_length: 'वर्ण',
    paragraph: 'अनुच्छेद',
    all: 'सभी',
    updateTime: 'अपडेट समय'
  },
  fileStatus: {
    label: 'फ़ाइल स्थिति',
    SUCCESS: 'सफल',
    FAILURE: 'विफल',
    EMBEDDING: 'इंडेक्सिंग',
    PENDING: 'कतारबद्ध',
    GENERATE: 'जनरेशन',
    SYNC: 'सिंक हो रहा',
    REVOKE: 'रद्द हो रहा',
    finish: 'समाप्त'
  },
  enableStatus: {
    label: 'स्थिति',
    enable: 'सक्षम',
    close: 'अक्षम'
  },
  sync: {
    label: 'सिंक',
    confirmTitle: 'दस्तावेज़ सिंक की पुष्टि करें?',
    confirmMessage1: 'सिंक करने पर मौजूदा डेटा हट जाएगा। सावधानी बरतें।',
    confirmMessage2: 'सिंक नहीं कर सकते, कृपया दस्तावेज़ URL सेट करें।',
    successMessage: 'सफल'
  },
  delete: {
    confirmTitle1: 'बैच हटाने की पुष्टि करें',
    confirmTitle2: 'दस्तावेज़?',
    confirmMessage: 'चयनित दस्तावेज़ों के सभी अनुच्छेद हट जाएंगे। सावधानी बरतें।',
    successMessage: 'सफल',
    confirmTitle3: 'दस्तावेज़ हटाने की पुष्टि:',
    confirmMessage1: 'इस दस्तावेज़ के अंतर्गत',
    confirmMessage2: 'सभी अनुच्छेद हट जाएंगे, सावधानी से आगे बढ़ें।'
  },
  form: {
    source_url: {
      label: 'दस्तावेज़ URL',
      placeholder: 'प्रति लाइन एक URL दर्ज करें। गलत URL आयात विफल करेगा।',
      requiredMessage: 'कृपया दस्तावेज़ URL दर्ज करें'
    },
    selector: {
      label: 'सिलेक्टर',
      placeholder: 'डिफ़ॉल्ट body, .classname/#idname/tagname इनपुट कर सकते हैं'
    },
    hit_handling_method: {
      label: 'रिट्रीव-रिस्पॉन्ड',
      tooltip: 'मिलान अनुच्छेदों को सेट विधि के अनुसार संभालें।'
    },
    similarity: {
      label: 'समानता मान से अधिक',
      placeholder: 'अनुच्छेद सामग्री सीधे लौटाएं',
      requiredMessage: 'कृपया समानता मान दर्ज करें'
    }
  },
  hitHandlingMethod: {
    optimization: 'मॉडल अनुकूलन',
    directly_return: 'सीधे उत्तर दें'
  },
  generateQuestion: {
    title: 'प्रश्न जनरेट करें',
    successMessage: 'सफल',
    tip1: 'प्रॉम्प्ट में {data} सेगमेंट सामग्री के लिए प्लेसहोल्डर है;',
    tip2: 'एआई मॉडल संबंधित प्रश्न जनरेट करेगा। कृपया प्रश्नों को',
    tip3: 'टैग के भीतर रखें;',
    tip4: 'प्रभाव मॉडल और प्रॉम्प्ट चयन पर निर्भर। समायोजन करें।',
    prompt1: 'सामग्री: {data}\n \n सारांश से 5 प्रश्न जनरेट करें।\nआवश्यकताएँ:\n - केवल प्रश्न आउटपुट करें;\n - प्रत्येक प्रश्न को',
    prompt2: 'टैग में रखें।'
  }
}