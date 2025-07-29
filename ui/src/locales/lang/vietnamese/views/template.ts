export default {
  title: 'Mô hình',
  provider: 'Nhà cung cấp',
  providerPlaceholder: 'Chọn nhà cung cấp',
  addModel: 'Thêm mô hình',
  searchBar: {
    placeholder: 'Tìm kiếm theo tên'
  },
  delete: {
    confirmTitle: 'Xóa mô hình',
    confirmMessage: 'Bạn có chắc muốn xóa mô hình:'
  },
  tip: {
    createSuccessMessage: 'Tạo mô hình thành công',
    createErrorMessage: 'Lỗi thông tin cơ bản',
    errorMessage: 'Biến đã tồn tại: ',
    emptyMessage1: 'Vui lòng chọn loại mô hình và mô hình cơ sở trước',
    emptyMessage2: 'Mô hình đã chọn không hỗ trợ cài đặt tham số',
    updateSuccessMessage: 'Cập nhật mô hình thành công',
    saveSuccessMessage: 'Lưu tham số mô hình thành công',
    downloadError: 'Tải xuống thất bại',
    noModel: 'Mô hình không tồn tại trong Ollama'
  },
  model: {
    allModel: 'Tất cả mô hình',
    publicModel: 'Mô hình công khai',
    privateModel: 'Mô hình riêng tư',
    LLM: 'LLM',
    EMBEDDING: 'Mô hình Embedding',
    RERANKER: 'Sắp xếp lại',
    STT: 'Chuyển giọng nói thành văn bản',
    TTS: 'TTS',
    IMAGE: 'Mô hình thị giác',
    TTI: 'Tạo ảnh'
  },
  templateForm: {
    title: {
      baseInfo: 'Thông tin cơ bản',
      advancedInfo: 'Cài đặt nâng cao',
      modelParams: 'Tham số mô hình',
      editParam: 'Sửa tham số',
      addParam: 'Thêm tham số',
      paramSetting: 'Cài đặt tham số mô hình',
      apiParamPassing: 'Tham số giao diện'
    },
    form: {
      templateName: {
        label: 'Tên mô hình',
        placeholder: 'Đặt tên cho mô hình cơ sở',
        tooltip: 'Tên mô hình tùy chỉnh trong LLM-Know',
        requiredMessage: 'Tên mô hình không được trống'
      },
      permissionType: {
        label: 'Quyền truy cập',
        privateDesc: 'Chỉ người dùng hiện tại',
        publicDesc: 'Cho tất cả người dùng',
        requiredMessage: 'Quyền không được trống'
      },
      model_type: {
        label: 'Loại mô hình',
        placeholder: 'Chọn loại mô hình',
        tooltip1: 'LLM: Mô hình suy luận cho trò chuyện AI trong ứng dụng',
        tooltip2: 'Mô hình Embedding: Dùng để vector hóa nội dung tài liệu',
        tooltip3: 'Speech2Text: Mô hình nhận dạng giọng nói',
        tooltip4: 'TTS: Mô hình tổng hợp giọng nói',
        tooltip5: 'Rerank: Sắp xếp lại các đoạn ứng viên trong APP nâng cao',
        tooltip6: 'Mô hình thị giác: Phân tích hình ảnh trong APP nâng cao',
        tooltip7: 'Tạo ảnh: Mô hình tạo hình ảnh trong APP nâng cao',
        requiredMessage: 'Vui lòng chọn loại mô hình'
      },
      base_model: {
        label: 'Mô hình cơ sở',
        tooltip: 'Nhập tên mô hình chưa có trong danh sách và nhấn Enter',
        placeholder: 'Nhập tên mô hình cơ sở',
        requiredMessage: 'Mô hình cơ sở không được trống'
      }
    }
  },
  download: {
    downloading: 'Đang tải xuống...',
    cancelDownload: 'Hủy tải'
  }
}