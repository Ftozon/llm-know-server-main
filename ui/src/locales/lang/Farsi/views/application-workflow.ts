export default {
  node: 'گره',
  nodeName: 'نام گره',
  baseComponent: 'پایه',
  nodeSetting: 'تنظیمات گره',
  workflow: 'جریان کاری',
  searchBar: {
    placeholder: 'جستجو بر اساس نام'
  },
  info: {
    previewVersion: 'نسخه پیش‌نمایش:',
    saveTime: 'آخرین ذخیره‌سازی:'
  },
  setting: {
    restoreVersion: 'بازگردانی نسخه قبلی"',
    restoreCurrentVersion: 'بازگردانی به این نسخه',
    addComponent: 'افزودن',
    public: 'انتشار',
    releaseHistory: 'تاریخچه انتشار',
    autoSave: 'ذخیره خودکار',
    latestRelease: 'جدیدترین انتشار',
    copyParam: 'کپی پارامترها',
    debug: 'اجرا',
    exit: 'خروج',
    exitSave: 'ذخیره و خروج',
  },
  tip: {
    publicSuccess: 'با موفقیت منتشر شد',
    noData: 'نتیجه مرتبطی یافت نشد',
    nameMessage: 'نام نمی‌تواند خالی باشد!',
    onlyRight: 'اتصال فقط از لنگر سمت راست مجاز است',
    notRecyclable: 'اتصال حلقه‌ای مجاز نیست',
    onlyLeft: 'اتصال فقط به لنگر سمت چپ مجاز است',
    applicationNodeError: 'این برنامه در دسترس نیست',
    functionNodeError: 'این گره تابع در دسترس نیست',
    repeatedNodeError: 'گره‌ای با این نام از قبل وجود دارد',
    cannotCopy: 'قابل کپی نیست',
    copyError: 'گره از قبل کپی شده است',
    paramErrorMessage: 'پارامتر از قبل وجود دارد: ',
    saveMessage: 'تغییرات فعلی ذخیره نشده‌اند. آیا می‌خواهید قبل از خروج ذخیره کنید؟',
  },
  delete: {
    confirmTitle: 'آیا مطمئن هستید که می‌خواهید این گره را حذف کنید؟',
    deleteMessage: 'این گره قابل حذف نیست'
  },
  control: {
    zoomOut: 'کوچک‌نمایی',
    zoomIn: 'بزرگ‌نمایی',
    fitView: 'تناسب با صفحه',
    retract: 'جمع‌کردن همه',
    extend: 'بازکردن همه',
    beautify: 'چیدمان خودکار'
  },
  variable: {
    label: 'متغیر',
    global: 'متغیر جهانی',
    Referencing: 'متغیر مرجع',
    ReferencingRequired: 'متغیر مرجع الزامی است',
    ReferencingError: 'متغیر مرجع نامعتبر است',
    NoReferencing: 'متغیر مرجع وجود ندارد',
    placeholder: 'لطفاً یک متغیر انتخاب کنید'
  },
  condition: {
    title: 'شرط اجرایی',
    front: 'پیش‌شرط',
    AND: 'همه',
    OR: 'هر کدام',
    text: 'پس از اجرای گره متصل، گره فعلی اجرا شود'
  },
  validate: {
    startNodeRequired: 'گره شروع الزامی است',
    startNodeOnly: 'فقط یک گره شروع مجاز است',
    baseNodeRequired: 'گره اطلاعات پایه الزامی است',
    baseNodeOnly: 'فقط یک گره اطلاعات پایه مجاز است',
    notInWorkFlowNode: 'گره خارج از جریان کاری',
    noNextNode: 'گره بعدی وجود ندارد',
    nodeUnavailable: 'گره در دسترس نیست',
    needConnect1: 'شاخه گره باید متصل شود',
    cannotEndNode: 'این گره نمی‌تواند به عنوان گره پایانی استفاده شود'
  },
  nodes: {
    startNode: {
      label: 'شروع',
      question: 'سوال کاربر',
      currentTime: 'زمان فعلی'
    },
    baseNode: {
      label: 'اطلاعات پایه',
      appName: {
        label: 'نام برنامه'
      },
      appDescription: {
        label: 'توضیحات برنامه'
      },
      fileUpload: {
        label: 'آپلود فایل',
        tooltip: 'هنگام فعال‌سازی، دکمه آپلود فایل در صفحه پرس‌وجو نمایش داده می‌شود.'
      },
      FileUploadSetting: {
        title: 'تنظیمات آپلود فایل',
        maxFiles: 'حداکثر تعداد فایل در هر آپلود',
        fileLimit: 'حداکثر اندازه هر فایل (MB)',
        fileUploadType: {
          label: 'انواع فایل‌های مجاز برای آپلود',
          documentText: 'نیاز به گره "استخراج محتوای سند" برای تجزیه محتوای سند',
          imageText: 'نیاز به گره "درک تصویر" برای تجزیه محتوای تصویر',
          audioText: 'نیاز به گره "تبدیل گفتار به متن" برای تجزیه محتوای صوتی'
        }
      }
    },
    aiChatNode: {
      label: 'چت هوش مصنوعی',
      text: 'چت با مدل هوش مصنوعی',
      answer: 'محتوای هوش مصنوعی',
      returnContent: {
        label: 'بازگشت محتوا',
        tooltip: `اگر غیرفعال باشد، محتوای این گره به کاربر خروجی داده نخواهد شد.
                  اگر می‌خواهید کاربر خروجی این گره را مشاهده کند، لطفاً سوئیچ را فعال کنید.`
      },
      defaultPrompt: 'اطلاعات شناخته‌شده',
      think: 'فرآیند تفکر'
    },
    searchDatasetNode: {
      label: 'بازیابی دانش',
      text: 'به شما امکان می‌دهد محتوای متنی مرتبط با سوالات کاربر را از دانش استخراج کنید',
      paragraph_list: 'لیست بخش‌های بازیابی‌شده',
      is_hit_handling_method_list: 'لیست بخش‌هایی که معیار پاسخ مستقیم را برآورده می‌کنند',
      result: 'نتیجه جستجو',
      directly_return: 'محتوای بخش‌هایی که معیار پاسخ مستقیم را برآورده می‌کنند',
      searchParam: 'پارامترهای بازیابی',
      searchQuestion: {
        label: 'سوال',
        placeholder: 'لطفاً یک سوال جستجو انتخاب کنید',
        requiredMessage: 'لطفاً یک سوال جستجو انتخاب کنید'
      }
    },
    questionNode: {
      label: 'بهینه‌سازی سوال',
      text: 'بهینه‌سازی و بهبود سوال فعلی بر اساس سابقه چت برای تطابق بهتر با بخش‌های دانش',
      result: 'نتیجه سوال بهینه‌شده',
      defaultPrompt1: `بهینه‌سازی و بهبود سوال کاربر بر اساس زمینه:`,
      defaultPrompt2: `لطفاً یک سوال بهینه‌شده خروجی دهید.`,
      systemDefault: 'شما یک متخصص بهینه‌سازی سوال هستید'
    },
    conditionNode: {
      label: 'شاخه شرطی',
      text: 'فعال کردن گره‌های مختلف بر اساس شرایط',
      branch_name: 'نام شاخه',
      conditions: {
        label: 'شرایط',
        info: 'برآورده کردن موارد زیر',
        requiredMessage: 'لطفاً شرایط را انتخاب کنید'
      },
      valueMessage: 'لطفاً یک مقدار وارد کنید',
      addCondition: 'افزودن شرط',
      addBranch: 'افزودن شاخه'
    },
    replyNode: {
      label: 'پاسخ مشخص‌شده',
      text: 'مشخص کردن محتوای پاسخ، متغیرهای مرجع به رشته تبدیل می‌شوند و خروجی داده می‌شوند',
      content: 'محتوا',
      replyContent: {
        label: 'محتوای پاسخ',
        custom: 'سفارشی',
        reference: 'متغیر مرجع'
      }
    },
    rerankerNode: {
      label: 'بازیابی چندمسیری',
      text: 'استفاده از مدل بازنظم‌سازی برای تصفیه نتایج بازیابی از منابع دانش متعدد',
      result_list: 'لیست نتایج بازنظم‌سازی‌شده',
      result: 'نتیجه بازنظم‌سازی',
      rerankerContent: {
        label: 'محتوای بازنظم‌سازی',
        requiredMessage: 'لطفاً محتوای بازنظم‌سازی را انتخاب کنید'
      },
      higher: 'بالاتر',
      ScoreTooltip: 'هرچه امتیاز بالاتر باشد، ارتباط قوی‌تر است.',
      max_paragraph_char_number: 'حداکثر کاراکتر',
      reranker_model: {
        label: 'بازنظم‌سازی',
        placeholder: 'لطفاً یک بازنظم‌سازی انتخاب کنید'
      }
    },
    formNode: {
      label: 'ورودی فرم',
      text: 'جمع‌آوری ورودی کاربر در طول پرس‌وجو و استفاده از آن در فرآیندهای بعدی',
      form_content_format1: 'سلام، لطفاً فرم زیر را پر کنید:',
      form_content_format2: 'پس از پر کردن، روی دکمه [ارسال] کلیک کنید.',
      form_data: 'تمام محتوای فرم',
      formContent: {
        label: 'محتوای خروجی فرم',
        requiredMessage:
          'لطفاً محتوای خروجی این گره را تنظیم کنید، {form} یک نشانگر برای فرم است.',
        tooltip: 'تعریف محتوای خروجی این گره. {form} یک نشانگر برای فرم است'
      },
      formAllContent: 'تمام محتوای فرم',
      formSetting: 'تنظیمات فرم'
    },
    documentExtractNode: {
      label: 'استخراج محتوای سند',
      text: 'استخراج محتوا از اسناد',
      content: 'محتوای سند'
    },
    imageUnderstandNode: {
      label: 'درک تصویر',
      text: 'تحلیل تصاویر برای شناسایی اشیاء، صحنه‌ها و ارائه پاسخ',
      answer: 'محتوای هوش مصنوعی',
      model: {
        label: 'مدل بینایی',
        requiredMessage: 'لطفاً یک مدل بینایی انتخاب کنید'
      },
      image: {
        label: 'انتخاب تصویر',
        requiredMessage: 'لطفاً یک تصویر انتخاب کنید'
      }
    },
    variableAssignNode: {
      label: 'اختصاص متغیر',
      text: 'به‌روزرسانی مقدار متغیر جهانی',
      assign: 'تنظیم مقدار'
    },
    imageGenerateNode: {
      label: 'تولید تصویر',
      text: 'تولید تصاویر بر اساس محتوای متنی ارائه‌شده',
      answer: 'محتوای هوش مصنوعی',
      model: {
        label: 'مدل تولید تصویر',
        requiredMessage: 'لطفاً یک مدل تولید تصویر انتخاب کنید'
      },
      prompt: {
        label: 'پرامپت مثبت',
        tooltip: 'توصیف عناصر و ویژگی‌های بصری که می‌خواهید در تصویر تولیدشده باشد'
      },
      negative_prompt: {
        label: 'پرامپت منفی',
        tooltip: 'توصیف عناصری که می‌خواهید از تصویر تولیدشده حذف کنید',
        placeholder:
          'لطفاً محتوایی که نمی‌خواهید تولید شود را توصیف کنید، مانند رنگ، محتوای خونین'
      }
    },
    speechToTextNode: {
      label: 'گفتار به متن',
      text: 'تبدیل صوت به متن از طریق مدل تشخیص گفتار',
      stt_model: {
        label: 'مدل تشخیص گفتار'
      },
      audio: {
        label: 'انتخاب فایل صوتی',
        placeholder: 'لطفاً یک فایل صوتی انتخاب کنید'
      }
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'تبدیل متن به صوت از طریق مدل سنتز گفتار',
      tts_model: {
        label: 'مدل سنتز گفتار'
      },
      content: {
        label: 'انتخاب محتوای متنی'
      }
    },
    functionNode: {
      label: 'تابع سفارشی',
      text: 'اجرای اسکریپت‌های سفارشی برای دستیابی به پردازش داده‌ها'
    },
    applicationNode: {
      label: 'گره برنامه'
    }
  },
  compare: {
    is_null: 'خالی است',
    is_not_null: 'خالی نیست',
    contain: 'شامل می‌شود',
    not_contain: 'شامل نمی‌شود',
    eq: 'برابر با',
    ge: 'بزرگ‌تر یا مساوی',
    gt: 'بزرگ‌تر از',
    le: 'کوچک‌تر یا مساوی',
    lt: 'کوچک‌تر از',
    len_eq: 'طول برابر با',
    len_ge: 'طول بزرگ‌تر یا مساوی',
    len_gt: 'طول بزرگ‌تر از',
    len_le: 'طول کوچک‌تر یا مساوی',
    len_lt: 'طول کوچک‌تر از'
  },
  FileUploadSetting: {}
}