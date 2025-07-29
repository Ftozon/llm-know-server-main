export default {
  title: 'ỨNG DỤNG',
  createApplication: 'Tạo ứng dụng',
  importApplication: 'Nhập ứng dụng',
  copyApplication: 'Sao chép ứng dụng',
  workflow: 'QUY TRÌNH',
  simple: 'ĐƠN GIẢN',
  searchBar: {
    placeholder: 'Tìm kiếm theo tên'
  },
  setting: {
    demo: 'Bản demo'
  },
  delete: {
    confirmTitle: 'Bạn có chắc muốn xóa ứng dụng này: ',
    confirmMessage: 'Xóa ứng dụng sẽ ngừng cung cấp dịch vụ. Hãy thận trọng!'
  },
  tip: {
    ExportError: 'Xuất thất bại',
    professionalMessage: 'Phiên bản này hỗ trợ tối đa 5 ứng dụng.',
    saveErrorMessage: 'Lưu thất bại, vui lòng kiểm tra đầu vào hoặc thử lại sau',
    loadingErrorMessage: 'Tải cấu hình thất bại, vui lòng kiểm tra đầu vào hoặc thử lại sau'
  },
  applicationForm: {
    title: {
      appTest: 'Xem trước debug',
      copy: 'bản sao'
    },
    form: {
      appName: {
        label: 'Tên',
        placeholder: 'Nhập tên ứng dụng',
        requiredMessage: 'Tên ứng dụng là bắt buộc'
      },
      appDescription: {
        label: 'Mô tả',
        placeholder: 'Mô tả kịch bản sử dụng (VD: Trợ lý XXX giải đáp thắc mắc về sản phẩm)'
      },
      appType: {
        label: 'Loại',
        simplePlaceholder: 'Phù hợp cho người mới bắt đầu',
        workflowPlaceholder: 'Phù hợp để tùy chỉnh quy trình làm việc'
      },
      appTemplate: {
        blankApp: 'Ứng dụng trống',
        assistantApp: 'Trợ lý tri thức'
      },
      aiModel: {
        label: 'Mô hình AI',
        placeholder: 'Chọn mô hình AI'
      },
      roleSettings: {
        label: 'Vai trò hệ thống',
        placeholder: 'Bạn là trợ lý XXX'
      },
      prompt: {
        label: 'Lời nhắc',
        noReferences: '(Không tham chiếu Kiến thức)',
        references: '(Tham chiếu Kiến thức)',
        placeholder: 'Nhập lời nhắc',
        requiredMessage: 'Vui lòng nhập lời nhắc',
        tooltip: 'Điều chỉnh lời nhắc để định hướng phản hồi của AI.',
        noReferencesTooltip: 'Sử dụng biến: {question} là câu hỏi người dùng.',
        referencesTooltip: 'Sử dụng biến: {data} chứa thông tin từ Kiến thức, {question} là câu hỏi.',
        defaultPrompt: `Thông tin đã biết: {data}
          Câu hỏi: {question}
          Yêu cầu phản hồi: 
          - Sử dụng ngôn ngữ ngắn gọn, chuyên nghiệp.`
      },
      historyRecord: {
        label: 'Lịch sử chat'
      },
      relatedKnowledge: {
        label: 'Kiến thức liên quan',
        placeholder: 'Hiển thị kiến thức liên quan tại đây'
      },
      multipleRoundsDialogue: 'Đa thoại',
      prologue: 'Lời mở đầu',
      defaultPrologue: `Xin chào, tôi là Trợ lý XXX. Bạn có thể hỏi tôi về:
      - Tính năng chính của XXX?
      - XXX hỗ trợ LLM nào?
      - Loại tài liệu được hỗ trợ?`,
      problemOptimization: {
        label: 'Tối ưu câu hỏi',
        tooltip: 'Tối ưu hóa câu hỏi dựa trên lịch sử chat.'
      },
      voiceInput: {
        label: 'Nhập giọng nói',
        placeholder: 'Chọn mô hình nhận dạng giọng nói',
        requiredMessage: 'Vui lòng chọn mô hình',
        autoSend: 'Tự động gửi'
      },
      voicePlay: {
        label: 'Phát giọng nói',
        placeholder: 'Chọn mô hình tổng hợp giọng nói',
        requiredMessage: 'Vui lòng chọn mô hình',
        autoPlay: 'Tự động phát',
        browser: 'Phát qua trình duyệt (miễn phí)',
        tts: 'Mô hình TTS',
        listeningTest: 'Xem trước'
      },
      reasoningContent: {
        label: 'Hiển thị tư duy',
        tooltip: 'Thiết lập nhãn hiển thị quá trình suy luận của AI.',
        start: 'Bắt đầu',
        end: 'Kết thúc'
      }
    },
    buttons: {
      publish: 'Lưu & Xuất bản',
      addModel: 'Thêm mô hình'
    },
    dialog: {
      addDataset: 'Thêm Kiến thức',
      addDatasetPlaceholder: 'Chọn Kiến thức dùng chung embedding model',
      selected: 'Đã chọn',
      countDataset: 'Kiến thức',
      selectSearchMode: 'Chế độ tìm kiếm',
      vectorSearch: 'Tìm kiếm vector',
      vectorSearchTooltip: 'Phù hợp lượng dữ liệu lớn.',
      fullTextSearch: 'Tìm kiếm toàn văn',
      fullTextSearchTooltip: 'Phù hợp dữ liệu nhỏ.',
      hybridSearch: 'Tìm kiếm kết hợp',
      hybridSearchTooltip: 'Phù hợp dữ liệu trung bình.',
      similarityThreshold: 'Ngưỡng tương đồng',
      similarityTooltip: 'Giá trị càng cao, liên quan càng chặt.',
      topReferences: 'Top N đoạn',
      maxCharacters: 'Tối đa ký tự/đoạn',
      noReferencesAction: 'Khi không có tham chiếu',
      continueQuestioning: 'Tiếp tục hỏi AI',
      provideAnswer: 'Chỉ định câu trả lời',
      designated_answer: 'Xin lỗi, tôi chỉ hỗ trợ câu hỏi về XXX.',
      defaultPrompt1: 'Hoàn thiện câu hỏi ({question}) dựa trên ngữ cảnh và đặt trong',
      defaultPrompt2: 'thẻ'
    }
  },
  applicationAccess: {
    title: 'Truy cập ứng dụng',
    wecom: 'WeCom',
    wecomTip: 'Tạo ứng dụng WeCom',
    dingtalk: 'DingTalk',
    dingtalkTip: 'Tạo ứng dụng DingTalk',
    wechat: 'WeChat',
    wechatTip: 'Tạo ứng dụng WeChat',
    lark: 'Lark',
    larkTip: 'Tạo ứng dụng Lark',
    setting: 'Cài đặt',
    callback: 'URL callback',
    callbackTip: 'Nhập URL callback',
    wecomPlatform: 'Nền tảng mở WeCom',
    wechatPlatform: 'Nền tảng mở WeChat',
    dingtalkPlatform: 'Nền tảng mở DingTalk',
    larkPlatform: 'Nền tảng mở Lark',
    slack: 'Slack',
    slackTip: 'Tạo ứng dụng Slack',
    wecomSetting: {
      title: 'Cấu hình WeCom',
      cropId: 'ID tổ chức',
      cropIdPlaceholder: 'Nhập ID tổ chức',
      agentIdPlaceholder: 'Nhập ID agent',
      secretPlaceholder: 'Nhập secret',
      tokenPlaceholder: 'Nhập token',
      encodingAesKeyPlaceholder: 'Nhập EncodingAESKey',
      authenticationSuccessful: 'Thành công',
      urlInfo: 'Cài đặt URL tại: Quản lý ứng dụng -> Nhận tin nhắn'
    },
    dingtalkSetting: {
      title: 'Cấu hình DingTalk',
      clientIdPlaceholder: 'Nhập Client ID',
      clientSecretPlaceholder: 'Nhập Client Secret',
      urlInfo: 'Đặt chế độ nhận tin nhắn HTTP'
    },
    wechatSetting: {
      title: 'Cấu hình WeChat',
      appId: 'App ID',
      appIdPlaceholder: 'Nhập App ID',
      appSecret: 'App Secret',
      appSecretPlaceholder: 'Nhập App Secret',
      token: 'Token',
      tokenPlaceholder: 'Nhập Token',
      aesKey: 'Khóa mã hóa',
      aesKeyPlaceholder: 'Nhập khóa mã hóa',
      urlInfo: 'Cấu hình URL tại: Cài đặt cơ bản'
    },
    larkSetting: {
      title: 'Cấu hình Lark',
      appIdPlaceholder: 'Nhập App ID',
      appSecretPlaceholder: 'Nhập App Secret',
      verificationTokenPlaceholder: 'Nhập Verification Token',
      urlInfo: 'Cấu hình URL sự kiện'
    },
    slackSetting: {
      title: 'Cấu hình Slack',
      signingSecretPlaceholder: 'Nhập Signing Secret',
      botUserTokenPlaceholder: 'Nhập Bot User Token'
    },
    copyUrl: 'Sao chép URL'
  },
  hitTest: {
    title: 'Kiểm tra truy vấn',
    text: 'Kiểm tra hiệu quả truy xuất Kiến thức.',
    emptyMessage1: 'Kết quả kiểm tra sẽ hiển thị tại đây',
    emptyMessage2: 'Không tìm thấy đoạn phù hợp'
  }
}