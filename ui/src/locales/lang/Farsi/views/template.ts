export default {
  title: 'مدل‌ها',
  provider: 'ارائه‌دهنده',
  providerPlaceholder: 'انتخاب ارائه‌دهنده',
  addModel: 'افزودن مدل',
  searchBar: {
    placeholder: 'جستجو بر اساس نام'
  },
  delete: {
    confirmTitle: 'حذف مدل',
    confirmMessage: 'آیا از حذف این مدل اطمینان دارید:'
  },
  tip: {
    createSuccessMessage: 'مدل با موفقیت ایجاد شد',
    createErrorMessage: 'خطاهایی در اطلاعات پایه وجود دارد',
    errorMessage: 'متغیر از قبل وجود دارد: ',
    emptyMessage1: 'لطفاً نوع مدل و مدل پایه را در اطلاعات پایه انتخاب کنید',
    emptyMessage2: 'مدل انتخاب‌شده از تنظیمات پارامتر پشتیبانی نمی‌کند',
    updateSuccessMessage: 'مدل با موفقیت به‌روزرسانی شد',
    saveSuccessMessage: 'پارامترهای مدل با موفقیت ذخیره شدند',
    downloadError: 'دانلود ناموفق بود',
    noModel: 'مدل در Ollama وجود ندارد'
  },
  model: {
    allModel: 'همه مدل‌ها',
    publicModel: 'مدل‌های عمومی',
    privateModel: 'مدل‌های خصوصی',
    LLM: 'LLM',
    EMBEDDING: 'مدل Embedding',
    RERANKER: 'Rerank',
    STT: 'گفتار به متن (Speech2Text)',
    TTS: 'تبدیل متن به گفتار (TTS)',
    IMAGE: 'مدل بینایی',
    TTI: 'تولید تصویر'
  },
  templateForm: {
    title: {
      baseInfo: 'اطلاعات پایه',
      advancedInfo: 'تنظیمات پیشرفته',
      modelParams: 'پارامترهای مدل',
      editParam: 'ویرایش پارامتر',
      addParam: 'افزودن پارامتر',
      paramSetting: 'تنظیمات پارامترهای مدل',
      apiParamPassing: 'پارامترهای رابط برنامه‌نویسی (API)'
    },
    form: {
      templateName: {
        label: 'نام مدل',
        placeholder: 'برای مدل پایه نامی تنظیم کنید',
        tooltip: 'نام سفارشی مدل در LLM-Know',
        requiredMessage: 'نام مدل نمی‌تواند خالی باشد'
      },
      permissionType: {
        label: 'دسترسی',
        privateDesc: 'فقط در دسترس کاربر فعلی است',
        publicDesc: 'در دسترس همه کاربران است',
        requiredMessage: 'دسترسی نمی‌تواند خالی باشد'
      },
      model_type: {
        label: 'نوع مدل',
        placeholder: 'انتخاب نوع مدل',
        tooltip1:
          'LLM: مدل استنتاجی برای چت هوش مصنوعی در APP.',
        tooltip2:
          'مدل Embedding: مدلی برای بردارسازی محتوای اسناد در دانش.',
        tooltip3: 'گفتار به متن (Speech2Text): مدلی برای تشخیص گفتار در APP.',
        tooltip4: 'TTS: مدلی برای تبدیل متن به گفتار در APP.',
        tooltip5:
          'Rerank: مدلی برای بازترتیب بخش‌های کاندید در صورت استفاده از فراخوانی چندمسیره در APP پیشرفته.',
        tooltip6:
          'مدل بینایی: مدل بصری برای درک تصاویر در APP پیشرفته.',
        tooltip7:
          'تولید تصویر: مدل بصری برای تولید تصاویر در APP پیشرفته.',
        requiredMessage: 'نوع مدل نمی‌تواند خالی باشد'
      },
      base_model: {
        label: 'مدل پایه',
        tooltip:
          'برای مدل‌هایی که در لیست نیستند، نام مدل را وارد کنید و Enter را فشار دهید',
        placeholder: 'نام مدل پایه را وارد کنید و Enter را فشار دهید تا اضافه کنید',
        requiredMessage: 'مدل پایه نمی‌تواند خالی باشد'
      }
    }
  },
  download: {
    downloading: 'در حال دانلود...',
    cancelDownload: 'لغو دانلود'
  }
}