export default {
  title: 'Tổng quan',
  appInfo: {
    header: 'Thông tin ứng dụng',
    publicAccessLink: 'Liên kết công khai',
    openText: 'Bật',
    closeText: 'Tắt',
    copyLinkText: 'Sao chép liên kết',
    refreshLinkText: 'Làm mới liên kết',
    demo: 'Xem trước',
    embedInWebsite: 'Nhúng vào website',
    accessControl: 'Kiểm soát truy cập',
    displaySetting: 'Cài đặt hiển thị',
    apiAccessCredentials: 'Thông tin xác thực API',
    apiKey: 'Khóa API',
    refreshToken: {
      msgConfirm1: 'Bạn có chắc muốn tạo lại URL công khai?',
      msgConfirm2: 'Việc này sẽ ảnh hưởng đến các mã nhúng hiện có. Bạn cần cập nhật lại mã nhúng trên các trang web bên thứ ba!',
      refreshSuccess: 'Làm mới thành công'
    },
    APIKeyDialog: {
      saveSettings: 'Lưu cài đặt',
      msgConfirm1: 'Bạn có chắc muốn xóa Khóa API',
      msgConfirm2: 'Hành động này không thể hoàn tác. Bạn vẫn muốn tiếp tục?',
      enabledSuccess: 'Đã kích hoạt',
      disabledSuccess: 'Đã vô hiệu hóa'
    },
    EditAvatarDialog: {
      title: 'Biểu tượng ứng dụng',
      customizeUpload: 'Tải lên tùy chỉnh',
      upload: 'Tải lên',
      default: 'Biểu tượng mặc định',
      custom: 'Tùy chỉnh',
      sizeTip: 'Kích thước đề xuất: 32×32 pixel. Định dạng JPG/PNG/GIF. Dung lượng tối đa: 10 MB',
      fileSizeExceeded: 'Dung lượng vượt quá 10 MB',
      uploadImagePrompt: 'Vui lòng tải lên hình ảnh'
    },
    EmbedDialog: {
      fullscreenModeTitle: 'Chế độ toàn màn hình',
      copyInstructions: 'Sao chép mã nhúng bên dưới',
      floatingModeTitle: 'Chế độ nổi'
    },
    LimitDialog: {
      dialogTitle: 'Hạn chế truy cập',
      showSourceLabel: 'Hiển thị nguồn kiến thức',
      clientQueryLimitLabel: 'Giới hạn truy vấn theo client',
      authentication: 'Xác thực',
      authenticationValue: 'Mật khẩu truy cập',
      timesDays: 'lượt truy vấn/ngày',
      whitelistLabel: 'Tên miền được phép',
      whitelistPlaceholder: 'Nhập tên miền bên thứ ba được phép (mỗi dòng 1 địa chỉ)\nVD:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'Cho phép truy cập đa nguồn',
      crossDomainPlaceholder: 'Nhập địa chỉ đa nguồn được phép\nVD:\nhttp://127.0.0.1:5678\nhttps://dataease.io'
    },
    SettingDisplayDialog: {
      dialogTitle: 'Cài đặt hiển thị',
      languageLabel: 'Ngôn ngữ',
      showSourceLabel: 'Hiển thị nguồn kiến thức',
      showExecutionDetail: 'Hiển thị chi tiết thực thi',
      restoreDefault: 'Khôi phục mặc định',
      customThemeColor: 'Màu chủ đề tùy chỉnh',
      headerTitleFontColor: 'Màu chữ tiêu đề',
      default: 'Mặc định',
      askUserAvatar: 'Ảnh đại diện người dùng',
      replace: 'Thay thế',
      imageMessage: 'Kích thước đề xuất: 32×32 pixel. Định dạng JPG/PNG/GIF. Dung lượng tối đa: 10 MB',
      AIAvatar: 'Ảnh đại diện AI',
      floatIcon: 'Biểu tượng nổi',
      iconDefaultPosition: 'Vị trí mặc định',
      iconPosition: {
        left: 'Trái',
        right: 'Phải',
        bottom: 'Dưới',
        top: 'Trên'
      },
      draggablePosition: 'Vị trí có thể kéo',
      showHistory: 'Hiển thị lịch sử chat',
      displayGuide: 'Hiển thị hướng dẫn (Chế độ nổi)',
      disclaimer: 'Tuyên bố miễn trừ',
      disclaimerValue: 'Nội dung do AI tạo ra, chỉ mang tính tham khảo.'
    }
  },
  monitor: {
    monitoringStatistics: 'Thống kê giám sát',
    customRange: 'Tùy chỉnh phạm vi',
    startDatePlaceholder: 'Ngày bắt đầu',
    endDatePlaceholder: 'Ngày kết thúc',
    pastDayOptions: {
      past7Days: '7 ngày qua',
      past30Days: '30 ngày qua',
      past90Days: '90 ngày qua',
      past183Days: '6 tháng qua',
      other: 'Tùy chỉnh'
    },
    charts: {
      customerTotal: 'Tổng người dùng',
      customerNew: 'Người dùng mới',
      queryCount: 'Tổng truy vấn',
      tokensTotal: 'Tổng Token đã dùng',
      userSatisfaction: 'Đánh giá người dùng',
      approval: 'Thích',
      disapproval: 'Không thích'
    }
  }
}