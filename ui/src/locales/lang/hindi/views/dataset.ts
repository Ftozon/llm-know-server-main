export default {
  title: 'ज्ञान',
  createDataset: 'ज्ञान बनाएं',
  general: 'सामान्य',
  web: 'वेबसाइट',
  relatedApplications: 'लिंक्ड ऐप्प',
  document_count: 'दस्तावेज़',
  relatedApp_count: 'लिंक्ड ऐप्स',
  searchBar: {
    placeholder: 'नाम से खोजें'
  },
  setting: {
    vectorization: 'वेक्टराइज़ेशन',
    sync: 'सिंक'
  },
  tip: {
    professionalMessage: 'अधिकतम 50 ज्ञान समर्थित',
    syncSuccess: 'सिंक टास्क सफलतापूर्वक भेजा गया',
    updateModeMessage: 'एम्बेडिंग मॉडल बदलने के बाद ज्ञान को वेक्टराइज़ करना आवश्यक है। क्या आप सेव जारी रखना चाहते हैं?'
  },
  delete: {
    confirmTitle: 'ज्ञान हटाने की पुष्टि:',
    confirmMessage1: 'यह ज्ञान',
    confirmMessage2: 'ऐप्प से जुड़ा है। हटाने पर यह अपरिवर्तनीय होगा, सावधानी बरतें।'
  },
  datasetForm: {
    title: {
      info: 'ज्ञान सेटिंग्स'
    },
    form: {
      datasetName: {
        label: 'नाम',
        placeholder: 'ज्ञान का नाम दर्ज करें',
        requiredMessage: 'कृपया ज्ञान का नाम दर्ज करें'
      },
      datasetDescription: {
        label: 'विवरण',
        placeholder: 'ज्ञान की सामग्री का विस्तृत वर्णन करें। यह एआई को सामग्री बेहतर समझने और खोज सटीकता बढ़ाने में मदद करेगा।',
        requiredMessage: 'कृपया ज्ञान विवरण दर्ज करें'
      },
      EmbeddingModel: {
        label: 'एम्बेडिंग मॉडल',
        placeholder: 'एम्बेडिंग मॉडल चुनें',
        requiredMessage: 'कृपया एम्बेडिंग मॉडल चुनें'
      },
      datasetType: {
        label: 'प्रकार',
        generalInfo: 'स्थानीय दस्तावेज़ अपलोड करें',
        webInfo: 'वेबसाइट से टेक्स्ट डेटा सिंक करें'
      },
      source_url: {
        label: 'वेब रूट URL',
        placeholder: 'वेबसाइट का मूल URL दर्ज करें',
        requiredMessage: 'कृपया वेब URL दर्ज करें'
      },
      selector: {
        label: 'सिलेक्टर',
        placeholder: 'डिफ़ॉल्ट body, .classname/#idname/tagname इनपुट कर सकते हैं'
      }
    }
  },
  ResultSuccess: {
    title: 'ज्ञान सफलतापूर्वक बनाया गया',
    paragraph: 'अनुच्छेद',
    paragraph_count: 'अनुच्छेद',
    documentList: 'दस्तावेज़ सूची',
    loading: 'आयात हो रहा है',
    buttons: {
      toDataset: 'ज्ञान सूची पर लौटें',
      toDocument: 'दस्तावेज़ पर जाएं'
    }
  },
  syncWeb: {
    title: 'ज्ञान सिंक करें',
    syncMethod: 'सिंक विधि',
    replace: 'रिप्लेस सिंक',
    replaceText: 'वेबसाइट दस्तावेज़ पुनः प्राप्त करें और स्थानीय ज्ञान के दस्तावेज़ बदलें',
    complete: 'पूर्ण सिंक',
    completeText: 'स्थानीय ज्ञान में सभी दस्तावेज़ हटाएं और वेबसाइट दस्तावेज़ पुनः प्राप्त करें',
    tip: 'नोट: सभी सिंक ऑपरेशन मौजूदा डेटा हटाएंगे। सावधानी से आगे बढ़ें।'
  }
}