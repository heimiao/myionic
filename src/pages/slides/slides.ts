import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, ActionSheetController, AlertController, Slides } from 'ionic-angular';

@Component({
	selector: 'slide',
	template: ` 
		<ion-header>
			<ion-navbar>
				<ion-title>幻灯片(slides)</ion-title>
			</ion-navbar>
		</ion-header>
		<ion-content> 
			 <ion-card>  
			  <ion-card-header>
			      基本使用
			  </ion-card-header> 
			  <ion-card-content > 
			  		下标:{{index}}<br>
			  		 <ion-item>
					  <ion-label>自动播放</ion-label>
					  <ion-checkbox color="blue" checked="true" (ionChange)="isAutoplay($event)"></ion-checkbox>
					</ion-item> 
					<button ion-button color="secondary" (click)="goToSlide()">跳到花木兰图片</button>  
					<button ion-button (click)="pre_next(0)">上一页</button>
					<button ion-button color="danger" (click)="pre_next(1)">下一页</button>
					 <ion-slides (ionSlideDidChange)="slideChanged()" [loop]="true">
					  <ion-slide  style="background-color: green">
					   <img src="assets/imgs/diaochan.jpg">
					  </ion-slide>
					  <ion-slide style="background-color: blue">
					   <img src="assets/imgs/huamulan.jpg">
					  </ion-slide>
					  <ion-slide style="background-color: red">
					   <img src="assets/imgs/anqila.jpg">
					  </ion-slide>
					</ion-slides>
					<br>
					  <a class="more" href="https://ionicframework.com/docs/api/components/slides/Slides/#startAutoplay">更多API信息</a>
			 </ion-card-content>
			</ion-card>
		</ion-content>
	`,
})
export class Slide implements AfterViewInit {

	@ViewChild(Slides) slides: Slides;
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
	) {

	}

	ngAfterViewInit() {
		this.slides.autoplay = 3000;
	}
	index: any;
	goToSlide() {
		this.slides.slideTo(2, 500);
	}

	//上下切换
	pre_next(args) {
		if(args) {
			this.slides.slideNext(500, true)
		} else {
			this.slides.slidePrev(500, true)
		}
	}
	//自动播放
	isAutoplay(evt) {
		if(evt.value) {
			this.slides.startAutoplay()
		} else {
			this.slides.stopAutoplay()
		}
	}
	slideChanged() {
		this.index = this.slides.getActiveIndex();
		console.log("监听滚动方法");
	}
}