/**
 * Created by khjan on 3/19/2017.
 */

import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {TestData} from './TestData';

@Injectable()
export class GitDashService{
  private personUrl = 'https://api.github.com/search/users?q=web&sort=stars&order=desc';
  private repoUrl = "https://api.github.com/users/";
  private languageUrl = "http://gitdashtest.azurewebsites.net/api/values";
  private headers = new Headers({'Access-Control-Allow-Origin': '*'});

  constructor(private http: Http){}

  getPerson() : Promise<any>{
    return this.http.get(this.personUrl)
      .toPromise()
      .then(response => response.json() as any);

  }

  getRepo(id : string) : Promise<any>{
    const url = `${this.repoUrl}${id}/repos`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as any);
  }

  getLanguage() : Promise<TestData[]>{
    return this.http.get(this.languageUrl, {headers : this.headers})
      .toPromise()
      .then(response => response.json() as TestData[]);
  }
}
