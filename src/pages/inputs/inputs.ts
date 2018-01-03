import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'inputs',
	templateUrl: 'inputs.html',
})
export class Inputs {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

}