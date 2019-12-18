import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';


@Component({
  selector: 'page-errors',
  templateUrl: 'errors.html',
})
export class ErrorsPage {

  text: string;
  link: string;
  public showButton: boolean = false;

  constructor(private platform: Platform, public navParams: NavParams, public viewCtrl: ViewController, public navCtrl: NavController) {

    if (!!this.navParams.get('link')) {

      this.link = this.navParams.get('link');
      this.text = 'Sorry, this profile cannot be handle by this app. To have further information, please click here:';
      this.showButton = true;

    } else if (!!this.navParams.get('error')) {

      this.text = this.navParams.get('error');
      this.showButton = false;
    }
  }

  async navigateTo() {
    //TODO: navigate to link
  }

  exitApp() {
    if (!this.showButton) {
      this.viewCtrl.dismiss().then(res => console.log(res));

    } else {
      this.platform.exitApp();
    }

  }
}
