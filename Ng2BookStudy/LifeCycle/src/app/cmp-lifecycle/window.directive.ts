/**
 * Created by khjan on 5/31/2017.
 */
import {Directive, Input} from '@angular/core';

@Directive({selector : 'window'})
export class Window{
    @Input() id : string;
}
