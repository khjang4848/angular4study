/**
 * Created by khjan on 2017-04-23.
 */
import { NgModule} from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PlayerRoutingModule} from './player-routing.module';
import { PlayerComponent} from './player.component';

@NgModule({
    imports : [PlayerRoutingModule, SharedModule],
    declarations : [PlayerComponent],
    providers : []
})
export class PlayerModule {}
