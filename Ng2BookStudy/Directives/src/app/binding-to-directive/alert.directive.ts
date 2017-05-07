/**
 * Created by khjan on 2017-05-07.
 */
import {Directive, Attribute, Output, EventEmitter, Input} from "@angular/core";

@Directive({
    selector : '[alertMsg]',
    host : { '(click)' : 'onMouseClick()'}
})
export class AlertDirective{
    constructor(@Attribute('staticValue') private staticValue : String) {}

    @Output() outputProperty = new EventEmitter<Object>();

    onMouseClick(){
        let msg : Object = {
            'msg' : '지시자입니다',
            'static' : this.staticValue,
            'imput' : this._inputValue
        };
        this.outputProperty.emit(msg);
    }

    _inputValue : string;
    @Input() set inputValue(status : string){
        this._inputValue = status;
    }
}
