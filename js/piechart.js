Highcharts.chart('piechart', {
    chart: {
        height: 390,
        width: 270,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: ''
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f} %',
                distance: -50
                }
        }
    },
    legend: {
        align: 'right',
        floating: true,
        borderWidth: 0,
        verticalAlign: 'top',
        x: -40,
        y: -10
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Đúng hạn',
            y: 87,
            color: '#0960ae'
        }, {
            name: 'Sớm hạn',
            y: 13,
            color: '#348ddd'
        }]
    }]
});
