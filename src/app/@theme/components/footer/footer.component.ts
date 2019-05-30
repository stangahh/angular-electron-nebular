import { Component, OnInit } from '@angular/core';
import { Social, socials } from '../../../constants';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="socials">
      <a *ngFor="let social of socials" [href]="social.url" target="_blank" [ngClass]="social.classes"></a>
    </div>
  `,
})
export class FooterComponent implements OnInit {
  socials: Social[];

  ngOnInit() {
    this.socials = socials;
  }
}
