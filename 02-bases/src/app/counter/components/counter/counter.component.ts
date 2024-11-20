import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ counter }}</h2>
    <div>
      <button (click)="decrement(numberToChange)" class="btn btn-primary mx-1">
        - {{ numberToChange }}
      </button>
      <button (click)="reset()" class="btn btn-primary mx-1">Resetear</button>
      <button (click)="increment(numberToChange)" class="btn btn-primary mx-1">
        + {{ numberToChange }}
      </button>
    </div>
    <h3>Rango: {{ numberToChange }}</h3>
    <div>
      <button (click)="setNumberToChange(1)" class="btn btn-warning mx-1">
        1
      </button>
      <button (click)="setNumberToChange(5)" class="btn btn-warning mx-1">
        5
      </button>
      <button (click)="setNumberToChange(10)" class="btn btn-warning mx-1">
        10
      </button>
      <button (click)="setNumberToChange(50)" class="btn btn-warning mx-1">
        50
      </button>
    </div>
  `,
})
export class CounterComponent {
  public counter: number = 0;
  public numberToChange: number = 1;

  increment(value: number): void {
    this.counter += value;
  }

  decrement(value: number): void {
    if (this.counter <= 0) return;

    this.counter -= value;
  }

  reset(): void {
    this.counter = 0;
  }

  setNumberToChange(value: number): void {
    this.numberToChange = value;
  }
}
