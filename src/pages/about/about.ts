import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalsProfile } from '../modals/modals-profile';
import { Lists } from '../lists/lists';
import { Radio } from '../radio/radio';
import { Navigation } from '../navigation/navigation';
@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	liebiao = Lists;
	radios = Radio;
	daohang = Navigation;

	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		/*this.lists = Lists;
		this.radios = Radio;
		this.navigation = Navigation;*/

		console.log(Lists);
	}

	chat() {
		//直接打开modal
		/*let modal = this.modalCtrl.create(ModalsProfile);
		modal.present();*/
	}
}