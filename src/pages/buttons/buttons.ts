import { Component } from '@angular/core';
import { NavController, ActionSheetController, MenuController } from 'ionic-angular';

@Component({
	selector: 'buttons',
	templateUrl: 'button.html',
})
export class Buttons {
	constructor(
		public navCtrl: NavController,
	) {
		console.log("打印按钮");
	}

}