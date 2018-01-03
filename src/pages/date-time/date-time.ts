import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'date-time',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>时间(date-time)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
		
			 <ion-card>  
			  <ion-card-header>
			      普通日期
			  </ion-card-header> 
			  <ion-card-content>  
			  <ion-list>
			  	<ion-item>
				  <ion-label>普通时间选择</ion-label>
				  <ion-datetime displayFormat="YYYY-MM-DD"  [(ngModel)]="myDate1"></ion-datetime>
				</ion-item>
			  	<ion-item>
				  <ion-label>年</ion-label>
				  <ion-datetime displayFormat="YYYY-MM-DD"   pickerFormat="YYYY"   [(ngModel)]="myDate2"></ion-datetime>
				</ion-item>
				<ion-item>
				  <ion-label>设置最小年2016</ion-label>
				  <ion-datetime displayFormat="YYYY" min="2016" max="2020-10-31" [(ngModel)]="myDate3">
				  </ion-datetime>
				</ion-item>
				</ion-list> 
			  	<code></code>
			     <a class="more" href="https://ionicframework.com/docs/api/components/datetime/DateTime">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class DateTime {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

}