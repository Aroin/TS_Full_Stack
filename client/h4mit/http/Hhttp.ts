import {
  Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Request, Headers,
  XHRBackend
} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by h4mit on 26/08/2017.
 */

@Injectable()
export class Hhttp extends Http {

  constructor(backend:ConnectionBackend, defaultOption:RequestOptions) {
    super(backend, defaultOption);
  }

  request(url:string | Request, options?:RequestOptionsArgs):Observable<Response> {

    return this.intercept(super.request(url, options));
  }

  get(url:string, options?:RequestOptionsArgs):Observable<Response> {
    // window.document.getElementById('loading').innerHTML = "<h1> Loading ... </h1>";
    let response = this.intercept(super.get(url, options));
    //window.document.getElementById('loading').innerHTML = "";
    return response;
  }

  post(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
    return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url:string, options?:RequestOptionsArgs):Observable<Response> {

    return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
  }

  getRequestOptionArgs(options?:RequestOptionsArgs):RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  intercept(observable: Observable<Response>):Observable<Response> {
    // console.log('Loading...');
    return observable.catch((err, source) => {
      if (err.status == 401) {
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }
}

export var HhttpProvider = {
  provide: Http,
  useFactory: HhttpFactory,
  deps: [XHRBackend, RequestOptions]
};

export function  HhttpFactory(backend:XHRBackend, requestOptions:RequestOptions){
  return new Hhttp(backend, requestOptions);
}
