import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HackernewsService {

  private rootUrl = 'https://node-hnapi.herokuapp.com';

  constructor(public http: Http) { }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.rootUrl}/${storyType}?page=${page}`)
      .map(response => this.extractData(response))
      .catch(err => this.handleError(err));
  }

  fetchItem(id: string): Observable<any> {
    return this.http.get(`${this.rootUrl}/item/${id}`)
      .map(response => this.extractData(response))
      .catch(err => this.handleError(err));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
