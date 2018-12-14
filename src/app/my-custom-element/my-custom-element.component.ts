import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-custom-element',
  templateUrl: './my-custom-element.component.html',
  styleUrls: ['./my-custom-element.component.css']
})
export class MyCustomElementComponent implements OnInit {

  public count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  plus() {
    this.count++;
  }
  minus() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}
