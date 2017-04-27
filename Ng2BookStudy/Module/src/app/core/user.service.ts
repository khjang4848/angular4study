/**
 * Created by khjan on 2017-04-18.
 */
import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
    nickName = '';
}

@Injectable()
export class UserService {
    private _nickName = '';

    //주입객체가 있으면 해당객체를 받을것이고 없으면 null
    constructor( @Optional() config: UserServiceConfig) {
        if (config) { this._nickName = config.nickName; }
    }

    get nickName() {
        return this._nickName;
    }
}
