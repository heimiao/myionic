import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
	selector: 'action-sheet',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>actionSheet-Controller</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding>
			<button ion-button (click)="presentActionSheet()" full>打开actionSheet</button>
			 <ion-card>  
			  <ion-card-header>
			      ts代码块
			  </ion-card-header> 
			  <ion-card-content> 
					  <code>
					   		我是代码块区域
					  </code>
					  <a class="more" href="https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#config">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
		</ion-content>
	`,
})
export class ActionSheet {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController
	) {}
	presentActionSheet(): void {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'ActionSheet功能如下',
			buttons: [{
					text: '删除',
					role: 'destructive',
					handler: () => {
						console.log('Destructive clicked');
					}
				},
				{
					text: '修改',
					handler: () => {
						console.log('Archive clicked');
					}
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});

		actionSheet.present();
	}
}