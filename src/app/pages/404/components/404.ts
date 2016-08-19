import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'page-not-found',
	template: require('./404.html')
})

export class PageNotFoundCmp {
	constructor(private _router:Router) {}
	gotoHome() {
		this._router.navigate(['/menu']);
	}
}
