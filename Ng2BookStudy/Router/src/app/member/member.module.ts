/**
 * Created by khjan on 2017-04-25.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MemberComponent} from './member.component';
import { MemberRoutingModule } from './member-routing.module';

@NgModule({
    imports : [CommonModule, FormsModule, MemberRoutingModule],
    declarations : [MemberComponent],
    providers : []
})
export class MemberModule {}
