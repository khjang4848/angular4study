/**
 * Created by khjan on 2017-04-18.
 */
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TitleComponent} from './title.component';
import {UserService, UserServiceConfig} from './user.service';

@NgModule({
    imports : [CommonModule],
    declarations : [TitleComponent],
    exports : [TitleComponent],
    providers : [UserService]
})
export class CoreModule{
    //@SkipSelf()부모 주입기에 대한 의존성을 확인하기 위해 사용
    constructor(@Optional() @SkipSelf() parentModule : CoreModule){
        if(parentModule){
            throw new Error('CoreModule이 이미 로딩되었습니다');
        }
    }

    static forRoot(config : UserServiceConfig) : ModuleWithProviders{
        return {
            ngModule : CoreModule,
            providers : [{ provide : UserServiceConfig, useValue : config}]
        }
    }

}
