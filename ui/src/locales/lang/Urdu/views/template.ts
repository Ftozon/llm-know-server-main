export default {
  title: 'ماڈلز',
  provider: 'فراہم کنندہ',
  providerPlaceholder: 'فراہم کنندہ منتخب کریں',
  addModel: 'ماڈل شامل کریں',
  searchBar: {
    placeholder: 'نام کے ذریعہ تلاش کریں'
  },
  delete: {
    confirmTitle: 'ماڈل حذف کریں',
    confirmMessage: 'کیا آپ واقعی ماڈل کو حذف کرنا چاہتے ہیں:'
  },
  tip: {
    createSuccessMessage: 'ماڈل کامیابی کے ساتھ تخلیق ہوا',
    createErrorMessage: 'بنیادی معلومات میں غلطیاں ہیں',
    errorMessage: 'متغیر پہلے سے موجود ہے: ',
    emptyMessage1: 'براہ کرم بنیادی معلومات میں ماڈل کی قسم اور بنیادی ماڈل منتخب کریں',
    emptyMessage2: 'منتخب شدہ ماڈل پیرامیٹرز کی ترتیبات کی حمایت نہیں کرتا',
    updateSuccessMessage: 'ماڈل کامیابی کے ساتھ اپڈیٹ ہوا',
    saveSuccessMessage: 'ماڈل پیرامیٹرز کامیابی کے ساتھ محفوظ ہوئے',
    downloadError: 'ڈاؤن لوڈ ناکام',
    noModel: 'Ollama میں ماڈل موجود نہیں ہے'
  },
  model: {
    allModel: 'تمام ماڈلز',
    publicModel: 'عام ماڈلز',
    privateModel: 'خصوصی ماڈلز',
    LLM: 'LLM',
    EMBEDDING: 'Embedding ماڈل',
    RERANKER: 'دوبارہ ترتیب دینے والا',
    STT: 'بولی سے متن',
    TTS: 'TTS',
    IMAGE: 'بصری ماڈل',
    TTI: 'تصویر پیداوار'
  },
  templateForm: {
    title: {
      baseInfo: 'بنیادی معلومات',
      advancedInfo: 'اعلی ترتیبات',
      modelParams: 'ماڈل پیرامیٹرز',
      editParam: 'پیرامیٹر میں ترمیم کریں',
      addParam: 'پیرامیٹر شامل کریں',
      paramSetting: 'ماڈل پیرامیٹر ترتیبات',
      apiParamPassing: 'انٹرفیس پیرامیٹرز'
    },
    form: {
      templateName: {
        label: 'ماڈل کا نام',
        placeholder: 'بنیادی ماڈل کے لیے نام تفویض کریں',
        tooltip: 'LLM-Know میں مخصوص ماڈل کا نام',
        requiredMessage: 'ماڈل کا نام خالی نہیں ہو سکتا'
      },
      permissionType: {
        label: 'اذن',
        privateDesc: 'صرف موجودہ صارف کے لیے دستیاب',
        publicDesc: 'تمام صارفین کے لیے دستیاب',
        requiredMessage: 'اذن خالی نہیں ہو سکتا'
      },
      model_type: {
        label: 'ماڈل کی قسم',
        placeholder: 'ماڈل کی قسم منتخب کریں',
        tooltip1:
          'LLM: AI چیٹ کے لیے استنباط ماڈل APP میں۔',
        tooltip2:
          'Embedding ماڈل: معروفیت میں دستاویز کے مواد کو ویکٹرائز کرنے کے لیے ماڈل۔',
        tooltip3: 'بولی سے متن: APP میں بولی کی شناخت کے لیے استعمال ہونے والا ماڈل۔',
        tooltip4: 'TTS: APP میں TTS کے لیے استعمال ہونے والا ماڈل۔',
        tooltip5:
          'دوبارہ ترتیب دینے والا: جب متعدد راستے کی یادداشت کا استعمال کرتے ہوئے مرشح حصوں کو دوبارہ ترتیب دینے کے لیے استعمال ہونے والا ماڈل۔',
        tooltip6:
          'بصری ماڈل: اعلیٰ تنظیم APP میں تصویر کی تفہیم کے لیے استعمال ہونے والا بصری ماڈل۔',
        tooltip7:
          'تصویر پیداوار: اعلیٰ تنظیم APP میں تصویر کی پیداوار کے لیے استعمال ہونے والا بصری ماڈل۔',
        requiredMessage: 'ماڈل کی قسم خالی نہیں ہو سکتا'
      },
      base_model: {
        label: 'بنیادی ماڈل',
        tooltip:
          'فہرست میں شامل نہ ہونے والے ماڈلز کے لیے، ماڈل کا نام درج کریں اور Enter دبائیں۔',
        placeholder: 'بنیادی ماڈل کا نام درج کریں اور Enter دبائیں تاکہ شامل کیا جا سکے',
        requiredMessage: 'بنیادی ماڈل خالی نہیں ہو سکتا'
      }
    }
  },
  download: {
    downloading: 'ڈاؤن لوڈ ہو رہا ہے...',
    cancelDownload: 'ڈاؤن لوڈ منسوخ کریں'
  }
}