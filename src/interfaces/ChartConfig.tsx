import StatChart from "./StatChart";

interface ChartConfig{
type: string,
    width: number,
    height: number,
    dataFormat: string,
    dataSource: {
        chart: {
            caption: string,
            subCaption: string,
            xAxisName: string,
            yAxisName: string,
            numberSuffix: string,
            theme: string,
        }
        data: StatChart[]
    },
   
}
export default ChartConfig;