import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'radio',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>单选(radio)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding>  
			 <ion-card>  
			  <ion-card-header>
			    单选按钮
			  </ion-card-header> 
			  <ion-card-content> 
			  {{relationship|json}}
			 	 <ion-list radio-group [(ngModel)]="relationship">
					  <ion-item>
					    <ion-label>Friends</ion-label>
					    <ion-radio value="friends" checked></ion-radio>
					  </ion-item>
					  <ion-item>
					    <ion-label>Family</ion-label>
					    <ion-radio value="family"></ion-radio>
					  </ion-item>
					  <ion-item>
					    <ion-label>Enemies</ion-label>
					    <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio>
					  </ion-item>
					</ion-list>
					 
					  <a class="more" href="https://ionicframework.com/docs/api/components/radio/RadioButton/">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
			 <ion-card>  
			  <ion-card-header>
			    单选组合
			  </ion-card-header> 
			  <ion-card-content> 
			  {{autoManufacturers|json}}
			 	 <ion-list radio-group [(ngModel)]="autoManufacturers">
				  <ion-list-header>
				    Auto Manufacturers
				  </ion-list-header>
				  <ion-item>
				    <ion-label>Cord</ion-label>
				    <ion-radio value="cord"></ion-radio>
				  </ion-item>
				  <ion-item>
				    <ion-label>Duesenberg</ion-label>
				    <ion-radio value="duesenberg"></ion-radio>
				  </ion-item>
				  <ion-item>
				    <ion-label>Hudson</ion-label>
				    <ion-radio value="hudson"></ion-radio>
				  </ion-item>
				  <ion-item>
				    <ion-label>Packard</ion-label>
				    <ion-radio value="packard"></ion-radio>
				  </ion-item>
				  <ion-item>
				    <ion-label>Studebaker</ion-label>
				    <ion-radio value="studebaker"></ion-radio>
				  </ion-item> 
				</ion-list>
					 
					  <a class="more" href="https://ionicframework.com/docs/api/components/radio/RadioButton/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Radio {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}
	isDisabled: boolean = true;
}