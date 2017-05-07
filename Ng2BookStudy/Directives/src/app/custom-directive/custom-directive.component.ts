/**
 * Created by khjan on 2017-05-07.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-directive',
    template: `<button my-click> onClick() </button>`
})
export class CustomDirectiveCmp {
    constructor() { }
}
