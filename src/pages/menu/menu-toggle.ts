import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
	selector: 'page-menu-toggle',
	//	templateUrl: 'menu.html'
	templateUrl: `
		<div></div>
	`,
})
export class MenuToggle{
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController
	) {

	}
}