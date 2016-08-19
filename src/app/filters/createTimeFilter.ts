/**
 * Created by chengfei on 16/8/11.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'createTime'
})

export class CreateTime implements PipeTransform {
    private minute = 60 * 1000;
    private hour = 60* this.minute;
    private day = 24 * this.hour;
    private month = 31 * this.day;
    private year = 12 * this.month;
    transform(value:any, args:any[]):any {
        let r = 0;
        let diff =new Date().getTime() - new Date(value).getTime();
        if(diff > this.year) {
            r = (diff / this.year).toFixed(0);
            return `${r}年前`;
        }
        if(diff > this.month) {
            r = (diff / this.month).toFixed(0);
            return `${r}月前`;
        }
        if(diff > this.day) {
            r = (diff / this.day).toFixed(0);
            return `${r}天前`;
        }
        if(diff > this.hour) {
            r = (diff / this.hour).toFixed(0);
            return `${r}小时前`;
        }
        if(diff > this.minute) {
            r = (diff / this.minute).toFixed(0);
            return `${r}分钟前`;
        }
        return "刚刚";
    }
}