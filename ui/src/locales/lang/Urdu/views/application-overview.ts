export default {
  title: 'جائزہ',
  appInfo: {
    header: 'ایپ کی معلومات',
    publicAccessLink: 'عوامی URL',
    openText: 'چالو',
    closeText: 'بند',
    copyLinkText: 'لنک کاپی کریں',
    refreshLinkText: 'لنک تازہ کریں',
    demo: 'پیش نظارہ',
    embedInWebsite: 'ایمبڈ کوڈ حاصل کریں',
    accessControl: 'رسائی کنٹرول',
    displaySetting: 'ڈسپلے ترتیبات',
    apiAccessCredentials: 'API رسائی کریڈینشلز',
    apiKey: 'API کلید',
    refreshToken: {
      msgConfirm1: 'کیا آپ واقعی عوامی URL دوبارہ پیدا کرنا چاہتے ہیں؟',
      msgConfirm2:
        'عوامی URL کو دوبارہ پیدا کرنے سے تیسرے پارٹی ویب سائٹ پر موجود ایمبڈ کوڈ متاثر ہوں گے۔ آپ کو ایمبڈ کوڈ کو اپ ڈیٹ کرنا اور دوبارہ ان ویب سائٹس میں شامل کرنا ہوگا۔ احتیاط کے ساتھ آگے بڑھیں!',
      refreshSuccess: 'کامیابی کے ساتھ تازہ کیا گیا'
    },
    APIKeyDialog: {
      saveSettings: 'ترتیبات محفوظ کریں',
      msgConfirm1: 'کیا آپ واقعی API کلید کو حذف کرنا چاہتے ہیں؟',
      msgConfirm2:
        'یہ عمل برگشت ناپذیر ہے۔ ایک بار حذف کرنے کے بعد، API کلید بازیابی نہیں کی جا سکتی۔ کیا آپ واقعی آگے بڑھنا چاہتے ہیں؟',
      enabledSuccess: 'فعال',
      disabledSuccess: 'غیر فعال'
    },
    EditAvatarDialog: {
      title: 'ایپ لوگو',
      customizeUpload: 'خود مختار اپ لوڈ',
      upload: 'اپ لوڈ',
      default: 'ڈیفالٹ لوگو',
      custom: 'خود مختار',
      sizeTip:
        'مستحسن سائز: 32×32 پکسل۔ JPG، PNG، اور GIF فارمیٹس کی حمایت کرتا ہے۔ زیادہ سے زیادہ سائز: 10 MB',
      fileSizeExceeded: 'فائل کا سائز 10 MB سے زیادہ ہے',
      uploadImagePrompt: 'براہ کرم ایک تصویر اپ لوڈ کریں'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'فول سکرین موڈ',
      copyInstructions: 'اس کوڈ کو کاپی کر کے ایمبڈ کریں',
      floatingModeTitle: 'فلوٹنگ موڈ'
    },
    LimitDialog: {
      dialogTitle: 'رسائی کی پابندیاں',
      showSourceLabel: 'علمی ذرائع دکھائیں',
      clientQueryLimitLabel: 'فی صارف روزانہ سوالات کی حد',
      authentication: 'تصدیق',
      authenticationValue: 'رسائی کا پاسورڈ',
      timesDays: 'سوالات فی دن',
      whitelistLabel: 'اجازت شدہ ڈومینز',
      whitelistPlaceholder:
        'اجازت شدہ تیسری پارٹی ڈومینز درج کریں، ایک ہر لائن میں۔ مثال کے طور پر:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'کراس ڈومین رسائی کی اجازت دیں',
      crossDomainPlaceholder:
        'اجازت شدہ کراس ڈومین پتے درج کریں۔ اگر فعال ہے لیکن خالی چھوڑ دیا گیا ہے تو کوئی پابندی نہیں لگے گی۔\nایک ہر لائن میں درج کریں، مثال کے طور پر:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingDisplayDialog: {
      dialogTitle: 'ڈسپلے ترتیبات',
      languageLabel: 'زبان',
      showSourceLabel: 'علمی ذرائع دکھائیں',
      showExecutionDetail: 'عمل کی تفصیلات دکھائیں',
      restoreDefault: 'پہلے جیسا بحال کریں',
      customThemeColor: 'خود مختار تھیم رنگ',
      headerTitleFontColor: 'ہیڈر کے عنوان کا فونٹ رنگ',
      default: 'ڈیفالٹ',
      askUserAvatar: 'صارف کا اواتر (سوال کرتے وقت)',
      replace: 'بدلیں',
      imageMessage:
        'مستحسن سائز: 32×32 پکسل۔ JPG، PNG، اور GIF فارمیٹس کی حمایت کرتا ہے۔ زیادہ سے زیادہ سائز: 10 MB',
      AIAvatar: 'AI اواتر',
      floatIcon: 'فلوٹنگ آئیکن',
      iconDefaultPosition: 'ڈیفالٹ آئیکن پوزیشن',
      iconPosition: {
        left: 'بائیں',
        right: 'دائیں',
        bottom: 'نیچے',
        top: 'اوپر'
      },
      draggablePosition: 'ڈریگ کرنے یوگ پوزیشن',
      showHistory: 'چیٹ کی تاریخ دکھائیں',
      displayGuide: 'راہنمائی تصویر دکھائیں (فلوٹنگ موڈ)',
      disclaimer: 'تنصل',
      disclaimerValue: 'یہ مواد AI کے ذریعے تیار کیا گیا ہے اور صرف حوالہ کے لیے ہے۔'
    }
  },
  monitor: {
    monitoringStatistics: 'مانیٹرنگ کی شماریات',
    customRange: 'اختیاری رینج',
    startDatePlaceholder: 'شروع کی تاریخ',
    endDatePlaceholder: 'آخری تاریخ',
    pastDayOptions: {
      past7Days: 'پچھلے 7 دن',
      past30Days: 'پچھلے 30 دن',
      past90Days: 'پچھلے 90 دن',
      past183Days: 'پچھلے 6 ماہ',
      other: 'اختیاری'
    },
    charts: {
      customerTotal: 'کل صارفین',
      customerNew: 'نئے صارفین',
      queryCount: 'کل سوالات',
      tokensTotal: 'کل ٹوکنز استعمال کیے گئے',
      userSatisfaction: 'صارفین کی رضامندی کے معیار',
      approval: 'پسند کرنا',
      disapproval: 'ناپسند کرنا'
    }
  }
}