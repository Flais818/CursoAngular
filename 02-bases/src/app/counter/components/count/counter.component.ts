import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
</h3>

<button (click)="decreaseBy(counter)">-1</button>
<button (click)="resetTo10(counter)">Reset counter to 10</button>
<button (click)="increaseBy()">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy():void {
    this.counter += 1;
  }

  decreaseBy(value: number): void {
    value = this.counter;
    this.counter -= 1;
  }

  resetTo10(value: number): void {
    value = this.counter;
    this.counter = 10;
  }

}
