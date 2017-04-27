/**
 * Created by khjan on 2017-04-23.
 */
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { MemberListComponent} from './member-list.component';

@NgModule({
    imports : [RouterModule.forChild([
        {path : 'member-list', component : MemberListComponent}
    ])],
    exports : [RouterModule]
})
export class MemberRoutingModule{}
