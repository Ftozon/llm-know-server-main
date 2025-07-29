export default {
  node: 'नोड',
  nodeName: 'नोड का नाम',
  baseComponent: 'बेसिक',
  nodeSetting: 'नोड सेटिंग्स',
  workflow: 'वर्कफ़्लो',
  searchBar: {
    placeholder: 'नाम से खोजें'
  },
  info: {
    previewVersion: 'पूर्वावलोकन संस्करण:',
    saveTime: 'अंतिम सहेजा गया:'
  },
  setting: {
    restoreVersion: 'पिछला संस्करण पुनर्स्थापित करें',
    restoreCurrentVersion: 'इस संस्करण पर पुनर्स्थापित करें',
    addComponent: 'जोड़ें',
    public: 'प्रकाशित करें',
    releaseHistory: 'रिलीज़ इतिहास',
    autoSave: 'ऑटो सेव',
    latestRelease: 'नवीनतम रिलीज़',
    copyParam: 'पैरामीटर कॉपी करें',
    debug: 'चलाएं',
    exit: 'बाहर निकलें',
    exitSave: 'सहेजें और बाहर निकलें'
  },
  tip: {
    publicSuccess: 'सफलतापूर्वक प्रकाशित',
    noData: 'कोई संबंधित परिणाम नहीं मिला',
    nameMessage: 'नाम खाली नहीं हो सकता!',
    onlyRight: 'कनेक्शन केवल दाएं एंकर से बनाए जा सकते हैं',
    notRecyclable: 'लूप कनेक्शन अनुमत नहीं',
    onlyLeft: 'कनेक्शन केवल बाएं एंकर से बनाए जा सकते हैं',
    applicationNodeError: 'यह एप्लिकेशन उपलब्ध नहीं',
    functionNodeError: 'यह फंक्शन नोड उपलब्ध नहीं',
    repeatedNodeError: 'इस नाम का नोड पहले से मौजूद है',
    cannotCopy: 'कॉपी नहीं किया जा सकता',
    copyError: 'नोड पहले ही कॉपी हो चुका है',
    paramErrorMessage: 'पैरामीटर पहले से मौजूद है: ',
    saveMessage: 'वर्तमान परिवर्तन सहेजे नहीं गए हैं। बाहर निकलने से पहले सहेजें?'
  },
  delete: {
    confirmTitle: 'क्या इस नोड को हटाना निश्चित है?',
    deleteMessage: 'यह नोड हटाया नहीं जा सकता'
  },
  control: {
    zoomOut: 'ज़ूम आउट',
    zoomIn: 'ज़ूम इन',
    fitView: 'स्क्रीन पर फ़िट करें',
    retract: 'सभी संकुचित करें',
    extend: 'सभी विस्तारित करें',
    beautify: 'ऑटो-व्यवस्थित करें'
  },
  variable: {
    label: 'चर',
    global: 'ग्लोबल चर',
    Referencing: 'संदर्भित चर',
    ReferencingRequired: 'संदर्भित चर आवश्यक है',
    ReferencingError: 'अमान्य संदर्भित चर',
    NoReferencing: 'संदर्भित चर मौजूद नहीं',
    placeholder: 'कृपया एक चर चुनें'
  },
  condition: {
    title: 'एक्ज़ीक्यूशन शर्त',
    front: 'पूर्व शर्त',
    AND: 'सभी',
    OR: 'कोई भी',
    text: 'कनेक्टेड नोड के एक्ज़ीक्यूट होने के बाद वर्तमान नोड एक्ज़ीक्यूट करें'
  },
  validate: {
    startNodeRequired: 'प्रारंभ नोड आवश्यक',
    startNodeOnly: 'केवल एक प्रारंभ नोड अनुमत',
    baseNodeRequired: 'बेस जानकारी नोड आवश्यक',
    baseNodeOnly: 'केवल एक बेस जानकारी नोड अनुमत',
    notInWorkFlowNode: 'नोड वर्कफ़्लो में नहीं',
    noNextNode: 'अगला नोड मौजूद नहीं',
    nodeUnavailable: 'नोड उपलब्ध नहीं',
    needConnect1: 'नोड की शाखा कनेक्ट की जानी चाहिए',
    cannotEndNode: 'इस नोड को एंड नोड के रूप में उपयोग नहीं किया जा सकता'
  },
  nodes: {
    startNode: {
      label: 'प्रारंभ',
      question: 'उपयोगकर्ता प्रश्न',
      currentTime: 'वर्तमान समय'
    },
    baseNode: {
      label: 'मूल जानकारी',
      appName: {
        label: 'ऐप्प नाम'
      },
      appDescription: {
        label: 'ऐप्प विवरण'
      },
      fileUpload: {
        label: 'फ़ाइल अपलोड',
        tooltip: 'सक्षम करने पर Q&A पृष्ठ पर फ़ाइल अपलोड बटन दिखाई देगा।'
      },
      FileUploadSetting: {
        title: 'फ़ाइल अपलोड सेटिंग्स',
        maxFiles: 'प्रति अपलोड अधिकतम फ़ाइलें',
        fileLimit: 'प्रति फ़ाइल अधिकतम आकार (MB)',
        fileUploadType: {
          label: 'अनुमत फ़ाइल प्रकार',
          documentText: 'दस्तावेज़ सामग्री पार्स करने के लिए "डॉक्यूमेंट कंटेंट एक्सट्रैक्शन" नोड आवश्यक',
          imageText: 'छवि पार्स करने के लिए "इमेज अंडरस्टैंडिंग" नोड आवश्यक',
          audioText: 'ऑडियो पार्स करने के लिए "स्पीच-टू-टेक्स्ट" नोड आवश्यक'
        }
      }
    },
    aiChatNode: {
      label: 'एआई चैट',
      text: 'एआई मॉडल के साथ चैट करें',
      answer: 'एआई सामग्री',
      returnContent: {
        label: 'सामग्री वापस करें',
        tooltip: `बंद करने पर इस नोड की सामग्री उपयोगकर्ता को दिखाई नहीं देगी। 
                  उपयोगकर्ता को आउटपुट दिखाने के लिए स्विच चालू करें।`
      },
      defaultPrompt: 'ज्ञात जानकारी',
      think: 'विचार प्रक्रिया'
    },
    searchDatasetNode: {
      label: 'ज्ञान पुनर्प्राप्ति',
      text: 'ज्ञान से उपयोगकर्ता प्रश्न से संबंधित सामग्री खोजें',
      paragraph_list: 'पुनर्प्राप्त अनुच्छेद सूची',
      is_hit_handling_method_list: 'सीधे उत्तर मानदंड पूरा करने वाले अनुच्छेद',
      result: 'खोज परिणाम',
      directly_return: 'सीधे उत्तर मानदंड पूरा करने वाली सामग्री',
      searchParam: 'पुनर्प्राप्ति पैरामीटर',
      searchQuestion: {
        label: 'प्रश्न',
        placeholder: 'खोज प्रश्न चुनें',
        requiredMessage: 'कृपया खोज प्रश्न चुनें'
      }
    },
    questionNode: {
      label: 'प्रश्न अनुकूलन',
      text: 'ऐतिहासिक चैट के आधार पर प्रश्न को ज्ञान अनुच्छेदों से बेहतर मिलान करने के लिए अनुकूलित करें',
      result: 'अनुकूलित प्रश्न परिणाम',
      defaultPrompt1: `संदर्भ के आधार पर उपयोगकर्ता के प्रश्न को अनुकूलित करें:`,
      defaultPrompt2: `कृपया एक अनुकूलित प्रश्न आउटपुट करें।`,
      systemDefault: 'आप एक प्रश्न अनुकूलन विशेषज्ञ हैं'
    },
    conditionNode: {
      label: 'सशर्त शाखा',
      text: 'शर्तों के आधार पर विभिन्न नोड्स ट्रिगर करें',
      branch_name: 'शाखा नाम',
      conditions: {
        label: 'शर्तें',
        info: 'निम्नलिखित पूरा करता है',
        requiredMessage: 'कृपया शर्तें चुनें'
      },
      valueMessage: 'कृपया मान दर्ज करें',
      addCondition: 'शर्त जोड़ें',
      addBranch: 'शाखा जोड़ें'
    },
    replyNode: {
      label: 'निर्दिष्ट उत्तर',
      text: 'उत्तर सामग्री निर्दिष्ट करें, संदर्भित चर स्ट्रिंग में परिवर्तित होंगे',
      content: 'सामग्री',
      replyContent: {
        label: 'उत्तर सामग्री',
        custom: 'कस्टम',
        reference: 'संदर्भ चर'
      }
    },
    rerankerNode: {
      label: 'मल्टी-पाथ रिकॉल',
      text: 'एकाधिक ज्ञान स्रोतों से पुनर्प्राप्ति परिणामों को रीरैंक करने के लिए मॉडल का उपयोग करें',
      result_list: 'रीरैंक परिणाम सूची',
      result: 'रीरैंकिंग परिणाम',
      rerankerContent: {
        label: 'रीरैंकिंग सामग्री',
        requiredMessage: 'कृपया रीरैंकिंग सामग्री चुनें'
      },
      higher: 'उच्च',
      ScoreTooltip: 'स्कोर जितना अधिक, प्रासंगिकता उतनी मजबूत।',
      max_paragraph_char_number: 'अधिकतम वर्ण',
      reranker_model: {
        label: 'रीरैंक',
        placeholder: 'रीरैंक चुनें'
      }
    },
    formNode: {
      label: 'फ़ॉर्म इनपुट',
      text: 'Q&A के दौरान उपयोगकर्ता इनपुट एकत्र करें और आगे की प्रक्रिया में उपयोग करें',
      form_content_format1: 'नमस्ते, कृपया नीचे दिया गया फ़ॉर्म भरें:',
      form_content_format2: 'भरने के बाद [सबमिट] बटन क्लिक करें।',
      form_data: 'सभी फ़ॉर्म सामग्री',
      formContent: {
        label: 'फ़ॉर्म आउटपुट सामग्री',
        requiredMessage: 'कृपया इस नोड की आउटपुट सामग्री सेट करें, { form } फ़ॉर्म के लिए प्लेसहोल्डर है।',
        tooltip: 'इस नोड की आउटपुट सामग्री परिभाषित करें। { form } फ़ॉर्म के लिए प्लेसहोल्डर है'
      },
      formAllContent: 'सभी फ़ॉर्म सामग्री',
      formSetting: 'फ़ॉर्म कॉन्फ़िगरेशन'
    },
    documentExtractNode: {
      label: 'दस्तावेज़ सामग्री निष्कर्षण',
      text: 'दस्तावेज़ों से सामग्री निकालें',
      content: 'दस्तावेज़ सामग्री'
    },
    imageUnderstandNode: {
      label: 'छवि समझ',
      text: 'ऑब्जेक्ट, दृश्य पहचानें और उत्तर प्रदान करने के लिए छवियों का विश्लेषण करें',
      answer: 'एआई सामग्री',
      model: {
        label: 'विज़न मॉडल',
        requiredMessage: 'कृपया विज़न मॉडल चुनें'
      },
      image: {
        label: 'छवि चुनें',
        requiredMessage: 'कृपया छवि चुनें'
      }
    },
    variableAssignNode: {
      label: 'चर असाइन',
      text: 'ग्लोबल चर का मान अपडेट करें',
      assign: 'मान सेट करें'
    },
    imageGenerateNode: {
      label: 'छवि जनरेशन',
      text: 'टेक्स्ट सामग्री के आधार पर छवियां जनरेट करें',
      answer: 'एआई सामग्री',
      model: {
        label: 'छवि जनरेशन मॉडल',
        requiredMessage: 'कृपया छवि जनरेशन मॉडल चुनें'
      },
      prompt: {
        label: 'सकारात्मक प्रॉम्प्ट',
        tooltip: 'जनरेटेड छवि में वांछित तत्व और विजुअल फीचर्स वर्णित करें'
      },
      negative_prompt: {
        label: 'नकारात्मक प्रॉम्प्ट',
        tooltip: 'जनरेटेड छवि से बाहर रखे जाने वाले तत्व वर्णित करें',
        placeholder: 'जैसे रंग, खूनी सामग्री आदि'
      }
    },
    speechToTextNode: {
      label: 'स्पीच2टेक्स्ट',
      text: 'स्पीच रिकग्निशन मॉडल के माध्यम से ऑडियो को टेक्स्ट में बदलें',
      stt_model: {
        label: 'स्पीच रिकग्निशन मॉडल'
      },
      audio: {
        label: 'ऑडियो फ़ाइल चुनें',
        placeholder: 'कृपया ऑडियो फ़ाइल चुनें'
      }
    },
    textToSpeechNode: {
      label: 'टीटीएस',
      text: 'स्पीच सिंथेसिस मॉडल के माध्यम से टेक्स्ट को ऑडियो में बदलें',
      tts_model: {
        label: 'स्पीच सिंथेसिस मॉडल'
      },
      content: {
        label: 'टेक्स्ट सामग्री चुनें'
      }
    },
    functionNode: {
      label: 'कस्टम फंक्शन',
      text: 'डेटा प्रोसेसिंग के लिए कस्टम स्क्रिप्ट एक्ज़ीक्यूट करें'
    },
    applicationNode: {
      label: 'ऐप्प नोड'
    }
  },
  compare: {
    is_null: 'खाली है',
    is_not_null: 'खाली नहीं है',
    contain: 'शामिल करता है',
    not_contain: 'शामिल नहीं करता',
    eq: 'के बराबर',
    ge: 'से बड़ा या बराबर',
    gt: 'से बड़ा',
    le: 'से छोटा या बराबर',
    lt: 'से छोटा',
    len_eq: 'लंबाई बराबर',
    len_ge: 'लंबाई बड़ी या बराबर',
    len_gt: 'लंबाई बड़ी',
    len_le: 'लंबाई छोटी या बराबर',
    len_lt: 'लंबाई छोटी'
  },
  FileUploadSetting: {}
}