/**
 * Created by chengfei on 16/8/11.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class GobalService {
    private item: Object = null;
    constructor() {
    }
    setItem(item) {
        this.item = item;
    }
    getIten() {
        return this.item;
    }
}