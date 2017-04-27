/**
 * Created by khjan on 2017-04-23.
 */
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MyUpperPipe} from './my-upper.pipe';
import { HighLightDirective} from './highlight.directive';

@NgModule({
    imports : [CommonModule],
    declarations : [MyUpperPipe, HighLightDirective],
    exports : [MyUpperPipe, HighLightDirective, CommonModule, FormsModule]
})
export class SharedModule {}
