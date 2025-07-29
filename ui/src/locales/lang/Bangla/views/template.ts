export default {
  title: 'মডেলসমূহ',
  provider: 'প্রদানকারী',
  providerPlaceholder: 'প্রদানকারী নির্বাচন করুন',
  addModel: 'মডেল যোগ করুন',
  searchBar: {
    placeholder: 'নাম অনুসারে খুঁজুন'
  },
  delete: {
    confirmTitle: 'মডেল মুছে ফেলুন',
    confirmMessage: 'আপনি কি নিশ্চিতভাবে এই মডেলটি মুছে ফেলতে চান:'
  },
  tip: {
    createSuccessMessage: 'মডেল সফলভাবে তৈরি হয়েছে',
    createErrorMessage: 'মৌলিক তথ্যে ত্রুটি রয়েছে',
    errorMessage: 'ভেরিয়েবলটি ইতিমধ্যে বিদ্যমান:',
    emptyMessage1: 'মৌলিক তথ্যে মডেলের ধরণ এবং বেস মডেল নির্বাচন করুন',
    emptyMessage2: 'নির্বাচিত মডেলটি প্যারামিটার সেটিংস সমর্থন করে না',
    updateSuccessMessage: 'মডেল সফলভাবে আপডেট হয়েছে',
    saveSuccessMessage: 'মডেল প্যারামিটার সফলভাবে সংরক্ষিত হয়েছে',
    downloadError: 'ডাউনলোড ব্যর্থ হয়েছে',
    noModel: 'Ollama-তে মডেল বিদ্যমান নেই'
  },
  model: {
    allModel: 'সব মডেল',
    publicModel: 'পাবলিক মডেল',
    privateModel: 'প্রাইভেট মডেল',
    LLM: 'LLM',
    EMBEDDING: 'এম্বেডিং মডেল',
    RERANKER: 'রির‍্যাঙ্ক',
    STT: 'স্পিচ2টেক্সট',
    TTS: 'টেক্সট2স্পিচ',
    IMAGE: 'ভিশন মডেল',
    TTI: 'ইমেজ জেনারেশন'
  },
  templateForm: {
    title: {
      baseInfo: 'মৌলিক তথ্য',
      advancedInfo: 'অগ্রিম সেটিংস',
      modelParams: 'মডেল প্যারামিটার',
      editParam: 'প্যারামিটার সম্পাদনা করুন',
      addParam: 'প্যারামিটার যোগ করুন',
      paramSetting: 'মডেল প্যারামিটার সেটিংস',
      apiParamPassing: 'ইন্টারফেস প্যারামিটার'
    },
    form: {
      templateName: {
        label: 'মডেলের নাম',
        placeholder: 'বেস মডেলের জন্য একটি নাম সেট করুন',
        tooltip: 'LLM-Know-তে কাস্টম মডেলের নাম',
        requiredMessage: 'মডেলের নাম খালি হতে পারে না'
      },
      permissionType: {
        label: 'অনুমতি',
        privateDesc: 'শুধুমাত্র বর্তমান ব্যবহারকারীর জন্য উপলব্ধ',
        publicDesc: 'সকল ব্যবহারকারীর জন্য উপলব্ধ',
        requiredMessage: 'অনুমতি খালি হতে পারে না'
      },
      model_type: {
        label: 'মডেলের ধরণ',
        placeholder: 'একটি মডেলের ধরণ নির্বাচন করুন',
        tooltip1:
          'LLM: APP-এ AI চ্যাটের জন্য একটি ইনফারেন্স মডেল।',
        tooltip2:
          'এম্বেডিং মডেল: জ্ঞানের মধ্যে ডকুমেন্টের বিষয়বস্তু ভেক্টরাইজ করার জন্য একটি মডেল।',
        tooltip3: 'স্পিচ2টেক্সট: APP-এ স্পিচ রিকগনিশনের জন্য একটি মডেল।',
        tooltip4: 'টেক্সট2স্পিচ: APP-এ TTS-এর জন্য একটি মডেল।',
        tooltip5:
          'রির‍্যাঙ্ক: অ্যাডভান্সড অর্কেস্ট্রেশন APP-এ মাল্টি-রুট রিকল ব্যবহার করার সময় ক্যান্ডিডেট সেগমেন্ট পুনরায় সাজানোর জন্য একটি মডেল।',
        tooltip6:
          'ভিশন মডেল: অ্যাডভান্সড অর্কেস্ট্রেশন APP-এ ছবি বোঝার জন্য একটি ভিজ্যুয়াল মডেল।',
        tooltip7:
          'ইমেজ জেনারেশন: অ্যাডভান্সড অর্কেস্ট্রেশন APP-এ ছবি তৈরির জন্য একটি ভিজ্যুয়াল মডেল।',
        requiredMessage: 'মডেলের ধরণ খালি হতে পারে না'
      },
      base_model: {
        label: 'বেস মডেল',
        tooltip:
          'তালিকাভুক্ত নয় এমন মডেলের জন্য, মডেলের নাম লিখুন এবং এন্টার চাপুন',
        placeholder: 'বেস মডেলের নাম লিখুন এবং এন্টার চেপে যোগ করুন',
        requiredMessage: 'বেস মডেল খালি হতে পারে না'
      }
    }
  },
  download: {
    downloading: 'ডাউনলোড হচ্ছে...',
    cancelDownload: 'ডাউনলোড বাতিল করুন'
  }
}