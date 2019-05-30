import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile';

@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {

  private alive = true;

  constructor(
    private themeService: NbThemeService,
  ) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
