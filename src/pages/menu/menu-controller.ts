import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
	selector: 'page-menu-controller',
	//	templateUrl: 'menu.html'
	templateUrl: `
		<div></div>
	`,
})
export class MenuController {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController
	) {

	}
}