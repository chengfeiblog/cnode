import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
console.log('加载成功');
@Component({
    moduleId: module.id,
    selector: 'user_detail',
    templateUrl: 'user_detail.html'
})
export class UserDetailCmp implements OnInit {
    
    constructor(public route:ActivatedRoute) {
    }

    ngOnInit() {

    }

    /**
     *  获得路由的参数
     * @returns {string} name
     */
    getLoginName():string {
        var name = '';
        this.route.params.subscribe(params => name = params['name']);
        return name;
    }

}
