import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'toggle',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>开关(toggle)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
		
			<button ion-button color="light">Light</button>
			<button ion-button>Default</button>
			<button ion-button color="secondary">Secondary</button>
			<button ion-button color="danger">Danger</button>
			<button ion-button color="dark">Dark</button>
			
			 <ion-card>  
			  <ion-card-header>
			     基本使用
			  </ion-card-header> 
			  <ion-card-content> 
					  <ion-list> 
						  <ion-item>
						    <ion-label>Pepperoni</ion-label>
						    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
						  </ion-item>
						
						  <ion-item>
						    <ion-label>Sausage</ion-label>
						    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
						  </ion-item>
						
						  <ion-item>
						    <ion-label>Mushrooms</ion-label>
						    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
						  </ion-item>
						
						</ion-list>
					  <a class="more" href="https://ionicframework.com/docs/components/#badges">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Toggle {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

}