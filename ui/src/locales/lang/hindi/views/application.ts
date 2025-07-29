export default {
  title: 'ऐप्प',
  createApplication: 'ऐप्प बनाएं',
  importApplication: 'ऐप्प आयात करें',
  copyApplication: 'ऐप्प कॉपी करें',
  workflow: 'वर्कफ़्लो',
  simple: 'सरल',
  searchBar: {
    placeholder: 'नाम से खोजें'
  },
  setting: {
    demo: 'डेमो'
  },
  delete: {
    confirmTitle: 'क्या आप वाकई इस ऐप्प को हटाना चाहते हैं: ',
    confirmMessage: 'इस ऐप्प को हटाने पर इसकी सेवाएं अब उपलब्ध नहीं होंगी। कृपया सावधानी से आगे बढ़ें।'
  },
  tip: {
    ExportError: 'निर्यात विफल',
    professionalMessage: 'अधिकतम 5 ऐप्प समर्थित हैं।',
    saveErrorMessage: 'सहेजना विफल, कृपया अपना इनपुट जांचें या बाद में पुनः प्रयास करें',
    loadingErrorMessage: 'कॉन्फ़िगरेशन लोड करने में विफल, कृपया अपना इनपुट जांचें या बाद में पुनः प्रयास करें'
  },
  applicationForm: {
    title: {
      appTest: 'डिबग पूर्वावलोकन',
      copy: 'कॉपी'
    },
    form: {
      appName: {
        label: 'नाम',
        placeholder: 'कृपया ऐप्प का नाम दर्ज करें',
        requiredMessage: 'ऐप्प नाम आवश्यक है'
      },
      appDescription: {
        label: 'विवरण',
        placeholder: 'ऐप्प के उपयोग और परिदृश्य का वर्णन करें, उदा.: XXX सहायक XXX उत्पाद के उपयोग संबंधी प्रश्नों का उत्तर देता है'
      },
      appType: {
        label: 'प्रकार',
        simplePlaceholder: 'नौसिखियों के लिए उपयुक्त',
        workflowPlaceholder: 'उन्नत उपयोगकर्ताओं के लिए वर्कफ़्लो अनुकूलन'
      },
      appTemplate: {
        blankApp: 'रिक्त ऐप्प',
        assistantApp: 'ज्ञान सहायक'
      },
      aiModel: {
        label: 'एआई मॉडल',
        placeholder: 'कृपया एआई मॉडल चुनें'
      },
      roleSettings: {
        label: 'सिस्टम भूमिका',
        placeholder: 'आप XXX सहायक हैं'
      },
      prompt: {
        label: 'प्रॉम्प्ट',
        noReferences: '(कोई संदर्भ ज्ञान नहीं)',
        references: '(संदर्भित ज्ञान)',
        placeholder: 'कृपया प्रॉम्प्ट दर्ज करें',
        requiredMessage: 'कृपया प्रॉम्प्ट दर्ज करें',
        tooltip: 'प्रॉम्प्ट सामग्री समायोजित कर बड़े मॉडल की प्रतिक्रिया दिशा निर्देशित करें',
        noReferencesTooltip: 'प्रॉम्प्ट संदर्भ की शुरुआत में निश्चित होगा। उपयोगकर्ता प्रश्न {question} के माध्यम से पूछा जाता है।',
        referencesTooltip: 'ज्ञान से {data} और प्रश्न {question} का उपयोग करें।',
        defaultPrompt: `ज्ञात जानकारी: {data}
          प्रश्न: {question}
          प्रतिक्रिया आवश्यकताएँ: 
          - कृपया संक्षिप्त और पेशेवर भाषा में उत्तर दें।`
      },
      historyRecord: {
        label: 'चैट इतिहास'
      },
      relatedKnowledge: {
        label: 'संबंधित ज्ञान',
        placeholder: 'संबंधित ज्ञान यहाँ प्रदर्शित होते हैं'
      },
      multipleRoundsDialogue: 'बहु-चक्र वार्तालाप',
      prologue: 'प्रस्तावना',
      defaultPrologue: 'नमस्ते, मैं XXX सहायक हूँ। आप मुझसे XXX के उपयोग संबंधी प्रश्न पूछ सकते हैं।\n- XXX की मुख्य विशेषताएँ क्या हैं?\n- XXX कौनसे LLM समर्थित हैं?\n- XXX कौनसे दस्तावेज़ प्रकार समर्थित हैं?',
      problemOptimization: {
        label: 'प्रश्न अनुकूलन',
        tooltip: 'ऐतिहासिक चैट के आधार पर प्रश्नों को ज्ञान बिंदुओं से मिलान करने के लिए अनुकूलित करें।'
      },
      voiceInput: {
        label: 'वॉइस इनपुट',
        placeholder: 'कृपया स्पीच रिकग्निशन मॉडल चुनें',
        requiredMessage: 'कृपया वॉइस इनपुट मॉडल चुनें',
        autoSend: 'स्वचालित भेजें'
      },
      voicePlay: {
        label: 'वॉइस प्लेबैक',
        placeholder: 'कृपया स्पीच सिंथेसिस मॉडल चुनें',
        requiredMessage: 'कृपया वॉइस प्लेबैक मॉडल चुनें',
        autoPlay: 'स्वचालित प्लेबैक',
        browser: 'ब्राउज़र प्लेबैक (मुफ़्त)',
        tts: 'TTS मॉडल',
        listeningTest: 'पूर्वावलोकन'
      },
      reasoningContent: {
        label: 'आउटपुट विचार प्रक्रिया',
        tooltip: 'लेबल के बीच का कंटेंट विचार प्रक्रिया के रूप में पहचाना जाएगा।',
        start: 'प्रारंभ',
        end: 'समाप्त'
      }
    },
    buttons: {
      publish: 'सहेजें और प्रकाशित करें',
      addModel: 'मॉडल जोड़ें'
    },
    dialog: {
      addDataset: 'संबंधित ज्ञान जोड़ें',
      addDatasetPlaceholder: 'समान एम्बेडिंग मॉडल वाला ज्ञान चुनें',
      selected: 'चयनित',
      countDataset: 'ज्ञान',
      selectSearchMode: 'खोज मोड',
      vectorSearch: 'वेक्टर खोज',
      vectorSearchTooltip: 'बड़े डेटासेट के लिए वेक्टर दूरी आधारित खोज',
      fullTextSearch: 'पूर्ण-पाठ खोज',
      fullTextSearchTooltip: 'छोटे डेटासेट के लिए टेक्स्ट समानता आधारित खोज',
      hybridSearch: 'हाइब्रिड खोज',
      hybridSearchTooltip: 'मध्यम डेटासेट के लिए संयुक्त खोज',
      similarityThreshold: 'न्यूनतम समानता',
      similarityTooltip: 'उच्च समानता = मजबूत संबंध',
      topReferences: 'शीर्ष N अनुच्छेद',
      maxCharacters: 'प्रति संदर्भ अधिकतम वर्ण',
      noReferencesAction: 'जब कोई ज्ञान संदर्भ न हो',
      continueQuestioning: 'एआई मॉडल से प्रश्न जारी रखें',
      provideAnswer: 'उत्तर निर्दिष्ट करें',
      designated_answer: 'मेरा ज्ञान केवल XXX उत्पाद से संबंधित है। कृपया प्रश्न पुनः बनाएँ।',
      defaultPrompt1: "उपयोगकर्ता प्रश्न ({question}) का पूर्वानुमान लगाएं और इसे",
      defaultPrompt2: 'टैग में रखें'
    }
  },
  applicationAccess: {
    title: 'ऐप्प एक्सेस',
    wecom: 'वीकॉम',
    wecomTip: 'वीकॉम इंटेलिजेंट ऐप्प बनाएं',
    dingtalk: 'डिंगटॉक',
    dingtalkTip: 'डिंगटॉक इंटेलिजेंट ऐप्प बनाएं',
    wechat: 'वीचैट',
    wechatTip: 'वीचैट इंटेलिजेंट ऐप्प बनाएं',
    lark: 'लार्क',
    larkTip: 'लार्क इंटेलिजेंट ऐप्प बनाएं',
    setting: 'सेटिंग',
    callback: 'कॉलबैक पता',
    callbackTip: 'कृपया कॉलबैक पता भरें',
    wecomPlatform: 'वीकॉम ओपन प्लेटफ़ॉर्म',
    wechatPlatform: 'वीचैट ओपन प्लेटफ़ॉर्म',
    dingtalkPlatform: 'डिंगटॉक ओपन प्लेटफ़ॉर्म',
    larkPlatform: 'लार्क ओपन प्लेटफ़ॉर्म',
    slack: 'स्लैक',
    slackTip: 'स्लैक इंटेलिजेंट ऐप्प बनाएं',
    wecomSetting: {
      title: 'वीकॉम कॉन्फ़िगरेशन',
      cropId: 'क्रॉप आईडी',
      cropIdPlaceholder: 'क्रॉप आईडी दर्ज करें',
      agentIdPlaceholder: 'एजेंट आईडी दर्ज करें',
      secretPlaceholder: 'सीक्रेट दर्ज करें',
      tokenPlaceholder: 'टोकन दर्ज करें',
      encodingAesKeyPlaceholder: 'एन्कोडिंग AES कुंजी दर्ज करें',
      authenticationSuccessful: 'सत्यापन सफल',
      urlInfo: 'ऐप्प प्रबंधन → एपीआई URL सेट करें'
    },
    dingtalkSetting: {
      title: 'डिंगटॉक कॉन्फ़िगरेशन',
      clientIdPlaceholder: 'क्लाइंट आईडी दर्ज करें',
      clientSecretPlaceholder: 'क्लाइंट सीक्रेट दर्ज करें',
      urlInfo: 'रोबोट पेज पर HTTP मोड सेट करें'
    },
    wechatSetting: {
      title: 'वीचैट कॉन्फ़िगरेशन',
      appId: 'ऐप्प आईडी',
      appIdPlaceholder: 'ऐप्प आईडी दर्ज करें',
      appSecret: 'ऐप्प सीक्रेट',
      appSecretPlaceholder: 'ऐप्प सीक्रेट दर्ज करें',
      token: 'टोकन',
      tokenPlaceholder: 'टोकन दर्ज करें',
      aesKey: 'संदेश एन्क्रिप्शन कुंजी',
      aesKeyPlaceholder: 'एन्क्रिप्शन कुंजी दर्ज करें',
      urlInfo: 'सर्वर कॉन्फ़िगरेशन में URL सेट करें'
    },
    larkSetting: {
      title: 'लार्क कॉन्फ़िगरेशन',
      appIdPlaceholder: 'ऐप्प आईडी दर्ज करें',
      appSecretPlaceholder: 'ऐप्प सीक्रेट दर्ज करें',
      verificationTokenPlaceholder: 'सत्यापन टोकन दर्ज करें',
      urlInfo: 'इवेंट कॉन्फ़िगरेशन में अनुरोध पता सेट करें'
    },
    slackSetting: {
      title: 'स्लैक कॉन्फ़िगरेशन',
      signingSecretPlaceholder: 'साइनिंग सीक्रेट दर्ज करें',
      botUserTokenPlaceholder: 'बॉट यूज़र टोकन दर्ज करें'
    },
    copyUrl: 'लिंक कॉपी करें और भरें'
  },
  hitTest: {
    title: 'रिट्रीवल टेस्टिंग',
    text: 'क्वेरी टेक्स्ट के आधार पर ज्ञान का मिलान परीक्षण करें।',
    emptyMessage1: 'रिट्रीवल परिणाम यहाँ दिखाई देंगे',
    emptyMessage2: 'कोई मिलान अनुच्छेद नहीं मिला'
  }
}