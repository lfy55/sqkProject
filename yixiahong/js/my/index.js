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

// 登陆注册事件
$('#login').click(function() {
    console.log('登陆');
    $('.login-margin').animateCss('tada');
    $('.login-margin').addClass('show');
});

$('#register').click(function() {
    console.log('注册');
    $('.register-margin').animateCss('tada');
    $('.register-margin').addClass('show');
});
$('.close').click(function() {
    $(this).parent('.dlg').animateCss('bounceOut');
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
$('#search-btn').keydown(function(event) {
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
}