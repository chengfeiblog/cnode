/**
 * Created by chengfei on 16/8/9.
 */
import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES,RouterLinkActive } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.html',
    directives: [...ROUTER_DIRECTIVES, RouterLinkActive],
    styleUrls: ['./navbar.css']
})
export class NavbarCmp implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log('进来咯');
    }

    
}