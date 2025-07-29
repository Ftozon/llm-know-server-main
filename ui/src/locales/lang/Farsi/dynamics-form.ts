export default {
  input_type_list: {
    TextInput: 'ورودی متن',
    PasswordInput: 'ورودی رمز عبور',
    Slider: 'لغزنده',
    SwitchInput: 'سوئیچ',
    SingleSelect: 'انتخاب تکی',
    MultiSelect: 'انتخاب چندتایی',
    DatePicker: 'انتخاب تاریخ',
    JsonInput: 'JSON',
    RadioCard: 'کارت رادیویی',
    RadioRow: 'ردیف رادیویی'
  },
  default: {
    label: 'پیش‌فرض',
    placeholder: 'لطفاً یک مقدار پیش‌فرض وارد کنید',
    requiredMessage: ' یک ویژگی ضروری است',
    show: 'نمایش پیش‌فرض'
  },
  tip: {
    requiredMessage: 'نمی‌تواند خالی باشد',
    jsonMessage: 'فرمت JSON نادرست است'
  },
  searchBar: {
    placeholder: 'لطفاً کلمات کلیدی را برای جستجو وارد کنید'
  },
  paramForm: {
    field: {
      label: 'پارامتر',
      placeholder: 'لطفاً یک پارامتر وارد کنید',
      requiredMessage: 'پارامتر یک ویژگی ضروری است',
      requiredMessage2: 'فقط حروف، اعداد و زیرخط مجاز هستند'
    },
    name: {
      label: 'نام',
      placeholder: 'لطفاً یک نام وارد کنید',
      requiredMessage: 'نام یک ویژگی ضروری است'
    },
    tooltip: {
      label: 'راهنما',
      placeholder: 'لطفاً یک راهنما وارد کنید'
    },
    required: {
      label: 'ضروری',
      requiredMessage: 'ضروری بودن یک ویژگی ضروری است'
    },
    input_type: {
      label: 'نوع',
      placeholder: 'لطفاً یک نوع انتخاب کنید',
      requiredMessage: 'نوع یک ویژگی ضروری است'
    }
  },
  DatePicker: {
    placeholder: 'تاریخ را انتخاب کنید',
    year: 'سال',
    month: 'ماه',
    date: 'تاریخ',
    datetime: 'تاریخ و زمان',
    dataType: {
      label: 'نوع تاریخ',
      placeholder: 'لطفاً یک نوع تاریخ انتخاب کنید'
    },
    format: {
      label: 'فرمت',
      placeholder: 'لطفاً یک فرمت انتخاب کنید'
    }
  },
  Select: {
    label: 'مقدار گزینه',
    placeholder: 'لطفاً یک مقدار گزینه وارد کنید'
  },
  tag: {
    label: 'برچسب',
    placeholder: 'لطفاً یک برچسب گزینه وارد کنید'
  },
  Slider: {
    showInput: {
      label: 'نمایش جعبه ورودی'
    },
    valueRange: {
      label: 'محدوده مقدار',
      minRequired: 'مقدار حداقل الزامی است',
      maxRequired: 'مقدار حداکثر الزامی است'
    },
    step: {
      label: 'مقدار گام',
      requiredMessage1: 'مقدار گام الزامی است',
      requiredMessage2: 'مقدار گام نمی‌تواند صفر باشد'
    }
  },
  TextInput: {
    length: {
      label: 'طول متن',
      minRequired: 'حداقل طول الزامی است',
      maxRequired: 'حداکثر طول الزامی است',
      requiredMessage1: 'طول باید بین',
      requiredMessage2: 'و',
      requiredMessage3: 'کاراکتر باشد',
      requiredMessage4: 'طول متن یک پارامتر ضروری است'
    }
  }
}