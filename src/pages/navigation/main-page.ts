import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, ModalController, App, ViewController } from 'ionic-angular';
import { ModalsProfile } from '../modals/modals-profile';
import { Lists } from '../lists/lists';
import { OtherPage } from './other-page';

@Component({
	selector: 'main-page',
	template: ` 
		<ion-header>
		  <ion-navbar>
		    <button ion-button icon-only menuToggle>
		      <ion-icon name="menu"></ion-icon>
		    </button>
		    <ion-title>
		       主页面(MainPage)
		    </ion-title>
		    <ion-buttons end>
		      <button ion-button icon-only (click)="openModal()">
		        <ion-icon name="options"></ion-icon>
		      </button>
		    </ion-buttons>
		  </ion-navbar>
		</ion-header>
		<ion-content padding>  
			<button ion-button (click)="pushPage()" full>普通导航</button>
			<button ion-button color="secondary" (click)="pushPage(1)" full>带参数导航</button>
			 <ion-item>
			     <ion-label>添加守卫(只是针对守卫导航而言)</ion-label>
			     <ion-checkbox [(ngModel)]="state"></ion-checkbox>
			   </ion-item> 
			<button ion-button color="danger" (click)="pushPage(2)"  full>守卫导航</button>
			 <ion-card>  
			  <ion-card-header>
			     我是根页面
			  </ion-card-header> 
			  <ion-card-content> 
					  <a class="more" href="https://ionicframework.com/docs/api/navigation/NavController/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class MainPage {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private modalCtrl: ModalController,
		public appCtrl: App,
		public viewCtrl: ViewController
	) {}

	state: boolean = false;

	openModal() {
		let profileModal = this.modalCtrl.create(ModalsProfile);
		profileModal.present();
	}

	pushPage(args) {
		if(args) {
			this.appCtrl.getRootNav().push(OtherPage, {
				data: {
					name: "貂蝉",
					type: "法师",
					isGuards: args == 2 ? {
						state: !this.state
					} : false,
				}
			});
		} else {
			this.appCtrl.getRootNav().push(Lists);
		}

		//		this.viewCtrl.dismiss();
	}
}