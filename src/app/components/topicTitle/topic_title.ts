/**
 * Created by chengfei on 16/8/11.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
console.log('加载进来咯');
@Component({
    moduleId: module.id,
    selector: 'topic-title',
    templateUrl: 'topic_title.html',
    styleUrls: ['./topic_title.css']
})
export class TopicTitle implements OnInit {
    @Input() topic : Object
    constructor(public router:Router) {
    }

    ngOnInit() {
    }
    goToTopicContent(id): void {
        this.router.navigate(['/topic_content', id]);
    }
    
}