import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'gestures',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>手势(gestures)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content>  
			 <ion-card>  
			  <ion-card-header> 
			      手势事件"点击"(tap)
			  </ion-card-header> 
			  <ion-card-content> 
			  	<ion-card (tap)="tapEvent($event)">
			  		<ion-card-content>
				    Tapped: {{eventType}}
				  </ion-card-content>
				</ion-card> 
					  <code>
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#fabs">更多信息</a>
			 </ion-card-content>
			</ion-card>
			 <ion-card>  
			  <ion-card-header> 
			      手势事件"按"(press)
			  </ion-card-header> 
			  <ion-card-content> 
			  	<ion-card (press)="tapEvent($event)">
				  <ion-card-content>
				    Tapped: {{eventType}}
				  </ion-card-content>
				</ion-card> 
					  
					  <a class="more" href="https://ionicframework.com/docs/components/#fabs">更多信息</a>
			 </ion-card-content>
			</ion-card> 
			<ion-card>  
			  <ion-card-header> 
			      手势事件"泛"(pan) 
			  </ion-card-header> 
			  <ion-card-content> 
			  	<ion-card (pan)="tapEvent($event)">
				   <ion-card-content>
				    Tapped: {{eventType}}
				  </ion-card-content>
				</ion-card> 
					  <code>
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#fabs">更多信息</a>
			 </ion-card-content>
			</ion-card>
			<ion-card>  
			  <ion-card-header> 
			      手势事件"刷"(swipe)
			  </ion-card-header> 
			  <ion-card-content> 
			  	<ion-card (swipe)="tapEvent($event)">
			  		<ion-card-content>
				    Tapped: {{eventType}}
				  </ion-card-content>
				</ion-card> 
					  <code>
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#fabs">更多信息</a>
			 </ion-card-content>
			</ion-card>
			<ion-card>  
			  <ion-card-header> 
			      手势事件"旋转"(rotate)
			  </ion-card-header> 
			  <ion-card-content> 
			  	<ion-card (rotate)="tapEvent($event)">
			  		<ion-card-content>
				    Tapped: {{eventType}}
				  </ion-card-content>
				</ion-card> 
					  <code>
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#fabs">更多信息</a>
			 </ion-card-content>
			</ion-card>
			<ion-card>  
			  <ion-card-header> 
			      手势事件 "捏"(pinch)
			  </ion-card-header> 
			  <ion-card-content> 
			  	<ion-card (pinch)="tapEvent($event)">
			  		<ion-card-content>
				    Tapped: {{eventType}}
				  </ion-card-content>
				</ion-card> 
					  <code>
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/components/#fabs">更多信息</a>
			 </ion-card-content>
			</ion-card> 
		</ion-content>
	`,
})
export class Gestures {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}
	eventType: any;

	tapEvent(args): void {
		this.eventType = "名称" + args.type + ",序号" + args.eventType + ",时间" + args.deltaTime;
		console.log(args);
	}
}