import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() child: string;
  constructor() { }

  ngOnInit(): void {
  }
  ConvertToInt(val){
    return parseInt(val);
  }
}
