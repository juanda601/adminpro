import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input () leyenda: string = 'Leyenda';
  @Input () progreso: number = 50;

  @Output () cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
  onChange(newValue: number) {

    if (newValue >= 100) {
      newValue = 100;
    }
    if (newValue <= 0) {
      newValue = 0;
    }
    this.txtProgress.nativeElement.value = newValue;
    this.cambioValor.emit(newValue);
    this.txtProgress.nativeElement.focus();
  }
}
