import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  @Input () doughnutChartLabels: any;
  @Input () doughnutChartData: any;
  @Input () doughnutChartType: any;

  constructor() { }

  ngOnInit() {
  }

}
