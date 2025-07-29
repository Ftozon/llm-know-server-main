export default {
  title: 'ওভারভিউ',
  appInfo: {
    header: 'অ্যাপ তথ্য',
    publicAccessLink: 'পাবলিক URL',
    openText: 'চালু',
    closeText: 'বন্ধ',
    copyLinkText: 'লিঙ্ক কপি করুন',
    refreshLinkText: 'লিঙ্ক রিফ্রেশ করুন',
    demo: 'প্রিভিউ',
    embedInWebsite: 'এম্বেড কোড পেতে',
    accessControl: 'অ্যাক্সেস নিয়ন্ত্রণ',
    displaySetting: 'ডিসপ্লে সেটিংস',
    apiAccessCredentials: 'API অ্যাক্সেস ক্রেডেনশিয়াল',
    apiKey: 'API কী',
    refreshToken: {
      msgConfirm1: 'আপনি কি নিশ্চিত যে আপনি পাবলিক URL পুনর্জন্ম করতে চান?',
      msgConfirm2:
        'পাবলিক URL পুনর্জন্ম করলে তৃতীয় পক্ষের সাইটে বিদ্যমান এম্বেড কোডগুলির উপর প্রভাব পড়বে। আপনাকে এম্বেড কোড আপডেট করতে হবে এবং সেই সাইটগুলিতে পুনরায় একীভূত করতে হবে। সতর্কতার সাথে এগিয়ে যান!',
      refreshSuccess: 'সফলভাবে রিফ্রেশ করা হয়েছে'
    },
    APIKeyDialog: {
      saveSettings: 'সেটিংস সংরক্ষণ করুন',
      msgConfirm1: 'আপনি কি নিশ্চিত যে API কী মুছে ফেলতে চান?',
      msgConfirm2:
        'এই কাজটি অনিবার্য। একবার মুছে ফেললে API কী পুনরুদ্ধার করা যাবে না। আপনি কি এখনও এগিয়ে যেতে চান?',
      enabledSuccess: 'সক্রিয় করা হয়েছে',
      disabledSuccess: 'নিষ্ক্রিয় করা হয়েছে'
    },
    EditAvatarDialog: {
      title: 'অ্যাপ লোগো',
      customizeUpload: 'কাস্টম আপলোড',
      upload: 'আপলোড',
      default: 'ডিফল্ট লোগো',
      custom: 'কাস্টম',
      sizeTip:
        'সুপারিশকৃত আকার: 32×32 পিক্সেল। JPG, PNG এবং GIF ফরম্যাট সমর্থিত। সর্বোচ্চ আকার: 10 MB',
      fileSizeExceeded: 'ফাইলের আকার 10 MB ছাড়িয়েছে',
      uploadImagePrompt: 'দয়া করে একটি ছবি আপলোড করুন'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'ফুলস্ক্রিন মোড',
      copyInstructions: 'এম্বেড করতে নীচের কোডটি কপি করুন',
      floatingModeTitle: 'ফ্লোটিং মোড'
    },
    LimitDialog: {
      dialogTitle: 'অ্যাক্সেস সীমাবদ্ধতা',
      showSourceLabel: 'জ্ঞান উৎস দেখান',
      clientQueryLimitLabel: 'প্রতি ক্লায়েন্ট প্রশ্ন সীমা',
      authentication: 'প্রমাণীকরণ',
      authenticationValue: 'অ্যাক্সেস পাসওয়ার্ড',
      timesDays: 'প্রতি দিন প্রশ্ন',
      whitelistLabel: 'অনুমোদিত ডোমেন',
      whitelistPlaceholder:
        'অনুমোদিত তৃতীয় পক্ষের ডোমেন লিখুন, প্রতি লাইনে একটি। উদাহরণ:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'ক্রস-ডোমেন অ্যাক্সেস অনুমতি দিন',
      crossDomainPlaceholder:
        'অনুমোদিত ক্রস-ডোমেন ঠিকানা লিখুন। যদি সক্রিয় করা থাকে কিন্তু খালি থাকে, কোনো সীমাবদ্ধতা প্রযোজ্য হবে না।\nপ্রতি লাইনে একটি লিখুন, উদাহরণ:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingDisplayDialog: {
      dialogTitle: 'ডিসপ্লে সেটিংস',
      languageLabel: 'ভাষা',
      showSourceLabel: 'জ্ঞান উৎস দেখান',
      showExecutionDetail: 'এক্সিকিউশন বিস্তারিত দেখান',
      restoreDefault: 'ডিফল্ট পুনরুদ্ধার করুন',
      customThemeColor: 'কাস্টম থিম রঙ',
      headerTitleFontColor: 'হেডার শিরোনাম ফন্ট রঙ',
      default: 'ডিফল্ট',
      askUserAvatar: 'ব্যবহারকারী অ্যাভাটার (প্রশ্ন)',
      replace: 'প্রতিস্থাপন করুন',
      imageMessage:
        'সুপারিশকৃত আকার: 32×32 পিক্সেল। JPG, PNG এবং GIF ফরম্যাট সমর্থিত। সর্বোচ্চ আকার: 10 MB',
      AIAvatar: 'AI অ্যাভাটার',
      floatIcon: 'ফ্লোটিং আইকন',
      iconDefaultPosition: 'ডিফল্ট আইকন অবস্থান',
      iconPosition: {
        left: 'বাম',
        right: 'ডান',
        bottom: 'নীচে',
        top: 'উপরে'
      },
      draggablePosition: 'ড্র্যাগযোগ্য অবস্থান',
      showHistory: 'চ্যাট ইতিহাস দেখান',
      displayGuide: 'গাইড ছবি দেখান (ফ্লোটিং মোড)',
      disclaimer: 'দায়িত্ব পরিত্যাগ',
      disclaimerValue: 'এই বিষয়বস্তু AI দ্বারা তৈরি এবং শুধুমাত্র রেফারেন্সের জন্য।'
    }
  },
  monitor: {
    monitoringStatistics: 'মনিটরিং পরিসংখ্যান',
    customRange: 'কাস্টম রেঞ্জ',
    startDatePlaceholder: 'শুরুর তারিখ',
    endDatePlaceholder: 'শেষ তারিখ',
    pastDayOptions: {
      past7Days: 'গত 7 দিন',
      past30Days: 'গত 30 দিন',
      past90Days: 'গত 90 দিন',
      past183Days: 'গত 6 মাস',
      other: 'কাস্টম'
    },
    charts: {
      customerTotal: 'মোট ব্যবহারকারী',
      customerNew: 'নতুন ব্যবহারকারী',
      queryCount: 'মোট প্রশ্ন',
      tokensTotal: 'মোট টোকেন ব্যবহৃত',
      userSatisfaction: 'ব্যবহারকারীর ফিডব্যাক মেট্রিক্স',
      approval: 'পছন্দ',
      disapproval: 'অপছন্দ'
    }
  }
}