/**
 * Created by khjan on 5/8/2017.
 */
import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {WikiService} from "./wiki.service";
import {Subject} from "rxjs/Subject";

@Component({
    selector : 'wiki-cmp',
    template : `
        <h3>Jsonp By Obserable</h3>
        <input #keyword (keyup)="search(keyword.value)" />
        <ul>
            <li *ngFor="let item of items | async">{{item}}</li>
        </ul>
        <br><br>
        <h3>Jsonp By Obserable(With Operaotor)</h3>
        <input #keyword2 (keyup)="searchOperator(keyword2.value)" />
        <ul>
            <li *ngFor="let item of itemsOperator | async">{{item}}</li>
        </ul>
    `,
    providers:[WikiService]
})
export class WikiComponent{
    items : Observable<string[]>;
    search(keyword : string){
        this.items = this.wikiService.search(keyword);
    }

    itemsOperator : Observable<string[]>;
    private searchKeyStream = new Subject<string>();
    constructor(private wikiService : WikiService){
        this.itemsOperator = this.searchKeyStream.debounceTime(300)
            .distinctUntilChanged()
            .switchMap((keyword : string) => this.wikiService.search(keyword));
    }

    searchOperator(keyword : string){
        this.searchKeyStream.next(keyword);
    }

}
