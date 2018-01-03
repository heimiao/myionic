import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'modalsProfile',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>模态框轮廓(modalsProfile)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			 <ion-card>  
			  <ion-card-header>
			    上个页面的参数是{{param}}
			  </ion-card-header> 
			  <ion-card-content> 
			  		  <ion-input type="text" value="" disabled placeholder="填写参数" [(ngModel)]="param"></ion-input>
			  		  +
			  		  <ion-input type="text" value="" placeholder="填写参数" [(ngModel)]="other"></ion-input>
					<button ion-button color="danger" full (click)="dismiss()"> 计算并关闭</button>
					  <a class="more" href="https://ionicframework.com/docs/components/#badges">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`
})

export class ModalsProfile {
	param: any;
	other: any;
	constructor(
		params: NavParams, public viewCtrl: ViewController) {
		this.param = params.get('userId');
		console.log('UserId', params.get('userId'));
	}
	dismiss() {
		let data = {
			'result': parseInt(this.other) + parseInt(this.param)
		};
		this.viewCtrl.dismiss(data);
	}
}