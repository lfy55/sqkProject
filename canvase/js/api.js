(function () {
  window.app = new Vue({
    el: '#app',
    data: {
      keyword: '',
      allAPI: [
        {
          name: `canvas.getContext('2d')`,
          params: [
            {
              code: 'canvas',
              detail: 'canvas对象'
            },
          ],
          detail: '返回该#canvas#元素相关的绘图环境对象',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext'
        },
        {
          name: 'toDataURL(type, quality)',
          params: [
            {
              code: 'type',
              detail: '可选-图片的类型，默认为 image/png '
            },
            {
              code: 'quality',
              detail: '可选-图片的质量，取值范围：0 ~ 1.0'
            },
          ],
          detail: '返回一个数据地址（#base64#）',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL'
        },
        {
          name: 'context',
          params: [
            {
              code: 'canvas',
              detail: '属性-该绘图环境所属的 canvas 对象'
            },
            {
              code: 'fillStyle',
              detail: '属性-填充操作使用的样式'
            },
            {
              code: 'font',
              detail: `属性-字体设置 'size family' `
            },
            {
              code: 'globalAlpha',
              detail: '属性-全局透明度设置'
            },
            {
              code: 'lineCap',
              detail: `属性-控制线段的端点，可选值：'butt(*)','round','square'`
            },
            {
              code: 'lineWidth',
              detail: '属性-线段的宽度，必须是非负，非无穷的 double 值，默认是 1.0'
            },
            {
              code: 'lineJoin',
              detail: `属性-线段焦点的样式，可选值：'butt(*)','round','square'`
            },
            {
              code: 'strokeStyle',
              detail: `属性-对路径进行描边时的样式`
            },
            {
              code: 'shadowColor',
              detail: `属性-阴影的颜色`
            },
            {
              code: 'shadowBlur',
              detail: `属性-阴影的延伸长度`
            },
            {
              code: 'shadowOffsetX',
              detail: `属性-阴影的水平偏移量`
            },
            {
              code: 'shadowOffsetY',
              detail: `属性-阴影的垂直偏移量`
            },
            {
              code: 'textAlign',
              detail: `属性-文字的水平对齐方式`
            },
            {
              code: 'textBaseline',
              detail: `属性-文字的垂直对齐方式`
            },
          ],
          detail: '#context#是#canvas#的 2d 环境',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D'
        },
        {
          name: 'clearRect(x, y, w, h)',
          params: [
            {
              code: 'x',
              detail: '必选-起点x坐标 '
            },
            {
              code: 'y',
              detail: '必选-起点y坐标 '
            },
            {
              code: 'w',
              detail: '必选-矩形的宽度 '
            },
            {
              code: 'h',
              detail: '必选-矩形的高度 '
            },
          ],
          detail: '将矩形内的所有像素清除',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect',
          demo: './rect.html',
        },
        {
          name: 'strokeRect(x, y, w, h)',
          params: [
            {
              code: 'x',
              detail: '必选-起点x坐标 '
            },
            {
              code: 'y',
              detail: '必选-起点y坐标 '
            },
            {
              code: 'w',
              detail: '必选-矩形的宽度 '
            },
            {
              code: 'h',
              detail: '必选-矩形的高度 '
            },
          ],
          detail: '依据以下属性将矩形描边：<br> #strokeStyle#,#lineWidth#,#lineJoin#,#miterLimit#',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect',
          demo: './rect.html',
        },
        {
          name: 'fillRect(x, y, w, h)',
          params: [
            {
              code: 'x',
              detail: '必选-起点x坐标'
            },
            {
              code: 'y',
              detail: '必选-起点y坐标'
            },
            {
              code: 'w',
              detail: '必选-矩形的宽度'
            },
            {
              code: 'h',
              detail: '必选-矩形的高度'
            },
          ],
          detail: '使用#fillStyle#属性填充矩形，当宽度或高度为0时不会进行绘制',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect',
          demo: './rect.html',
        },
        {
          name: 'createLinearGradient(x, y, x1, y1)',
          params: [
            {
              code: 'x',
              detail: '必选-起点x坐标'
            },
            {
              code: 'y',
              detail: '必选-起点y坐标'
            },
            {
              code: 'x1',
              detail: '必选-终点x坐标'
            },
            {
              code: 'y1',
              detail: '必选-终点y坐标'
            },
          ],
          detail: '创建一个线性渐变，返回一个#CanvasGradient#实例',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createLinearGradient',
          demo: './gradient.html',
        },
        {
          name: 'createRadialGradient(x, y, r, x1, y1, r1)',
          params: [
            {
              code: 'x',
              detail: '必选-起点x坐标'
            },
            {
              code: 'y',
              detail: '必选-起点y坐标'
            },
            {
              code: 'r',
              detail: '必选-起点半径'
            },
            {
              code: 'x1',
              detail: '必选-终点x坐标'
            },
            {
              code: 'y1',
              detail: '必选-终点y坐标'
            },
            {
              code: 'r1',
              detail: '必选-终点半径'
            },
          ],
          detail: '创建一个放射（径向）渐变，返回一个#CanvasGradient#实例',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createRadialGradient',
          demo: './gradient.html',
        },
        {
          name: 'CanvasGradient.addColorStop(offset, color)',
          params: [
            {
              code: 'offset',
              detail: '必选-颜色的位置，可选值：0~1.0'
            },
            {
              code: 'color',
              detail: '必选-添加的颜色值'
            },
          ],
          detail: '为一个渐变添加颜色',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasGradient/addColorStop'
        },
        {
          name: 'createPattern(image, repetition)',
          params: [
            {
              code: 'image',
              detail: `必选-重复的图源，可以是: '<img>','<video>','<canvas>','imageData(base64)'`
            },
            {
              code: 'repetition',
              detail: `必选-重复的形式，可选值：'repeat','repeat-x','repeat-y','no-repeat'`
            },
          ],
          detail: '创建一个可以用来在canvas之中为图形和文本进行描边与填充的团',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createPattern',
          demo: './pattern.html',
        },
        {
          name: 'beginPath()',
          params: [
          ],
          detail: '将当前路径中子路径全部清除，重置当前路径',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/beginPath'
        },
        {
          name: 'closePath()',
          params: [
          ],
          detail: '显式的关闭当前路径，用于关闭开放的路径',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/closePath'
        },
        {
          name: 'arc(x, y, radius, startAngle, endAngle, anticlockwise)',
          params: [
            {
              code: 'x',
              detail: '必选-圆弧圆心的x坐标'
            },
            {
              code: 'y',
              detail: '必选-圆弧圆心的y坐标'
            },
            {
              code: 'radius',
              detail: '必选-圆弧的半径'
            },
            {
              code: 'startAngle',
              detail: '必选-圆弧的开始角度，从x轴方向开始计算，单位：弧度'
            },
            {
              code: 'endAngle',
              detail: '必选-圆弧的结束角度，从x轴方向开始计算，单位：弧度'
            },
            {
              code: 'anticlockwise',
              detail: `可选-如果为 'true' 则逆时针绘制圆弧， 为 'false' 或不填 则顺时针绘制`
            },
          ],
          detail: `是canvas绘制圆弧路径的方法，如果调用该方法时已经有路径则将前一路径的终点与当前路径的起点连接`,
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc',
          demo: './path.html'
        },
        {
          name: 'fill()',
          params: [
          ],
          detail: '根据#fillStyle#填充当前或已存在的路径，默认采用非零环绕原则',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fill'
        },
        {
          name: 'stroke()',
          params: [
          ],
          detail: '采用非零环绕原则根据#strokeStyle#绘制当前或已存在的路径',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/stroke'
        },
        {
          name: 'rect(x, y, w, h)',
          params: [
            {
              code: 'x',
              detail: '必选-矩形路径的起点 x 坐标'
            },
            {
              code: 'y',
              detail: '必选-矩形路径的起点 y 坐标'
            },
            {
              code: 'w',
              detail: '必选-矩形路径的宽度'
            },
            {
              code: 'h',
              detail: '必选-矩形路径的高度'
            }
          ],
          detail: '创建一个矩形路径',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/stroke'
        },
        {
          name: '非零环绕原则',
          params: [
          ],
          detail: '非零环绕原则（nonzero winding rule）是这么判断有自我交叉的路径的：对于路径中的任意给定区域，从该区域内部画一条足够长的线，使此线段的终点完全落在路径范围之外，接下来将计数器初始化为0，当这条线与路径相交时就改变计数器的值，如果是与路径的顺时针部分相交则加1，如果是与路径的逆时针部分相交则减1。最后，如果计数器不为 0 则此区域就在路径内部，调用#fill#方法时就会进行填充',
          link: ''
        },
        {
          name: 'moveTo(x,y)',
          params: [
            {
              code: 'x',
              detail: '必选-移到的点的x坐标'
            },
            {
              code: 'y',
              detail: '必选-移到的点的y坐标'
            },
          ],
          detail: '向当前路径中添加一条子路径，但是只包含当前点，该方法不会从当前路径中清除任何子路径',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/moveTo'
        },
        {
          name: 'lineTo(x,y)',
          params: [
            {
              code: 'x',
              detail: '必选-移到的点的x坐标'
            },
            {
              code: 'y',
              detail: '必选-移到的点的y坐标'
            },
          ],
          detail: '如果当前路径中没有子路径，那么这个方法会像#moveTo#一样：它会创建一条新的子路径，包含了传入的那个点。如果当前路径中存在子路径，那么该方法会将你所指定的点加入当前路径',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo'
        },
      ]
    },
    methods: {
      getHTML: function (text) {
        var regexp = /#\w+#?/g

        return text.replace(regexp, function (a) {
          var code = a.slice(1, -1)
          return `<code>${code}</code>`
        })
      }
    }
  })
})()