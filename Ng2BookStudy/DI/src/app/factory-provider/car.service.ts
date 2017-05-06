/**
 * Created by khjan on 2017-05-06.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class Engine{
    public name : string;
}

@Injectable()
export class SpeedMeter {
    public speed : number;
    public maxSpeed : number;
}

@Injectable()
export class CarService{
    constructor(private speedMeter : SpeedMeter, public engine : Engine){}
}
