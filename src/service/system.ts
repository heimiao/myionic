import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { MenuList, ColorList, ProvinceList } from '../app/data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SystemService {
	constructor(private http: HttpClient) {}

	getMenuListP(): Promise < any[] > {
		return Promise.resolve(MenuList);
	}
	getColorList(): Promise < any[] > {
		return Promise.resolve(ColorList);
	}

	getProvinceList(): Promise < any[] > {
		return Promise.resolve(ProvinceList);
	}

	//以后可能会用到的方法返回结果
	/*getMenuList(): any[] {
		return Promise.resolve(MenuList);
	}
	getMenuListO(): Observable < any[] > {
		return this.http
			.get(`api/heroes/?name=${term}`)
			.map(response => response.json().data as Hero[]);
	}*/

}