export default {
  node: 'Nút',
  nodeName: 'Tên nút',
  baseComponent: 'Cơ bản',
  nodeSetting: 'Cài đặt nút',
  workflow: 'Quy trình làm việc',
  searchBar: {
    placeholder: 'Tìm kiếm theo tên'
  },
  info: {
    previewVersion: 'Phiên bản xem trước:',
    saveTime: 'Lần lưu cuối:'
  },
  setting: {
    restoreVersion: 'Khôi phục phiên bản trước',
    restoreCurrentVersion: 'Khôi phục về phiên bản này',
    addComponent: 'Thêm',
    public: 'Xuất bản',
    releaseHistory: 'Lịch sử phát hành',
    autoSave: 'Tự động lưu',
    latestRelease: 'Bản mới nhất',
    copyParam: 'Sao chép tham số',
    debug: 'Chạy',
    exit: 'Thoát',
    exitSave: 'Lưu & Thoát',
  },
  tip: {
    publicSuccess: 'Xuất bản thành công',
    noData: 'Không tìm thấy dữ liệu liên quan',
    nameMessage: 'Tên không được để trống!',
    onlyRight: 'Chỉ kết nối từ điểm neo bên phải',
    notRecyclable: 'Không cho phép kết nối vòng lặp',
    onlyLeft: 'Chỉ kết nối đến điểm neo bên trái',
    applicationNodeError: 'Ứng dụng này không khả dụng',
    functionNodeError: 'Nút chức năng không khả dụng',
    repeatedNodeError: 'Tên nút đã tồn tại',
    cannotCopy: 'Không thể sao chép',
    copyError: 'Nút đã được sao chép',
    paramErrorMessage: 'Tham số đã tồn tại: ',
    saveMessage: 'Thay đổi chưa được lưu. Lưu trước khi thoát?',
  },
  delete: {
    confirmTitle: 'Xác nhận xóa nút này?',
    deleteMessage: 'Không thể xóa nút này'
  },
  control: {
    zoomOut: 'Thu nhỏ',
    zoomIn: 'Phóng to',
    fitView: 'Vừa màn hình',
    retract: 'Thu gọn tất cả',
    extend: 'Mở rộng tất cả',
    beautify: 'Tự động sắp xếp'
  },
  variable: {
    label: 'Biến số',
    global: 'Biến toàn cục',
    Referencing: 'Biến tham chiếu',
    ReferencingRequired: 'Biến tham chiếu là bắt buộc',
    ReferencingError: 'Biến tham chiếu không hợp lệ',
    NoReferencing: 'Biến tham chiếu không tồn tại',
    placeholder: 'Vui lòng chọn biến'
  },
  condition: {
    title: 'Điều kiện thực thi',
    front: 'Điều kiện trước',
    AND: 'Tất cả',
    OR: 'Bất kỳ',
    text: 'Thực thi nút này sau khi nút được kết nối hoàn thành'
  },
  validate: {
    startNodeRequired: 'Yêu cầu nút bắt đầu',
    startNodeOnly: 'Chỉ cho phép một nút bắt đầu',
    baseNodeRequired: 'Yêu cầu nút thông tin cơ bản',
    baseNodeOnly: 'Chỉ cho phép một nút thông tin cơ bản',
    notInWorkFlowNode: 'Nút không thuộc quy trình',
    noNextNode: 'Không có nút tiếp theo',
    nodeUnavailable: 'Nút không khả dụng',
    needConnect1: 'Nhánh của nút cần được kết nối',
    cannotEndNode: 'Không thể dùng làm nút kết thúc'
  },
  nodes: {
    startNode: {
      label: 'Bắt đầu',
      question: 'Câu hỏi người dùng',
      currentTime: 'Thời gian hiện tại'
    },
    baseNode: {
      label: 'Thông tin cơ bản',
      appName: {
        label: 'Tên ứng dụng'
      },
      appDescription: {
        label: 'Mô tả ứng dụng'
      },
      fileUpload: {
        label: 'Tải lên tệp',
        tooltip: 'Khi bật, trang Q&A sẽ hiển thị nút tải lên tệp.'
      },
      FileUploadSetting: {
        title: 'Cài đặt tải tệp',
        maxFiles: 'Số tệp tối đa mỗi lần',
        fileLimit: 'Dung lượng tối đa/tệp (MB)',
        fileUploadType: {
          label: 'Loại tệp được phép',
          documentText: 'Yêu cầu nút "Trích xuất tài liệu" để xử lý',
          imageText: 'Yêu cầu nút "Hiểu hình ảnh" để xử lý',
          audioText: 'Yêu cầu nút "Chuyển giọng nói thành văn bản" để xử lý'
        }
      }
    },
    aiChatNode: {
      label: 'Trò chuyện AI',
      text: 'Tương tác với mô hình AI',
      answer: 'Nội dung AI',
      returnContent: {
        label: 'Trả về nội dung',
        tooltip: `Nếu tắt, nội dung này sẽ không hiển thị cho người dùng.
                  Bật để hiển thị kết quả.`
      },
      defaultPrompt: 'Thông tin đã biết',
      think: 'Quá trình suy nghĩ'
    },
    searchDatasetNode: {
      label: 'Truy xuất Kiến thức',
      text: 'Truy vấn nội dung liên quan từ Kiến thức',
      paragraph_list: 'Danh sách đoạn truy xuất',
      is_hit_handling_method_list: 'Đoạn đáp ứng tiêu chí',
      result: 'Kết quả tìm kiếm',
      directly_return: 'Nội dung đáp ứng trực tiếp',
      searchParam: 'Tham số tìm kiếm',
      searchQuestion: {
        label: 'Câu hỏi',
        placeholder: 'Chọn câu hỏi tìm kiếm',
        requiredMessage: 'Vui lòng chọn câu hỏi'
      }
    },
    questionNode: {
      label: 'Tối ưu câu hỏi',
      text: 'Cải thiện câu hỏi dựa trên lịch sử chat',
      result: 'Kết quả câu hỏi tối ưu',
      defaultPrompt1: `Cải thiện câu hỏi của người dùng dựa trên ngữ cảnh:`,
      defaultPrompt2: `Xuất câu hỏi đã tối ưu.`,
      systemDefault: 'Bạn là chuyên gia tối ưu câu hỏi'
    },
    conditionNode: {
      label: 'Nhánh điều kiện',
      text: 'Kích hoạt nút khác nhau theo điều kiện',
      branch_name: 'Tên nhánh',
      conditions: {
        label: 'Điều kiện',
        info: 'Thỏa mãn các điều sau',
        requiredMessage: 'Vui lòng chọn điều kiện'
      },
      valueMessage: 'Nhập giá trị',
      addCondition: 'Thêm điều kiện',
      addBranch: 'Thêm nhánh'
    },
    replyNode: {
      label: 'Trả lời chỉ định',
      text: 'Xác định nội dung trả lời (biến sẽ được chuyển thành chuỗi)',
      content: 'Nội dung',
      replyContent: {
        label: 'Nội dung trả lời',
        custom: 'Tùy chỉnh',
        reference: 'Tham chiếu biến'
      }
    },
    rerankerNode: {
      label: 'Đa nguồn truy xuất',
      text: 'Sử dụng mô hình sắp xếp lại kết quả từ nhiều nguồn Kiến thức',
      result_list: 'Danh sách kết quả sắp xếp',
      result: 'Kết quả sắp xếp',
      rerankerContent: {
        label: 'Nội dung sắp xếp',
        requiredMessage: 'Chọn nội dung cần sắp xếp'
      },
      higher: 'Cao hơn',
      ScoreTooltip: 'Điểm càng cao, liên quan càng mạnh.',
      max_paragraph_char_number: 'Số ký tự tối đa',
      reranker_model: {
        label: 'Mô hình sắp xếp',
        placeholder: 'Chọn mô hình'
      }
    },
    formNode: {
      label: 'Nhập biểu mẫu',
      text: 'Thu thập thông tin người dùng trong Q&A',
      form_content_format1: 'Vui lòng điền biểu mẫu sau:',
      form_content_format2: 'Nhấn [Gửi] sau khi hoàn thành.',
      form_data: 'Toàn bộ nội dung biểu mẫu',
      formContent: {
        label: 'Nội dung đầu ra',
        requiredMessage: 'Vui lòng thiết lập nội dung đầu ra, { form } là trình giữ chỗ cho biểu mẫu.',
        tooltip: 'Xác định nội dung đầu ra sử dụng trình giữ chỗ { form }'
      },
      formAllContent: 'Toàn bộ nội dung',
      formSetting: 'Cấu hình biểu mẫu'
    },
    documentExtractNode: {
      label: 'Trích xuất tài liệu',
      text: 'Trích xuất nội dung từ tài liệu',
      content: 'Nội dung tài liệu'
    },
    imageUnderstandNode: {
      label: 'Hiểu hình ảnh',
      text: 'Phân tích đối tượng và bối cảnh trong ảnh',
      answer: 'Nội dung AI',
      model: {
        label: 'Mô hình thị giác',
        requiredMessage: 'Chọn mô hình thị giác'
      },
      image: {
        label: 'Chọn ảnh',
        requiredMessage: 'Vui lòng chọn ảnh'
      }
    },
    variableAssignNode: {
      label: 'Gán biến',
      text: 'Cập nhật giá trị biến toàn cục',
      assign: 'Thiết lập giá trị'
    },
    imageGenerateNode: {
      label: 'Tạo ảnh',
      text: 'Tạo ảnh từ nội dung văn bản',
      answer: 'Nội dung AI',
      model: {
        label: 'Mô hình tạo ảnh',
        requiredMessage: 'Chọn mô hình'
      },
      prompt: {
        label: 'Prompt tích cực',
        tooltip: 'Mô tả yếu tố muốn có trong ảnh'
      },
      negative_prompt: {
        label: 'Prompt tiêu cực',
        tooltip: 'Mô tả yếu tố cần loại trừ',
        placeholder: 'VD: màu sắc, nội dung không phù hợp'
      }
    },
    speechToTextNode: {
      label: 'Chuyển giọng nói thành văn bản',
      text: 'Chuyển đổi âm thanh sang văn bản',
      stt_model: {
        label: 'Mô hình nhận dạng giọng nói'
      },
      audio: {
        label: 'Chọn tệp âm thanh',
        placeholder: 'Vui lòng chọn tệp'
      }
    },
    textToSpeechNode: {
      label: 'Tổng hợp giọng nói',
      text: 'Chuyển văn bản thành âm thanh',
      tts_model: {
        label: 'Mô hình tổng hợp giọng nói'
      },
      content: {
        label: 'Chọn nội dung văn bản'
      }
    },
    functionNode: {
      label: 'Hàm tùy chỉnh',
      text: 'Thực thi script tùy chỉnh để xử lý dữ liệu'
    },
    applicationNode: {
      label: 'Nút Ứng dụng'
    }
  },
  compare: {
    is_null: 'Là null',
    is_not_null: 'Không null',
    contain: 'Chứa',
    not_contain: 'Không chứa',
    eq: 'Bằng',
    ge: 'Lớn hơn hoặc bằng',
    gt: 'Lớn hơn',
    le: 'Nhỏ hơn hoặc bằng',
    lt: 'Nhỏ hơn',
    len_eq: 'Độ dài bằng',
    len_ge: 'Độ dài ≥',
    len_gt: 'Độ dài >',
    len_le: 'Độ dài ≤',
    len_lt: 'Độ dài <'
  },
  FileUploadSetting: {}
}