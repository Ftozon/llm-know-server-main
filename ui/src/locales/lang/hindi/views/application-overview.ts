export default {
  title: 'अवलोकन',
  appInfo: {
    header: 'ऐप्प जानकारी',
    publicAccessLink: 'सार्वजनिक URL',
    openText: 'चालू',
    closeText: 'बंद',
    copyLinkText: 'लिंक कॉपी करें',
    refreshLinkText: 'लिंक रिफ्रेश करें',
    demo: 'पूर्वावलोकन',
    embedInWebsite: 'एम्बेड कोड प्राप्त करें',
    accessControl: 'एक्सेस नियंत्रण',
    displaySetting: 'प्रदर्शन सेटिंग्स',
    apiAccessCredentials: 'API एक्सेस क्रेडेंशियल्स',
    apiKey: 'API कुंजी',
    refreshToken: {
      msgConfirm1: 'क्या आप वाकई सार्वजनिक URL पुनः उत्पन्न करना चाहते हैं?',
      msgConfirm2: 'नया URL जनरेट करने से तृतीय-पक्ष साइट्स पर मौजूदा एम्बेड कोड प्रभावित होंगे। आपको नया कोड अपडेट करना होगा। सावधानी से आगे बढ़ें!',
      refreshSuccess: 'सफलतापूर्वक रिफ्रेश किया गया'
    },
    APIKeyDialog: {
      saveSettings: 'सेटिंग्स सहेजें',
      msgConfirm1: 'क्या आप API कुंजी हटाना चाहते हैं',
      msgConfirm2: 'यह क्रिया अपरिवर्तनीय है। हटाने के बाद API कुंजी पुनर्प्राप्त नहीं की जा सकती। क्या आप आगे बढ़ना चाहते हैं?',
      enabledSuccess: 'सक्षम किया गया',
      disabledSuccess: 'अक्षम किया गया'
    },
    EditAvatarDialog: {
      title: 'ऐप्प लोगो',
      customizeUpload: 'कस्टम अपलोड',
      upload: 'अपलोड करें',
      default: 'डिफ़ॉल्ट लोगो',
      custom: 'कस्टम',
      sizeTip: 'अनुशंसित आकार: 32×32 पिक्सेल। JPG, PNG, GIF सपोर्टेड। अधिकतम आकार: 10 MB',
      fileSizeExceeded: 'फ़ाइल आकार 10 MB से अधिक',
      uploadImagePrompt: 'कृपया एक छवि अपलोड करें'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'पूर्णस्क्रीन मोड',
      copyInstructions: 'एम्बेड करने के लिए नीचे का कोड कॉपी करें',
      floatingModeTitle: 'फ़्लोटिंग मोड'
    },
    LimitDialog: {
      dialogTitle: 'एक्सेस प्रतिबंध',
      showSourceLabel: 'ज्ञान स्रोत दिखाएं',
      clientQueryLimitLabel: 'प्रति क्लाइंट क्वेरी सीमा',
      authentication: 'प्रमाणीकरण',
      authenticationValue: 'एक्सेस पासवर्ड',
      timesDays: 'प्रतिदिन क्वेरीज़',
      whitelistLabel: 'अनुमत डोमेन',
      whitelistPlaceholder: 'प्रति लाइन एक डोमेन दर्ज करें। उदा.:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'क्रॉस-डोमेन एक्सेस अनुमति दें',
      crossDomainPlaceholder: 'अनुमत डोमेन दर्ज करें। खाली छोड़ने पर कोई प्रतिबंध नहीं।\nप्रति लाइन एक, उदा.:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingDisplayDialog: {
      dialogTitle: 'प्रदर्शन सेटिंग्स',
      languageLabel: 'भाषा',
      showSourceLabel: 'ज्ञान स्रोत दिखाएं',
      showExecutionDetail: 'कार्यान्वयन विवरण दिखाएं',
      restoreDefault: 'डिफ़ॉल्ट पुनर्स्थापित करें',
      customThemeColor: 'कस्टम थीम रंग',
      headerTitleFontColor: 'हैडर टाइटल फ़ॉन्ट रंग',
      default: 'डिफ़ॉल्ट',
      askUserAvatar: 'उपयोगकर्ता अवतार (प्रश्न करते समय)',
      replace: 'बदलें',
      imageMessage: 'अनुशंसित आकार: 32×32 पिक्सेल। JPG, PNG, GIF सपोर्टेड। अधिकतम आकार: 10 MB',
      AIAvatar: 'एआई अवतार',
      floatIcon: 'फ़्लोटिंग आइकन',
      iconDefaultPosition: 'डिफ़ॉल्ट आइकन स्थिति',
      iconPosition: {
        left: 'बाएं',
        right: 'दाएं',
        bottom: 'नीचे',
        top: 'ऊपर'
      },
      draggablePosition: 'ड्रैग करने योग्य स्थिति',
      showHistory: 'चैट इतिहास दिखाएं',
      displayGuide: 'मार्गदर्शक छवि दिखाएं (फ़्लोटिंग मोड)',
      disclaimer: 'अस्वीकरण',
      disclaimerValue: 'यह सामग्री एआई द्वारा जनरेट की गई है और केवल संदर्भ के लिए है।'
    }
  },
  monitor: {
    monitoringStatistics: 'मॉनिटरिंग सांख्यिकी',
    customRange: 'कस्टम रेंज',
    startDatePlaceholder: 'प्रारंभ तिथि',
    endDatePlaceholder: 'समाप्ति तिथि',
    pastDayOptions: {
      past7Days: 'पिछले 7 दिन',
      past30Days: 'पिछले 30 दिन',
      past90Days: 'पिछले 90 दिन',
      past183Days: 'पिछले 6 महीने',
      other: 'कस्टम'
    },
    charts: {
      customerTotal: 'कुल उपयोगकर्ता',
      customerNew: 'नए उपयोगकर्ता',
      queryCount: 'कुल क्वेरीज़',
      tokensTotal: 'कुल उपयोग किए गए टोकन',
      userSatisfaction: 'उपयोगकर्ता प्रतिक्रिया मेट्रिक्स',
      approval: 'पसंद',
      disapproval: 'नापसंद'
    }
  }
}