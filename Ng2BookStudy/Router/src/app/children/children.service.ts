/**
 * Created by khjan on 2017-04-25.
 */
import {Injectable} from '@angular/core';

export class Children{
    constructor(public id : number, public name : string) {}
}

const CHILDREN = [
    new Children(1, '첫번째 이야기'),
    new Children(2, '두번째 이야기'),
    new Children(3, '세번째 이야기')
];

export let childrenPromise = Promise.resolve(CHILDREN);

@Injectable()
export class ChildrenService {
    static nextId = 10;
    findNyId(id : number | string){
        return childrenPromise
            .then(children => children.find(children => children.id === +id));
    }
}
