export default {
  uploadDocument: 'Tải lên tài liệu',
  importDocument: 'Nhập tài liệu',
  syncDocument: 'Đồng bộ tài liệu',
  selected: 'Đã chọn',
  items: 'mục',
  searchBar: {
    placeholder: 'Tìm kiếm theo tên tài liệu'
  },
  setting: {
    migration: 'Di chuyển',
    cancelGenerateQuestion: 'Hủy tạo câu hỏi',
    cancelVectorization: 'Hủy vector hóa',
    cancelGenerate: 'Hủy tạo',
    export: 'Xuất sang'
  },
  tip: {
    saveMessage: 'Thay đổi chưa được lưu. Xác nhận thoát?',
    cancelSuccess: 'Thành công',
    sendMessage: 'Thành công',
    vectorizationSuccess: 'Thành công',
    nameMessage: 'Tên tài liệu không được để trống!',
    importMessage: 'Thành công',
    migrationSuccess: 'Thành công'
  },
  upload: {
    selectFile: 'Chọn tệp',
    selectFiles: 'Chọn thư mục',
    uploadMessage: 'Kéo thả tệp vào đây hoặc',
    formats: 'Định dạng hỗ trợ:',
    requiredMessage: 'Vui lòng tải lên tệp',
    errorMessage1: 'Dung lượng tệp vượt quá 100MB',
    errorMessage2: 'Định dạng không hỗ trợ',
    errorMessage3: 'Tệp không được trống',
    errorMessage4: 'Tối đa 50 tệp mỗi lần',
    template: 'Mẫu',
    download: 'Tải xuống'
  },
  fileType: {
    txt: {
      label: 'Tệp văn bản',
      tip1: '1. Khuyến nghị chuẩn hóa dấu phân đoạn trước khi tải lên.',
      tip2: '2. Tối đa 50 tệp, mỗi tệp ≤100MB.'
    },
    table: {
      label: 'Bảng biểu',
      tip1: '1. Tải mẫu và điền thông tin:',
      tip2: '2. Hàng đầu tiên phải là tiêu đề cột. Mỗi bản ghi được xem là một đoạn.',
      tip3: '3. Mỗi sheet trong file được xem là một tài liệu riêng.',
      tip4: '4. Tối đa 50 tệp, mỗi tệp ≤100MB.'
    },
    QA: {
      label: 'Cặp Hỏi-Đáp',
      tip1: '1. Tải mẫu và điền thông tin:',
      tip2: '2. Mỗi sheet trong file được xem là một tài liệu.',
      tip3: '3. Tối đa 50 tệp, mỗi tệp ≤100MB.'
    }
  },
  setRules: {
    title: {
      setting: 'Thiết lập quy tắc phân đoạn',
      preview: 'Xem trước'
    },
    intelligent: {
      label: 'Tự động phân đoạn (Khuyến nghị)',
      text: 'Tự động phân chia nội dung nếu không rõ quy tắc'
    },
    advanced: {
      label: 'Phân đoạn nâng cao',
      text: 'Tùy chỉnh dấu phân cách và độ dài đoạn'
    },
    patterns: {
      label: 'Dấu phân cách',
      tooltip: 'Phân tách theo thứ tự ký tự được chọn. Nếu vượt độ dài sẽ cắt ngắn.',
      placeholder: 'Chọn ký tự'
    },
    limit: {
      label: 'Độ dài đoạn'
    },
    with_filter: {
      label: 'Tự động làm sạch',
      text: 'Loại bỏ ký tự thừa, khoảng trắng và dòng trống'
    },
    checkedConnect: {
      label: 'Thêm phần "Câu hỏi liên quan" cho cặp Hỏi-Đáp'
    }
  },
  buttons: {
    prev: 'Trước',
    next: 'Sau',
    import: 'Bắt đầu nhập',
    preview: 'Áp dụng'
  },
  table: {
    name: 'Tên tài liệu',
    char_length: 'Ký tự',
    paragraph: 'Đoạn',
    all: 'Tất cả',
    updateTime: 'Thời gian cập nhật'
  },
  fileStatus: {
    label: 'Trạng thái',
    SUCCESS: 'Thành công',
    FAILURE: 'Thất bại',
    EMBEDDING: 'Đang index',
    PENDING: 'Đang chờ',
    GENERATE: 'Đang tạo',
    SYNC: 'Đang đồng bộ',
    REVOKE: 'Đang hủy',
    finish: 'Hoàn tất'
  },
  enableStatus: {
    label: 'Trạng thái',
    enable: 'Bật',
    close: 'Tắt'
  },
  sync: {
    label: 'Đồng bộ',
    confirmTitle: 'Xác nhận đồng bộ tài liệu?',
    confirmMessage1: 'Đồng bộ sẽ xóa dữ liệu hiện có. Thận trọng!',
    confirmMessage2: 'Không thể đồng bộ, vui lòng thiết lập URL trước.',
    successMessage: 'Thành công'
  },
  delete: {
    confirmTitle1: 'Xác nhận xóa hàng loạt',
    confirmTitle2: 'tài liệu?',
    confirmMessage: 'Các đoạn trong tài liệu cũng sẽ bị xóa. Thận trọng!',
    successMessage: 'Thành công',
    confirmTitle3: 'Xác nhận xóa tài liệu:',
    confirmMessage1: 'Toàn bộ',
    confirmMessage2: 'đoạn trong tài liệu này sẽ bị xóa.'
  },
  form: {
    source_url: {
      label: 'URL tài liệu',
      placeholder: 'Mỗi dòng một URL. URL sai sẽ gây lỗi nhập.',
      requiredMessage: 'Vui lòng nhập URL'
    },
    selector: {
      label: 'Bộ chọn',
      placeholder: 'Mặc định là body, có thể nhập .classname/#idname/tagname'
    },
    hit_handling_method: {
      label: 'Xử lý kết quả',
      tooltip: 'Cách xử lý đoạn phù hợp khi người dùng hỏi'
    },
    similarity: {
      label: 'Độ tương đồng trên',
      placeholder: 'Trả về trực tiếp nội dung',
      requiredMessage: 'Nhập giá trị độ tương đồng'
    }
  },
  hitHandlingMethod: {
    optimization: 'Tối ưu bằng mô hình',
    directly_return: 'Trả lời trực tiếp'
  },
  generateQuestion: {
    title: 'Tạo câu hỏi',
    successMessage: 'Thành công',
    tip1: '{data} trong prompt là trình giữ chỗ cho nội dung đoạn',
    tip2: 'Mô hình AI tạo câu hỏi liên quan. Đặt câu hỏi trong',
    tip3: 'thẻ để hệ thống tự động liên kết',
    tip4: 'Hiệu quả phụ thuộc vào mô hình và prompt được chọn.',
    prompt1: 'Nội dung: {data}\n\nTạo 5 câu hỏi dựa trên nội dung và đặt trong',
    prompt2: 'thẻ.'
  }
}