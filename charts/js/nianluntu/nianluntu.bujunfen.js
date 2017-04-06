Vue.component('nianluntu-bujunfen',{
	template: '<div class="charts" id="relation-div"><div class="tooltip" v-html="tooltip" :style="tooltipStyle"></div></div>',
	props: {
		dataConfig: Array,
		styleConfig: Object
	},
	data: function() {
		return {
			tooltip: '',
			tooltipStyle: {
				width: '200px',
				top:'0px',
				left: '0px',
				visibility:'hidden'
			}
		};
	},
	mounted: function() {
		var _this = this;
        _this.$el.style.width = _this.styleConfig.width + "px";
        _this.$el.style.height = _this.styleConfig.height + "px";
		
		function upDate() {
			var hScale = _this.styleConfig.height / 600;
            var wScale = _this.styleConfig.width / 800;
			var height = 600 * hScale;
			var width = 800 * wScale;

			d3.select(_this.$el).selectAll("svg").remove();
			var svg = d3.select(_this.$el).append("svg")
		    			.attr("style", 'position:absolute;width:100%;height:100%')
						.attr("preserveAsPectRaTio", "xMaxYMid slice")
						.attr("viewBox", "0 0 "+ width + " " +height);

		    var baseouter = (height-60)/2;
			var baseinner = 0;
			var baseNum = (baseouter-baseinner)/10;

			
			for(let x = 0;x<_this.dataConfig.length;x++) {
				let index = x;
				let inner = 0;
				let outer = 0;
				inner = baseinner + (index+3)*baseNum;
				outer = baseinner + (index+4)*baseNum;

				let pie = d3.layout.pie()
						.sort(null)
						.value(function(d) {
							return d.value;
						});

				let piedata = pie(_this.dataConfig[index].data);

				for(let i=0;i<piedata.length;i++) {
					let subpie = d3.layout.pie()
									.sort(null)
									.startAngle(piedata[i].startAngle)
									.endAngle(piedata[i].endAngle)
									.value(function(d) {
										return d.value;
									});
					piedata[i].subData = subpie(piedata[i].data.data);				
				}
				let arc = d3.svg.arc()
						.innerRadius(inner)
						.outerRadius(outer);

				let arcs = svg.selectAll('.g'+index)
							.data(piedata)
							.enter()
							.append('g')
							.attr('class','g'+index)
							.attr("transform","translate("+(width/2)+","+(height/2)+")");

				let path = arcs.append("path")
					.attr("fill","rgba(0,0,0,0)")
					.attr("stroke",function(d,i) {
						return '#ff0000'; // 边框颜色
					})
					.attr("stroke-width",'1px')
					.attr("d",function(d) {
						// console.log(d);
						return arc(d);
					});

				// 添加刻度和标识
				

				if(index ===0) {
					let markArc = svg.selectAll('.g-mark')
							.data(piedata)
							.enter()
							.append('g')
							.attr('class','g-mark')
							.attr("transform","translate("+(width/2)+","+(height/2)+")");
					markArc.append("line")
						.attr("stroke","#f00")
						.attr("stroke-width","1px")
						.attr("x1", function(d) {
							return baseouter*(Math.sin(d.startAngle));
						})
						.attr("y1", function(d) {
							return baseouter*(Math.cos(d.startAngle));
						})
						.attr("x2", function(d) {
							return (baseouter+10)*(Math.sin(d.startAngle));
						})
						.attr("y2", function(d) {
							return (baseouter+10)*(Math.cos(d.startAngle));
						});

					markArc.append("text")
						.attr("x", function(d) {
							return (baseouter+20)*(Math.sin(d.startAngle));
						})
						.attr("y", function(d) {
							return -(baseouter+20)*(Math.cos(d.startAngle));
						})
						//.attr("text-anchor","middle")
						.attr("dx", "-4")
						.attr("dy", "5")
						.text(function(d,i) {
							return i*2;
						});
				}

				let path1 = arcs.append("path")
								.attr("fill",function(d,i) {
								return '#2d80fe'; // 第一个小格
								})
								.attr("d",function(d) {
									// console.log(d);
									return arc(d.subData[0]);
								});
				let path2 = arcs.append("path")
								.attr("fill",function(d,i) {
									return '#d442f8'; // 第二个小格
								})
								.attr("d",function(d) {
									// console.log(d);
									return arc(d.subData[1]);
								});

				let path3 = arcs.append("path")
								.attr("fill",function(d,i) {
									return '#f89406';// 第三个小格
								})
								.attr("d",function(d) {
									// console.log(d);
									return arc(d.subData[2]);
								});
				let path4 = arcs.append("path")
								.attr("fill",function(d,i) {
									return '#29e926';// 第四个小格
								})
								.attr("d",function(d) {
									// console.log(d);
									return arc(d.subData[3]);
								});

				arcs.on("mouseover", function (d) {
	                	console.log(d);
	                	// console.log(d3.event);
	                	_this.tooltip = _this.dataConfig[index].name+' '+d.data.name+': <br>'
	                						+d.subData[0].data.name+':'+d.subData[0].value + '<br>'
	                						+d.subData[1].data.name+':'+d.subData[1].value + '<br>'
	                						+d.subData[2].data.name+':'+d.subData[2].value + '<br>'
	                						+d.subData[3].data.name+':'+d.subData[3].value;
	                	_this.tooltipStyle.top = d3.event.offsetY+10 +'px';
	            		_this.tooltipStyle.left = d3.event.offsetX +10 + 'px';
	            		_this.tooltipStyle.visibility = 'visible';
	                })
					.on("mousemove", function (d) {
	                	_this.tooltipStyle.top = d3.event.offsetY+10 +'px';
	            		_this.tooltipStyle.left = d3.event.offsetX +10 + 'px';
	                })
	                .on("mouseout", function () {
	                	_this.tooltipStyle.visibility = 'hidden';
	                });
			}
		}
		upDate();

		_this.$watch('dataConfig', function () {
            upDate();
        }, {
            deep: true
        });

        _this.$watch('styleConfig', function () {
            console.log(_this.styleConfig);
            _this.$el.style.width = this.styleConfig.width + "px";
            _this.$el.style.height = this.styleConfig.height + "px";
        }, {
            deep: true
        });
	}
});