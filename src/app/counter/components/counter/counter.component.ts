import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h3>Counter: {{counter}}</h3>

    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetTo(10)">reset</button>
    <button (click)="increaseBy(1)">+1</button>
  `,
})
export class CounterComponent {
  constructor() { }
  public title: string = 'hola mundo';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetTo(value: number): void {
    this.counter = value;
  }
}
