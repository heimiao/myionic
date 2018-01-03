import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, ModalController, NavParams } from 'ionic-angular';
import { ModalsProfile } from './modals-profile';

@Component({
	selector: 'modals',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>模态框(modals)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			 <ion-card>  
			  <ion-card-header>
			     <button ion-button color="danger" (click)="openModal()" full>打开基本模态框</button>
			     <ion-input type="text" value="" placeholder="填写参数" [(ngModel)]="param"></ion-input>
				 <button ion-button color="secondary" (click)="presentProfileModal()" full>打开带参数模态框计算</button>
				  计算结果为{{result}}
			  </ion-card-header> 
			  <ion-card-content> 
					  <code>
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#badges">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})

export class Modals {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private modalCtrl: ModalController
	) {}

	param: any;
	result: any;
	console() {
		console.log(this.param);
	}

	openModal() {
		let profileModal = this.modalCtrl.create(ModalsProfile);
		profileModal.present();
	}

	presentProfileModal() {
		let profileModal = this.modalCtrl.create(ModalsProfile, {
			userId: this.param || "123"
		});
		//监听销毁之后返回来的值
		profileModal.onDidDismiss(data => {
			this.result = data.result
		});
		profileModal.present();
	}

}