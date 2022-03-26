<template>
    <div>
        <div class="header">
            <span class="search-header">搜索用户数</span>
            <svg t="1645163841079" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2047" width="26" height="16"><path d="M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z" p-id="2048"></path></svg>
        </div>
        <div class="main">
            <span class="main-title">123</span>
            <span class="main-content">17.1</span>
            <svg t="1645164854578" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3038" width="16" height="16"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="3039" fill="#d81e06"></path></svg>
            <svg t="1645164911664" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4064" width="16" height="16"><path d="M258.048 568.832l253.952 279.04 253.952-279.04c22.016-24.064 13.312-43.52-18.944-43.52H629.76v-322.56c0-32.768-26.112-58.88-58.88-58.88h-117.76c-32.256 0-58.368 26.112-58.88 58.368v323.072H276.992c-31.744 0-40.448 19.456-18.944 43.52z" fill="#1afa29" p-id="4065"></path></svg>
        </div>
        <div class="footer">
            <div class="charts" ref="charts"></div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
    export default {
        name:"lineCharts",
         mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    //配置数据
    lineCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        type: "category",
      },
      yAxis: {
        //隐藏y轴
        show: false,
      },
      //系列
      series: [
        {
          type: "line",
          data: [10, 7, 33, 12, 48, 9,29,10,44],
          //拐点的样式的设置
          itemStyle: {
            opacity: 0,
          },
          //线条的样式
          lineStyle: {
            color: "blue",
          },
          //填充颜色设置
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "blue", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      //布局调试
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    });
  },
    }
</script>

<style scoped>
.header{
    display: flex;
    align-items:center;
}
.search-header{
    margin-right: 20px;
}
.main{
    margin: 10px 0px;
}
.main-title{
     margin-right: 30px;
}
.main-content{
     margin-right: 10px;
}
.charts{
    width: 100%;
    height: 50px;
}
</style>