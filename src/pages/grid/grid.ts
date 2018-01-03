import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'grid',
	templateUrl: 'grid.html'
})
export class Grid {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

}