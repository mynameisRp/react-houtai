import React from "react"
import echarts  from "echarts"
import "./index.css"


export default class Content extends React.Component {
    render(){
        return (
            <div>
                <div id="bogeMusic"></div>
            </div>
        )
    }

    componentDidMount(){
        this.myChart = echarts.init(document.getElementById('bogeMusic'));

        // 指定图表的配置项和数据
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
    }
}
   
