import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'range',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>滑块(range)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content> 
		
			 <ion-card>  
			  <ion-card-header>
			     基本使用
			  </ion-card-header> 
			  <ion-card-content> 
					  <ion-list>
						  <ion-item>
						    <ion-range [(ngModel)]="singleValue" color="danger" pin="true"></ion-range>
						  </ion-item>
						
						  <ion-item>
						    <ion-range min="-200" max="200" [(ngModel)]="saturation" color="secondary">
						      <ion-label range-left>-200</ion-label>
						      <ion-label range-right>200</ion-label>
						    </ion-range>
						  </ion-item>
						
						 <ion-item>
						   <ion-range min="20" max="80" step="2" [(ngModel)]="brightness">
						     <ion-icon small range-left name="sunny"></ion-icon>
						     <ion-icon range-right name="sunny"></ion-icon>
						   </ion-range>
						 </ion-item>
						
						  <ion-item>
						    <ion-label>step=100, snaps, </ion-label>
						    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary" [(ngModel)]="singleValue4"></ion-range>
						  </ion-item>
						
						  <ion-item>
						    <ion-label>dual, step=3, snaps, </ion-label>
						    <ion-range dualKnobs="true" [(ngModel)]="dualValue2" min="21" max="72" step="3" snaps="true"></ion-range>
						  </ion-item>
						</ion-list>
					  <a class="more" href="https://ionicframework.com/docs/components/#badges">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Range {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

}