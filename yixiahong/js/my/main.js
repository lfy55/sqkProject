function getUrlParam(name) {
    //创建一个查找参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配当前url的目标参数
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

var searchStr = getUrlParam('search');
console.log(searchStr);

$('#search-input').val(searchStr);
search(searchStr);

// 触发搜索事件
$('#search-input').click(function() {
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