$(function () {
    //单击登录按钮，发送数据到服务器，可以给form表单注册提交事件，但是submit按钮有默认提交行为，所以要先阻止默认行为
    $('.login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: BigNew.user_login,
            data: $('.login_form').serialize(),
            beforeSend: function () {
                var flag = true
                $('.login_form input[name]').each(function (index, ele) {
                    if ($.trim($(ele).val()) == '') {
                        flag = false
                    }
                })
                if (!flag) {
                    $('.modal').modal('show')
                    $('.modal-body p').text('用户名或密码不能为空')
                }
            },
            success: function (res) {
                // console.log(res)
                $('.modal').modal('show')
                $('.modal-body p').text(res.msg)
                if (res.code == 200) {
                    $('.modal').on('hidden.bs.modal', function (e) {
                        window.location.href = './index.html'
                    })

                    localStorage.setItem('token', res.token)
                }
            }
        })
    })

})