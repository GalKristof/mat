import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() icon: string = "fa-vacuum";
  @Input() title: string = "Takarítás";
  @Input() redirectLocation: string = "page";

  redirect()
  {
    alert("will be redirected to subpage..." + this.redirectLocation);
  }
}
