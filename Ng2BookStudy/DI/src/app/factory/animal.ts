/**
 * Created by khjan on 2017-05-06.
 */
import {Injectable} from '@angular/core';

export class Config {
    public bark = '어흥';
    public name = '사자';
}

@Injectable()
export class Animal {
    constructor(public config: Config) {}
    getBark() {
        return this.config.bark;
    }
    getAnimalName() {
        return this.config.name;
    }
}
