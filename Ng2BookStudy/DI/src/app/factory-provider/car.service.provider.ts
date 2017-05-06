import {CarService, Engine, SpeedMeter} from "./car.service";
/**
 * Created by khjan on 2017-05-06.
 */

let carServiceFactory = (speedMeter : SpeedMeter, engine : Engine) => {
    speedMeter.speed = 100;
    speedMeter.maxSpeed = 500;
    engine.name = "장강현 엔진";
    return new CarService(speedMeter, engine);
};
export let FactoryProvider =
{
    provide : CarService,
    useFactory : carServiceFactory,
    deps : [SpeedMeter, Engine]
};
