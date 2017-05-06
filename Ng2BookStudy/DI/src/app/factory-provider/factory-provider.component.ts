/**
 * Created by khjan on 2017-05-06.
 */
import { Component } from '@angular/core';
import { CarService } from './car.service';
import { FactoryProvider } from './car.service.provider';

@Component({
    selector: 'app-factory-provider',
    template: `
        <div>엔진이름 : {{carService.engine.name}}</div>
        <div>현재속도 : {{carService.speedMeter.speed}} km/h</div>
        <div>최대속도 : {{carService.speedMeter.maxSpeed}} km/h</div>`,
    providers: [FactoryProvider]
})
export class FactoryProviderComponent {
    constructor(public carService: CarService) {}
}
