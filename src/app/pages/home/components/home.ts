import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from '../services/homeService';
import {CellCmp} from '../../../components/cell/cell';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
    selector: 'home',
    templateUrl: 'home.html',
    directives: [CellCmp, PAGINATION_DIRECTIVES],
    styleUrls: ['./home.css'],
    providers: [HomeService]
})
export class HomeCmp {
    public topics = [];
    constructor(public homeService:HomeService,
                public  router:Router) {
    }

    ngOnInit() {
        this.homeService.getTopics()
            .then(res => {
                    this.topics=res;
                }
            );
    }

    public loading:boolean = false;
    /**
     * 分页属性
     * @type {number}
     */
    public maxSize:number = 5; // 控制显示出来的页码
    public totalItems:number = 440; // 总记录数
    public currentPage:number = 1;  // 当前页面
    public itemsPerPage:number = 40; // 每一页主题数量
    public pageChanged(event):void {
        this.currentPage = event.page;

    };
    getTopics(query) {
        this.homeService.getTopics(query)
            .then(res => {
                    this.topics=res;
                }
            );
    }
}
