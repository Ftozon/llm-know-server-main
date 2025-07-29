export default {
  title: 'Người dùng',
  createUser: 'Tạo người dùng',
  editUser: 'Chỉnh sửa người dùng',
  setting: {
    updatePwd: 'Đổi mật khẩu'
  },
  tip: {
    professionalMessage: 'Phiên bản này hỗ trợ tối đa 2 người dùng.',
    updatePwdSuccess: 'Cập nhật mật khẩu thành công'
  },
  delete: {
    confirmTitle: 'Xác nhận xóa người dùng:',
    confirmMessage: 'Xóa người dùng sẽ đồng thời xóa tất cả tài nguyên (APP, Kiến thức, Mô hình) do họ tạo. Hãy thận trọng!'
  },
  disabled: {
    confirmTitle: 'Xác nhận vô hiệu hóa chức năng:',
    confirmMessage: 'Vô hiệu hóa sẽ gây lỗi cho các APP liên quan. Thận trọng!'
  },
  userForm: {
    form: {
      username: {
        label: 'Tên đăng nhập',
        placeholder: 'Nhập tên đăng nhập',
        requiredMessage: 'Vui lòng nhập tên đăng nhập',
        lengthMessage: 'Độ dài từ 6-20 ký tự'
      },
      nick_name: {
        label: 'Họ tên',
        placeholder: 'Nhập họ tên'
      },
      email: {
        label: 'Email',
        placeholder: 'Nhập email',
        requiredMessage: 'Vui lòng nhập email'
      },
      phone: {
        label: 'Số điện thoại',
        placeholder: 'Nhập số điện thoại'
      },
      password: {
        label: 'Mật khẩu đăng nhập',
        placeholder: 'Nhập mật khẩu',
        requiredMessage: 'Vui lòng nhập mật khẩu',
        lengthMessage: 'Độ dài từ 6-20 ký tự'
      },
      new_password: {
        label: 'Mật khẩu mới',
        placeholder: 'Nhập mật khẩu mới',
        requiredMessage: 'Vui lòng nhập mật khẩu mới'
      },
      re_password: {
        label: 'Xác nhận mật khẩu',
        placeholder: 'Nhập lại mật khẩu',
        requiredMessage: 'Vui lòng xác nhận mật khẩu',
        validatorMessage: 'Mật khẩu không khớp'
      }
    }
  },
  source: {
    label: 'Loại người dùng',
    local: 'Người dùng hệ thống',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk'
  }
}