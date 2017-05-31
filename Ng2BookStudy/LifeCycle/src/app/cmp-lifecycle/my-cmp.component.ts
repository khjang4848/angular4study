/**
 * Created by khjan on 5/31/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector : 'my-cmp',
    template : ''
})
export class MyCmp{
    @Input() value : string
}
