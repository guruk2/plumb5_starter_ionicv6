/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
declare let cordova: any;
const p5 = cordova.plugins.Plumb5.init();
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
  tabClick1(){
    const eventDetailsJson =[
      {
        "Type": "Tab 1",
        "Name": "Tab 1",
        "PhoneNumber": "987654321",
        "Value": 1

      }
    ];
  p5.eventPost(eventDetailsJson);
  }
  tabClick2(){
    const eventDetailsJson =[
      {
        "Type": "Tab 2",
        "Name": "Tab 2",
        "PhoneNumber": "987654321",
        "Value": 1

      }
    ];
  p5.eventPost(eventDetailsJson);
  }
  tabClick3(){
    const eventDetailsJson =[
      {
        "Type": "Tab 3",
        "Name": "Tab 3",
        "PhoneNumber": "987654321",
        "Value": 1

      }
    ];
  p5.eventPost(eventDetailsJson);
  }
}
