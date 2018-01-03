import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Menu } from '../pages/menu/menu';
import { HeaderFooter } from '../pages/head&footer/head&footer';
import { ActionSheet } from '../pages/action-sheet/action-sheet';
import { Alert } from '../pages/alert/alert';
import { Badges } from '../pages/badges/badges';
import { Buttons } from '../pages/buttons/buttons';
import { Cards } from '../pages/cards/cards';
import { Checkbox } from '../pages/checkbox/checkbox';
import { DateTime } from '../pages/date-time/date-time';
import { FABs } from '../pages/fabs/fabs';
import { Gestures } from '../pages/gestures/gestures';
import { Grid } from '../pages/grid/grid';
import { Icons } from '../pages/icons/icons';
import { Inputs } from '../pages/inputs/inputs';
import { Lists } from '../pages/lists/lists';
import { Loading } from '../pages/loading/loading';
import { Modals } from '../pages/modals/modals';
import { ModalsProfile } from '../pages/modals/modals-profile';

import { Navigation } from '../pages/navigation/navigation';
import { OtherPage } from '../pages/navigation/other-page';
import { MainPage } from '../pages/navigation/main-page';

import { Popover } from '../pages/popover/popover';
import { PopoverPage } from '../pages/popover/popover-page';

import { Radio } from '../pages/radio/radio';
import { Range } from '../pages/range/range';
import { Searchbar } from '../pages/searchbar/searchbar';
import { Segment } from '../pages/segment/segment';
import { Selects } from '../pages/select/select';
import { Slide } from '../pages/slides/slides';
import { Toast } from '../pages/toast/toast';
import { Toggle } from '../pages/toggle/toggle';
import { Toolbar } from '../pages/toolbar/toolbar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SystemService } from '../service/system';

@NgModule({
	declarations: [
		MyApp,
		ContactPage,
		HomePage,
		TabsPage,
		Menu,
		ActionSheet,
		HeaderFooter,
		Alert,
		Badges,
		Buttons,
		Cards,
		Checkbox,
		DateTime,
		FABs,
		Gestures,
		Grid,
		Icons,
		Inputs,
		Lists,
		Loading,
		Modals,
		ModalsProfile,
		Navigation,
		MainPage,
		OtherPage,
		Popover,
		PopoverPage,
		Radio,
		Range,
		Searchbar,
		Segment,
		Selects,
		Slide,
		Toast,
		Toggle,
		Toolbar,
		AboutPage,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ContactPage,
		HomePage,
		TabsPage,
		Menu,
		HeaderFooter,
		ActionSheet,
		Alert,
		Badges,
		Buttons,
		Cards,
		Checkbox,
		DateTime,
		FABs,
		Gestures,
		Grid,
		Icons,
		Inputs,
		Lists,
		Loading,
		Modals,
		ModalsProfile,
		Navigation,
		MainPage,
		OtherPage,
		Popover,
		PopoverPage,
		Radio,
		Range,
		Searchbar,
		Segment,
		Selects,
		Slide,
		Toast,
		Toggle,
		Toolbar,
		AboutPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{
			provide: ErrorHandler,
			useClass: IonicErrorHandler
		},
		SystemService
	]
})
export class AppModule {}