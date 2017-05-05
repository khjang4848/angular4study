/**
 * Created by khjan on 5/5/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'children',
    template: `
        <div>자식 라우터 표시</div>
        <router-outlet></router-outlet>
    `
})
export class ChildrenComponent {}
