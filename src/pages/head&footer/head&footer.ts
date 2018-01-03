import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
	selector: 'header',
	template: `
		<ion-header>
			<ion-navbar>
				<ion-title>Header&Footer</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content>
			 <ion-card> 
			  <ion-card-header>
			      代码块的展示
			  </ion-card-header> 
			  <ion-card-content>
			    	&lt;ion-header&gt;<br />  &lt;ion-navbar&gt;<br />    &lt;ion-title&gt;Page1&lt;/ion-title&gt;<br />  &lt;/ion-navbar&gt;<br /><br />  &lt;ion-toolbar&gt;<br />    &lt;ion-title&gt;Subheader&lt;/ion-title&gt;<br />  &lt;/ion-toolbar&gt;<br />&lt;/ion-header&gt;<br /><br />&lt;ion-content&gt;&lt;/ion-content&gt;<br />&lt;ion-footer&gt;<br />  &lt;ion-toolbar&gt;<br />    &lt;ion-title&gt;Footer&lt;/ion-title&gt;<br />  &lt;/ion-toolbar&gt;<br />&lt;/ion-footer&gt;
			 </ion-card-content>
			</ion-card>
		</ion-content>
		<ion-footer>
			  <ion-toolbar>
			    <ion-title>Footer</ion-title>
			  </ion-toolbar>
		</ion-footer>
	`,
})
export class HeaderFooter {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController
	) {}

}