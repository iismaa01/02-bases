import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increasedBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increasedBy(-1)">-1</button>
  `
})
export class CounterComponent {
  // Variables
  public counter: number = 10;

  // Incrementamos o decrementamos el contador
  increasedBy( value: number ): void {
    this.counter += value;
  }

  // Reseteamos el contador
  resetCounter(): void {
    this.counter = 10;
  }
}
