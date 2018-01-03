import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'checkbox',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>复选框(checkbox)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			 <ion-card>  
			  <ion-card-header>
			      基本checkbox
			  </ion-card-header> 
			  <ion-card-content> 
				  <ion-list>
					<ion-item>
					  <ion-label>启用状态</ion-label>
					  <ion-checkbox color="blue" checked="true"></ion-checkbox>
					</ion-item> 
					<ion-item>
					  <ion-label>禁用状态</ion-label>
					  <ion-checkbox disabled="true"></ion-checkbox>
					</ion-item>
				</ion-list>
					  <code>
					   		&lt;ion-list&gt;<br />				&lt;ion-item&gt;<br />				  &lt;ion-label&gt;Daenerys Targaryen&lt;/ion-label&gt;<br />				  &lt;ion-checkbox color="blue" checked="true"&gt;&lt;/ion-checkbox&gt;<br />				&lt;/ion-item&gt; <br />				&lt;ion-item&gt;<br />				  &lt;ion-label&gt;Daenerys Targaryen&lt;/ion-label&gt;<br />				  &lt;ion-checkbox color="red" checked="false"&gt;&lt;/ion-checkbox&gt;<br />				&lt;/ion-item&gt;  <br />				&lt;ion-item&gt;<br />				  &lt;ion-label&gt;Arya Stark&lt;/ion-label&gt;<br />				  &lt;ion-checkbox disabled="true"&gt;&lt;/ion-checkbox&gt;<br />				&lt;/ion-item&gt;<br />			&lt;/ion-list&gt;
					</code>
					  <a class="more" href="https://ionicframework.com/docs/api/components/checkbox/Checkbox">更多信息</a>
			 </ion-card-content>
			</ion-card>
			 <ion-card>  
			  <ion-card-header>
			      高级checkbox
			  </ion-card-header> 
			  <ion-card-content> 
				 <ion-list> 
					   <ion-item>
					     <ion-label>查看下边值的变化</ion-label>
					     <ion-checkbox [(ngModel)]="cucumber" (ionChange)="updateCucumber()"></ion-checkbox>
					   </ion-item> 
					    <ion-item>
					     <ion-label>{{cucumber}}</ion-label>
					   </ion-item> 
				  </ion-list>
					  <code>
					   		 &lt;ion-list&gt; <br />					   &lt;ion-item&gt;<br />					     &lt;ion-label&gt;Cucumber&lt;/ion-label&gt;<br />					     &lt;ion-checkbox [(ngModel)]="cucumber" (ionChange)="updateCucumber()"&gt;&lt;/ion-checkbox&gt;<br />					   &lt;/ion-item&gt; <br />				  &lt;/ion-list&gt;
					</code>
					  <a class="more" href="https://ionicframework.com/docs/api/components/checkbox/Checkbox/#advanced">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Checkbox {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}
	cucumber: boolean;
	updateCucumber() {
		console.log('Cucumbers new state:' + this.cucumber);
	}
}