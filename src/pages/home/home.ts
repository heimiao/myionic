import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { SystemService } from '../../service/system';

import { Menu } from '../menu/menu';
import { HeaderFooter } from '../head&footer/head&footer';
import { ActionSheet } from '../action-sheet/action-sheet';
import { Alert } from '../alert/alert';
import { Badges } from '../badges/badges';
import { Buttons } from '../buttons/buttons';
import { Cards } from '../cards/cards';
import { Checkbox } from '../checkbox/checkbox';
import { DateTime } from '../date-time/date-time';
import { FABs } from '../fabs/fabs';
import { Gestures } from '../gestures/gestures';
import { Grid } from '../grid/grid';
import { Icons } from '../icons/icons';
import { Inputs } from '../inputs/inputs';
import { Lists } from '../lists/lists';
import { Loading } from '../loading/loading';
import { Modals } from '../modals/modals';
import { Navigation } from '../navigation/navigation';
import { Popover } from '../popover/popover';
import { Radio } from '../radio/radio';
import { Range } from '../range/range';
import { Searchbar } from '../searchbar/searchbar';
import { Segment } from '../segment/segment';
import { Selects } from '../select/select';
import { Slide } from '../slides/slides';
import { Toast } from '../toast/toast';
import { Toggle } from '../toggle/toggle';
import { Toolbar } from '../toolbar/toolbar';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController,
		public service: SystemService,
	) {}

	items: Array < any > ;
	component: any;
	ngOnInit(): void {
		this.service.getMenuListP().then(args => {
			this.items = args
		})
	}

	routerLink(args): void {
		switch(args.id) {
			case "Menu":
				this.component = Menu;
				break;
			case "Header&Footer":
				this.component = HeaderFooter;
				break;
			case "ActionSheet":
				this.component = ActionSheet;
				break;
			case "Alert":
				this.component = Alert;
				break;
			case "Badges":
				this.component = Badges;
				break;
			case "Buttons":
				this.component = Buttons;
				break;
			case "Cards":
				this.component = Cards;
				break;
			case "Checkbox":
				this.component = Checkbox;
				break;
			case "DateTime":
				this.component = DateTime;
				break;
			case "FABs":
				this.component = FABs;
				break;
			case "Gestures":
				this.component = Gestures;
				break;
			case "Grid":
				this.component = Grid;
				break;
			case "Icons":
				this.component = Icons;
				break;
			case "Inputs":
				this.component = Inputs;
				break;
			case "Lists":
				this.component = Lists;
				break;
			case "Loading":
				this.component = Loading;
				break;
			case "Modals":
				this.component = Modals;
				break;
			case "Navigation":
				this.component = Navigation;
				break;
			case "Popover":
				this.component = Popover;
				break;
			case "Radio":
				this.component = Radio;
				break;
			case "Range":
				this.component = Range;
				break;
			case "Searchbar":
				this.component = Searchbar;
				break;
			case "Segment":
				this.component = Segment;
				break;
			case "Selects":
				this.component = Selects;
				break;
			case "Slide":
				this.component = Slide;
				break;
			case "Toast":
				this.component = Toast;
				break;
			case "Toggle":
				this.component = Toggle;
				break;
			case "Toolbar":
				this.component = Toolbar;
				break;
			default:
				break;
		}
		this.navCtrl.push(this.component);
	}
}