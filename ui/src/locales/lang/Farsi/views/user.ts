export default {
  title: 'کاربر',
  createUser: 'ایجاد کاربر',
  editUser: 'ویرایش کاربر',
  setting: {
    updatePwd: 'تغییر رمز عبور'
  },
  tip: {
    professionalMessage:
      'حداکثر از ۲ کاربر پشتیبانی می‌شود.',
    updatePwdSuccess: 'رمز عبور کاربر با موفقیت به‌روزرسانی شد'
  },
  delete: {
    confirmTitle: 'تأیید حذف کاربر:',
    confirmMessage:
      'حذف این کاربر منجر به حذف تمام منابع (APP، دانش، مدل‌ها) ایجاد شده توسط این کاربر خواهد شد. لطفاً با احتیاط عمل کنید.'
  },
  disabled: {
    confirmTitle: 'تأیید غیرفعال‌سازی عملکرد:',
    confirmMessage:
      'غیرفعال‌سازی این عملکرد باعث بروز خطا در هنگام پرس‌وجوی APPهایی که به آن ارجاع داده شده‌اند، خواهد شد. لطفاً با احتیاط عمل کنید.'
  },
  userForm: {
    form: {
      username: {
        label: 'نام کاربری',
        placeholder: 'لطفاً نام کاربری را وارد کنید',
        requiredMessage: 'لطفاً نام کاربری را وارد کنید',
        lengthMessage: 'طول باید بین ۶ تا ۲۰ کلمه باشد'
      },
      nick_name: {
        label: 'نام',
        placeholder: 'لطفاً نام را وارد کنید'
      },
      email: {
        label: 'ایمیل',
        placeholder: 'لطفاً ایمیل را وارد کنید',
        requiredMessage: 'لطفاً ایمیل را وارد کنید'
      },
      phone: {
        label: 'تلفن',
        placeholder: 'لطفاً شماره تلفن را وارد کنید'
      },
      password: {
        label: 'رمز عبور ورود',
        placeholder: 'لطفاً رمز عبور را وارد کنید',
        requiredMessage: 'لطفاً رمز عبور را وارد کنید',
        lengthMessage: 'طول باید بین ۶ تا ۲۰ کلمه باشد'
      },
      new_password: {
        label: 'رمز عبور جدید',
        placeholder: 'لطفاً رمز عبور جدید را وارد کنید',
        requiredMessage: 'لطفاً رمز عبور جدید را وارد کنید'
      },
      re_password: {
        label: 'تأیید رمز عبور',
        placeholder: 'لطفاً رمز عبور را تأیید کنید',
        requiredMessage: 'لطفاً رمز عبور را تأیید کنید',
        validatorMessage: 'رمزهای عبور مطابقت ندارند'
      }
    }
  },
  source: {
    label: 'نوع کاربر',
    local: 'کاربر سیستم',
    wecom: 'وی‌چت (WeCom)',
    lark: 'لارک (Lark)',
    dingtalk: 'دینگ‌تاک (DingTalk)'
  }
}