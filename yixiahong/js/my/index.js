// 为页面添加动态背景
function random_move() {
    $.magicCanvas.draw({
        type: "random-move",
        rgb: function(circlePos) {
            var px = circlePos.x;
            var py = circlePos.y;
            // do some computation....
            return {
                r: parseInt(px % 255),
                g: parseInt(py % 255),
                b: 203
            };
        }
    })
};
random_move();

// 登陆注册按钮点击事件
$('#login').click(function() {
    console.log('登陆');
    $('.dlg').removeClass('show');
    $('.login-margin').animateCss('fadeIn');
    $('.login-margin').addClass('show');
});

$('#register').click(function() {
    console.log('注册');
    $('.dlg').removeClass('show');
    $('.register-margin').animateCss('fadeIn');
    $('.register-margin').addClass('show');
});

/*
 *进行表单验证
 */
// 用户名和密码的正则
var namereg = /^[a-z0-9_]{3,15}$/;
var pwdreg = /^[a-z0-9_]{6,15}$/;
var tips = $('#error-tips');
$('#login-submit').click(function() {
    var name = $('#loginName').val();
    var pwd = $('#loginPwd').val();
    if (!namereg.test(name)) {
        tips.text('用户名应该为3-15个字母数字下划线');
        tips.show();
        return false;
    }
    if (!pwdreg.test(pwd)) {
        tips.text('密码应该为6-15个字母数字下划线');
        tips.show();
        return false;
    }
    // do login ...
});
$('#register-submit').click(function() {
    var name = $('#registerName').val();
    var pwd = $('#registerPwd').val();
    var pwd2 = $('#registerPwd2').val();
    if (!namereg.test(name)) {
        tips.text('用户名应该为3-15个字母数字下划线');
        tips.show();
        return false;
    }
    if (!pwdreg.test(pwd)) {
        tips.text('密码应该为6-15个字母数字下划线');
        tips.show();
        return false;
    }
    if (pwd2 !== pwd) {
        tips.text('两次密码输入不一致');
        tips.show();
        return false;
    }
    // do register ...
});

$('input').focus(function() {
    tips.hide();
});



$('.close').click(function() {
    tips.hide();
    $(this).parent('.dlg').animateCss('fadeOut');
    setTimeout(() => {
        $(this).parent('.dlg').removeClass('show');
    }, 740);
});

// 触发搜索事件
$('#search-btn').click(function() {
    if ($('#search-input').val() === '') {
        return;
    }
    search($('#search-input').val());
});
$('#search-input').keydown(function(event) {
    if ($('#search-input').val() === '') {
        return;
    }
    switch (event.keyCode) {
        case 13:
            search($('#search-input').val());
            break;
        default:
            break;
    }
});

// 搜索的函数
function search(searchStr) {
    // do something...
    console.log('搜索');
    document.location.href = 'main.html?search=' + searchStr;
}