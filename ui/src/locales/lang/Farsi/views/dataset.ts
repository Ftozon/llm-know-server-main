export default {
  title: 'دانش',
  createDataset: 'ایجاد دانش',
  general: 'عمومی',
  web: 'وب‌سایت',
  relatedApplications: 'اپلیکیشن‌های مرتبط',
  document_count: 'مستندات',
  relatedApp_count: 'اپلیکیشن‌های مرتبط',
  searchBar: {
    placeholder: 'جستجو بر اساس نام'
  },
  setting: {
    vectorization: 'بردارسازی',
    sync: 'همگام‌سازی'
  },
  tip: {
    professionalMessage:
      'حداکثر تا ۵۰ دانش را پشتیبانی می‌کند.',
    syncSuccess: 'وظیفه همگام‌سازی با موفقیت ارسال شد',
    updateModeMessage:
      'پس از تغییر مدل برداری دانش، نیاز به بردارسازی دانش است. آیا مایل به ادامه ذخیره‌سازی هستید؟'
  },
  delete: {
    confirmTitle: 'تأیید حذف دانش:',
    confirmMessage1: 'این دانش با',
    confirmMessage2: 'اپلیکیشن مرتبط است. حذف آن غیرقابل بازگشت خواهد بود، لطفاً با احتیاط عمل کنید.'
  },
  datasetForm: {
    title: {
      info: 'تنظیمات دانش'
    },
    form: {
      datasetName: {
        label: 'نام',
        placeholder: 'لطفاً نام دانش را وارد کنید',
        requiredMessage: 'لطفاً نام دانش را وارد کنید'
      },
      datasetDescription: {
        label: 'توضیحات',
        placeholder:
          'توضیح محتوای دانش. توضیحات دقیق به هوش مصنوعی کمک می‌کند تا محتوا را بهتر درک کند و دقت بازیابی محتوا و نرخ اصابت را افزایش دهد.',
        requiredMessage: 'لطفاً توضیحات دانش را وارد کنید'
      },
      EmbeddingModel: {
        label: 'مدل تعبیه‌سازی',
        placeholder: 'لطفاً یک مدل تعبیه‌سازی انتخاب کنید',
        requiredMessage: 'لطفاً مدل تعبیه‌سازی را انتخاب کنید'
      },
      datasetType: {
        label: 'نوع',
        generalInfo: 'آپلود مستندات محلی',
        webInfo: 'همگام‌سازی داده‌های متنی از وب‌سایت'
      },
      source_url: {
        label: 'آدرس ریشه وب‌سایت',
        placeholder: 'لطفاً آدرس ریشه وب‌سایت را وارد کنید',
        requiredMessage: 'لطفاً آدرس ریشه وب‌سایت را وارد کنید'
      },
      selector: {
        label: 'انتخاب‌گر',
        placeholder: 'پیش‌فرض body است، می‌توانید .classname/#idname/tagname وارد کنید'
      }
    }
  },
  ResultSuccess: {
    title: 'دانش با موفقیت ایجاد شد',
    paragraph: 'بخش‌ها',
    paragraph_count: 'بخش‌ها',
    documentList: 'لیست مستندات',
    loading: 'در حال وارد کردن',
    buttons: {
      toDataset: 'بازگشت به لیست دانش',
      toDocument: 'رفتن به مستند'
    }
  },
  syncWeb: {
    title: 'همگام‌سازی دانش',
    syncMethod: 'روش همگام‌سازی',
    replace: 'همگام‌سازی جایگزینی',
    replaceText: 'دوباره گرفتن مستندات وب‌سایت و جایگزینی مستندات موجود در دانش محلی',
    complete: 'همگام‌سازی کامل',
    completeText:
      'حذف تمام مستندات در دانش محلی و دوباره گرفتن مستندات وب‌سایت',
    tip: 'توجه: تمام همگام‌سازی‌ها داده‌های موجود را حذف کرده و داده‌های جدید را دوباره می‌گیرند. لطفاً با احتیاط عمل کنید.'
  }
}