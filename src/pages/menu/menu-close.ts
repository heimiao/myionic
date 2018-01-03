import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
	selector: 'page-menu',
	//	templateUrl: 'menu.html'
	template: `
		<ion-header>
			<ion-navbar>
				<ion-title>菜单关闭</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content>
		关闭菜单menucolse
		</ion-content>
	`,
})
export class MenuClose {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController
	) {

	}
}