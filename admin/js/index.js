$(function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                $('.user_info i').text(res.data.nickname)
                $('.user_info img').attr('src', res.data.userPic)
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })
    //给退出按钮注册事件
    $('.logout').on('click', function () {
        localStorage.removeItem('token')
        window.location.href = './login.html'
    })
})