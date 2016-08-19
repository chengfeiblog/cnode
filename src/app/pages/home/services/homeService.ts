import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HomeService {
    private baseUrl = '/saint/homePage';
    private url = 'https://cnodejs.org/api/v1';

    constructor(private http:Http) {
    }

    /**
     * 处理错误
     */
    private handleError(error:any) {
        return Promise.reject(error.message || error);
    }
    
    /**
     * 获得销售简报
     */
    getSalesPresentation(month:string):Promise<any> {
        let url = `${ this.baseUrl}/salesPresentation?monthDate=${month}`;
        return this.http.get(url)
            .toPromise()
            .then(
                res => {
                    let val = res.json();
                    if (!val.success) {
                        return Promise.reject('访问失败');
                    }
                    return val.data;
                }
            )
            .catch(this.handleError);
    }


    /**
     * 获得交易客户数据
     */
    getCustomerData():Promise<any> {
        let url = `${ this.baseUrl}/customerData`;
        return this.http.get(url)
            .toPromise()
            .then(
                res => {
                    let val = res.json();
                    if (!val.success) {
                        return Promise.reject('访问失败');
                    }
                    return val.data;
                }
            )
            .catch(this.handleError);
    }

    /**
     * 获得交易数据
     */
    getTransactionData(month:string):Promise<any> {
        let url = `${ this.baseUrl}/transactionData?monthDate=${month}`;
        return this.http.get(url)
            .toPromise()
            .then(
                res => {
                    let val = res.json();
                    if (!val.success) {
                        return Promise.reject('访问失败');
                    }
                    return val.data;
                }
            )
            .catch(this.handleError);
    }

    /**
     *  主页列表信息
     */
    getTopics(query: Object):Promise<any> {
        let url = `${this.url}/topics`;
        return this.http.get(url)
            .toPromise()
            .then(
                res => {
                    let val = res.json();
                    if (!val.success) {
                        return Promise.reject('访问失败');
                    }
                    return val.data;
                }
            )
            .catch(this.handleError);
    }
}
