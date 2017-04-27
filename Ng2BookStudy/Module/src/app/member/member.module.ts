/**
 * Created by khjan on 2017-04-23.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import { MemberListComponent} from './member-list.component';
import { HighLightDirective} from './highlight.directive';
import { MemberRoutingModule} from './member-routing.module';
import { MemberService} from './member.service';

@NgModule({
    imports : [CommonModule, FormsModule, MemberRoutingModule],
    declarations : [MemberListComponent, HighLightDirective],
    providers : [MemberService]
})
export class MemberModule{}
