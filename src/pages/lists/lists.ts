import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { SystemService } from '../../service/system';

@Component({
	selector: 'lists',
	templateUrl: 'lists.html',
})
export class Lists implements OnInit {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private service: SystemService,
	) {}
	items: Array < any > ;
	heros: Array < any > ;
	ngOnInit(): void {
		this.service.getColorList().then(args => {
			this.items = args;
			this.heros = args[0].child;
		})
	}
	itemSelected(args): void {

	}
}