import {
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  ViewChild
} from "@angular/core";

import {
  ApiService
} from "./service/api.service";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
} from "ng-apexcharts";
import {
  formatNumber
} from "@angular/common";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  lista: { x: string; y: string; }[] = [];

  constructor(private Api: ApiService, @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
    this.getDadosApi();
  }

  //Função do Grafico
  setChartOptions() {
    this.chartOptions = {
      series: [{
        name: "Open",
        data: this.lista
      }],
      chart: {
        height: 350,
        type: "area",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.5
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Guide Investimentos - Ultimos 30 Pregões",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        type: 'numeric'
      }
    };
  }

  //Função do get de todos os dados
  getDadosApi() {
    this.Api.getDados().subscribe((retorno: any) => {

      let listaTrinta = [];

      for (let i = retorno.result[0].timestamp.length - 31; i < retorno.result[0].timestamp.length; i++) {
        const eixoX = `${new Date(retorno.result[0].timestamp[i] * 1000).toLocaleString('pt-BR')}`
        listaTrinta.push({ x: eixoX, y: formatNumber(retorno.result[0].indicators.quote[0].open[i], this.locale, '2.1-2') });
      }
      this.lista = listaTrinta;
      this.setChartOptions();

    })
  }
}
