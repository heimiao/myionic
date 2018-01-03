import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Menu } from './menu';
@Component({
	selector: 'page-menu-root',
	//	templateUrl: 'menu.html'
	template: `
		<ion-header>
			<ion-navbar>
				<ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
				<ion-title>侧滑菜单</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content>
			 <button ion-button (click)="goBack()">返回上一页</button> 
			<button ion-button color="secondary">关闭菜单</button> 
			<button ion-button color="danger">打开菜单</button> 
			<button ion-button round outline>默认按钮</button> 
		</ion-content>
	`,
})
export class MenuRoot {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController
	) {}
	
}