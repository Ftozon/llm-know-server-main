export default {
  title: 'اپلیکیشن',
  createApplication: 'ایجاد اپلیکیشن',
  importApplication: 'وارد کردن اپلیکیشن',
  copyApplication: 'کپی اپلیکیشن',
  workflow: 'جریان کار',
  simple: 'ساده',
  searchBar: {
    placeholder: 'جستجو بر اساس نام'
  },
  setting: {
    demo: 'نمونه'
  },
  delete: {
    confirmTitle: 'آیا مطمئن هستید که می‌خواهید این اپلیکیشن را حذف کنید: ',
    confirmMessage:
      'حذف این اپلیکیشن باعث می‌شود خدمات آن دیگر در دسترس نباشد. لطفاً با احتیاط عمل کنید.'
  },
  tip: {
    ExportError: 'صادرات ناموفق',
    professionalMessage:
      'حداکثر تا 5 اپلیکیشن پشتیبانی می‌شود.',
    saveErrorMessage: 'ذخیره‌سازی ناموفق بود، لطفاً ورودی خود را بررسی کنید یا دوباره تلاش کنید.',
    loadingErrorMessage: 'بارگذاری پیکربندی ناموفق بود، لطفاً ورودی خود را بررسی کنید یا دوباره تلاش کنید.'
  },
  applicationForm: {
    title: {
      appTest: 'پیش‌نمایش اشکال‌زدایی',
      copy: 'کپی'
    },
    form: {
      appName: {
        label: 'نام',
        placeholder: 'لطفاً نام اپلیکیشن را وارد کنید',
        requiredMessage: 'نام اپلیکیشن الزامی است'
      },
      appDescription: {
        label: 'توضیحات',
        placeholder:
          'سناریو و کاربرد اپلیکیشن را توصیف کنید، مثال: دستیار XXX برای پاسخ به سوالات کاربران در مورد استفاده از محصول XXX'
      },
      appType: {
        label: 'نوع',
        simplePlaceholder: 'مناسب برای مبتدیان برای ایجاد دستیار.',
        workflowPlaceholder: 'مناسب برای کاربران پیشرفته برای سفارشی‌سازی جریان کار دستیار'
      },
      appTemplate: {
        blankApp: 'اپلیکیشن خالی',
        assistantApp: 'دستیار دانش'
      },
      aiModel: {
        label: 'مدل هوش مصنوعی',
        placeholder: 'لطفاً یک مدل هوش مصنوعی انتخاب کنید'
      },
      roleSettings: {
        label: 'نقش سیستم',
        placeholder: 'شما دستیار xxx هستید'
      },
      prompt: {
        label: 'راهنمایی (Prompt)',
        noReferences: '(بدون ارجاع به دانش)',
        references: ' (با ارجاع به دانش)',
        placeholder: 'لطفاً راهنمایی را وارد کنید',
        requiredMessage: 'لطفاً راهنمایی را وارد کنید',
        tooltip:
          'با تنظیم محتوای راهنمایی، می‌توانید جهت گفتگوی مدل بزرگ را هدایت کنید.',

        noReferencesTooltip:
          'با تنظیم محتوای راهنمایی، می‌توانید جهت گفتگوی مدل بزرگ را هدایت کنید. این راهنمایی در ابتدای متن ثابت خواهد بود. متغیرها: {question} سوال کاربر است.',
        referencesTooltip:
          'با تنظیم محتوای راهنمایی، می‌توانید جهت گفتگوی مدل بزرگ را هدایت کنید. این راهنمایی در ابتدای متن ثابت خواهد بود. متغیرها: {data} شامل اطلاعات شناخته‌شده از دانش است؛ {question} سوال کاربر است.',
        defaultPrompt: `اطلاعات شناخته‌شده: {data}
          سوال: {question}
           نیازهای پاسخ: 
           - لطفاً از زبانی ساده و حرفه‌ای برای پاسخ به سوال کاربر استفاده کنید.
           `
      },
      historyRecord: {
        label: 'تاریخچه چت'
      },
      relatedKnowledge: {
        label: 'دانش مرتبط',
        placeholder: 'دانش مرتبط در اینجا نمایش داده می‌شود'
      },
      multipleRoundsDialogue: 'گفتگوهای چند دوره‌ای',

      prologue: 'پیش‌گفتار',
      defaultPrologue:
        'سلام، من دستیار XXX هستم. می‌توانید از من سوالاتی در مورد استفاده از XXX بپرسید.\n- ویژگی‌های اصلی XXX چیست؟\n- دستیار XXX از کدام مدل‌های زبانی بزرگ (LLM) پشتیبانی می‌کند؟\n- دستیار XXX از چه نوع فایل‌هایی پشتیبانی می‌کند؟',
      problemOptimization: {
        label: 'بهینه‌سازی سوالات',
        tooltip:
          'سوال فعلی را بر اساس تاریخچه چت بهینه کنید تا بهتر با نقاط دانش مطابقت داشته باشد.'
      },

      voiceInput: {
        label: 'ورودی صوتی',
        placeholder: 'لطفاً مدل تشخیص گفتار را انتخاب کنید',
        requiredMessage: 'لطفاً مدل ورودی صوتی را انتخاب کنید',
        autoSend: 'ارسال خودکار'
      },
      voicePlay: {
        label: 'پخش صوتی',
        placeholder: 'لطفاً مدل ترکیب گفتار را انتخاب کنید',
        requiredMessage: 'لطفاً مدل پخش صوتی را انتخاب کنید',
        autoPlay: 'پخش خودکار',
        browser: 'پخش مرورگر (رایگان)',
        tts: 'مدل TTS',
        listeningTest: 'پیش‌نمایش'
      },
      reasoningContent: {
        label: 'خروجی تفکر',
        tooltip:
          'لطفاً برچسب تفکر را بر اساس بازگشت مدل تنظیم کنید و محتوای بین برچسب‌ها به عنوان فرآیند تفکر شناخته می‌شود.',
        start: 'شروع',
        end: 'پایان'
      }
    },
    buttons: {
      publish: 'ذخیره و انتشار',
      addModel: 'افزودن مدل'
    },
    dialog: {
      addDataset: 'افزودن دانش مرتبط',
      addDatasetPlaceholder: 'دانش انتخاب‌شده باید از همان مدل تعبیه‌سازی (Embedding) استفاده کند',
      selected: 'انتخاب‌شده',
      countDataset: 'دانش',

      selectSearchMode: 'حالت بازیابی',
      vectorSearch: 'جستجوی برداری',
      vectorSearchTooltip:
        'جستجوی برداری یک روش بازیابی بر اساس محاسبات فاصله برداری است که برای حجم داده‌های بزرگ در دانش مناسب است.',
      fullTextSearch: 'جستجوی متن کامل',
      fullTextSearchTooltip:
        'جستجوی متن کامل یک روش بازیابی بر اساس شباهت متنی است که برای حجم داده‌های کوچک در دانش مناسب است.',
      hybridSearch: 'جستجوی ترکیبی',
      hybridSearchTooltip:
        'جستجوی ترکیبی یک روش بازیابی بر اساس شباهت برداری و متنی است که برای حجم داده‌های متوسط در دانش مناسب است.',
      similarityThreshold: 'حداقل شباهت',
      similarityTooltip: 'هرچه شباهت بالاتر باشد، ارتباط قوی‌تر است.',
      topReferences: 'N بخش برتر',
      maxCharacters: 'حداکثر تعداد کاراکتر در هر ارجاع',
      noReferencesAction: 'هنگامی که ارجاع به دانش وجود نداشته باشد',
      continueQuestioning: 'ادامه دادن به پرسش از مدل هوش مصنوعی',
      provideAnswer: 'تعیین محتوای پاسخ',
      designated_answer:
        'سلام، من دستیار XXX هستم. دانش من فقط شامل اطلاعات مرتبط با محصولات XXX است. لطفاً سوال خود را بازنویسی کنید.',
      defaultPrompt1:
        "محتوای داخل پرانتز () نشان‌دهنده سوال کاربر است. بر اساس زمینه، لطفاً سوال کاربر را حدس بزنید و کامل کنید ({question}). نیاز این است که یک سوال کامل خروجی شود و آن را",
      defaultPrompt2: 'برچسب‌گذاری کنید'
    }
  },
  applicationAccess: {
    title: 'دسترسی به اپلیکیشن',
    wecom: 'وی‌چت (WeCom)',
    wecomTip: 'ایجاد اپلیکیشن هوشمند وی‌چت',
    dingtalk: 'دینگ‌تاک',
    dingtalkTip: 'ایجاد اپلیکیشن هوشمند دینگ‌تاک',
    wechat: 'وی‌چت',
    wechatTip: 'ایجاد اپلیکیشن هوشمند وی‌چت',
    lark: 'لارک',
    larkTip: 'ایجاد اپلیکیشن هوشمند لارک',
    setting: 'تنظیمات',
    callback: 'آدرس فراخوانی',
    callbackTip: 'لطفاً آدرس فراخوانی را پر کنید',
    wecomPlatform: 'پلتفرم باز وی‌چت',
    wechatPlatform: 'پلتفرم باز وی‌چت',
    dingtalkPlatform: 'پلتفرم باز دینگ‌تاک',
    larkPlatform: 'پلتفرم باز لارک',
    slack: 'اسلک',
    slackTip: 'ایجاد اپلیکیشن هوشمند اسلک',
    wecomSetting: {
      title: 'تنظیمات وی‌چت',
      cropId: 'شناسه Crop',
      cropIdPlaceholder: 'لطفاً شناسه Crop را وارد کنید',
      agentIdPlaceholder: 'لطفاً شناسه Agent را وارد کنید',
      secretPlaceholder: 'لطفاً Secret را وارد کنید',
      tokenPlaceholder: 'لطفاً Token را وارد کنید',
      encodingAesKeyPlaceholder: 'لطفاً EncodingAESKey را وارد کنید',
      authenticationSuccessful: 'موفقیت‌آمیز',
      urlInfo:
        '- مدیریت اپلیکیشن - ساخته‌شده توسط خودتان - اپلیکیشن ایجاد‌شده - دریافت پیام‌ها - تنظیم "URL" دریافت‌شده توسط API'
    },
    dingtalkSetting: {
      title: 'تنظیمات دینگ‌تاک',
      clientIdPlaceholder: 'لطفاً شناسه Client را وارد کنید',
      clientSecretPlaceholder: 'لطفاً Secret Client را وارد کنید',
      urlInfo:
        '- در صفحه ربات، "حالت دریافت پیام" را به حالت HTTP تنظیم کنید و آدرس URL فوق را در "آدرس دریافت پیام" وارد کنید.'
    },
    wechatSetting: {
      title: 'تنظیمات وی‌چت',
      appId: 'شناسه APP',
      appIdPlaceholder: 'لطفاً شناسه APP را وارد کنید',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'لطفاً APP SECRET را وارد کنید',
      token: 'TOKEN',
      tokenPlaceholder: 'لطفاً TOKEN را وارد کنید',
      aesKey: 'کلید رمزگذاری پیام',
      aesKeyPlaceholder: 'لطفاً کلید رمزگذاری پیام را وارد کنید',
      urlInfo:
        '- تنظیمات و توسعه - پیکربندی اولیه - "آدرس URL سرور" در تنظیمات سرور'
    },
    larkSetting: {
      title: 'تنظیمات لارک',
      appIdPlaceholder: 'لطفاً شناسه APP را وارد کنید',
      appSecretPlaceholder: 'لطفاً Secret APP را وارد کنید',
      verificationTokenPlaceholder: 'لطفاً Token تأیید را وارد کنید',
      urlInfo:
        '- رویدادها و فراخوانی‌ها - تنظیمات رویداد - تنظیم "آدرس درخواست" روش اشتراک'
    },
    slackSetting: {
      title: 'تنظیمات اسلک',
      signingSecretPlaceholder: 'لطفاً Signing Secret را وارد کنید',
      botUserTokenPlaceholder: 'لطفاً Bot User Token را وارد کنید'
    },
    copyUrl: 'کپی لینک و پر کردن آن'
  },
  hitTest: {
    title: 'تست بازیابی',
    text: 'تست اثر برخورد دانش بر اساس متن پرسش داده‌شده.',
    emptyMessage1: 'نتایج تست بازیابی در اینجا نمایش داده خواهد شد',
    emptyMessage2: 'هیچ بخش مطابقی پیدا نشد'
  }
}