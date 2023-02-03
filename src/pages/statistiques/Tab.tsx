import React from "react";
import { IonApp } from "@ionic/react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import StatChart from '../../interfaces/StatChart';
import ChartConfig from '../../interfaces/ChartConfig';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
interface statProps {
   stat:ChartConfig
}


const Tab: React.FC<statProps> = ({ stat }) => (

    <ReactFC {...stat} />

);

export default Tab;