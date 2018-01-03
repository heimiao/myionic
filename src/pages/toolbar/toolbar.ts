import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { SystemService } from '../../service/system';
@Component({
	selector: 'toolbar',
	template: ` 
		<style type="text/css">
			.container {
				position: relative;
				min-height: 450px;
			}
			.container ion-footer{
				bottom:0px;
			}
		</style>
		<ion-header>
			<ion-navbar>
				<ion-title>工具栏(toolbar)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding> 
			
			 <ion-card>  
			  <ion-card-header>
			      基本使用
			  </ion-card-header> 
			  <ion-card-content class="container"> 
			  			<ion-header>
						  <ion-toolbar>
						    <ion-title>Toolbar</ion-title>
						  </ion-toolbar>
						</ion-header>
						<ion-content>
								 <p>内容区域</p> <p>内容区域</p> <p>内容区域</p> <p>内容区域</p> 
								 <a class="more" href="https://ionicframework.com/docs/components/#toolbar">更多信息</a>
						</ion-content>
						<ion-footer>
						  <ion-toolbar>
						    <ion-title>Footer</ion-title>
						  </ion-toolbar>
						</ion-footer>
			 </ion-card-content>
			</ion-card>
			
			<ion-card>  
			  <ion-card-header>
			      改变颜色
			  </ion-card-header> 
			  <ion-card-content class="container"> 
			  		<ion-header>
						  <ion-toolbar  color="primary">
						    <ion-title>Toolbar</ion-title>
						  </ion-toolbar>
						</ion-header>
						<ion-content class="container">
								 <p>颜色值:primary,secondary,danger,dark</p>
								 <p>颜色值:primary,secondary,danger,dark</p>
								 <p>颜色值:primary,secondary,danger,dark</p>
						</ion-content>
						<ion-footer>
						  <ion-toolbar color="primary">
						    <ion-title>Footer</ion-title>
						  </ion-toolbar>
						</ion-footer> 
					  <a class="more" href="https://ionicframework.com/docs/components/#toolbar">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
			<ion-card>  
			  <ion-card-header>
			      工具栏中的按钮
			  </ion-card-header> 
			  <ion-card-content class="container"> 
			  		 	<ion-header>
						  <ion-toolbar>
						    <ion-buttons start>
						      <button ion-button icon-only color="royal">
						        <ion-icon name="search"></ion-icon>
						      </button>
						    </ion-buttons>
						    <ion-title>Send To...</ion-title>
						    <ion-buttons end>
						      <button ion-button icon-only color="royal">
						        <ion-icon name="person-add"></ion-icon>
						      </button>
						    </ion-buttons>
						  </ion-toolbar>
						</ion-header>
						<ion-content>内容区域</ion-content>
						<ion-footer>
						  <ion-toolbar>
						    <p>Ash, Misty, Brock</p>
						    <ion-buttons end>
						      <button ion-button icon-right color="royal">
						        Send
						        <ion-icon name="send"></ion-icon>
						      </button>
						    </ion-buttons>
						  </ion-toolbar>
						</ion-footer>
					  <a class="more" href="https://ionicframework.com/docs/components/#toolbar">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
			<ion-card>  
			  <ion-card-header>
			      工具栏中的搜索
			  </ion-card-header> 
			  <ion-card-content class="container"> 
			  		 	 <ion-header>
						  <ion-toolbar color="primary">
						    <ion-searchbar (input)="getItems($event)"></ion-searchbar>
						  </ion-toolbar>
						</ion-header>
						<br><br><br><br>
						  <ion-list>
						    <ion-item *ngFor="let item of items">
						       {{ item.name }}
						    </ion-item>
						  </ion-list>
					  <a class="more" href="https://ionicframework.com/docs/components/#toolbar">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
		</ion-content>
	`,
})
export class Toolbar {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private service: SystemService,
	) {
		this.initializeItems();
	}

	searchQuery: string = '';
	items: any[];
	initializeItems() {
		this.service.getColorList().then(args => {
			this.items = args;
		})
	}
	getItems(ev: any) {
		this.initializeItems();
		let val = ev.target.value;
		setTimeout(() => {
			if(val && val.trim() != '') {
				this.items = this.items.filter((item) => {
					return(item.name.indexOf(val) > -1);
				})
			}
		}, 500)
	}
}