import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { SystemService } from '../../service/system';
@Component({
	selector: 'segment',
	templateUrl: 'segement.html',
})

export class Segment implements OnInit {
	constructor(
		public navCtrl: NavController,
		private alertCtrl: AlertController,
		private service: SystemService,
	) {}

	heros: any;
	relationship: string = "mage";
	ngOnInit(): void {
		this.initializeItems(this.relationship);
	}

	initializeItems(param) {
		this.service.getColorList().then(args => {
			if(param == "mage") {
				this.heros = args[0].child;
			} else {
				this.heros = args[2].child;
			}
		})
	}

	segmentChanged(args): void {
		this.initializeItems(args.value)
	}

	selecteds(args) {
		//		console.log(args);
	}

	myForm = new FormGroup({
		mapStyle: new FormControl()
	});
}