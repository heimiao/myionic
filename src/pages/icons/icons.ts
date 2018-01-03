import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'icons',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>图标(icons)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			<a class="more" href="https://ionicframework.com/docs/ionicons/">更多图标</a>
			 <ion-card>  
			  <ion-card-header>
			    基本使用
			  </ion-card-header> 
			  <ion-card-content> 
			  <ion-icon name="heart" color="danger"  (click)="ckd(0)" isActive="{{boolOne}}"></ion-icon>&nbsp; &nbsp;             
			  <ion-icon name="heart"  color="danger" (click)="ckd(2)" isActive="{{bool}}"></ion-icon> 
			  <ion-card>  
				 <code>
				 &lt;ion-icon name="heart"&gt;&lt;/ion-icon&gt;<br />&lt;ion-icon name="heart" isActive="false"&gt;&lt;/ion-icon&gt;
					</code>
			  </ion-card>  
			  <a class="more" href="https://ionicframework.com/docs/api/components/icon/Icon/">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
			<ion-card>  
			  <ion-card-header>
			   使用平台自带
			  </ion-card-header> 
			  <ion-card-content> 
			  <ion-icon ios="logo-apple" md="logo-android" isActive="false"></ion-icon>
			  <ion-card>  
				 <code> 
				 	&lt;ion-icon ios="logo-apple" md="logo-android"&gt;&lt;/ion-icon&gt;
					</code>
			  </ion-card>  
			  <a class="more" href="https://ionicframework.com/docs/api/components/icon/Icon/">更多信息</a>
			 </ion-card-content>
			</ion-card>
			<ion-card>  
			  <ion-card-header>
			   使用变量
			  </ion-card-header> 
			  <ion-card-content> 
			<ion-icon [name]="myIcon"></ion-icon>
			  <ion-card>  
				 <code> 
				 &lt;ion-icon [name]="myIcon"&gt;&lt;/ion-icon&gt;
					</code>
			  </ion-card>  
			  <a class="more" href="https://ionicframework.com/docs/api/components/icon/Icon/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Icons {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}
	bool: boolean = false;
	boolOne: boolean = false;
	myIcon: string = "home";
	ckd(args) {
		if(args) {
			this.bool = this.bool ? false : true;
		} else {
			this.boolOne = this.boolOne ? false : true;
		}

	}
}