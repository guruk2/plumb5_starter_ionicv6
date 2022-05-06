import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
declare let cordova: any;
const p5 = cordova.plugins.Plumb5.init();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  constructor(
    private platform: Platform,
    public router: Router,
    private pageParameter: ActivatedRoute

  ) {
    this.initializeApp();
    p5.setup();

    //Plumb5 lifecycle and in-app
    this.router.events.forEach((event) => {

      if (event instanceof NavigationStart) {

        // eslint-disable-next-line @typescript-eslint/naming-convention
        p5.tracking([{ ScreenName: event.url, PageParameter: '' }]); p5.pushResponsePost([{ ScreenName: event.url, PageParameter: '' }]);

      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      //page navigation listener
      document.addEventListener('onPushNotification', (e: any) => {
        const routeUrl = e.routeUrl;
        this.router.navigate([routeUrl]);
      });

    });
  }
}
