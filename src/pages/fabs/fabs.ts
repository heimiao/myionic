import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, FabContainer } from 'ionic-angular';

@Component({
	selector: 'fabs',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>浮动贴(FABs)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content padding>  
			 <ion-card>  
			  <ion-card-header>
			      代码案例
			  </ion-card-header> 
			  <ion-card-content>  
			  
					  <ion-fab top left>
					    <button ion-fab mini><ion-icon name="add"></ion-icon></button>
					    <ion-fab-list>
					      <button ion-fab><ion-icon name="logo-facebook" color="red"></ion-icon></button>
					      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>
					      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>
					      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>
					    </ion-fab-list>
					  </ion-fab>
					  
					  <ion-fab right bottom #fab>
					    <button ion-fab color="secondary"><ion-icon name="arrow-dropleft"></ion-icon></button>
					    <ion-fab-list side="left">
					      <button ion-fab><ion-icon name="logo-facebook" (click)="share('facebook', fab)"></ion-icon></button>
					      <button ion-fab><ion-icon name="logo-twitter" (click)="share('twitter', fab)"> </ion-icon></button>
					      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>
					      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>
					    </ion-fab-list>
					  </ion-fab>  
					  	
					 <ion-fab middle center>
					   <button ion-fab color="danger">Share</button>
					  <ion-fab-list side="top">
					   <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>
					  </ion-fab-list>
					  <ion-fab-list side="left" >
					     <button ion-fab color="light"><ion-icon name="logo-twitter" ></ion-icon></button>
					  </ion-fab-list>
					   <ion-fab-list side="right">
					   <button ion-fab color="danger"><ion-icon name="logo-vimeo" ></ion-icon></button>
					  </ion-fab-list>
					   <ion-fab-list side="bottom">
					    <button ion-fab color="dark"><ion-icon name="logo-googleplus" ></ion-icon></button>
					  </ion-fab-list>
					 </ion-fab>
						 
					  <code>
					   &lt;ion-fab top left&gt;<br />					    &lt;button ion-fab mini&gt;&lt;ion-icon name="add"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					    &lt;ion-fab-list&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-facebook" color="red"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-twitter"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-vimeo"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-googleplus"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					    &lt;/ion-fab-list&gt;<br />					  &lt;/ion-fab&gt;<br />					  <br />					  &lt;ion-fab right bottom #fab&gt;<br />					    &lt;button ion-fab color="light"&gt;&lt;ion-icon name="arrow-dropleft"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					    &lt;ion-fab-list side="left"&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-facebook" (click)="share('facebook', fab)"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-twitter" (click)="share('twitter', fab)"&gt; &lt;/ion-icon&gt;&lt;/button&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-vimeo"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					      &lt;button ion-fab&gt;&lt;ion-icon name="logo-googleplus"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					    &lt;/ion-fab-list&gt;<br />					  &lt;/ion-fab&gt;  <br />					  <br />					 &lt;ion-fab middle center mini&gt;<br />					   &lt;button ion-fab&gt;Share&lt;/button&gt;<br />					  &lt;ion-fab-list side="top"&gt;<br />					   &lt;button ion-fab&gt;&lt;ion-icon name="logo-facebook" color="red"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					  &lt;/ion-fab-list&gt;<br />					  &lt;ion-fab-list side="left"&gt;<br />					     &lt;button ion-fab&gt;&lt;ion-icon name="logo-twitter"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					  &lt;/ion-fab-list&gt;<br />					   &lt;ion-fab-list side="right"&gt;<br />					   &lt;button ion-fab&gt;&lt;ion-icon name="logo-vimeo"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					  &lt;/ion-fab-list&gt;<br />					   &lt;ion-fab-list side="bottom"&gt;<br />					    &lt;button ion-fab&gt;&lt;ion-icon name="logo-googleplus"&gt;&lt;/ion-icon&gt;&lt;/button&gt;<br />					  &lt;/ion-fab-list&gt;<br />					 &lt;/ion-fab&gt;
					 </code>
					  <a class="more" href="https://ionicframework.com/docs/api/components/fab/FabButton/">更多信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class FABs {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {}

	share(socialNet: string, fab: FabContainer) {
		fab.close();
		console.log("Sharing in", socialNet);
	}
}