var ctx = document.getElementById("conversionchart").getContext("2d");
    gradient = ctx.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0, 'rgba(26, 143, 240, 0.5)');
    gradient.addColorStop(0.5, 'rgba(26, 143, 240, 0.05)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');


var myChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels:["1 Apr","2 Apr","3 Apr","4 Apr","5 Apr","6 Apr","7 Apr","8 Apr","9 Apr","10 Apr","11 Apr","12 Apr","13 Apr","14 Apr","15 Apr","16 Apr","17 Apr","18 Apr","19 Apr","20 Apr","21 Apr","22 Apr","23 Apr","24 Apr","25 Apr","26 Apr","27 Apr","28 Apr","29 Apr","30 Apr"],
        datasets:[
            {
                data: [6, 10, 15, 14, 9, 10, 8, 5, 6, 10, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'rgb(26, 143, 240)',
            },
        ] // dataset end
    },
    options: {

        responsive: true,
        maintainAspectRatio: false,

        animation:{
            easing: 'easeInOutQuad',
            duration: 2000
        },

        scales: {

            x:{
                backgroundColor: "rgba(255, 255, 255, 1)",
                grid: {
                    color: 'rgba(242, 246, 249, 1)',
                    lineWidth: 1
                },

                ticks: {
                    callback: function(val, index) {
                        // Hide the label of every 2nd dataset
                        return index % 5 === 0 ? this.getLabelForValue(val) : '';
                    },
                    color: "rgba(61, 73, 85, 1)",
                }
            },

            y: {
                suggestedMin: 0,
                suggestedMax: 30,

                grid: {
                    color: 'rgba(242, 246, 249, 1)',
                    lineWidth: 1
                },

                ticks: {
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
        }, // scales end

        elements: {
            line: {
                tension: 0.4
            },
            point: {
                radius: 0
            },
        }, // elements end

        plugins: {

            title: {
                display: true,
                text: 'Last 30 Days',
                font:{
                    size: 24,
                },
                color: 'rgb(61, 73, 85)',
                position: "top",
                align: "start",
                fontWeight: 600,
                padding: {
                    top: 10,
                    bottom: 30,
                }
            },

            legend: {
                display: false,
            }
        } // plugins end
    } // options end
});