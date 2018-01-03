import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, ToastController } from 'ionic-angular';

@Component({
	selector: 'toast',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>提示框(toast)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			 <ion-card>  
			  <ion-card-header>
			      基本使用
			  </ion-card-header> 
			  <ion-card-content> 
					 <button ion-button full (click)="presentToast('bottom')">底部弹出</button>
					<button ion-button color="secondary" full (click)="presentToast('top')">顶部弹出</button>
					<button ion-button color="danger" full (click)="presentToast('middle')">中间弹出</button>
					  <a class="more" href="https://ionicframework.com/docs/api/components/toast/ToastController/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Toast {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		public toastCtrl: ToastController
	) {}
	presentToast(args) {
		let toast = this.toastCtrl.create({
			message: '测试提示信息显示',
			duration: 3000,
			position: args || "bottom"
		});

		toast.onDidDismiss(() => {
			console.log('监听关闭方法');
		});

		toast.present();
	}
}