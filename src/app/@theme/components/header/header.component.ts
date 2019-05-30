import { Component, Input } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() position = 'normal';

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private translate: TranslateService,
  ) { }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
