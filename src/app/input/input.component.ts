import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  parta = '0';
  partb = '0';
  title = 'Welcome to addition..';
  name = "child component.."
  constructor() { }

  ngOnInit(): void {
  }

}
[a]="parta" [b]="partb" [child]="name"