import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'cards',
	templateUrl: './cards.html',
	styles: ['./cards.scss']
})
export class Cards {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}
}