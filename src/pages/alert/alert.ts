import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'alert',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>alert—Controller</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding>
			<button ion-button (click)="presentAlert()" color="secondary" full>alert弹框</button>
			<button ion-button (click)="presentConfirm()" color="Danger" full>confirm弹框</button>
			<button ion-button (click)="presentPrompt()" color="secondary" full>可输入内容弹框</button>
			<button ion-button (click)="otherAlert()" color="danger" full>返回列表弹框</button>
			<button ion-button (click)="showRadio()" color="secondary" full>radio弹框</button>
			<button ion-button (click)="showCheckbox()" color="Danger" full>Checkbox弹框</button>
			 <ion-card>  
			  <ion-card-header>
			      ts代码块
			  </ion-card-header> 
			  <ion-card-content> 
					  <code>
					   		我是代码块区域
					  </code>
					  <a class="more" href="https://ionicframework.com/docs/api/components/alert/AlertController/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Alert {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

	presentAlert(args): void {
		let alerts = this.alertCtrl.create({
			title: '基本弹框',
			subTitle: args || '基本的弹框内容填充部分',
			buttons: ['确定']
		});
		alerts.present();
	}
	presentConfirm(): void {
		let alert = this.alertCtrl.create({
			title: 'Confirm 标题',
			message: '你想关闭次弹框吗?',
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
		});
		alert.present();
	}

	presentPrompt() {
		let alert = this.alertCtrl.create({
			title: 'Login',
			inputs: [{
					name: '帐号',
					placeholder: '请输入帐号'
				},
				{
					name: '密码',
					placeholder: '请输入密码',
					type: 'password'
				}
			],
			buttons: [{
					text: '取消',
					role: 'cancel',
					handler: data => {
						console.log('Cancel clicked');
					}
				},
				{
					text: '登录',
					handler: data => {
						this.presentAlert(JSON.stringify(data));
					}
				}
			]
		});
		alert.present();
	}

	otherAlert(): void {
		let alert = this.alertCtrl.create({
			title: 'Hello',
			subTitle: "确定要返回去吗?",
			buttons: [{
				text: '确定',
				handler: () => {
					// user has clicked the alert button
					// begin the alert's dismiss transition
					let navTransition = alert.dismiss();
					navTransition.then(() => {
						this.navCtrl.pop();
					});
					// start some async method
					/*someAsyncOperation().then(() => {
						navTransition.then(() => {
							this.navCtrl.pop();
						});
					});*/
					return false;
				}
			}]
		});
		alert.present();
	}

	showRadio() {
		let alert = this.alertCtrl.create();
		alert.setTitle('Lightsaber color');
		alert.addInput({
			type: 'radio',
			label: 'Blue',
			value: 'blue',
			checked: true
		});
		alert.addInput({
			type: 'radio',
			label: 'Red',
			value: 'Red',
			checked: false
		});
		alert.addButton('Cancel');
		alert.addButton({
			text: 'OK',
			handler: data => {
				console.log(data);
			}
		});
		alert.present();
	}
	showCheckbox(): void {
		let alert = this.alertCtrl.create();
		alert.setTitle('爱好');
		alert.addInput({
			type: 'checkbox',
			label: '吃',
			value: '吃',
			checked: true
		});

		alert.addInput({
			type: 'checkbox',
			label: '玩',
			value: '玩'
		});

		alert.addButton('Cancel');
		alert.addButton({
			text: 'Okay',
			handler: data => {
				console.log('Checkbox data:', data);
			}
		});
		alert.present();
	}
}