import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, PopoverController } from 'ionic-angular';
import { PopoverPage } from './popover-page';
@Component({
	selector: 'popover',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>漂浮窗(popover)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			
			 <ion-card>  
			  <ion-card-header>
			      飘窗测试
			  </ion-card-header> 
			  <ion-card-content> 
			  <button ion-button color="danger" (click)="presentPopover($event)" full>Danger</button>
			  <button ion-button color="secondary" (click)="presentPopover($event)" full>Secondary</button>
					  <a class="more" href="https://ionicframework.com/docs/api/components/popover/PopoverController/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Popover {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		public popoverCtrl: PopoverController
	) {}

	presentPopover(myEvent) {
		let popover = this.popoverCtrl.create(PopoverPage);
		popover.present({
			ev: myEvent
		});
	}
}