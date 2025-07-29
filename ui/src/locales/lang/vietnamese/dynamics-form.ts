export default {
  input_type_list: {
    TextInput: 'Đầu vào',
    PasswordInput: 'Mật khẩu',
    Slider: 'Thanh trượt',
    SwitchInput: 'Công tắc',
    SingleSelect: 'Chọn đơn',
    MultiSelect: 'Chọn nhiều',
    DatePicker: 'Chọn ngày',
    JsonInput: 'JSON',
    RadioCard: 'Thẻ radio',
    RadioRow: 'Hàng radio'
  },
  default: {
    label: 'Mặc định',
    placeholder: 'Vui lòng nhập giá trị mặc định',
    requiredMessage: ' là trường bắt buộc',
    show: 'Hiển thị mặc định'
  },
  tip: {
    requiredMessage: 'không được để trống',
    jsonMessage: 'Định dạng JSON không đúng'
  },
  searchBar: {
    placeholder: 'Vui lòng nhập từ khóa tìm kiếm'
  },
  paramForm: {
    field: {
      label: 'Tham số',
      placeholder: 'Vui lòng nhập tham số',
      requiredMessage: 'Tham số là trường bắt buộc',
      requiredMessage2: 'Chỉ cho phép chữ cái, số và dấu gạch dưới'
    },
    name: {
      label: 'Tên',
      placeholder: 'Vui lòng nhập tên',
      requiredMessage: 'Tên là trường bắt buộc'
    },
    tooltip: {
      label: 'Chú giải công cụ',
      placeholder: 'Vui lòng nhập chú giải'
    },
    required: {
      label: 'Bắt buộc',
      requiredMessage: 'Trường bắt buộc phải được thiết lập'
    },
    input_type: {
      label: 'Loại',
      placeholder: 'Vui lòng chọn loại',
      requiredMessage: 'Loại là trường bắt buộc'
    }
  },
  DatePicker: {
    placeholder: 'Chọn ngày',
    year: 'Năm',
    month: 'Tháng',
    date: 'Ngày',
    datetime: 'Ngày giờ',
    dataType: {
      label: 'Loại ngày',
      placeholder: 'Vui lòng chọn loại ngày'
    },
    format: {
      label: 'Định dạng',
      placeholder: 'Vui lòng chọn định dạng'
    }
  },
  Select: {
    label: 'Giá trị tùy chọn',
    placeholder: 'Vui lòng nhập giá trị tùy chọn'
  },
  tag: {
    label: 'Nhãn',
    placeholder: 'Vui lòng nhập nhãn tùy chọn'
  },
  Slider: {
    showInput: {
      label: 'Hiển thị ô nhập'
    },
    valueRange: {
      label: 'Phạm vi giá trị',
      minRequired: 'Giá trị tối thiểu là bắt buộc',
      maxRequired: 'Giá trị tối đa là bắt buộc'
    },
    step: {
      label: 'Giá trị bước nhảy',
      requiredMessage1: 'Giá trị bước nhảy là bắt buộc',
      requiredMessage2: 'Giá trị bước nhảy không thể bằng 0'
    }
  },
  TextInput: {
    length: {
      label: 'Độ dài văn bản',
      minRequired: 'Độ dài tối thiểu là bắt buộc',
      maxRequired: 'Độ dài tối đa là bắt buộc',
      requiredMessage1: 'Độ dài phải từ',
      requiredMessage2: 'đến',
      requiredMessage3: 'ký tự',
      requiredMessage4: 'Độ dài văn bản là tham số bắt buộc'
    }
  }
}