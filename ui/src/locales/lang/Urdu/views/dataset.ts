export default {
  title: 'معروفیت',
  createDataset: 'معروفیت بنائیں',
  general: 'عام',
  web: 'ویب سائٹ',
  relatedApplications: 'منسلک ایپ',
  document_count: 'دستاویزات',
  relatedApp_count: 'منسلک ایپس',
  searchBar: {
    placeholder: 'نام کے ذریعہ تلاش کریں'
  },
  setting: {
    vectorization: 'وسٹرائزیشن',
    sync: 'مطابقت'
  },
  tip: {
    professionalMessage:
      'اکثر سے اکثر 50 معروفیتوں کی حمایت کرتا ہے۔',
    syncSuccess: 'مطابقت کا کام کامیابی کے ساتھ بھیجا گیا',
    updateModeMessage:
      'معروفیت کے ویکٹر ماڈل کو تبدیل کرنے کے بعد، آپ کو معروفیت کو ویکٹرائز کرنے کی ضرورت ہے۔ کیا آپ بچانے جاری رکھنا چاہتے ہیں؟'
  },
  delete: {
    confirmTitle: 'معروفیت کو حذف کرنے کی تصدیق:',
    confirmMessage1: 'یہ معروفیت منسلک ہے',
    confirmMessage2: 'APP کے ساتھ۔ اسے حذف کرنا برگشت ناقابل ہوگا، براہ کرم احتیاط کے ساتھ آگے بڑھیں۔'
  },
  datasetForm: {
    title: {
      info: 'معروفیت ترتیبات'
    },
    form: {
      datasetName: {
        label: 'نام',
        placeholder: 'براہ کرم معروفیت کا نام درج کریں',
        requiredMessage: 'براہ کرم معروفیت کا نام درج کریں'
      },
      datasetDescription: {
        label: 'تفصیل',
        placeholder:
          'معروفیت کے مواد کی تفصیل فراہم کریں۔ مفصل تفصیل AI کو مواد کو بہتر طور پر سمجھنے میں مدد دے گی، جو مواد استرجاع اور ہٹ ریٹ کی درستی کو بہتر بناتی ہے۔',
        requiredMessage: 'براہ کرم معروفیت کی تفصیل درج کریں'
      },
      EmbeddingModel: {
        label: 'ایمبیڈنگ ماڈل',
        placeholder: 'براہ کرم ایک ایمبیڈنگ ماڈل منتخب کریں',
        requiredMessage: 'براہ کرم ایمبیڈنگ ماڈل منتخب کریں'
      },
      datasetType: {
        label: 'قسم',
        generalInfo: 'مقامی دستاویزات اپ لوڈ کریں',
        webInfo: 'ویب سائٹ سے متن کے مواد کو مطابقت کریں'
      },
      source_url: {
        label: 'ویب روٹ URL',
        placeholder: 'براہ کرام ویب روٹ URL درج کریں',
        requiredMessage: 'براہ کرام ویب روٹ URL درج کریں'
      },
      selector: {
        label: 'سلیکٹر',
        placeholder: 'ڈیفالٹ body ہے، آپ .classname/#idname/tagname درج کر سکتے ہیں'
      }
    }
  },
  ResultSuccess: {
    title: 'معروفیت کامیابی کے ساتھ بنائی گئی',
    paragraph: 'حصے',
    paragraph_count: 'حصے',
    documentList: 'دستاویز فہرست',
    loading: 'در حال درآمد',
    buttons: {
      toDataset: 'معروفیت فہرست پر واپس جائیں',
      toDocument: 'دستاویز پر جائیں'
    }
  },
  syncWeb: {
    title: 'معروفیت کی مطابقت',
    syncMethod: 'مطابقت کا طریقہ',
    replace: 'بدل مطابقت',
    replaceText: 'ویب سائٹ کے دستاویزات کو دوبارہ حاصل کریں، مقامی معروفیت کے دستاویزات کو تبدیل کریں',
    complete: 'مکمل مطابقت',
    completeText:
      'مقامی معروفیت کے تمام دستاویزات کو حذف کریں اور ویب سائٹ کے دستاویزات کو دوبارہ حاصل کریں',
    tip: 'نوٹ: تمام مطابقت موجودہ مواد کو حذف کرے گی اور نئے مواد کو دوبارہ حاصل کرے گی۔ براہ کرم احتیاط کے ساتھ آگے بڑھیں۔'
  }
}