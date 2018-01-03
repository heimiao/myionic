import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { MainPage } from './main-page';
import { OtherPage } from './other-page';
@Component({
	selector: 'navigation',
	template: `  
		 <ion-nav  #myNav [root]="rootPage"></ion-nav>
	`,
})
export class Navigation implements OnInit {
	//	@ViewChild('myNav') nav: NavController
	rootPage: any = MainPage;
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}
	ngOnInit() {
		// Let's navigate from TabsPage to Page1
		//		this.nav.push(this.rootPage);
	}
}