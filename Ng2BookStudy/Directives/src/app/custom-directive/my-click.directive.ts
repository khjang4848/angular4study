/**
 * Created by khjan on 2017-05-07.
 */
import {Directive} from "@angular/core";

@Directive({
    selector : '[my-click]',
    host : { '(click)' : 'onClick()'}
})
export class MyClickDirective {
    onClick(){
        alert('Hello');
    }
}
