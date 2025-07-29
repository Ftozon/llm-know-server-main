export default {
  node: 'نود',
  nodeName: 'نود کا نام',
  baseComponent: 'بنیادی',
  nodeSetting: 'نود ترتیبات',
  workflow: 'ورک فلو',
  searchBar: {
    placeholder: 'نام کے ذریعہ تلاش کریں'
  },
  info: {
    previewVersion: 'پیش نظارہ ورژن:',
    saveTime: 'آخرین محفوظ کی گئی:'
  },
  setting: {
    restoreVersion: 'پچھلی ورژن بحال کریں"',
    restoreCurrentVersion: 'اس ورژن پر بحال کریں',
    addComponent: 'شامل کریں',
    public: 'نشر کریں',
    releaseHistory: 'نشر کی تاریخ',
    autoSave: 'خودکار محفوظ کریں',
    latestRelease: 'تازہ ترین ریلیز',
    copyParam: 'پیرامیٹرز کاپی کریں',
    debug: 'چلائیں',
    exit: 'بند کریں',
    exitSave: 'محفوظ کریں اور خارج ہوں',
  },
  tip: {
    publicSuccess: 'کامیابی کے ساتھ شائع کیا گیا',
    noData: 'کوئی متعلقہ نتیجہ نہیں ملا',
    nameMessage: 'نام خالی نہیں ہوسکتا!',
    onlyRight: 'کنکشن صرف دائیں اینکر سے بنایا جا سکتا ہے',
    notRecyclable: 'حلقہ کنکشن کی اجازت نہیں ہے',
    onlyLeft: 'کنکشن صرف بائیں اینکر سے بنایا جا سکتا ہے',
    applicationNodeError: 'یہ ایپ دستیاب نہیں ہے',
    functionNodeError: 'یہ فنکشن نود دستیاب نہیں ہے',
    repeatedNodeError: 'اس نام کا نود پہلے سے موجود ہے',
    cannotCopy: 'کاپی نہیں کیا جا سکتا',
    copyError: 'نود پہلے ہی کاپی ہو چکا ہے',
    paramErrorMessage: 'پیرامیٹر پہلے سے موجود ہے: ',
    saveMessage: 'موجودہ تبدیلیاں محفوظ نہیں کی گئیں۔ باہر نکلنے سے پہلے محفوظ کریں؟',
  },
  delete: {
    confirmTitle: 'کیا آپ واقعی اس نود کو حذف کرنا چاہتے ہیں؟',
    deleteMessage: 'یہ نود حذف نہیں کیا جا سکتا'
  },
  control: {
    zoomOut: 'زوم آؤٹ',
    zoomIn: 'زوم ان',
    fitView: 'اسکرین کے مطابق فٹ کریں',
    retract: 'سب کو مڑائیں',
    extend: 'سب کو پھیلائیں',
    beautify: 'خودکار ترتیب دیں'
  },
  variable: {
    label: 'متغیر',
    global: 'عالمی متغیر',
    Referencing: 'حوالہ دیا گیا متغیر',
    ReferencingRequired: 'حوالہ دیا گیا متغیر درکار ہے',
    ReferencingError: 'غلط حوالہ دیا گیا متغیر',
    NoReferencing: 'حوالہ دیا گیا متغیر موجود نہیں',
    placeholder: 'براہ کرم ایک متغیر منتخب کریں'
  },
  condition: {
    title: 'نافذ شرط',
    front: 'پیش شرط',
    AND: 'تمام',
    OR: 'کوئی بھی',
    text: 'جب جڑا ہوا نود نافذ ہوتا ہے، تو موجودہ نود نافذ کریں'
  },
  validate: {
    startNodeRequired: 'شروع نود درکار ہے',
    startNodeOnly: 'صرف ایک شروع نود کی اجازت ہے',
    baseNodeRequired: 'بنیادی معلومات نود درکار ہے',
    baseNodeOnly: 'صرف ایک بنیادی معلومات نود کی اجازت ہے',
    notInWorkFlowNode: 'ورک فلو میں نود موجود نہیں ہے',
    noNextNode: 'اگلا نود موجود نہیں ہے',
    nodeUnavailable: 'نود دستیاب نہیں ہے',
    needConnect1: 'نود کی شاخ کو جڑنا ضروری ہے',
    cannotEndNode: 'یہ نود آخری نود کے طور پر استعمال نہیں کیا جا سکتا'
  },
  nodes: {
    startNode: {
      label: 'شروع',
      question: 'صارف کا سوال',
      currentTime: ' موجودہ وقت'
    },
    baseNode: {
      label: 'بنیادی معلومات',
      appName: {
        label: 'ایپ کا نام'
      },
      appDescription: {
        label: 'ایپ کی وضاحت'
      },
      fileUpload: {
        label: 'فائل اپ لوڈ',
        tooltip: 'جب فعال ہو تو، Q&A صفحہ پر فائل اپ لوڈ کا بٹن ظاہر ہوگا۔'
      },
      FileUploadSetting: {
        title: 'فائل اپ لوڈ ترتیبات',
        maxFiles: 'فی ایک اپ لوڈ میں زیادہ سے زیادہ فائلیں',
        fileLimit: 'فی فائل زیادہ سے زیادہ سائز (MB)',
        fileUploadType: {
          label: 'اپ لوڈ کے لیے فائل کی قسمیں',
          documentText: 'اس کے لیے "دستاویز مواد استخراج" نود کی ضرورت ہے تاکہ دستاویز کے مواد کو پارس کیا جا سکے',
          imageText: 'اس کے لیے "تصویر کی تفہیم" نود کی ضرورت ہے تاکہ تصویر کے مواد کو پارس کیا جا سکے',
          audioText: 'اس کے لیے "آڈیو-ٹو-ٹیکسٹ" نود کی ضرورت ہے تاکہ آڈیو کے مواد کو پارس کیا جا سکے'
        }
      }
    },
    aiChatNode: {
      label: 'AI چیٹ',
      text: 'ایک AI ماڈل کے ساتھ چیٹ کریں',
      answer: 'AI مواد',
      returnContent: {
        label: 'مواد واپس کریں',
        tooltip: `اگر بند کر دیا جائے تو، اس نود کا مواد صارف کو آؤٹ پٹ نہیں ہوگا۔
                  اگر آپ چاہتے ہیں کہ صارف اس نود کا آؤٹ پٹ دیکھ سکے تو، براہ کرم سوئچ کو چالو کریں۔`
      },
      defaultPrompt: 'معلوم معلومات',
      think: 'سوچنے کا عمل'
    },
    searchDatasetNode: {
      label: 'معلومات استرجاع',
      text: 'صارف کے سوالات سے متعلق متن کی محتویات کو معلومات سے تلاش کرنے کی اجازت دیں',
      paragraph_list: 'استرجاع شدہ حصوں کی فہرست',
      is_hit_handling_method_list: 'مستقیم جواب کی معیارات کو پورا کرنے والے حصوں کی فہرست',
      result: 'تلاش کا نتیجہ',
      directly_return: 'مستقیم جواب کی معیارات کو پورا کرنے والے حصوں کا مواد',
      searchParam: 'استرجاع پیرامیٹرز',
      searchQuestion: {
        label: 'سوال',
        placeholder: 'براہ کرم تلاش کے سوال کو منتخب کریں',
        requiredMessage: 'براہ کرم تلاش کے سوال کو منتخب کریں'
      }
    },
    questionNode: {
      label: 'سوال کی بہتری',
      text: 'ماضی کے چیٹ ریکارڈ کی بنیاد پر موجودہ سوال کو بہتر بنائیں تاکہ وہ معلومات کے حصوں سے بہتر مل کرے',
      result: 'بہتر شدہ سوال کا نتیجہ',
      defaultPrompt1: `صارف کے سوال کو بہتر بنائیں اور متن کے مطابق بہتر کریں:`,
      defaultPrompt2: `براہ کرم ایک بہتر شدہ سوال کا آؤٹ پٹ کریں۔`,
      systemDefault: 'آپ ایک سوال بہتری کے ماہر ہیں'
    },
    conditionNode: {
      label: 'شرطی شاخ',
      text: 'شرائط کی بنیاد پر مختلف نودز کو چلاتے ہیں',
      branch_name: 'شاخ کا نام',
      conditions: {
        label: 'شرائط',
        info: 'مندرجہ ذیل کو پورا کرتا ہے',
        requiredMessage: 'براہ کرم شرائط کو منتخب کریں'
      },
      valueMessage: 'براہ کرم قدر درج کریں',
      addCondition: 'شرط شامل کریں',
      addBranch: 'شاخ شامل کریں'
    },
    replyNode: {
      label: 'معینہ جواب',
      text: 'جواب کی محتویات کو مقرر کریں، حوالہ دیے گئے متغیرات کو سٹرنگ کے طور پر تبدیل کر کے آؤٹ پٹ کریں گے',
      content: 'مواد',
      replyContent: {
        label: 'جواب کی محتویات',
        custom: 'اختیاری',
        reference: 'حوالہ دیا گیا متغیر'
      }
    },
    rerankerNode: {
      label: 'متعدد راستے کی یادداشت',
      text: 'دوبارہ ترتیب دینے والے ماڈل کا استعمال کر کے متعدد معلومات کے ذرائع سے استرجاع کے نتائج کو بہتر بنائیں',
      result_list: 'دوبارہ ترتیب دیے گئے نتائج کی فہرست',
      result: 'دوبارہ ترتیب دینے کا نتیجہ',
      rerankerContent: {
        label: 'دوبارہ ترتیب دینے کا مواد',
        requiredMessage: 'براہ کرم دوبارہ ترتیب دینے کا مواد منتخب کریں'
      },
      higher: 'زیادہ',
      ScoreTooltip: 'Score جتنا زیادہ ہوگا، اس کا تعلق اتنا ہی مضبوط ہوگا۔',
      max_paragraph_char_number: 'زیادہ سے زیادہ حروف',
      reranker_model: {
        label: 'دوبارہ ترتیب دیں',
        placeholder: 'براہ کرم دوبارہ ترتیب دیں'
      }
    },
    formNode: {
      label: 'فارم ان پٹ',
      text: 'Q&A کے دوران صارف کے ان پٹ کو جمع کریں اور بعد کی عملیات میں استعمال کریں',
      form_content_format1: 'سلام، براہ کرم نیچے دیے گئے فارم کو بھریں:',
      form_content_format2: 'اسے بھرنے کے بعد [جمع کریں] بٹن پر کلک کریں۔',
      form_data: 'تمام فارم مواد',
      formContent: {
        label: 'فارم آؤٹ پٹ مواد',
        requiredMessage:
          'براہ کرم اس نود کے آؤٹ پٹ مواد کو ترتیب دیں، { form } فارم کے لیے پلیس ہولڈر ہے۔',
        tooltip: 'اس نود کے آؤٹ پٹ مواد کو تعریف کریں۔ { form } فارم کے لیے پلیس ہولڈر ہے'
      },
      formAllContent: 'تمام فارم مواد',
      formSetting: 'فارم کی ترتیبات'
    },
    documentExtractNode: {
      label: 'دستاویز مواد استخراج',
      text: 'دستاویز سے مواد استخراج کریں',
      content: 'دستاویز مواد'
    },
    imageUnderstandNode: {
      label: 'تصویر کی تفہیم',
      text: 'تصاویر کا تجزیہ کریں تاکہ اشیاء، مناظر کی شناخت کی جا سکے اور جوابات فراہم کیے جا سکیں',
      answer: 'AI مواد',
      model: {
        label: 'بصری ماڈل',
        requiredMessage: 'براہ کرم بصری ماڈل کو منتخب کریں'
      },
      image: {
        label: 'تصویر کو منتخب کریں',
        requiredMessage: 'براہ کرم تصویر کو منتخب کریں'
      }
    },
    variableAssignNode: {
      label: 'متغیر تفویض',
      text: 'عالمی متغیر کی قدر کو تازہ کریں',
      assign: 'قدر تفویض کریں'
    },
    imageGenerateNode: {
      label: 'تصویر تولید',
      text: 'فراہم کردہ متن کی بنیاد پر تصاویر تولید کریں',
      answer: 'AI مواد',
      model: {
        label: 'تصویر تولید ماڈل',
        requiredMessage: 'براہ کرم تصویر تولید ماڈل کو منتخب کریں'
      },
      prompt: {
        label: 'مثبت پرومپٹ',
        tooltip: 'تولید شدہ تصویر میں شامل عناصر اور بصری خصوصیات کی وضاحت کریں'
      },
      negative_prompt: {
        label: 'منفی پرومپٹ',
        tooltip: 'تولید شدہ تصویر سے خارج کرنے کے لیے عناصر کی وضاحت کریں',
        placeholder:
          'براہ کرم وہ مواد بیان کریں جو آپ تولید نہیں کرنا چاہتے ہیں، جیسے رنگ، خون آلود مواد'
      }
    },
    speechToTextNode: {
      label: 'بولی-ٹو-ٹیکسٹ',
      text: 'بولی کی شناخت ماڈل کے ذریعہ آڈیو کو متن میں تبدیل کریں',
      stt_model: {
        label: 'بولی کی شناخت ماڈل'
      },
      audio: {
        label: 'آڈیو فائل منتخب کریں',
        placeholder: 'براہ کرم آڈیو فائل کو منتخب کریں'
      }
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'بولی کی تشکیل ماڈل کے ذریعہ متن کو آڈیو میں تبدیل کریں',
      tts_model: {
        label: 'بولی کی تشکیل ماڈل'
      },
      content: {
        label: 'متن کی محتویات منتخب کریں'
      }
    },
    functionNode: {
      label: 'اختیاری فنکشن',
      text: 'اختیاری اسکرپٹس کو چلائیں تاکہ ڈیٹا پروسیسنگ کو حاصل کیا جا سکے'
    },
    applicationNode: {
      label: 'APP نود'
    }
  },
  compare: {
    is_null: 'خالی ہے',
    is_not_null: 'خالی نہیں ہے',
    contain: 'شامل کرتا ہے',
    not_contain: 'شامل نہیں کرتا',
    eq: 'برابر ہے',
    ge: 'برابر یا زیادہ ہے',
    gt: 'زیادہ ہے',
    le: 'برابر یا کم ہے',
    lt: 'کم ہے',
    len_eq: 'لمبائی برابر ہے',
    len_ge: 'لمبائی برابر یا زیادہ ہے',
    len_gt: 'لمبائی زیادہ ہے',
    len_le: 'لمبائی برابر یا کم ہے',
    len_lt: 'لمبائی کم ہے'
  },
  FileUploadSetting: {}
}