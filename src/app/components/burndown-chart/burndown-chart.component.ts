import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: "app-burndown-chart",
  templateUrl: "./burndown-chart.component.html",
  styleUrls: ["./burndown-chart.component.css"]
})
export class BurndownChartComponent implements OnInit {
  teamName: any;
  currentDate: any;
  burnedDownArray: any;
  chartData = [
    {
      country: "USA",
      visits: [4252]
    },
    {
      country: "China",
      visits: 1882
    },
    {
      country: "Japan",
      visits: 1809
    },
    {
      country: "Germany",
      visits: 1322
    },
    {
      country: "UK",
      visits: 1122
    },
    {
      country: "France",
      visits: 1114
    },
    {
      country: "India",
      visits: 984
    },
    {
      country: "Spain",
      visits: 711
    },
    {
      country: "Netherlands",
      visits: 665
    },
    {
      country: "Russia",
      visits: 580
    },
    {
      country: "South Korea",
      visits: 443
    },
    {
      country: "Canada",
      visits: 441
    },
    {
      country: "Brazil",
      visits: 395
    },
    {
      country: "Italy",
      visits: 386
    },
    {
      country: "Australia",
      visits: 384
    },
    {
      country: "Taiwan",
      visits: 338
    },
    {
      country: "Poland",
      visits: 328
    }
  ];

  private chart: AmChart;
  @Input() pointsBurned: number;
  constructor(private AmCharts: AmChartsService) {}

  ngOnInit() {
    console.table(this.chartData);
    this.displayChart(this.chartData);
  }

  updateChart() {
    console.log(this.pointsBurned,'-',"Dafuq")
    alert(this.pointsBurned)
    // const points =
    //   this.burnedDownArray[this.burnedDownArray.length - 1].points -
    //   this.pointsBurned;
    // this.burnedDownArray.push({
    //   date: this.currentDate.toISOString().substr(0, 10),
    //   points: points
    // });

    // this.AmCharts.updateChart(this.chart, () => {
    //   this.chart.dataProvider = this.burnedDownArray;
    // });
    // console.log(this.teamName, "-", this.burnedDownArray);
    // this.db.pushPointsToDB(this.teamName, this.burnedDownArray);
  }
  
  displayChart(chartArray) {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      type: "serial",
      categoryField: "country",
      startDuration: 1,
      // categoryAxis: {
      //   gridPosition: "start"
      // },
      graphs: [
        {
          balloonText: "[[title]] of [[category]]:[[value]]",
          bullet: "round",
          id: "AmGraph-1",
          title: "points",
          valueField: "visits"
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
          text: "Sprint " + "Sprint 5" + " Burndown Chart"
        }
      ],
      dataProvider: chartArray
    });
  }
}
