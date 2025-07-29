export default {
  title: 'ব্যবহারকারী',
  createUser: 'ব্যবহারকারী তৈরি করুন',
  editUser: 'ব্যবহারকারী সম্পাদনা করুন',
  setting: {
    updatePwd: 'পাসওয়ার্ড পরিবর্তন করুন'
  },
  tip: {
    professionalMessage:
      'সর্বোচ্চ 2 জন ব্যবহারকারী সমর্থন করে।',
    updatePwdSuccess: 'ব্যবহারকারীর পাসওয়ার্ড সফলভাবে আপডেট হয়েছে'
  },
  delete: {
    confirmTitle: 'ব্যবহারকারী মুছে ফেলার নিশ্চয়তা:',
    confirmMessage:
      'এই ব্যবহারকারীকে মুছে ফেললে এই ব্যবহারকারী দ্বারা তৈরি সমস্ত সম্পদ (APP, জ্ঞান, মডেল) মুছে যাবে। সতর্কতার সাথে এগিয়ে যান।'
  },
  disabled: {
    confirmTitle: 'ফাংশন অক্ষম করার নিশ্চয়তা:',
    confirmMessage:
      'এই ফাংশনটি অক্ষম করা হলে এটি যেসব APP-এ উল্লেখ করা হয়েছে তাদের প্রশ্নের সময় ত্রুটি ঘটবে। সতর্কতার সাথে এগিয়ে যান।'
  },
  userForm: {
    form: {
      username: {
        label: 'ব্যবহারকারীর নাম',
        placeholder: 'ব্যবহারকারীর নাম লিখুন',
        requiredMessage: 'ব্যবহারকারীর নাম লিখুন',
        lengthMessage: 'দৈর্ঘ্য 6 থেকে 20 শব্দের মধ্যে হতে হবে'
      },
      nick_name: {
        label: 'নাম',
        placeholder: 'নাম লিখুন'
      },
      email: {
        label: 'ইমেল',
        placeholder: 'ইমেল লিখুন',
        requiredMessage: 'ইমেল লিখুন'
      },
      phone: {
        label: 'ফোন',
        placeholder: 'ফোন নম্বর লিখুন'
      },
      password: {
        label: 'লগইন পাসওয়ার্ড',
        placeholder: 'পাসওয়ার্ড লিখুন',
        requiredMessage: 'পাসওয়ার্ড লিখুন',
        lengthMessage: 'দৈর্ঘ্য 6 থেকে 20 শব্দের মধ্যে হতে হবে'
      },
      new_password: {
        label: 'নতুন পাসওয়ার্ড',
        placeholder: 'নতুন পাসওয়ার্ড লিখুন',
        requiredMessage: 'নতুন পাসওয়ার্ড লিখুন'
      },
      re_password: {
        label: 'পাসওয়ার্ড নিশ্চিত করুন',
        placeholder: 'পাসওয়ার্ড নিশ্চিত করুন',
        requiredMessage: 'পাসওয়ার্ড নিশ্চিত করুন',
        validatorMessage: 'পাসওয়ার্ড মেলে না'
      }
    }
  },
  source: {
    label: 'ব্যবহারকারীর ধরণ',
    local: 'সিস্টেম ব্যবহারকারী',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk'
  }
}