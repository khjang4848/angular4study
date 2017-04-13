/**
 * Created by khjan on 2017-03-13.
 */
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitDashService{
    private personUrl = 'https://api.github.com/search/users?q=web&sort=stars&order=desc';
//https://api.github.com/users/web/repos
    constructor(private http: Http){}

    getPerson() : Promise<any>{
        return this.http.get(this.personUrl)
            .toPromise()
            .then(response => response.json() as any)

    }

    getRepo(id : string) : Promise<any>{

    }


}