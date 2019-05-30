import { Component, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private analytics: AnalyticsService
  ) {

    this.translate.setDefaultLang('en');

    if (this.electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
