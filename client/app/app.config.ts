import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AppConfig {
    private config: Object = null;
    private url_config_file = 'assets/config/conf.json';
    constructor(private http: Http) {}

    public get(key: string): string {
        return this.config[key];
    }

    public load() {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise((resolve, reject) => {
            this.http.get(this.url_config_file).map( res => res.json()).catch((error: any): any => {
                console.log('Configuration file could not be read!');
                resolve(true);
                return Observable.throw(error.json().error || 'Server error');
            }).subscribe((confResponse) => {
                this.config = confResponse;
                resolve(true);
            });
        });
    }
}

export function ConfigProvider(conf: AppConfig) {
    return () => conf.load();
}
