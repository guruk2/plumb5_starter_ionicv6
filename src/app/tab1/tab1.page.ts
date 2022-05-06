/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
declare let cordova: any;
const p5 = cordova.plugins.Plumb5.init();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {

  }
  public btn1() {
    console.log("btn()");
    const eventDetailsJson =[
      {
        "Type": "Button 1",
        "Name": "Btn 1",
        "PhoneNumber": "987654321",
        "Value": 1

      }
    ];
  p5.eventPost(eventDetailsJson);
  p5.pushResponsePost([{"ScreenName":"tab"}]);
  }
  public btn2() {
    console.log("btn()");

    const eventDetailsJson1 =[
      {
        "Type": "Button 2",
        "Name": "Btn 2",
        "PhoneNumber": "9876543214",
        "Value": 1

      }
    ];
  p5.eventPost(eventDetailsJson1);
  p5.deviceRegistration();
  }
}
