import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';

@Component({
	selector: 'loading',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>等待效果(loading)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
		
			<button ion-button color="secondary" (click)="presentLoading(3000)">3秒等待</button>
			<button ion-button color="danger" (click)="presentLoading(2000)">2秒等待</button>
			
			 <ion-card>  
			  <ion-card-header>
			    3秒的等待效果
			  </ion-card-header> 
			  <ion-card-content> 
					  <code>
					  &lt;button ion-button color="secondary"&gt;Secondary&lt;/button&gt;<br />			&lt;button ion-button color="danger"&gt;Danger&lt;/button&gt;
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#badges">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})

export class Loading {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private loadingCtrl: LoadingController,
	) {}
	presentLoading(args) {
		let loader = this.loadingCtrl.create({
			content: "请稍等...",
			duration: args || 3000
		});
		loader.present();
	}
}