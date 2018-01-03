import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { SystemService } from '../../service/system';
@Component({
	selector: 'searchbar',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>搜索框(searchbar)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content> 
			 <ion-card>  
			  <ion-card-header>
			      基本使用
			  </ion-card-header> 
			  <ion-card-content> 
					  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>
						<ion-list>
						  <ion-item *ngFor="let item of items">
						    {{ item.name }}
						  </ion-item>
						</ion-list>
					  <a class="more" href="https://ionicframework.com/docs/api/components/searchbar/Searchbar/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Searchbar {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private service: SystemService,
	) {
		this.initializeItems();
	}
	searchQuery: string = '';
	items: any[];
	initializeItems() {
		this.service.getColorList().then(args => {
			this.items = args;
		})
	}
	getItems(ev: any) {
		this.initializeItems();
		let val = ev.target.value;
		setTimeout(() => {
			if(val && val.trim() != '') {
				this.items = this.items.filter((item) => {
					return(item.name.indexOf(val) > -1);
				})
			}
		}, 500)
	}
}