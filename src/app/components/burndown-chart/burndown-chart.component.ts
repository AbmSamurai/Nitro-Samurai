import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: "app-burndown-chart",
  templateUrl: "./burndown-chart.component.html",
  styleUrls: ["./burndown-chart.component.css"]
})
export class BurndownChartComponent implements OnInit {
 
  private chart:AmChart;
  

  constructor(private AmCharts: AmChartsService) {}

  ngOnInit() {

    this.displayChart
  }

  updateChart(){

  }

  displayChart(chartArray) {
    // this.burnedDownArray = [
    //   {
    //     'day': this.currentDate.toISOString().substr(0, 10),
    //     'points': points
    //   }
    // ]

    this.chart = this.AmCharts.makeChart("chartdiv", {
      type: "serial",
      categoryField: "date",
      startDuration: 1,
      categoryAxis: {
        gridPosition: "start"
      },
      graphs: [
        {
          balloonText: "[[title]] of [[category]]:[[value]]",
          bullet: "round",
          id: "AmGraph-1",
          title: "graph 1",
          valueField: "points"
        }
      ],
      valueAxes: [
        {
          id: "ValueAxis-1",
          title: "Points"
        }
      ],
      titles: [
        {
          id: "Title-1",
          size: 15,
          text: "Sprint " + /*(this.sprints + 1)*/  + " Burndown Chart"
        }
      ],
      dataProvider: chartArray
    });
  }
}
