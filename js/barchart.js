let date = new Date();
	let arr = [];
	for(i=0;i<6;i++){
		var data = date.getMonth()+1-i;
		if(data<=0){
			data += 12;
			data +=  '/' + (date.getFullYear()-1);
		} else{
			data +=  '/' + date.getFullYear();
		}
		arr.push(data);
	}
	let label = arr.reverse();
Highcharts.chart('barChart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: ' '
    },
    subtitle: {
        // text: 'Source: WorldClimate.com'
    },
    xAxis: [{
        categories: label,
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            style: {
                // color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            style: {
                // color: Highcharts.getOptions().colors[1]
            }
        },
         title: {
            text: ''
        },
        max: 2000,
        minRange: 400
    }, { // Secondary yAxis
        title: {
            style: {
                // color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} %',
            style: {
                // color: Highcharts.getOptions().colors[1]
            }
        },
        ceiling:100,
        floor:60,
        minRange:1,
        title: {
            text: ''
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    credits: {
        enabled: false
    },
    legend: {
    	itemStyle:{
    		fontSize:'14px'
    	},
        x: 40,
        verticalAlign: 'top',
        y: -10,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Tiếp nhận',
        type: 'column',
        yAxis: 0,
        data: [1500,1300,1500,1550,1000,1300],
        color: '#0087ff',
        tooltip: {
            // valueSuffix: ' mm'
        }

    }, {
        name: 'Giải quyết',
        type: 'column',
        yAxis: 0,
        data: [1100,1200,1100,900,1150,1150],
        color: '#2e7d32',
        tooltip: {
            // valueSuffix: ' mm'
        }

    },{
        name: 'Đúng hạn',
        type: 'column',
        yAxis: 0,
        data: [900,900,900,900,800,1100],
        color: '#ff8400',
        tooltip: {
            // valueSuffix: ' mm'
        }

    },{
        name: 'Tỷ lệ đúng hạn',
        type: 'spline',
        yAxis:1,
        data: [68,78,75,82,78,97],
        color: 'black',
        tooltip: {
            valueSuffix: '% đúng hạn'
        }
    }]
});