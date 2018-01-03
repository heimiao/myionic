import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, ModalController, NavParams } from 'ionic-angular';
import { ModalsProfile } from '../modals/modals-profile';

@Component({
	selector: 'other-page',
	template: ` 
		<ion-header>
		  <ion-navbar>
		    <button ion-button icon-only menuToggle>
		      <ion-icon name="menu"></ion-icon>
		    </button>
		    <ion-title>
		      其他面(other-page)
		    </ion-title> 
		  </ion-navbar>
		</ion-header>
		<ion-content padding>  
			 <ion-card>  
			  <ion-card-header>
			   子页面参数内容
			  </ion-card-header> 
			  <ion-card-content> 
			   主页面参数:{{param|json}}
			   <br>
			   <ion-item>
			     <ion-label>添加守卫(只是针对守卫导航而言)</ion-label>
			     <ion-checkbox [(ngModel)]="bool"></ion-checkbox>
			   </ion-item> 
			   <button ion-button color="danger" (click)="popView()" full>回退回去</button>
					  <a class="more" href="https://ionicframework.com/docs/api/navigation/NavController/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class OtherPage {
	param: any;
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private modalCtrl: ModalController,
		private navParams: NavParams
	) {
		this.param = navParams.get("data");
	}

	popView() {
		this.navCtrl.pop();
	}

	ionViewDidLoad() {
		console.log("I'm alive!");
		this.alertCtrl.create({
			title: '组件声明周期',
			message: '组件渲染完成执行的方法',
			buttons: [{
					text: '取消',
					role: 'cancel',
					handler: () => {
						console.log('取消');
					}
				},
				{
					text: '确定',
					handler: () => {
						console.log('确定');
					}
				}
			]
		}).present();
	}
	ionViewWillLeave() {
		console.log("Looks like I'm about to leave ");
		this.alertCtrl.create({
			title: '组件声明周期',
			message: '组件离开执行的方法',
			buttons: [{
					text: '取消',
					role: 'cancel',
					handler: () => {
						console.log('取消');
					}
				},
				{
					text: '确定',
					handler: () => {
						console.log('确定');
					}
				}
			]
		}).present();
	}

	bool: boolean = true;
	ionViewCanLeave(): boolean {
		if(this.param.isGuards) {
			return !this.bool;
		}
	}

	ionViewCanEnter(): boolean {
		if(this.param.isGuards) {
			return this.param.isGuards.state;
		} else {
			return true;
		}
	}

}