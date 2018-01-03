import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { SystemService } from '../../service/system';
@Component({
	selector: 'selects',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>下拉框(select)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content> 
			 
			 <ion-card>  
			  <ion-card-header>
			      基本使用(单选)
			  </ion-card-header> 
			  <ion-card-content> 
					   <ion-list>
						  <ion-item>
						    <ion-label>爱好</ion-label>
						    <ion-select [(ngModel)]="value">
						      <ion-option value="吃">吃</ion-option>
						      <ion-option value="喝">喝</ion-option>
						      <ion-option value="玩">玩</ion-option>
						      <ion-option value="乐">乐</ion-option>
						      <ion-option value="睡">睡</ion-option>
						    </ion-select>
						  </ion-item>
						</ion-list>
				    <a class="more" href="https://ionicframework.com/docs/api/components/select/Select/">更多信息</a>
			 </ion-card-content>
			</ion-card>
			 
			 
			 <ion-card>  
			  <ion-card-header>
			      多选
			  </ion-card-header> 
			  <ion-card-content> 
					   <ion-list>
						  <ion-item>
						    <ion-label>爱好</ion-label>
						    <ion-select okText="确定" cancelText="取消" [(ngModel)]="multipleValue" multiple="true">
						      <ion-option value="吃">吃</ion-option>
						      <ion-option value="喝">喝</ion-option>
						      <ion-option value="玩">玩</ion-option>
						      <ion-option value="乐">乐</ion-option>
						      <ion-option value="睡">睡</ion-option>
						    </ion-select>
						  </ion-item>
						</ion-list>
				    <a class="more"   href="https://ionicframework.com/docs/api/components/select/Select/">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
			
			 <ion-card>  
			  <ion-card-header>
			      自定义下拉展示方式(上拉菜单,弹框,飘窗)action-sheet, popover or alert. Default: alert.
			  </ion-card-header> 
			  <ion-card-content> 
				     <ion-list>
						  <ion-item>
						    <ion-label>爱好</ion-label>
						    <ion-select okText="确定" cancelText="取消"  interface= "action-sheet" [(ngModel)]="selectOptionsValue" [selectOptions]="selectOptions">
						      <ion-option value="吃">吃</ion-option>
						      <ion-option value="喝">喝</ion-option>
						      <ion-option value="玩">玩</ion-option>
						      <ion-option value="乐">乐</ion-option>
						      <ion-option value="睡">睡</ion-option>
						    </ion-select>
						  </ion-item>
						</ion-list>
				    <a class="more"   href="https://ionicframework.com/docs/api/components/select/Select/">参数具体传递详细</a>
			 </ion-card-content>
			</ion-card>
			
			 <ion-card>  
			  <ion-card-header>
			     对象值引用(点击对象比较列表的每一个项)
			  </ion-card-header> 
			  <ion-card-content> 
				    	<ion-item>
						  <ion-label>Employee</ion-label>
						  <ion-select [(ngModel)]="employee" [compareWith]="compareFn">
						    <ion-option *ngFor="let employee of items" [value]="employee">{{employee.name}}</ion-option>
						  </ion-select>
						</ion-item>
				    <a class="more"   href="https://ionicframework.com/docs/api/components/select/Select/">更多信息</a>
			 </ion-card-content>
			</ion-card>
			
			
		</ion-content>
	`,
})
export class Selects {
	selectOptions: any;
	items: any;
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private service: SystemService,
	) {
		this.selectOptions = {
			title: '标题',
			subTitle: '摘要',
			mode: 'md',

		};

		this.service.getColorList().then(args => {
			this.items = args;
		})
	}

	compareFn(e1: any, e2: any): boolean {
		console.log(e1);
		console.log(e2);
		return e1 && e2 ? e1.id === e2.id : e1 === e2;
	}
}