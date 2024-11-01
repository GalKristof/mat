import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-divide-curve',
  templateUrl: './divide-curve.component.html',
  styleUrl: './divide-curve.component.scss'
})
export class DivideCurveComponent {
  @Input() position: 'top' | 'bottom' = 'top';
}
