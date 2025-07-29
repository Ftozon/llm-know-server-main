export default {
  title: 'Kiến thức',
  createDataset: 'Tạo Kiến thức',
  general: 'Chung',
  web: 'Trang web',
  relatedApplications: 'Ứng dụng liên kết',
  document_count: 'tài liệu',
  relatedApp_count: 'ứng dụng liên kết',
  searchBar: {
    placeholder: 'Tìm kiếm theo tên'
  },
  setting: {
    vectorization: 'Vector hóa',
    sync: 'Đồng bộ'
  },
  tip: {
    professionalMessage: 'Hỗ trợ tối đa 50 kiến thức.',
    syncSuccess: 'Gửi tác vụ đồng bộ thành công',
    updateModeMessage: 'Sau khi thay đổi mô hình vector, cần vector hóa lại kiến thức. Bạn có muốn tiếp tục lưu?'
  },
  delete: {
    confirmTitle: 'Xác nhận xóa kiến thức:',
    confirmMessage1: 'Kiến thức này đang liên kết với',
    confirmMessage2: 'ứng dụng. Hành động này không thể hoàn tác!'
  },
  datasetForm: {
    title: {
      info: 'Cài đặt Kiến thức'
    },
    form: {
      datasetName: {
        label: 'Tên',
        placeholder: 'Nhập tên kiến thức',
        requiredMessage: 'Vui lòng nhập tên kiến thức'
      },
      datasetDescription: {
        label: 'Mô tả',
        placeholder: 'Mô tả nội dung kiến thức. Mô tả chi tiết giúp AI hiểu rõ hơn, nâng cao độ chính xác truy xuất.',
        requiredMessage: 'Vui lòng nhập mô tả kiến thức'
      },
      EmbeddingModel: {
        label: 'Mô hình Embedding',
        placeholder: 'Chọn mô hình embedding',
        requiredMessage: 'Vui lòng chọn mô hình embedding'
      },
      datasetType: {
        label: 'Loại',
        generalInfo: 'Tải lên tài liệu cục bộ',
        webInfo: 'Đồng bộ dữ liệu từ trang web'
      },
      source_url: {
        label: 'URL gốc',
        placeholder: 'Nhập URL gốc trang web',
        requiredMessage: 'Vui lòng nhập URL gốc'
      },
      selector: {
        label: 'Bộ chọn',
        placeholder: 'Mặc định là body, có thể nhập .classname/#idname/tagname'
      }
    }
  },
  ResultSuccess: {
    title: 'Tạo Kiến thức thành công',
    paragraph: 'Đoạn văn',
    paragraph_count: 'đoạn',
    documentList: 'Danh sách tài liệu',
    loading: 'Đang nhập',
    buttons: {
      toDataset: 'Về danh sách Kiến thức',
      toDocument: 'Đến Tài liệu'
    }
  },
  syncWeb: {
    title: 'Đồng bộ Kiến thức',
    syncMethod: 'Phương thức đồng bộ',
    replace: 'Đồng bộ thay thế',
    replaceText: 'Tải lại toàn bộ tài liệu web, thay thế dữ liệu hiện có',
    complete: 'Đồng bộ toàn bộ',
    completeText: 'Xóa tất cả tài liệu hiện tại và tải lại từ web',
    tip: 'Lưu ý: Mọi thao tác đồng bộ sẽ xóa dữ liệu cũ. Thận trọng!'
  }
}