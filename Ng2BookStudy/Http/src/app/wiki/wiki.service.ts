/**
 * Created by khjan on 5/8/2017.
 */
import {Injectable} from "@angular/core";
import {Jsonp} from "@angular/http";
import {handleError} from "../async-handling.observable";
@Injectable()
export class WikiService{
    constructor(private jsonp : Jsonp){}

    search(keyword : string){
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        params.set('search', keyword);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
            .get(wikiUrl, {search : params})
            .map(response => <string[]>response.json()[1])
            .catch(handleError)
    }
}
