/**
 * Created by chengfei on 16/8/9.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'avatar',
    templateUrl: 'avatar.html',
    styleUrls: ['./avatar.css']
})
export class AvatarCmp implements OnInit {
    @Input() author:Object;

    constructor(public router:Router) {
    }

    ngOnInit() {
    }

    goToAuthor(loginname):void {
        //this.router.navigate([`/user/${loginname}`]);
        this.router.navigate(['/user', loginname]);
    }

}
