import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css'],
})
export class ProgessBarComponent implements OnInit {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
  constructor() {}

  ngOnInit() {}
}
