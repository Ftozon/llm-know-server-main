export default {
  title: 'بررسی اجمالی',
  appInfo: {
    header: 'اطلاعات اپلیکیشن',
    publicAccessLink: 'لینک عمومی',
    openText: 'فعال',
    closeText: 'غیرفعال',
    copyLinkText: 'کپی لینک',
    refreshLinkText: 'تازه‌سازی لینک',
    demo: 'پیش‌نمایش',
    embedInWebsite: 'دریافت کد تعبیه‌شده',
    accessControl: 'کنترل دسترسی',
    displaySetting: 'تنظیمات نمایش',
    apiAccessCredentials: 'اعتبارهای دسترسی API',
    apiKey: 'کلید API',
    refreshToken: {
      msgConfirm1: 'آیا مطمئن هستید که می‌خواهید لینک عمومی را دوباره تولید کنید؟',
      msgConfirm2:
        'دوباره تولید کردن لینک عمومی بر کدهای تعبیه‌شده موجود در سایت‌های شخص ثالث تأثیر خواهد گذاشت. شما باید کد تعبیه‌شده را به‌روز کنید و آن را دوباره در آن سایت‌ها ادغام کنید. با احتیاط عمل کنید!',
      refreshSuccess: 'با موفقیت تازه‌سازی شد'
    },
    APIKeyDialog: {
      saveSettings: 'ذخیره تنظیمات',
      msgConfirm1: 'آیا مطمئن هستید که می‌خواهید کلید API را حذف کنید؟',
      msgConfirm2:
        'این عمل غیرقابل بازگشت است. پس از حذف، کلید API قابل بازیابی نخواهد بود. آیا همچنان می‌خواهید ادامه دهید؟',
      enabledSuccess: 'فعال شد',
      disabledSuccess: 'غیرفعال شد'
    },
    EditAvatarDialog: {
      title: 'لوگوی اپلیکیشن',
      customizeUpload: 'آپلود سفارشی',
      upload: 'آپلود',
      default: 'لوگوی پیش‌فرض',
      custom: 'سفارشی',
      sizeTip:
        'اندازه توصیه‌شده: 32×32 پیکسل. فرمت‌های پشتیبانی‌شده: JPG، PNG و GIF. حداکثر اندازه: 10 مگابایت',
      fileSizeExceeded: 'حجم فایل بیش از 10 مگابایت است',
      uploadImagePrompt: 'لطفاً یک تصویر آپلود کنید'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'حالت تمام‌صفحه',
      copyInstructions: 'کد زیر را برای تعبیه کپی کنید',
      floatingModeTitle: 'حالت شناور'
    },
    LimitDialog: {
      dialogTitle: 'محدودیت‌های دسترسی',
      showSourceLabel: 'نمایش منبع دانش',
      clientQueryLimitLabel: 'محدودیت پرس‌وجو برای هر مشتری',
      authentication: 'احراز هویت',
      authenticationValue: 'رمز عبور دسترسی',
      timesDays: 'پرس‌وجو در روز',
      whitelistLabel: 'دامنه‌های مجاز',
      whitelistPlaceholder:
        'دامنه‌های شخص ثالث مجاز را وارد کنید، هر کدام در یک خط. به عنوان مثال:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'اجازه دسترسی متقابل دامنه',
      crossDomainPlaceholder:
        'آدرس‌های متقابل دامنه مجاز را وارد کنید. اگر فعال باشد اما خالی باشد، هیچ محدودیتی اعمال نخواهد شد.\nهر کدام در یک خط، به عنوان مثال:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingDisplayDialog: {
      dialogTitle: 'تنظیمات نمایش',
      languageLabel: 'زبان',
      showSourceLabel: 'نمایش منبع دانش',
      showExecutionDetail: 'نمایش جزئیات اجرا',
      restoreDefault: 'بازگردانی به حالت پیش‌فرض',
      customThemeColor: 'رنگ تم سفارشی',
      headerTitleFontColor: 'رنگ فونت عنوان سربرگ',
      default: 'پیش‌فرض',
      askUserAvatar: 'آواتار کاربر (در حال پرسیدن)',
      replace: 'جایگزینی',
      imageMessage:
        'اندازه توصیه‌شده: 32×32 پیکسل. فرمت‌های پشتیبانی‌شده: JPG، PNG و GIF. حداکثر اندازه: 10 مگابایت',
      AIAvatar: 'آواتار هوش مصنوعی',
      floatIcon: 'آیکون شناور',
      iconDefaultPosition: 'موقعیت پیش‌فرض آیکون',
      iconPosition: {
        left: 'چپ',
        right: 'راست',
        bottom: 'پایین',
        top: 'بالا'
      },
      draggablePosition: 'موقعیت قابل‌کشیدن',
      showHistory: 'نمایش تاریخچه چت',
      displayGuide: 'نمایش تصویر راهنما (حالت شناور)',
      disclaimer: 'اعلامیه عدم مسئولیت',
      disclaimerValue: 'این محتوا توسط هوش مصنوعی تولید شده و صرفاً برای مرجع است.'
    }
  },
  monitor: {
    monitoringStatistics: 'آمار نظارت',
    customRange: 'محدوده سفارشی',
    startDatePlaceholder: 'تاریخ شروع',
    endDatePlaceholder: 'تاریخ پایان',
    pastDayOptions: {
      past7Days: '7 روز گذشته',
      past30Days: '30 روز گذشته',
      past90Days: '90 روز گذشته',
      past183Days: '6 ماه گذشته',
      other: 'سفارشی'
    },
    charts: {
      customerTotal: 'کل کاربران',
      customerNew: 'کاربران جدید',
      queryCount: 'کل پرس‌وجوها',
      tokensTotal: 'کل توکن‌های استفاده‌شده',
      userSatisfaction: 'معیارهای بازخورد کاربر',
      approval: 'پسندیدن',
      disapproval: 'نپسندیدن'
    }
  }
}