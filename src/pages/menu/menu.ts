import { Component } from '@angular/core';
import { NavController, ActionSheetController ,MenuController} from 'ionic-angular';

//import { MenuRoot } from './menu-root';

@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
	styles: ['./menu.scss']
})
export class Menu {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController,
		private menuCtrl: MenuController,
	) {}

	goBack(): void {
		this.navCtrl.pop();
	}
	openMenu(): void {
		this.menuCtrl.open();
	}
}