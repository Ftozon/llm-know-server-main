export default {
  title: 'APP',
  createApplication: 'APP بنائیں',
  importApplication: 'APP درآمد کریں',
  copyApplication: 'APP کاپی کریں',
  workflow: 'کام کا فلو',
  simple: 'آسان',
  searchBar: {
    placeholder: 'نام کے ذریعے تلاش کریں'
  },

  setting: {
    demo: 'ڈیمو'
  },
  delete: {
    confirmTitle: 'کیا آپ واقعی اس APP کو حذف کرنا چاہتے ہیں: ',
    confirmMessage:
      'اس APP کو حذف کرنے سے اس کی خدمات مزید دستیاب نہیں ہوں گی۔ براہ کرم احتیاط کے ساتھ آگے بڑھیں۔'
  },
  tip: {
    ExportError: 'برآمد کرنا ناکام',
    professionalMessage:
      'یہ پنج APPs تک کی حمایت کرتا ہے۔',
    saveErrorMessage: 'محفوظ کرنا ناکام، براہ کرم اپنے ان پٹ کی جانچ کریں یا بعد میں دوبارہ کوشش کریں',
    loadingErrorMessage: 'ترتیبات لوڈ کرنا ناکام، براہ کرم اپنے ان پٹ کی جانچ کریں یا بعد میں دوبارہ کوشش کریں'
  },

  applicationForm: {
    title: {
      appTest: 'ڈیبگ پیش نظر',
      copy: 'کاپی'
    },
    form: {
      appName: {
        label: 'نام',
        placeholder: 'براہ کرم APP کا نام درج کریں',
        requiredMessage: 'APP کا نام ضروری ہے'
      },
      appDescription: {
        label: 'تفصیل',
        placeholder:
          'APP کے منظر کار اور استعمال کی تفصیل، مثال کے طور پر: XXX معاون جو صارفین کے XXX پروڈکٹ کے استعمال کے بارے میں سوالات کا جواب دیتا ہے۔'
      },
      appType: {
        label: 'قسم',
        simplePlaceholder: 'ابتدائی صارفین کے لیے معاون بنانا مناسب ہے۔',
        workflowPlaceholder: 'ماہر صارفین کے لیے معاون کے کام کے فلو کو خود کی ترتیب دینے کے لیے مناسب ہے۔'
      },
      appTemplate: {
        blankApp: 'خالی APP',
        assistantApp: 'علمی معاون'
      },
      aiModel: {
        label: 'AI ماڈل',
        placeholder: 'براہ کرم ایک AI ماڈل منتخب کریں'
      },
      roleSettings: {
        label: 'سسٹم کا رول',
        placeholder: 'آپ xxx معاون ہیں۔'
      },

      prompt: {
        label: 'پرامپٹ',
        noReferences: '(کوئی حوالہ علم نہیں)',
        references: ' (حوالہ علم)',
        placeholder: 'براہ کرم پرامپٹ درج کریں',
        requiredMessage: 'براہ کرم پرامپٹ درج کریں',
        tooltip:
          'پرامپٹ کے مواد کو تبدیل کرکے آپ بڑے ماڈل چیٹ کی سمت کی طرف راہنمائی کرسکتے ہیں۔',

        noReferencesTooltip:
          'پرامپٹ کے مواد کو تبدیل کرکے آپ بڑے ماڈل چیٹ کی سمت کی طرف راہنمائی کرسکتے ہیں۔ یہ پرامپٹ سیاق کے شروع میں ثابت ہوگا۔ استعمال ہونے والے متغیر: {question} صارف کا سوال ہے۔',
        referencesTooltip:
          'پرامپٹ کے مواد کو تبدیل کرکے آپ بڑے ماڈل چیٹ کی سمت کی طرف راہنمائی کرسکتے ہیں۔ یہ پرامپٹ سیاق کے شروع میں ثابت ہوگا۔ استعمال ہونے والے متغیر: {data} علم سے متعلق معلوم معلومات کو ظاہر کرتا ہے؛ {question} صارف کا سوال ہے۔',
        defaultPrompt: `معلوم معلومات: {data}
          سوال: {question}
           جواب کی ضروریات: 
           - براہ کرم صارف کے سوال کا جواب دینے کے لیے واضح اور ماہر زبان استعمال کریں۔
           `
      },
      historyRecord: {
        label: 'چیٹ کی تاریخ'
      },
      relatedKnowledge: {
        label: 'متعلقہ علم',
        placeholder: 'متعلقہ علم یہاں ظاہر ہوگا۔'
      },
      multipleRoundsDialogue: 'متعدد گول گفتگو',

      prologue: 'پروفیشنل گفتگو',
      defaultPrologue:
        'ہیلو، میں XXX معاون ہوں۔ آپ مجھ سے XXX کے استعمال کے بارے میں سوالات پوچھ سکتے ہیں۔\n- XXX کی بنیادی خصوصیات کیا ہیں؟\n- XXX کون سے LLM کو سپورٹ کرتا ہے؟\n- XXX کیا دستاویز کی قسمیں سپورٹ کرتا ہے؟',
      problemOptimization: {
        label: 'سوالات کی بہتری',
        tooltip:
          'تاریخی چیٹ کے بنیاد پر موجودہ سوال کو بہتر بنائیں تاکہ علمی نکات سے بہتر مطابقت ہو۔'
      },

      voiceInput: {
        label: 'آواز کی ان پٹ',
        placeholder: 'براہ کرم ایک آواز کی تشخیص ماڈل منتخب کریں',
        requiredMessage: 'براہ کرم ایک آواز کی ان پٹ ماڈل منتخب کریں',
        autoSend: 'خودکار بھیجنے'
      },
      voicePlay: {
        label: 'آواز کی بازی',
        placeholder: 'براہ کرم ایک آواز کی تشکیل ماڈل منتخب کریں',
        requiredMessage: 'براہ کرم ایک آواز کی بازی ماڈل منتخب کریں',
        autoPlay: 'خودکار بازی',
        browser: 'براؤزر بازی (فاری)',
        tts: 'TTS ماڈل',
        listeningTest: 'پیش نظر'
      },
      reasoningContent: {
        label: 'سوچ کا آؤٹ پٹ',
        tooltip:
          "براہ کرم ماڈل کے ریٹرن کے بنیاد پر سوچ کی لیبل ترتیب دیں، اور لیبل کے درمیان کا مواد سوچ کے عمل کے طور پر شناخت کیا جائے گا۔",
        start: 'شروع',
        end: 'اختتام'
      }
    },
    buttons: {
      publish: 'محفوظ کریں اور شائع کریں',
      addModel: 'ماڈل شامل کریں'
    },
    dialog: {
      addDataset: 'متعلقہ علم شامل کریں',
      addDatasetPlaceholder: 'منتخب کردہ علم کو ایک ہی ایمبیڈنگ ماڈل استعمال کرنا چاہیے',
      selected: 'منتخب کردہ',
      countDataset: 'علم',

      selectSearchMode: 'بحت کا طریقہ',
      vectorSearch: 'ویکٹر کی تلاش',
      vectorSearchTooltip:
        'ویکٹر کی تلاش ویکٹر فاصلے کے حساب کے بنیاد پر ایک تلاش کا طریقہ ہے، جو علم میں بڑے ڈیٹا کے لیے مناسب ہے۔',
      fullTextSearch: 'پورے متن کی تلاش',
      fullTextSearchTooltip:
        'پورے متن کی تلاش متن کی مشابہت کے بنیاد پر ایک تلاش کا طریقہ ہے، جو علم میں چھوٹے ڈیٹا کے لیے مناسب ہے۔',
      hybridSearch: 'ہائبرڈ تلاش',
      hybridSearchTooltip:
        'ہائبرڈ تلاش ویکٹر اور متن کی مشابہت دونوں کے بنیاد پر ایک تلاش کا طریقہ ہے، جو علم میں درمیانہ ڈیٹا کے لیے مناسب ہے۔',
      similarityThreshold: 'کم از کم مشابہت',
      similarityTooltip: 'مشابہت زیادہ ہونے سے تعلق مضبوط ہوتا ہے۔',
      topReferences: 'سراسری N حصے',
      maxCharacters: 'فی حوالہ زیادہ سے زیادہ حروف',
      noReferencesAction: 'جب کوئی علمی حوالہ نہیں ہو',
      continueQuestioning: 'AI ماڈل سے مزید سوال کرنا جاری رکھیں',
      provideAnswer: 'جواب کی مخصوص مواد فراہم کریں',
      designated_answer:
        'ہیلو، میں XXX معاون ہوں۔ میرا علم صرف XXX پروڈکٹس سے متعلق معلومات پر مشتمل ہے۔ براہ کرم اپنا سوال دوبارہ پیش کریں۔',
      defaultPrompt1:
        "قوسین () میں موجود مواد صارف کا سوال ظاہر کرتا ہے۔ سیاق کے بنیاد پر، براہ کرم صارف کے سوال کا اندازہ لگائیں اور اسے مکمل کریں ({question})۔ ضرورت یہ ہے کہ مکمل سوال آؤٹ پٹ کیا جائے اور اسے",
      defaultPrompt2: 'ٹیگ'
    }
  },
  applicationAccess: {
    title: 'APP رسائی',
    wecom: 'ویکام',
    wecomTip: 'ویکام کا ذہین APP بنائیں',
    dingtalk: 'ڈنگٹاک',
    dingtalkTip: 'ڈنگٹاک کا ذہین APP بنائیں',
    wechat: 'ویچیٹ',
    wechatTip: 'ویچیٹ کا ذہین APP بنائیں',
    lark: 'لارک',
    larkTip: 'لارک کا ذہین APP بنائیں',
    setting: 'ترتیبات',
    callback: 'کال بیک پتہ',
    callbackTip: 'براہ کرم کال بیک پتہ درج کریں',
    wecomPlatform: 'ویکام کا کھلا پلیٹ فارم',
    wechatPlatform: 'ویچیٹ کا کھلا پلیٹ فارم',
    dingtalkPlatform: 'ڈنگٹاک کا کھلا پلیٹ فارم',
    larkPlatform: 'لارک کا کھلا پلیٹ فارم',
    slack: 'سلیک',
    slackTip: 'سلیک کا ذہین APP بنائیں',
    wecomSetting: {
      title: 'ویکام کی ترتیبات',
      cropId: 'کروپ ID',
      cropIdPlaceholder: 'براہ کرم کروپ ID درج کریں',
      agentIdPlaceholder: 'براہ کرم ایجنٹ ID درج کریں',
      secretPlaceholder: 'براہ کرم راز درج کریں',
      tokenPlaceholder: 'براہ کرم ٹوکن درج کریں',
      encodingAesKeyPlaceholder: 'براہ کرم EncodingAESKey درج کریں',
      authenticationSuccessful: 'کامیابی',
      urlInfo:
        '-APP مینجمنٹ-خود بنائیں-بنائے گئے APP-پیغامات وصول کریں-تنظیم کریں "URL" جو API کے ذریعے وصول ہوگا'
    },
    dingtalkSetting: {
      title: 'ڈنگٹاک کی ترتیبات',
      clientIdPlaceholder: 'براہ کرم کلائنٹ ID درج کریں',
      clientSecretPlaceholder: 'براہ کرم کلائنٹ راز درج کریں',
      urlInfo:
        '-روبوٹ پیج پر، "پیغام وصول کرنے کا طریقہ" کو HTTP میں سیٹ کریں، اور اوپر دیا گیا URL "پیغام وصول کرنے کا پتہ" میں درج کریں۔'
    },
    wechatSetting: {
      title: 'ویچیٹ کی ترتیبات',
      appId: 'APP ID',
      appIdPlaceholder: 'براہ کرم APP ID درج کریں',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'براہ کرم APP SECRET درج کریں',
      token: 'TOKEN',
      tokenPlaceholder: 'براہ کرم TOKEN درج کریں',
      aesKey: 'پیغام کی تشفی کی چابی',
      aesKeyPlaceholder: 'براہ کرم پیغام کی تشفی کی چابی درج کریں',
      urlInfo:
        '-ترتیبات اور ترقی-بنیادی ترتیبات-"سرور پتہ URL" سرور کی ترتیبات میں'
    },
    larkSetting: {
      title: 'لارک کی ترتیبات',
      appIdPlaceholder: 'براہ کرم APP ID درج کریں',
      appSecretPlaceholder: 'براہ کرم APP راز درج کریں',
      verificationTokenPlaceholder: 'براہ کرم وریفکیشن ٹوکن درج کریں',
      urlInfo:
        '-واقعات اور کال بیک - واقعات کی ترتیبات - سبسکرپشن طریقہ کے "درخواست پتہ" کی ترتیب دیں۔'
    },
    slackSetting: {
      title: 'سلیک کی ترتیبات',
      signingSecretPlaceholder: 'براہ کرم سائننگ راز درج کریں',
      botUserTokenPlaceholder: 'براہ کرم بوٹ صارف ٹوکن درج کریں'
    },
    copyUrl: 'لنک کاپی کریں اور اسے بھریں۔'
  },
  hitTest: {
    title: 'بحت کا پرکھ',
    text: 'دیے گئے سوال کے متن کی بنیاد پر علم کے اثر کا پرکھ کریں۔',
    emptyMessage1: 'بحت کے پرکھ کے نتائج یہاں ظاہر ہوں گے۔',
    emptyMessage2: 'کوئی مماثل حصہ نہیں ملا۔'
  }
}