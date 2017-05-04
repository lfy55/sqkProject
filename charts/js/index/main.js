var chartsList = [{
    "name": "年轮图 不均分",
    "url": "nianluntu.html",
    "img": "img/nianluntu.png"
}, {
    "name": "年轮图 均分",
    "url": "nianluntu1.html",
    "img": "img/nianluntu1.png"
}, {
    "name": "单人靶向图",
    "url": "baxiangguanxitu.html",
    "img": "img/baxiangguangxi.png"
}, {
    "name": "自定义地图 流向图",
    "url": "customMapFlow/index.html",
    "img": "img/customMapFlow.png"
}]

new Vue({
    el: '#app',
    data: {
        msg: '这是一个基于VUE和各种可视化工具库的静态展示站点',
        list: chartsList
    },
    methods: {
        click: function(item) {
            window.open(item.url, "_blank");
        }
    }
});