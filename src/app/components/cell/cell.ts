/**
 * Created by chengfei on 16/8/9.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AvatarCmp} from '../avatar/avatar';
import {CreateTime} from '../../filters/createTimeFilter';
import {TopicTitle} from '../topicTitle/topic_title';
@Component({
    moduleId: module.id,
    selector: 'cell',
    templateUrl: 'cell.html',
    styleUrls: ['./cell.css'],
    directives: [AvatarCmp, TopicTitle],
    pipes: [CreateTime]
})
export class CellCmp implements OnInit {
    @Input() topics : Array<any>;
    @Output() clickEvent  = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }
    

}
