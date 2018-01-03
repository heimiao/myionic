import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'badges',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>徽章(badges)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			<ion-item>
				  默认徽章
			  <ion-badge item-end>260k</ion-badge>
			</ion-item>
			<ion-item>
			  	有颜色的徽章
			  <ion-badge color="secondary">12</ion-badge>
			</ion-item>
			
			 <ion-card>  
			  <ion-card-header>
			      ts代码块
			  </ion-card-header> 
			  <ion-card-content> 
					  <code>
					   		&lt;ion-card&gt; <br />  &lt;ion-card-header&gt;<br />    Card Header<br />  &lt;/ion-card-header&gt; <br />  &lt;ion-card-content&gt;<br />    &lt;!-- Add card content here! --&gt;<br />  &lt;/ion-card-content&gt; <br />&lt;/ion-card&gt;
					  </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#badges">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Badges {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

}